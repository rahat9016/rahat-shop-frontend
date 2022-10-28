import { combineReducers } from "redux";
import { brandReducers } from "./brand.reducers";
import { categoryReducers } from "./category.reducers";

const rootReducer = combineReducers({
  category: categoryReducers,
  brands: brandReducers,
});
export default rootReducer;
