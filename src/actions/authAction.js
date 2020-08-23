import {
  SIGNIN,
  SIGNUP,
  SET_LOADING,
  CANCEL_LOADING,
  LOGOUT,
  RESET_STATES,
} from "./Types";
import useRequest from "../api/agroApi";
import { getMessage } from "../actions/serverMessage";
import { AsyncStorage } from "react-native";

import { navigate } from "../_navigationRef";

const SETLOADING = () => {
  return {
    type: SET_LOADING,
  };
};
const _CANCEL_LOADING = () => {
  return {
    type: CANCEL_LOADING,
  };
};

export const localSignin = () => async (dispatch) => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({
      type: SIGNIN,
      payload: token,
    });
    navigate("dashboard");
  } else {
    dispatch(logout());
    navigate("splashscreen");
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
  dispatch({ type: RESET_STATES });
  navigate("splashscreen");
};

export const signinAccount = (credentials) => async (dispatch) => {
  dispatch(SETLOADING());
  try {
    const res = await useRequest.post("/signin", { ...credentials });

    dispatch({
      type: SIGNIN,
      payload: res.data.token,
    });
    navigate("mainFlow");
  } catch (error) {
    dispatch(getMessage(error.response.data, error.response.status));
    dispatch(_CANCEL_LOADING());
  }
};

export const signupAccount = (credentials) => async (dispatch) => {
  dispatch(SETLOADING());
  try {
    const res = await useRequest.post("/signup", { ...credentials });
    dispatch({
      type: SIGNUP,
      payload: res.data.token,
    });

    //redirect down here
    navigate("mainFlow");
  } catch (error) {
    console.log(error);
    dispatch(_CANCEL_LOADING());
    dispatch(getMessage(error.response.data, error.response.status));
  }
};
