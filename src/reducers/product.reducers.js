import { getProductById } from "../action/constnace";
const initialState = {
  product: null,
  loading: false,
};

export const productReducers = (state = initialState, action) => {
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
