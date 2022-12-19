import React from "react";
import Processing from "./Processing";

const OrderItem = (props) => {
  const { orderItem } = props;

  return (
    <div className="flex justify-between bg-white shadow-sm px-3 py-2 rounded-lg">
      <div>
        {orderItem &&
          orderItem.products.map((product, index) => {
            return (
              <div key={index} className="">
                <h1 className="text-lg w-[70%]">{product.product.name}</h1>
                <p>
                  +{product.quantity} Items(s){" "}
                  <span className="text-orange">{product.product.price}tk</span>
                </p>
                <span className="text-xs italic text-primaryLight inline-block">
                  {orderItem.createdAt}
                </span>
              </div>
            );
          })}
      </div>
      <div>
        <Processing orderStatus={orderItem.orderStatus} />
      </div>
    </div>
  );
};

export default OrderItem;
