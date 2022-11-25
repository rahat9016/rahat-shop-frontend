import {
  getProductById,
  getRelatedProduct,
  productBySearch,
} from "./constnace";
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

export const getRelatedProductById = (productId) => {
  return async (dispatch) => {
    const res = await axios.get(`/product/related/${productId}`);
    if (res.status === 200) {
      dispatch({
        type: getRelatedProduct.GET_RELATED_PRODUCT_SUCCESS,
        payload: {
          products: res.data,
        },
      });
    }
  };
};
export const productStar = (productId, star) => {
  return async (dispatch) => {
    await axios.put(`/product/start/${productId}`, { star });
  };
};
export const searchProductBySearch = (query) => {
  return async (dispatch) => {
    await axios.post(`/search/getProduct`, query).then((res) => {
      dispatch({
        type: productBySearch.SEARCH_PRODUCT_SUCCESS,
        payload: {
          search: res.data.search,
        },
      });
    });
  };
};
