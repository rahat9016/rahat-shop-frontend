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
function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [dispatch, auth.authenticate]);
  useEffect(() => {
    dispatch(getAllCategory());
    dispatch(getBrands());
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
      </Routes>
    </div>
  );
}

export default App;
