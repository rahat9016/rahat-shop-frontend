import { bestSellingConstance, getAllProducts } from "../action/constnace";

const initialState = {
  loading: false,
  products: [],
};
export const InitiateData = (state = initialState, action) => {
  switch (action.type) {
    case bestSellingConstance.GET_BEST_SELLING_PRODUCTS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case bestSellingConstance.GET_BEST_SELLING_PRODUCTS_SUCCESS: {
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
export const GET_ALL_PRODUCTS = (
  state = { products: [], loading: false },
  action
) => {
  switch (action.type) {
    case getAllProducts.GET_ALL_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case getAllProducts.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.products,
      };
    default:
      return state;
  }
};
