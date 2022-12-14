import {
  getAllProducts,
  getProductById,
  getRelatedProduct,
  productBySearch,
} from "../action/constnace";
const initialState = {
  product: null,
  loading: false,
};

export const findProductById = (state = initialState, action) => {
  switch (action.type) {
    case getProductById.GET_PRODUCT_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case getProductById.GET_PRODUCT_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload.product,
      };
    default:
      return state;
  }
};
const initialRelatedState = {
  products: [],
  loading: false,
};
export const getRelatedProducts = (state = initialRelatedState, action) => {
  switch (action.type) {
    case getRelatedProduct.GET_RELATED_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case getRelatedProduct.GET_RELATED_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.products,
      };
    default:
      return state;
  }
};
export const searchProductBySearch = (
  state = { products: [], loading: false },
  action
) => {
  switch (action.type) {
    case productBySearch.SEARCH_PRODUCT_FAILURE:
      return {
        ...state,
        loading: true,
      };
    case productBySearch.SEARCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.search,
      };
    default:
      return state;
  }
};
