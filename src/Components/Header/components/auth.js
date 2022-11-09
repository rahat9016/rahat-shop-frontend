import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../../action/auth.action";
const Auth = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logoutFunc = () => {
    dispatch(logout());
  };
  return (
    <div className="flex items-center gap-3">
      <div>
        <FaUserAlt className="text-white text-xl" />
      </div>
      <div>
        <h3 className="text-white">Account</h3>
        <div className="flex items-center gap-1">
          {auth.authenticate ? (
            <Link
              to="/account/profile"
              className="text-gray text-sm transition hover:text-orange duration-300"
            >
              Profile
            </Link>
          ) : (
            <Link
              to="/new-account/register"
              className="text-gray text-sm transition hover:text-orange duration-300"
            >
              Register
            </Link>
          )}
          <span className="text-gray text-xs">or</span>{" "}
          {auth.authenticate ? (
            <Link
              onClick={logoutFunc}
              className="text-gray text-sm transition hover:text-orange duration-300"
            >
              Logout
            </Link>
          ) : (
            <Link
              to="/account/login"
              className="text-gray text-sm transition hover:text-orange duration-300"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
