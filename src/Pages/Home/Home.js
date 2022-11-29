import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InitiateDataFunc } from "../../action/InitiateData";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Layout from "../../Components/Layout/Layout";
import MenuSection from "../../Components/Menu/MenuSection";
import "./style.css";
const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.AllProductsData);
  console.log(products);
  useEffect(() => {
    dispatch(InitiateDataFunc({ sort: "sold", order: "desc", limit: 5 }));
  }, [dispatch]);
  return (
    <Layout home>
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="grid grid-cols-16 my-5 h-auto">
          <MenuSection home />
          <HeroSection />
        </div>
      </div>
      <div className="container mx-auto">
        <div className="productItemContainer p-2">
          {products.loading ? (
            <p>Loading...</p>
          ) : (
            products?.products?.map((product, index) => {
              return (
                <div
                  key={product._id}
                  className={`p-3  rounded-3xl ${"proImg" + index}`}
                >
                  <div className={`flex justify-center `}>
                    <img src={product?.productPictures[0].img} alt="" />
                  </div>
                  <div>
                    <h1 className="mb-1">{product.name}</h1>
                    <p className="text-sm">
                      {product.description.slice(0, 150)}
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
