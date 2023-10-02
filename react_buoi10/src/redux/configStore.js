import { configureStore } from "@reduxjs/toolkit";
import numberReducer from "./reducers/numberReducer";
import facebookReducer from "./reducers/facebookReducer";
export const store = configureStore({
  reducer: {
    number: numberReducer,
    facebookReducer: facebookReducer, 
  },
});
