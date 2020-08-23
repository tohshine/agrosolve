import React from "react";
import { StyleSheet, Image } from "react-native";
import { Card, Text, Block } from "../utilities";
import { theme } from "../constants";
import { Badge } from "react-native-elements";

const singleProduct = ({name,desc,price,image,location,number,shipping}) => {
  return (
    <Block flex={false} card shadow space='evenly' margin={[theme.sizes.base, 0]} padding={theme.sizes.body}>
      <Text h2 bold>
       {name}
      </Text>
      <Block row space="between" margin={[theme.sizes.base/2, 0]}>
       <Block flex={false} row >
       <Badge  value={number} status='warning' />
       <Block flex={false} margin={[0,5]}/>
        <Badge  value={location} status='primary' />
       </Block>
        <Badge  value={shipping? "ready for shipping":"available"} status="success" />
      </Block>

      <Image
        source={{
          uri:image,
        }}
        style={{
          width: "100%",
          height: 200,
          borderRadius: 5,
        }}
      />
       
      <Block flex={false} row center margin={[theme.sizes.base/2, 0]}>
        <Image style={{width:18,height:18}}  source={require('../../assets/naira.png')}/>
        <Text h3 bold gray>
          { price} 
        </Text>
      </Block>
      <Text bold>size: 40kg</Text>
    </Block>
  );
};

export default singleProduct;

const styles = StyleSheet.create({});
