import store from "../store/store";
import { cartConstance } from "./constnace";

export const addToCart = (product, newQty = 1) => {
  return async (dispatch) => {
    const { cartItems } = store.getState().cart;
    const qty = cartItems[product._id]
      ? parseInt(cartItems[product._id].qty + newQty)
      : 1;
    cartItems[product._id] = {
      ...product,
      qty,
    };
    localStorage.setItem("cart", JSON.stringify(cartItems));
    dispatch({
      type: cartConstance.ADD_TO_CART,
      payload: {
        cartItems,
      },
    });
  };
};

// export const addToCart = (product) => {
//   return async (dispatch) => {
//     dispatch({
//       type: cartConstance.ADD_TO_CART,
//       payload: {
//         product_id: product._id,
//         qty: product.qty,
//         price: product.price,
//       },
//     });
//   };
// };
// export const INCREMENT = (product) => {
//   return async (dispatch) => {
//     dispatch({
//       type: cartConstance.INCREASE_CART,
//       payload: {
//         product_id: product._id,
//         qty: product.qty,
//       },
//     });
//   };
// };
// export const DECREMENT = (product) => {
//   return async (dispatch) => {
//     dispatch({
//       type: cartConstance.DECREASE_CART,
//       payload: {
//         product_id: product._id,
//         qty: product.qty,
//       },
//     });
//   };
// };
export const updateCart = () => {
  return (dispatch) => {
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : null;
    if (cart) {
      dispatch({
        type: cartConstance.ADD_TO_CART,
        payload: { cartItems: cart },
      });
    }
  };
};
