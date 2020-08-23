import { NEW_MESSAGE, CLEAR_MESSAGE } from "../actions/Types";

const initialState = null
 

export const ServerMsgReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_MESSAGE:
      return action.payload

    case CLEAR_MESSAGE:
      return null

    default:
      return state
  }
};
