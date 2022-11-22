import { combineReducers } from "redux";
import { authReducers } from "./auth.reducers";
import { brandReducers } from "./brand.reducers";
import { cartReducers } from "./cart.reducers";
import { categoryReducers } from "./category.reducers";
import { InitiateData } from "./initiateData.reducers";
import { getRelatedProducts, productReducers } from "./product.reducers";

const rootReducer = combineReducers({
  category: categoryReducers,
  brands: brandReducers,
  AllProductsData: InitiateData,
  product: productReducers,
  auth: authReducers,
  cart: cartReducers,
  relatedProducts: getRelatedProducts,
});
export default rootReducer;
