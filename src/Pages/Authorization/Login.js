import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signing } from "../../action/auth.action";
import Input from "../../Components/Input/Input";
import Layout from "../../Components/Layout/Layout";
import MenuSection from "../../Components/Menu/MenuSection";
const initialValue = {
  email: "",
  password: "",
};
const Login = () => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [values, setValues] = useState(initialValue);
  const dispatch = useDispatch();
  const location = useLocation();
  // destructure location
  const locationState = location.state?.from;
  const handleChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSigning = (e) => {
    e.preventDefault();
    dispatch(signing(values));
  };
  useEffect(() => {
    if (auth.authenticate) {
      if (locationState) {
        navigate(locationState.pathname);
      } else {
        navigate("/");
      }
    }
  }, [auth.authenticate, navigate, locationState]);
  return (
    <Layout>
      <div className="bg-bgShop h-[100%]">
        <MenuSection />
      </div>
      <div className="container mx-auto ">
        <div className="flex justify-center mt-20">
          <form
            className="w-[30%] flex flex-col font-fira "
            onSubmit={handleSigning}
          >
            <h1 className="text-xl mb-2">Account Login</h1>
            <label className="after:content-['*'] after:ml-0.5 after:text-red-500">
              E-mail
            </label>
            <Input
              type="email"
              name="email"
              placeholder="E-mail"
              class="mb-4 p-2 border border-gray rounded-md outline-none focus:border-gray"
              handleChange={handleChange}
            />

            <label className="after:content-['*'] after:ml-0.5 after:text-red-500">
              Password
            </label>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              class="mb-6 p-2 border border-gray rounded-md outline-none focus:border-gray"
              handleChange={handleChange}
            />
            <button
              className="w-full bg-btnBlue text-white py-2 rounded-md"
              type="submit"
            >
              Login
            </button>
            <span className="flex justify-end my-3">
              <Link href="#" className="text-orange hover:underline">
                Forgotten Password?
              </Link>
            </span>
            <p className="text-center border-b-[1px] border-[#eee] h-[11px]  mb-8">
              <span className="bg-white px-2 text-textGray">
                Don't have an account?
              </span>
            </p>
            <button
              onClick={() => navigate("/new-account/register")}
              className=" w-full border transition duration-500 border-btnBlue hover:bg-btnBlue text-textBlue hover:text-white py-2 rounded-md"
            >
              Create Your Account
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
