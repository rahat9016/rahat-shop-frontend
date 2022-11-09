import { Signing, Signup } from "../action/constnace";

const initialState = {
  user: null,
  message: "",
  errors: null,
  loading: false,
  status: null,
  error: null,
  authenticate: false,
  authenticating: false,
  token: "",
};
export const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case Signup.SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Signup.SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        message: action.payload.message,
      };
    case Signup.SIGNUP_FAILURE:
      return {
        ...state,
        errors: action.payload.errors,
      };
    case Signing.LOGIN_REQUEST:
      return {
        ...state,
        authenticating: true,
      };
    case Signing.LOGIN_SUCCESS:
      return {
        ...state,
        authenticate: true,
        authenticating: false,
        user: action.payload.user,
        token: action.payload.token,
      };
    case Signing.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
