import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import MenuSection from "../../Components/Menu/MenuSection";
import { searchProductBySearch } from "../../action/product.action";
import ProductLoadingPage from "../../Components/ProductComponent/ProductLoadingPage/ProductLoadingPage";
import ProductCard from "../../Components/ProductComponent/ProductCard/ProductCard";
import NotFoundProduct from "../../Components/ProductComponent/NotFoundProduct/NotFoundProduct";
const SearchProduct = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const query = location.search.split("=")[1];
  const searchProduct = useSelector((state) => state.searchProduct);
  console.log(query);
  useEffect(() => {
    dispatch(searchProductBySearch({ query }));
  }, [dispatch, query]);
  useEffect(() => {
    setProducts(searchProduct.products);
  }, [searchProduct.products]);
  return (
    <Layout>
      <div className="bg-bgShop ">
        <MenuSection />
        <div className="py-10">
          <div className="max-w-7xl mx-auto ">
            <div className="px-2 sm:px-10 md:px-8 lg:px-4 xl:px-0 grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
              {searchProduct.loading ? (
                <ProductLoadingPage />
              ) : products ? (
                products.length > 0 ? (
                  products.map((product) => {
                    return <ProductCard key={product._id} product={product} />;
                  })
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

export default SearchProduct;
