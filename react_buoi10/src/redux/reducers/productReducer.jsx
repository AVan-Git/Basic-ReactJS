//rxslice

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    arrProduct: [
      {id:1, name:'Shoe Nike', price: 1230, image:'https://picsum.photos/200/200'},
    ]
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    setArrProductAction: (state,action) => {
      //lay du lieu tu payload componnent dispatch len
      const arrProduct = action.payload;
      //cạp nhật lại state
      state.arrProduct = arrProduct;
    }
  }
});
// exp nay de sử dụng theo cách 2
export const { setArrProductAction } = productReducer.actions;
export default productReducer.reducer;
