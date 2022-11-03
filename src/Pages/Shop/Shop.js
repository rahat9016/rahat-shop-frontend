import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  InitiateDataFunc,
  InitiateProductsDataFunc,
} from "../../action/InitiateData";
import Layout from "../../Components/Layout/Layout";
import MenuSection from "../../Components/Menu/MenuSection";
import ProductCard from "../../Components/ProductCard/ProductCard";
import ProductLoadingPage from "../../Components/ProductLoadingPage/ProductLoadingPage";
import TopBar from "../../Components/TopBar/TopBar";
import Slider from "@mui/material/Slider";
import ToggleMenu from "../../Components/ToggleMenu/ToggleMenu";

const Shop = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState([0, 0]);
  const getProducts = useSelector((state) => state.AllProductsData);
  // destructor location
  const params = location.search.split("?")[1].split("/")[1];
  // 1. <----------- Load Product by Default on page load ------------->
  useEffect(() => {
    dispatch(InitiateProductsDataFunc(params, 20, 1));
  }, [dispatch, params]);

  // 2. <----------- Load Product by Price on page load ------------->
  const handlePrice = async (event, newPrice) => {
    await setPrice(newPrice);
  };
  useEffect(() => {
    loadPrice();
  }, [price]);
  const loadPrice = () => {
    dispatch(InitiateDataFunc({ price: price, byCategoryId: params }));
  };
  // <-----------GET PRODUCTS AND SET IN STATE------------->
  useEffect(() => {
    setProducts(getProducts.products);
  }, [getProducts.products]);
  return (
    <Layout>
      <div className="bg-bgShop h-[100%]">
        <MenuSection />
        <div className="container mx-auto flex gap-4 w-full mt-5">
          <div className="w-[20%] ">
            <div className="">
              <ToggleMenu title={"Price"}>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={price}
                  onChange={handlePrice}
                  valueLabelDisplay="auto"
                  min={0}
                  max={500000}
                  className="z-0"
                />
                <div className="flex items-center justify-between">
                  <h1 className="border-slate-200 border-[1px] px-4 py-1">
                    ${price[0]}
                  </h1>
                  <h1 className="border-slate-200 border-[1px] px-4 py-1">
                    ${price[1]}
                  </h1>
                </div>
              </ToggleMenu>
            </div>
          </div>
          <div className="w-[80%]">
            <TopBar />
            <div className="grid grid-cols-4 gap-6 mt-2">
              {getProducts.loading ? (
                <ProductLoadingPage />
              ) : products ? (
                products.length > 0 ? (
                  products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))
                ) : null
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
