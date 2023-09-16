import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  SET_AUTH,
} from "./authConstant";

// authAction.js
export const login = (userData) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    dispatch({ type: LOGIN_SUCCESS, payload: userData });

    localStorage.setItem("authInfo", JSON.stringify(userData));
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};

// Register
export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    dispatch({ type: REGISTER_USER_SUCCESS, payload: userData });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const setAuthentication = (authInfo) => ({
  type: SET_AUTH,
  payload: authInfo,
});

export const clearAuthentication = () => ({
  type: SET_AUTH,
  payload: null, // You can set the user to null or an initial state here
});
// Thunk to initialize authentication state from local storage
export const initializeAuthentication = () => (dispatch) => {
  const storedAuthInfo = localStorage.getItem("authInfo");

  if (storedAuthInfo) {
    const authInfo = JSON.parse(storedAuthInfo);
    dispatch(setAuthentication(authInfo));
  }
};
