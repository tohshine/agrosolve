import React from "react";
import { StyleSheet } from "react-native";
import { Block, Text } from "../utilities";

export const HeaderNav = ({ name,children }) => {
  return (
    <Block flex={false} center row color='transparent' padding={[5, 0]}>
      {children}
      <Text bold style={{ marginLeft: 10 }}>
        {name}
      </Text>
    </Block>
  );
};

export default HeaderNav;

const styles = StyleSheet.create({});
