import { SETDATA_LOADING, CANCELDATA_LOADING } from "./Types";

export const setDataLoading = () => {
  return { type: SETDATA_LOADING };
};

export const cancelDataLoading = () => {
  return {
    type: CANCELDATA_LOADING,
  };
};
