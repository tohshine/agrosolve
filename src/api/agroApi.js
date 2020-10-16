import axios from "axios";
import { AsyncStorage } from "react-native";

let url;
if (__DEV__) {
  url = "http://c50c835fd144.ngrok.io";
} else {
  url: "";
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
