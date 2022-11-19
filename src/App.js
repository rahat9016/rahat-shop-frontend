import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory, getBrands, isUserLoggedIn } from "./action";
import Shop from "./Pages/Shop/Shop";
import Cart from "./Pages/Cart/Cart";
import Product from "./Pages/Product/Product";
import Login from "./Pages/Authorization/Login";
import Register from "./Pages/Authorization/Register";
import Review from "./Pages/Review/Review";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [dispatch, auth.authenticate]);
  useEffect(() => {
    dispatch(getAllCategory());
    dispatch(getBrands());
    // dispatch(updateCart());
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/account/login" element={<Login />}></Route>
        <Route path="/new-account/register" element={<Register />}></Route>
        <Route path="/product_id" element={<Product />}></Route>
        {/* <Route path="/review" element={<Review />}></Route> */}
        <Route
          path="/review"
          element={
            <PrivateRoute>
              <Review></Review>
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
