import axios from "../helpers/axios";
export const orderAction = async (orderObj) => {
  return await axios.post("/user/order", orderObj);
};
export const orderGetAction = async () => {
  return await axios.get("/user/order");
};
