import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { useDispatch } from "react-redux";
import { getAllCategory, getBrands } from "./action";
import Shop from "./Pages/Shop/Shop";
import Cart from "./Pages/Cart/Cart";
function App() {
  const dispatch = useDispatch();
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
      </Routes>
    </div>
  );
}

export default App;
