import {
  STOP_RECORDING,
  START_RECORDING,
  ADD_CURRENT_LOCATION,
  ADD_LOCATION,
  RESET,
  RESET_STATES,
} from "../actions/Types";

const initialState = {
  location: [],
  currentLocation: null,
  recording: false,
};

export const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CURRENT_LOCATION:
      return {
        ...state,
        currentLocation: action.payload,
      };
    case RESET:
      return {
        ...state,
        location: [],
      
      };
    case STOP_RECORDING:
      return {
        ...state,
        recording: false,
      };
    case START_RECORDING:
      return {
        ...state,
        recording: true,
      };
    case ADD_LOCATION:
      return {
        ...state,
        location: [...state.location, action.payload],
      };

    //after user logout all state clear
    case RESET_STATES:
      return {
        ...state,
        location: [],
        currentLocation: null,
        recording: false,
      };
    default:
      return state;
  }
};
