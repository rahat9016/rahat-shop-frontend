import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeCartItem } from "../../action/cart.action";

const CartProductItem = (props) => {
  const dispatch = useDispatch();
  const { name, productPic, keyFeatures, quantity, price, product_id, stoke } =
    props.cartItem;
  const handleIncrement = () => {
    const newQty = quantity + 1;
    if (stoke <= quantity) return;
    dispatch(addToCart(product_id, newQty));
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      const newQty = quantity - 1;
      dispatch(addToCart(product_id, newQty));
    }
  };
  return (
    <div>
      <div className="flex flex-row border-b border-lightGray items-center">
        <div className="basis-1/4 hidden lg:block px-2 py-3 mx-[2px] rounded-sm">
          <img src={productPic && productPic[0].img} alt="" className="w-16" />
        </div>
        <div className="basis-1/2  px-2 py-3 mx-[2px] rounded-sm">
          <Link
            to={`/product_id?productId=${product_id}`}
            className="hover:underline underline-offset-1 text-base font-medium font-roboto"
          >
            {name}
          </Link>{" "}
          <br />
          <span
            className="text-orange cursor-pointer"
            onClick={() => dispatch(removeCartItem(product_id))}
          >
            Remove
          </span>
        </div>
        <div className="basis-1/2 hidden lg:block px-2 py-3 mx-[2px] rounded-sm">
          {keyFeatures && keyFeatures[0].key}
        </div>
        <div className="basis-1/4  px-2 py-3 mx-[2px] rounded-sm">
          <div className="flex items-center ">
            <button
              className="border border-lightWhite px-3 py-3"
              onClick={handleDecrement}
            >
              <AiOutlineMinus />
            </button>
            <span className="border border-lightWhite px-5 py-2  ">
              {quantity}
            </span>
            <button
              className="border border-lightWhite px-3 py-3"
              onClick={handleIncrement}
            >
              <AiOutlinePlus />
            </button>
          </div>
        </div>

        <div className="basis-1/4  hidden lg:block px-2 py-3 mx-[2px] rounded-sm">
          {price.toLocaleString("en-US")}
        </div>
        <div className="basis-1/4  px-2 py-3 mx-[2px] rounded-sm">
          {Math.round(price * quantity).toLocaleString("en-US")}
          tk
        </div>
      </div>
    </div>
  );
};

export default CartProductItem;
