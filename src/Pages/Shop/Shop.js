import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  InitiateDataFunc,
  InitiateProductsDataFunc,
} from "../../action/InitiateData";
import Layout from "../../Components/Layout/Layout";
import MenuSection from "../../Components/Menu/MenuSection";
import TopBar from "../../Components/TopBar/TopBar";
import Slider from "@mui/material/Slider";
import ToggleMenu from "../../Components/ToggleMenu/ToggleMenu";
import ProductCard from "../../Components/ProductComponent/ProductCard/ProductCard";
import ProductLoadingPage from "../../Components/ProductComponent/ProductLoadingPage/ProductLoadingPage";
import NotFoundProduct from "../../Components/ProductComponent/NotFoundProduct/NotFoundProduct";
const Shop = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState([0, 50000]);
  const [color, setColor] = useState([
    "#5DADE2",
    "#F2D7D5",
    "#F4D03F",
    "#8E44AD",
    "#2ECC71",
    "#2ECC71",
    "#2ECC71",
    "#2ECC71",
  ]);
  const getProducts = useSelector((state) => state.AllProductsData);
  const brands = useSelector((state) => state.brands.brands);
  // destructor location
  const params = location.search.split("?")[1].split("/")[1];
  // 1. <----------- Load Product by Default on page load ------------->
  useEffect(() => {
    dispatch(InitiateProductsDataFunc(params, 20, 1));
  }, [dispatch, params]);

  // 2. <----------- Load Product by Price on page load ------------->
  const handlePrice = (event, newPrice) => {
    setPrice(newPrice);
  };
  useEffect(() => {
    loadPrice();
  }, [price]);
  const loadPrice = () => {
    dispatch(InitiateDataFunc({ price: price, byCategoryId: params }));
  };

  const handleBrand = (id) => {
    dispatch(InitiateDataFunc({ brand: id }));
  };
  const handleChangeCheckbox = (e) => {
    dispatch(InitiateDataFunc({ shipping: e.target.value }));
  };
  // <-----------GET PRODUCTS AND SET IN STATE------------->
  useEffect(() => {
    setProducts(getProducts.products);
  }, [getProducts.products]);
  return (
    <Layout>
      <div className="bg-bgShop pb-20">
        <MenuSection />
        <div className="container mx-auto flex gap-4 w-full mt-5">
          <div className="w-[20%] ">
            <div className="flex flex-col gap-2">
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
              <ToggleMenu title={"Availability"}>
                <div className="flex gap-2 items-center mb-2">
                  <input type="checkbox" id="inStoke" />
                  <label for="inStoke">In Stoke</label>
                </div>
                <div className="flex gap-2 items-center mb-2">
                  <input type="checkbox" id="preOrder" />
                  <label for="preOrder">Pre Order</label>
                </div>
              </ToggleMenu>
              <ToggleMenu title={"Brand"}>
                <ul>
                  {brands.length > 0
                    ? brands.map((brand) => {
                        return (
                          <li
                            onClick={() => handleBrand(brand._id)}
                            className="cursor-pointer my-1"
                          >
                            {brand.name}
                          </li>
                        );
                      })
                    : null}
                </ul>
              </ToggleMenu>
              <ToggleMenu title={"Color"}>
                <div className="flex flex-wrap gap-2 mt-4">
                  {color.map((c) => (
                    <div
                      style={{ background: `${c}` }}
                      className="w-7 h-7 rounded-full"
                    ></div>
                  ))}
                </div>
              </ToggleMenu>
              <ToggleMenu title={"Shipping"}>
                <div className="flex gap-2 items-center mb-2">
                  <input
                    type="checkbox"
                    id="yes"
                    onChange={handleChangeCheckbox}
                    value="Yes"
                  />
                  <label for="yes">Yes</label>
                </div>
                <div className="flex gap-2 items-center mb-2">
                  <input
                    type="checkbox"
                    id="no"
                    onChange={handleChangeCheckbox}
                    value="No"
                  />
                  <label for="no">No</label>
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
            <div>{products.length > 0 ? null : <NotFoundProduct />}</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
