import { configureStore } from "@reduxjs/toolkit";
import numberReducer from "./reducers/numberReducer";
import facebookReducer from "./reducers/facebookReducer";
import productReducer from "./reducers/productReducer";
import userReducer from "./reducers/userReducer";
import modalReducer from "./reducers/modalReducer";
export const store = configureStore({
  reducer: {
    number: numberReducer,
    facebookReducer: facebookReducer, 
    productReducer: productReducer,
    userReducer : userReducer,
    modalReducer: modalReducer, 
  },
});
