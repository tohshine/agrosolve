import React from "react";
import { StyleSheet } from "react-native";
import { Card, Block, Text } from "../utilities";
import { theme } from "../constants";

const lectureList = () => {
  return (
    <Block center  border  margin={[theme.sizes.base,0]} >
      <Text bold>coming soon...</Text>
    </Block >
  );
};

export default lectureList;

const styles = StyleSheet.create({
    cardContainer:{
        borderLeftWidth: theme.sizes.base/2,
        borderColor:theme.colors.teal
    }
});
