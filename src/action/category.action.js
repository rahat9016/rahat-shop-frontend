import axios from "../helpers/axios";
import { categoryConstance } from "./constnace";

export const getAllCategory = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: categoryConstance.GET_ALL_CATEGORY_REQUEST,
      });
      const res = await axios.get("/category/getCategory");
      // console.log(res.data.category);
      if (res.status === 200) {
        dispatch({
          type: categoryConstance.GET_ALL_CATEGORY_SUCCESS,
          payload: {
            category: res.data.category,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
