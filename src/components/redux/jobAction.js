import axios from "axios";
import {
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAIL,
  SET_APPLICATION_DATA_REQUEST,
  SET_APPLICATION_DATA_SUCCESS,
  SET_APPLICATION_DATA_FAIL,
  TOGGLE_SUCCESS_PAGE_REQUEST,
  TOGGLE_SUCCESS_PAGE_SUCCESS,
  TOGGLE_SUCCESS_PAGE_FAIL,
} from "./jobConstants.js";

export const fetchJobs = (language) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_JOBS_REQUEST });
    const apiKey = "fd350e58e516c45273e7422fbaba87be";
    const searchParams = {
      app_id: "aa15a99c",
      app_key: apiKey,
      what: language,
      "content-type": "application/json",
    };
    const response = await axios.get(
      "https://api.adzuna.com/v1/api/jobs/us/search",
      {
        params: searchParams,
      }
    );

    dispatch({ type: FETCH_JOBS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_JOBS_FAIL, payload: error.message });
  }
};

export const setApplicationData = (userData) => async (dispatch) => {
  try {
    dispatch({ type: SET_APPLICATION_DATA_REQUEST });

    dispatch({ type: SET_APPLICATION_DATA_SUCCESS, payload: userData });
  } catch (error) {
    dispatch({
      type: SET_APPLICATION_DATA_FAIL,
      payload: error.message,
    });
  }
};

export const toggleSuccessPage = (showSuccessPage) => async (dispatch) => {
  try {
    dispatch({ type: TOGGLE_SUCCESS_PAGE_REQUEST });

    dispatch({ type: TOGGLE_SUCCESS_PAGE_SUCCESS, payload: showSuccessPage });
  } catch (error) {
    dispatch({
      type: TOGGLE_SUCCESS_PAGE_FAIL,
      payload: error.message,
    });
  }
};
