import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Block, Text, Button, Input } from "../../utilities";
import { theme } from "../../constants";

const ForgotEmailPassword = () => {
  const { width, height } = Dimensions.get("window");
  return (
    <Block padding={(0, theme.sizes.base * 2)}>
      <Text h1 bold center>
        Password Reset
      </Text>
      <Input placeholder='registered email' padding={(0, 10)} />
      <Button gradient>
        <Text center white>
          Reset password
        </Text>
      </Button>
    </Block>
  );
};
ForgotEmailPassword.navigationOptions = {
  headerShown: false,
};
export default ForgotEmailPassword;

const styles = StyleSheet.create({});
