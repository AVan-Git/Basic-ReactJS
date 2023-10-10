//rxslice

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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




// --------------------  Action Api-------------------

export const getProductApi = async (dispatch2) => {
  //su ly api o day
  try {
    let result = await axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "GET",
    });
    // 3. dispatch len redux
    /**
     * action = {
     *  type:'productReducer/setArrProductAction',
     *  payload:result.data.content
     * }
     */
    const action = setArrProductAction(result.data.content);

    dispatch2(action);
  } catch (error) {
    console.log("🚀 ~ file: HomeReducer.jsx:62 ~ action ~ error:", error);
  }
};
