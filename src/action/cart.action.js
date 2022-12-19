import axios from "../helpers/axios";
import { cartConstance } from "./constnace";

export const addToCart = (id, qty) => {
  return async (dispatch, getState) => {
    const { data } = await axios.get(`/product/${id}`);
    dispatch({
      type: cartConstance.ADD_TO_CART,
      payload: {
        product_id: data.product._id,
        name: data.product.name,
        price: data.product.price,
        productPic: data.product.productPictures,
        keyFeatures: data.product.keyFeatures,
        quantity: qty,
        stoke: data.product.quantity,
      },
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };
};

export const userCart = async (cart) => {
  return await axios.post("/user/cart", { cart });
};

export const getUserCart = async () => {
  return await axios.get("/user/cart");
};

export const removeCartItem = (id) => {
  return async (dispatch, getState) => {
    dispatch({
      type: cartConstance.REMOVE_CART_ITEM,
      payload: id,
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };
};
export const deleteCardItem = () => {
  return async (dispatch) => {
    dispatch({
      type: cartConstance.DELETE_CARD_ITEM,
    });
    localStorage.removeItem("cartItems");
  };
};
