import { applyCouponConstance } from "../action/constnace";

const initialState = {
  loading: false,
  afterDiscount: 0,
};
export const applyCouponReducer = (state = initialState, action) => {
  switch (action.type) {
    case applyCouponConstance.APPLY_COUPON_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case applyCouponConstance.APPLY_COUPON_SUCCESS: {
      return {
        ...state,
        loading: false,
        afterDiscount: action.payload.afterDiscount,
      };
    }
    default:
      return state;
  }
};
