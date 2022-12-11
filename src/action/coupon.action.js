import axios from "../helpers/axios";
import { applyCouponConstance } from "./constnace";

export const applyCoupon = (coupon, totalAmount) => {
  return async (dispatch) => {
    await axios.post("/coupon/apply", { coupon, totalAmount }).then((res) => {
      dispatch({
        type: applyCouponConstance.APPLY_COUPON_SUCCESS,
        payload: {
          afterDiscount: res.data.afterDiscount,
        },
      });
    });
  };
};
