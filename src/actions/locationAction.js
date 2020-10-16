import UploadAPI from "../api/agroApi";
import { getMessage } from "./serverMessage";
import {
  ADD_CURRENT_LOCATION,
  ADD_LOCATION,
  START_RECORDING,
  STOP_RECORDING,
  RESET,
  UPLOADPATH,
} from "./Types";

export const addLocation = (recording, location) => (dispatch) => {
  if (recording) {
    dispatch({
      type: ADD_LOCATION,
      payload: location,
    });
  }
  
  dispatch({
    type: ADD_CURRENT_LOCATION,
    payload: location,
  });
};

export const uploadLocationPath = (locationData) => async (dispatch) => {
  try {
    const { data } = await UploadAPI.patch("/logistics", { ...locationData });
    dispatch(getMessage(data, data.status));
  } catch (error) {
    dispatch(getMessage(error.response.data, error.response.status));
  }
};

export const cleanRecordLocation = () => {
  return {
    type: RESET,
  };
};
export const startRecording = () => {
  return {
    type: START_RECORDING,
  };
};
export const stopRecording = () => {
  return {
    type: STOP_RECORDING,
  };
};
