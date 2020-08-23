import React,{useEffect} from "react";
import { StyleSheet, Text, View } from "react-native";
import { localSignin } from "../actions/authAction";
import { connect } from "react-redux";

const _blankScreen = ({ navigation, localSignin }) => {
  useEffect(() => {
    localSignin();
  }, []);
  return null;
};

export default connect(null, { localSignin })(_blankScreen);

const styles = StyleSheet.create({});
