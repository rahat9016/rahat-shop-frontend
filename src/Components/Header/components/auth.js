import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Auth = () => {
  return (
    <div className="flex items-center gap-3">
      <div>
        <FaUserAlt className="text-white text-xl" />
      </div>
      <div>
        <h3 className="text-white">Account</h3>
        <div className="flex items-center gap-1">
          <Link
            to="/register"
            className="text-gray text-sm transition hover:text-orange duration-300"
          >
            Register
          </Link>{" "}
          <span className="text-gray text-xs">or</span>{" "}
          <Link
            to="/login"
            className="text-gray text-sm transition hover:text-orange duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Auth;
