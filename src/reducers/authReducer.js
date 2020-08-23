import {
  SIGNIN,
  SET_LOADING,
  SIGNUP,
  CANCEL_LOADING,
  LOGOUT,
} from "../actions/Types";
import { AsyncStorage } from "react-native";
const initialState = {
  loading: false,
  token: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CANCEL_LOADING:
      return {
        ...state,
        loading: false,
      };

    case SIGNUP:
    case SIGNIN:
      AsyncStorage.setItem("token", action.payload);
      return {
        ...state,
        loading: false,
        token: action.payload,
      };

    case LOGOUT:
      AsyncStorage.removeItem("token");
      return {
        ...state,
        token: null,
      };

    default:
      return state;
  }
};
