import React from "react";
import Layout from "../../Components/Layout/Layout";
import MenuSection from "../../Components/Menu/MenuSection";

const Product = () => {
  return (
    <Layout>
      <div className="bg-bgShop h-[100vh]">
        <MenuSection />
        <div className="container mx-auto flex gap-4 w-full mt-5"></div>
      </div>
    </Layout>
  );
};

export default Product;
