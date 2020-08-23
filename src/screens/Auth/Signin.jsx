import React, { useState } from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import { Text, Block, Button, Input } from "../../utilities";
import { theme } from "../../constants";

import { connect } from "react-redux";
import { signinAccount } from "../../actions/authAction";

const Signin = ({ navigation, serverMsg, loading, token, signinAccount }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const message = (serverMsg) => {
    if (serverMsg && serverMsg.status === 422) {
      return <Text color='red'>{serverMsg.message}</Text>;
    }
  };

  const registerAnAccount = () => {
    signinAccount({ email, password });
  };

  return (
    <Block padding={(0, theme.sizes.base * 2)}>
      <Block middle>
        <Text h1 bold size={theme.sizes.base * 3}>
          Sign
          <Text
            h1
            bold
            size={theme.sizes.base * 3}
            color={theme.colors.primary}
          >
            in
          </Text>
        </Text>
        <Input
          placeholder='Enter your email'
          padding={(0, 10)}
          label='email'
          onChangeText={setemail}
          value={email}
        />
        <Input
          secure
          placeholder='Enter your password'
          padding={(0, 10)}
          label='password'
          onChangeText={setpassword}
          value={password}
        />
        <Text right primary onPress={() => navigation.navigate("reset")}>
          forgot password?
        </Text>
        <Button gradient onPress={registerAnAccount}>
          {loading ? (
            <ActivityIndicator size='small' color='white' />
          ) : (
            <Text center white bold>
              Sign in
            </Text>
          )}
        </Button>
        {message(serverMsg)}

        <Button onPress={() => navigation.navigate("signup")}>
          <Text caption primary>
            Not a member Sign up?
          </Text>
        </Button>
      </Block>
    </Block>
  );
};
Signin.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({});

const mapStateToProps = (state) => {
  const { loading, token } = state.auth;

  return {
    loading,
    token,
    serverMsg: state.msg,
  };
};

export default connect(mapStateToProps, { signinAccount })(Signin);
