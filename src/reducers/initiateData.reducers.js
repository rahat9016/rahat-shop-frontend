import { getAllProducts } from "../action/constnace";

const initialState = {
  loading: false,
  products: [],
};
export const InitiateData = (state = initialState, action) => {
  switch (action.type) {
    case getAllProducts.GET_ALL_PRODUCTS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case getAllProducts.GET_ALL_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        products: action.payload.products,
      };
    }
    default:
      return state;
  }
};
