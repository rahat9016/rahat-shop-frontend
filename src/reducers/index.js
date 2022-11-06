import { combineReducers } from "redux";
import { brandReducers } from "./brand.reducers";
import { categoryReducers } from "./category.reducers";
import { InitiateData } from "./initiateData.reducers";
import { productReducers } from "./product.reducers";

const rootReducer = combineReducers({
  category: categoryReducers,
  brands: brandReducers,
  AllProductsData: InitiateData,
  product: productReducers,
});
export default rootReducer;
