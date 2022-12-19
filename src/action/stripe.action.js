import axios from "../helpers/axios";

export const stripeAction = async (id) => {
  return await axios.post("/create-payment", { id });
};
export const stripeUpdateAction = async (id, paymentIntent) => {
  return await axios.put("/create-payment", { id, paymentIntent });
};
