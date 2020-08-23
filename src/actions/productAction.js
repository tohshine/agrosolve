import { ADD_PRODUCT, GET_PRODUCT, PAYMENT, GET_LOGISTICS } from "./Types";
import { getMessage } from "./serverMessage";
import useRequest from "../api/agroApi";
import { setDataLoading, cancelDataLoading } from "./dataLoading";

export const _AddProduct = (product) => async (dispatch) => {
  dispatch(setDataLoading());
  const config = {
    "content-type": "multipart/form-data",
  };
  try {
    const res = await useRequest.post("/product", product, config);
    dispatch({
      type: ADD_PRODUCT,
    });
    dispatch(getMessage(res.data, res.status));
    dispatch(cancelDataLoading());
  } catch (error) {
    dispatch(getMessage(error.response.data, error.response.status));
    dispatch(cancelDataLoading());
  }
};

export const _GetProduct = () => async (dispatch) => {
  dispatch(setDataLoading());
  try {
    const res = await useRequest.get("/product");
    dispatch({
      type: GET_PRODUCT,
      payload: res.data,
    });
    dispatch(cancelDataLoading());
  } catch (error) {
    console.log(error);
    dispatch(cancelDataLoading());
    dispatch(getMessage(error.response.data, error.response.status));
  }
};

export const _Payments = (product) => async (dispatch) => {
  dispatch(setDataLoading());
  try {
    const res = await useRequest.post("/logistics", { product: product._id });
    dispatch({
      type: PAYMENT,
    });
    dispatch(getMessage(res.data, res.status));
    dispatch(cancelDataLoading());
    console.log(res.data);
  } catch (error) {
    console.log(error.response.data);
    dispatch(getMessage(error.response.data, error.response.status));
    dispatch(cancelDataLoading());
  }
};

export const _getLogistics = () => async (dispatch) => {
  dispatch(setDataLoading());
  try {
    const res = await useRequest.get("/logistics");
    dispatch({
      type: GET_LOGISTICS,
      payload: res.data,
    });
    dispatch(cancelDataLoading());
  } catch (error) {
    console.log(error);
    dispatch(cancelDataLoading());
    dispatch(getMessage(error.response.data, error.response.status));
  }
};
