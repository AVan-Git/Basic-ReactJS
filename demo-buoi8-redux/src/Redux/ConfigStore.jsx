import { createStore, combineReducers } from "redux";
import {numberReducers}  from "./Reducers/numberReducers";
import { imgCarReducers } from "./Reducers/imgCarReducers";
import { commentReducers } from "./Reducers/commentReducers";
import burgerReducers from "./Reducers/burgerReducers";

const rootReducer = combineReducers({
  // Nơi chứa các state của ứng dụng

  number: numberReducers,
  stateCar: imgCarReducers,
  commentReducers: commentReducers,
  burgerReducers: burgerReducers
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
