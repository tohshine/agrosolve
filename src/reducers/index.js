import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { ServerMsgReducer } from "./serverMsgReducer";
import { productReducer } from "./productReducer";
import {dataLoading} from './dataloadingReducers'
import {locationReducer} from './locationReducer'

export default combineReducers({
  auth: authReducer,
  msg: ServerMsgReducer,
  prod: productReducer,
  data:dataLoading,
  tracker:locationReducer
});
