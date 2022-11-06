import { getAllProducts } from "./constnace";
import axios from "../helpers/axios";

export const InitiateDataFunc = (arg) => {
  return async (dispatch) => {
    dispatch({
      type: getAllProducts.GET_ALL_PRODUCTS_REQUEST,
    });
    const res = await axios.post("/allProducts", arg);
    if (res.status === 200) {
      dispatch({
        type: getAllProducts.GET_ALL_PRODUCTS_SUCCESS,
        payload: {
          products: res.data.products,
        },
      });
    }
  };
};
export const InitiateProductsDataFunc = (id, perPage, page) => {
  return async (dispatch) => {
    dispatch({
      type: getAllProducts.GET_ALL_PRODUCTS_REQUEST,
    });
    const res = await axios.get(
      `/getProductsByCategoryId/${id}/${perPage}/${page}`
    );
    if (res.status === 200) {
      dispatch({
        type: getAllProducts.GET_ALL_PRODUCTS_SUCCESS,
        payload: {
          products: res.data.products,
        },
      });
    }
  };
};
