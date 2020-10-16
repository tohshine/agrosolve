import React from "react";
import { StyleSheet, Image,Alert } from "react-native";
import { Text, Block, Button } from "../utilities";
import { theme, icons } from "../constants";
import { HeaderNav } from "../components/headerNav";
import { Avatar } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import {logout} from '../actions/authAction'
import { connect } from "react-redux";


const Account = ({navigation,logout}) => {

const logoutAccount = ()=>{
    Alert.alert(
        "Logout Alert ",
        "Are you sure...",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => logout() }
        ],
        { cancelable: false }
      );
}

  return (
    <Block flex={1} padding={[0, theme.sizes.base]}>
      <HeaderNav>{icons.backArrow("dashboard")}</HeaderNav>
      <Block flex={false} row space='between' center>
        <Text h1 bold>
          My Profile
        </Text>
        <TouchableOpacity onPress={logoutAccount}>
          <Image
            style={{ width: 35, height: 35 }}
            source={require("../../assets/logout.png")}
          />
        </TouchableOpacity>
      </Block>

      <Block flex={false} middle center padding={[theme.sizes.base, 0]}>
        <Avatar
          rounded
          size='large'
          title='img'
          source={{
            uri:
              "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          }}
        />
        <Text bold h2 style={{ paddingVertical: theme.sizes.base / 2 }}>
          Owoeye Tosin
        </Text>
        <Text bold color={theme.colors.gray}>
          tohshine@gmail.com
        </Text>
        <Text
          bold
          caption
          color={theme.colors.gray}
          style={{ paddingTop: theme.sizes.base / 2 }}
        >
          Lagos,Nigera
        </Text>
      </Block>
      <Block flex={false} row space='evenly' middle>
        <Button style={styles.buttonContainer}>
          <Text center color={theme.colors.accent}>
            Edit Profile
          </Text>
        </Button>
        <Button style={styles.buttonContainer} onPress={()=>navigation.navigate("create")}>
          <Text center color={theme.colors.accent}>
            Add Product
          </Text>
        </Button>
      </Block>
      <Text caption color={theme.colors.gray} center>This is just for  demostration ,this application hasnt reach its full functionality</Text>
    </Block>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    minWidth: theme.sizes.base * 2,
    width: theme.sizes.base * 5,
    borderColor: theme.colors.primary,
    borderWidth: 1,
  },
});

Account.navigationOptions = {
  headerShown: false,
};

export default connect(null,{logout})(Account);
