import { GET_PRODUCT, GET_LOGISTICS,RESET_STATES } from "../actions/Types";

const initialState = {
  products: [],
  logistics: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        products: action.payload.reverse(),
      };
    case GET_LOGISTICS:
      
      return {
        ...state,
        logistics: action.payload,
      };
      case RESET_STATES:
      return{
        ...state,
        products:[],
        logistics:[]
      }

    default:
      return state;
  }
};
