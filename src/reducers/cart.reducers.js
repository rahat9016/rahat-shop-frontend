import { cartConstance } from "../action/constnace";

export const cartReducers = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case cartConstance.ADD_TO_CART:
      const item = action.payload;
      const isItemExit = state.cartItems.find(
        (i) => i.product_id === item.product_id
      );
      if (isItemExit) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.product_id === isItemExit.product_id ? item : i
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case cartConstance.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (i) => i.product_id !== action.payload
        ),
      };
    case cartConstance.DELETE_CARD_ITEM:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};
