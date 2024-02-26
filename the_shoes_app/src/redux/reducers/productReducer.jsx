import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { http } from "../../utill/config";

const initialState = {
  arrProduct: [],
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    setArrProduct: (state, action) => {
      state.arrProduct = action.payload;
    },
  },
});

export const {
  setArrProduct,
} = productReducer.actions;

export default productReducer.reducer;

//==================== { action thunk (api)} =====================

export const getProductApi = () => {
  return async (dispatch) => {
    try {
      const result = await http.get("/product")

      dispatch(setArrProduct(result.data.content))
    } catch (error) {
      console.log("🚀 ~ getProductApi ~ error:", error);
    }
  };
};
