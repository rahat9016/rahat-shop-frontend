import React from "react";

const CartProductItem = (props) => {
  const { name, productPic, keyFeatures, quantity } = props.cartItem;
  return <div>{name}</div>;
};

export default CartProductItem;
