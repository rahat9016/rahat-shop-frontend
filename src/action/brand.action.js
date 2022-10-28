import axios from "../helpers/axios";
import { brandConstance } from "./constnace";

export const getBrands = () => {
  return async (dispatch) => {
    dispatch({
      type: brandConstance.GET_ALL_BRANDS_REQUEST,
    });
    const res = await axios.get("/get-brand");
    if (res.status === 200) {
      dispatch({
        type: brandConstance.GET_ALL_BRANDS_SUCCESS,
        payload: {
          brands: res.data.brands,
        },
      });
    }
  };
};
