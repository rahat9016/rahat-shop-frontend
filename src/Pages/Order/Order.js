import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import MenuSection from "../../Components/Menu/MenuSection";
import { CgProfile } from "react-icons/cg";
import OrderItem from "../../Components/Order/OrderItem";
import { orderGetAction } from "../../action/order.action";
const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    orderGetAction().then((res) => {
      setOrders(res.data.orders);
    });
  }, []);
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <Layout>
      <div className={"flex justify-between"}>
        <MenuSection />
      </div>
      <div className="bg-bgShop py-20">
        <div className="max-w-7xl mx-auto">
          <div className="lg:w-[80%] mx-auto px-2 lg:px-0">
            {/* User Information */}
            <div className="flex gap-4 items-center border-b-2 border-[#eee] pb-2 ">
              <CgProfile size={80} color="#C5C5C5" />
              <div>
                <p>Hello,</p>
                <h1 className="font-fira text-lg">
                  {user.firstName + " " + user.lastName}
                </h1>
              </div>
            </div>
            {/* Order Information */}
            <div>
              <h1 className="text-textBlue text-2xl font-semibold mt-10 mb-2">
                Order History
              </h1>
              <div className="flex flex-col gap-2">
                {orders &&
                  orders.map((orderItem) => (
                    <OrderItem orderItem={orderItem} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Order;
