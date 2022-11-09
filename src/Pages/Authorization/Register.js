import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../../action/auth.action";
import Input from "../../Components/Input/Input";
import Layout from "../../Components/Layout/Layout";
import MenuSection from "../../Components/Menu/MenuSection";
import "./style.css";
const initialValue = {
  firstName: "",
  lastName: "",
  email: "",
  number: 0,
  password: "",
};
const Register = () => {
  const [values, setValues] = useState(initialValue);
  const auth = useSelector((state) => state.auth);
  const errors = auth?.errors;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(signup(values));
  };
  useEffect(() => {
    if (auth.authenticate) {
      navigate("/");
    }
  }, [auth.authenticate, navigate]);
  return (
    <Layout>
      <div className="bg-bgShop h-[100%]">
        <MenuSection />
      </div>
      <div className="container mx-auto ">
        <div className="flex justify-center mt-20 mb-24">
          <form
            className="w-[30%] flex flex-col font-fira "
            onSubmit={handleSignup}
          >
            <h1 className="text-xl mb-2">Account Login</h1>
            <div className="flex gap-2">
              <div>
                <label className="after:content-['*'] after:ml-0.5 after:text-red-500">
                  First Name
                </label>
                <Input
                  type="text"
                  placeholder="First Name"
                  class=" p-2 border border-gray rounded-md outline-none focus:border-gray w-full"
                  handleChange={handleChange}
                  name="firstName"
                />
                <p className={`error `}>{errors?.firstName?.msg}</p>
              </div>
              <div>
                <label className="after:content-['*'] after:ml-0.5 after:text-red-500">
                  Last Name
                </label>
                <Input
                  type="text"
                  placeholder="Last Name"
                  class=" p-2 border border-gray rounded-md outline-none focus:border-gray w-full"
                  name="lastName"
                  handleChange={handleChange}
                />
                <p className={`error `}>{errors?.lastName?.msg}</p>
              </div>
            </div>
            <label className="mt-4 after:content-['*'] after:ml-0.5 after:text-red-500">
              E-mail
            </label>
            <Input
              type="email"
              placeholder="E-mail"
              class=" p-2 border border-gray rounded-md outline-none focus:border-gray w-full"
              name="email"
              handleChange={handleChange}
            />
            <p className={`error `}>{errors?.email?.msg}</p>
            <label className="mt-4 after:content-['*'] after:ml-0.5 after:text-red-500">
              Number
            </label>
            <Input
              type="number"
              placeholder="Phone Number"
              class=" p-2 border border-gray rounded-md outline-none focus:border-gray w-full"
              name="number"
              handleChange={handleChange}
            />
            <label className="mt-4 after:content-['*'] after:ml-0.5 after:text-red-500">
              Password
            </label>
            <Input
              type="password"
              placeholder="Password"
              class=" p-2 border border-gray rounded-md outline-none focus:border-gray"
              name="password"
              handleChange={handleChange}
            />
            <p className={`error `}>{errors?.password?.msg}</p>
            <button
              className="mt-6 w-full bg-btnBlue text-white py-2 rounded-md"
              type="submit"
            >
              Continue
            </button>
            <p
              className={`mt-4 text-center p-2 bg-green-200 text-green-600 ${
                auth.message ? "block" : "hidden"
              }`}
            >
              {auth && auth.message}
            </p>
            <p className="text-center border-b-[1px] border-[#eee] h-[11px]  mb-8 mt-8">
              <span className="bg-white px-2 text-textGray">
                Already have an account?
              </span>
            </p>
            <button
              onClick={() => navigate("/account/login")}
              className=" w-full border transition duration-500 border-btnBlue hover:bg-btnBlue text-textBlue hover:text-white py-2 rounded-md"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
