import { configureStore } from "@reduxjs/toolkit";
import numberReducer from "./reducers/numberReducer";
import facebookReducer from "./reducers/facebookReducer";
import productReducer from "./reducers/productReducer";
export const store = configureStore({
  reducer: {
    number: numberReducer,
    facebookReducer: facebookReducer, 
    productReducer: productReducer,
  },
});
