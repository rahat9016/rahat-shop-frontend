import { getProductById } from "./constnace";
import axios from "../helpers/axios";
export const findProductById = (id) => {
  return async (dispatch) => {
    dispatch({
      type: getProductById.GET_PRODUCT_BY_ID_REQUEST,
    });
    const res = await axios.get(`/product/${id}`);
    if (res.status === 200) {
      dispatch({
        type: getProductById.GET_PRODUCT_BY_ID_SUCCESS,
        payload: {
          product: res.data.product,
        },
      });
    }
  };
};
export const productStar = (productId, star) => {
  return async (dispatch) => {
    const res = await axios.put(`/product/start/${productId}`, { star });
    dispatch({
      type: "ADD_STAR",
      payload: {},
    });
  };
};
