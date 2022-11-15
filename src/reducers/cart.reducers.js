import { cartConstance } from "../action/constnace";

const initiateState = {
  cartItems: {},
};

export const cartReducers = (state = initiateState, action) => {
  switch (action.type) {
    case cartConstance.ADD_TO_CART:
      return {
        ...state,
        cartItems: action.payload.cartItems,
      };
    // case cartConstance.ADD_TO_CART:
    //   const item = action.payload;
    //   const exitItem = state.cart.find((c) => c.product_id === item.product_id);
    //   if (exitItem) {
    //     return {
    //       ...state,
    //     };
    //   } else {
    //     return { ...state, cart: [...state.cart, item] };
    //   }
    // case cartConstance.INCREASE_CART:
    //   const item2 = action.payload;
    //   const exitItem2 = state.cart.find(
    //     (c) => c.product_id === item2.product_id
    //   );
    //   if (exitItem2) {
    //     exitItem2.qty++;
    //   }
    //   return { ...state };
    // case cartConstance.DECREASE_CART:
    //   const item3 = action.payload;
    //   const exitItem3 = state.cart.find(
    //     (c) => c.product_id === item3.product_id
    //   );
    //   if (exitItem3) {
    //     exitItem3.qty--;
    //   }
    //   return { ...state };
    default:
      return state;
  }
};
