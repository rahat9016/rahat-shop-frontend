import React from "react";
import Button from "../Button/Button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../../action/cart.action";
const ProductCard = ({ product }) => {
  // const cartItem = useSelector((state) => console.log(state.cart));
  const dispatch = useDispatch();
  const { _id, name, price, productPictures, keyFeatures } = product;
  const productImage = productPictures.map((img) => {
    return img.img;
  });
  const productObj = {
    _id: product?._id,
    qty: 1,
    price: product?.price,
  };

  const handleClick = () => {
    dispatch(addToCart(productObj));
  };
  return (
    <div className="bg-white rounded-md">
      <div className="p-3">
        <div className="h-[250px] p-2 text-center">
          <img
            src={productImage[0]}
            alt="Product Img"
            className="h-[100%] w-[100%]"
          />
        </div>
        <div>
          <a
            href={`product_id?${_id}/product_name=${name}`}
            className="hover:text-orange text-lg font-semibold font-roboto"
          >
            {name}
          </a>
        </div>
        <div className="pl-4 pb-1">
          <ul className="list-disc text-primaryLight text-[15px]">
            {keyFeatures &&
              keyFeatures.slice(0, 4).map((feature) => (
                <li key={feature._id} className="text-textGray py-1">
                  {feature.key}
                </li>
              ))}
          </ul>
        </div>
        <span className="block w-full h-[1px] bg-gray my-5"></span>
        <div className="pb-2">
          <h2 className="text-orange text-lg text-center font-bold font-fira py-2">
            {price}৳
          </h2>
          <Button
            class="flex justify-center  items-center gap-2 text-base transition duration-300 ease-in-out text-btnBlue font-bold hover:text-white bg-[rgba(55,75,185,.1)] hover:bg-btnBlue px-8 py-2  rounded-md w-full "
            handleClick={handleClick}
          >
            <AiOutlineShoppingCart />
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
