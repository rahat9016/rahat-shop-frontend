import { Logout, Signing, Signup } from "./constnace";
import axios from "../helpers/axios";
export const signing = (user) => {
  return async (dispatch) => {
    dispatch({
      type: Signing.LOGIN_REQUEST,
    });
    await axios
      .post("/user/signing", user)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          const { token, user } = res.data;
          console.log(user);
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
          dispatch({
            type: Signing.LOGIN_SUCCESS,
            payload: {
              token,
              user,
            },
          });
        }
      })
      .catch((error) => {
        console.log({
          type: Signing.LOGIN_FAILURE,
          payload: {
            error: error.response.data,
          },
        });
      });
  };
};
export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: Signing.LOGIN_SUCCESS,
        payload: {
          user,
          token,
        },
      });
    } else {
      dispatch({
        type: Signing.LOGIN_FAILURE,
        payload: {
          error: "Failed to login",
        },
      });
    }
  };
};
export const signup = (user) => {
  return async (dispatch) => {
    dispatch({
      type: Signup.SIGNUP_REQUEST,
    });
    await axios
      .post("/user/signup", { ...user })
      .then((res) => {
        dispatch({
          type: Signup.SIGNUP_SUCCESS,
          payload: {
            message: res.data.message,
            user: res.data.user,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: Signup.SIGNUP_FAILURE,
          payload: {
            errors: error.response.data.errors,
          },
        });
      });
  };
};
export const logout = (user) => {
  return async (dispatch) => {
    dispatch({
      type: Logout.LOGOUT_REQUEST,
    });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
    dispatch({
      type: Logout.LOGOUT_SUCCESS,
    });
  };
};
