import { cartConstance } from "./constnace";

export const addToCart = (product, qty) => {
  return async (dispatch, getState) => {
    dispatch({
      type: cartConstance.ADD_TO_CART,
      payload: {
        product_id: product.product._id,
        name: product.product.name,
        price: product.price,
        productPic: product.product.productPictures,
        keyFeatures: product.product.keyFeatures,
        quantity: product.qty,
      },
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };
};
