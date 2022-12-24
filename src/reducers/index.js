import { combineReducers } from "redux";
import { authReducers } from "./auth.reducers";
import { brandReducers } from "./brand.reducers";
import { cartReducers } from "./cart.reducers";
import { categoryReducers } from "./category.reducers";
import { applyCouponReducer } from "./coupon.reducers";
import { GET_ALL_PRODUCTS, InitiateData } from "./initiateData.reducers";
import {
  findProductById,
  getRelatedProducts,
  searchProductBySearch,
} from "./product.reducers";

const rootReducer = combineReducers({
  category: categoryReducers,
  brands: brandReducers,
  AllProductsData: InitiateData,
  product: findProductById,
  auth: authReducers,
  cart: cartReducers,
  relatedProducts: getRelatedProducts,
  searchProduct: searchProductBySearch,
  applyCoupon: applyCouponReducer,
  allProducts: GET_ALL_PRODUCTS,
});
export default rootReducer;
