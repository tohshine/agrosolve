import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, ActivityIndicator } from "react-native";

import { Text, Block, Button, Input } from "../../utilities";
import { Avatar, Accessory } from "react-native-elements";
import { theme,icons } from "../../constants";
import { connect } from "react-redux";
import { _ImagePermissions } from "../../_permissions";

import * as ImagePicker from "expo-image-picker";



import { _AddProduct } from "../../actions/productAction";

import {ResponseMessage} from '../../components/serverMsg'

const Create = ({ navigation, serverMsg, _AddProduct, _loading }) => {
  const [image, setimage] = useState(null);
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [desc, setdesc] = useState("");
  const [location, setlocation] = useState("");
  const [number, setnumber] = useState("");

  const { getPermissionAsync, permissionStatus } = _ImagePermissions();

useEffect(() => {
 getPermissionAsync()

}, [])

const {message} = ResponseMessage(serverMsg)
  

  const  _pickImage = async () => {
    if (permissionStatus.status !== "granted") return;
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality:1
        
      });
      if (!result.cancelled) {
        setimage(result.uri);
      }
    } catch (E) {
      console.log(E);
    }
  };

  const createProduct = () => {
    if (!image) return;
    // ImagePicker saves the taken photo to disk and returns a local URI to it
    let localUri = image;
    let filename = localUri.split("/").pop();

    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    if (!name && !price && !desc && !location) return;
    //making some data upload to server
    let formdata = new FormData();
    formdata.append("file", { uri: localUri, name: filename, type });
    formdata.append("title", name);
    formdata.append("price", price);
    formdata.append("desc", desc);
    formdata.append("location", location);
    formdata.append("number", number);

    //sending request to server
    _AddProduct(formdata);
  };

 
  return (
    <Block padding={theme.sizes.base}>
      
      <Text h1 bold>
        Create{" "}
        <Text color='green' h1 bold>
          product
        </Text>
      </Text>
     
      {message() || permissionStatus.message}
      <Block padding={[theme.sizes.base / 1.5, 0]} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Avatar
          rounded
          icon={{ name: "user", type: "font-awesome" }}
          title='img'
          size='large'
          source={{
            uri:
              image ||
              "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jp",
          }}
          activeOpacity={0.7}
        >
          <Accessory
            onPress={_pickImage}
            style={{ width: 20, height: 20, backgroundColor: "gray" }}
          />
        </Avatar>

        <Input
          value={name}
          onChangeText={setname}
          placeholder='product name'
          style={styles.textContainer}
          label='name'
        />
        <Input
          phone
          value={number}
          onChangeText={setnumber}
          placeholder='contact phone number'
          style={styles.textContainer}
          label='contact phone number'
        />
        <Input
          value={price}
          onChangeText={setprice}
          placeholder='product price'
          phone
          style={styles.textContainer}
          label='price'
        />
        <Input
          value={desc}
          onChangeText={setdesc}
          placeholder='product description'
          style={styles.textContainer}
          multiline={true}
          numberOfLines={4}
          label='descriptions'
        />
        <Input
          value={location}
          onChangeText={setlocation}
          placeholder='product location'
          style={styles.textContainer}
          label='location'
        />
        <Button gradient onPress={createProduct} disabled={_loading && true}>
          {_loading ? (
            <ActivityIndicator color='white' />
          ) : (
            <Text center bold white>
              create product
            </Text>
          )}
        </Button>
      </ScrollView>
    </Block>
  );
};

Create.navigationOptions = {
  title: "Add product",
  tabBarIcon: icons.Plus,
};
const styles = StyleSheet.create({
  textContainer: {
    paddingLeft: 10,
  },
});

const mapStateToProps = (state) => {
  return {
    serverMsg: state.msg,
    _loading: state.data.loading,
  };
};

export default connect(mapStateToProps, { _AddProduct })(Create);
