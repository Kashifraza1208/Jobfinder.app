import { createStore, combineReducers, applyMiddleware } from "redux";
// import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./authReducer";
import {
  applicationDataReducer,
  jobReducer,
  successPageReducer,
} from "./jobReducer";

const reducer = combineReducers({
  user: userReducer,
  job: jobReducer,
  data: applicationDataReducer,
  showSuccessPage: successPageReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
