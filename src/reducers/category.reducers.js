import { categoryConstance } from "../action/constnace";

const initialState = {
  loading: false,
  category: [],
};
export const categoryReducers = (state = initialState, action) => {
  switch (action.type) {
    case categoryConstance.GET_ALL_CATEGORY_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case categoryConstance.GET_ALL_CATEGORY_SUCCESS: {
      return {
        ...state,
        loading: false,
        category: action.payload.category,
      };
    }
    default:
      return state;
  }
};
