import axios from "axios";
import { AsyncStorage } from "react-native";

let url;
if (__DEV__) {
  url = "http://8741422758d6.ngrok.io";
} else {
  url = "http://8741422758d6.ngrok.io";
}

//creating instance

const instance = axios.create({
  baseURL: url,
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    Promise.reject(err);
  }
);

export default instance;
