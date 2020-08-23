import React from "react";
import { StyleSheet } from "react-native";
import { Card, Block, Text } from "../utilities";
import { theme } from "../constants";

const lectureList = () => {
  return (
    <Card border flex={false} margin={[theme.sizes.base,0]} style={styles.cardContainer}>
      <Text h1 bold>card Title</Text>
      <Text caption>card subtitle</Text>
    </Card>
  );
};

export default lectureList;

const styles = StyleSheet.create({
    cardContainer:{
        borderLeftWidth: theme.sizes.base/2,
        borderColor:theme.colors.teal
    }
});
