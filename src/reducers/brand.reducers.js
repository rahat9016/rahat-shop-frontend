import { brandConstance } from "../action/constnace";

const initialState = {
  brands: [],
  loading: false,
};
export const brandReducers = (state = initialState, action) => {
  switch (action.type) {
    case brandConstance.GET_ALL_BRANDS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case brandConstance.GET_ALL_BRANDS_SUCCESS:
      return {
        ...state,
        brands: action.payload.brands,
      };
    default:
      return state;
  }
};
