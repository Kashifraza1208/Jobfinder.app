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
} from "./jobConstants";

const initialState = {
  jobs: [],

  loading: false,
  error: null,
};

export const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_JOBS_SUCCESS:
      return {
        ...state,
        jobs: action.payload,
        loading: false, // Ensure that action.payload is an array of job listings
      };
    case FETCH_JOBS_FAIL:
      return { ...state, jobs: [], loading: false, error: action.payload };
    default:
      return state;
  }
};

export const applicationDataReducer = (state = { data: {} }, action) => {
  switch (action.type) {
    case SET_APPLICATION_DATA_REQUEST:
      return { ...state, loading: true, error: null };
    case SET_APPLICATION_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload, // Ensure that action.payload is an array of job listings
      };
    case SET_APPLICATION_DATA_FAIL:
      return { ...state, data: {}, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const successPageReducer = (
  state = { showSuccessPage: false },
  action
) => {
  switch (action.type) {
    case TOGGLE_SUCCESS_PAGE_REQUEST:
      return { ...state, loading: true, error: null };
    case TOGGLE_SUCCESS_PAGE_SUCCESS:
      return {
        ...state,
        showSuccessPage: action.payload, // Ensure that action.payload is an array of job listings
      };
    case TOGGLE_SUCCESS_PAGE_FAIL:
      return {
        ...state,
        showSuccessPage: false,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
