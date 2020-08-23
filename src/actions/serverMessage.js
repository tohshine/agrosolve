import { NEW_MESSAGE, CLEAR_MESSAGE } from "./Types";

export const getMessage = (message, status) => (dispatch) => {
  setTimeout(()=>dispatch(clearMessage()), 5000);

  return dispatch({
    type: NEW_MESSAGE,
    payload: { message, status }
  })
   
};

export const clearMessage = () => {
  return {
    type: CLEAR_MESSAGE,
  };
};
