import React, { useState } from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import { Text, Block, Button, Input } from "../../utilities";
import { theme } from "../../constants";

import { signupAccount } from "../../actions/authAction";
import { connect } from "react-redux";

const Signup = ({ navigation, loading, token, serverMsg,signupAccount }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [repeatPassword, setrepeatPassword] = useState("");

  const [inputError, setinputError] = useState('')

  const message = (serverMsg)=>{
   if(serverMsg&&serverMsg.status===422){
   return <Text  color="red">{serverMsg.message}</Text>
   }
  }

const accountCreation = ()=>{
  setinputError('')
   if (password !==repeatPassword) {
    return setinputError('password mismatch,Try again.')
   }
   
   signupAccount({email,password})
  
  }


  return (
    <Block padding={(0, theme.sizes.base * 2)}>
      <Block middle>
        <Text h1 bold size={theme.sizes.base * 3}>
          Sign<Text h1 bold size={theme.sizes.base * 3} color={theme.colors.primary}>up</Text>
        </Text>
        <Input
          value={email}
          onChangeText={setemail}
          placeholder='Enter your email'
          padding={(0, 10)}
          label='email'
        />
        <Input
          value={password}
          onChangeText={setpassword}
          secure
          placeholder='Enter your password'
          padding={(0, 10)}
          label={inputError?inputError:'password'}
          error={inputError}
        />
        <Input
          value={repeatPassword}
          onChangeText={setrepeatPassword}
          secure
          placeholder='Repeat password'
          padding={(0, 10)}
          label={inputError?inputError:'repeat password'}
          error={inputError}
        />

        <Button gradient onPress={accountCreation}>
          {loading ? (
            <ActivityIndicator size='small' color='white' />
          ) : (
            <Text center white bold>
              create account
            </Text>
          )}
        </Button>
        {message(serverMsg)}

        <Button onPress={() => navigation.navigate("signin")}>
          <Text caption primary>
            Already a member Sign in?
          </Text>
        </Button>
      </Block>
    </Block>
  );
};
Signup.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({});

const mapStateToProps = (state) => {
  const { loading, token } = state.auth;
  return {
    serverMsg: state.msg,
    loading,
    token,
  };
};

export default connect(mapStateToProps, { signupAccount })(Signup);
