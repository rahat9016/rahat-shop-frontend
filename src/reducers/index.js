import { combineReducers } from "redux";
import { categoryReducers } from "./category.reducers";

const rootReducer = combineReducers({
  category: categoryReducers,
});
export default rootReducer;
