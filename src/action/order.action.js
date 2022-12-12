import axios from "../helpers/axios";
export const orderAction = (orderObj) => {
  return async (dispatch) => {
    await axios.post("/user/order", orderObj).then((res) => {});
  };
};
