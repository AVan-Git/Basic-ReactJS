//rxslice

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    arrProduct: [
      {id:1, name:'Shoe Nike', price: 1230, image:'https://picsum.photos/200/200'},
    ],
    productDetail:{
      id:1, name:'Shoe Nike', price: 1230, image:'https://picsum.photos/200/200'
    }
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
    },
    setProductDetail: (state, action) => {
      const itemDetail = action.payload;
      state.productDetail = itemDetail;
    }
  }
});
// exp nay de sử dụng theo cách 2
export const { setArrProductAction, setProductDetail  } = productReducer.actions;
export default productReducer.reducer;




// --------------------  Action Api - action loai 2 -------------------

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

// closure function
export const getProductDetailById_Api = (idProduct) => {
  return async  dispatch => {
    // logic api goi tai day
    try {
      const result = await axios({
        url:`https://shop.cyberlearn.vn/api/Product/getbyid?id=${idProduct}`,
        method:'GET'
      })
      // dua data gui len action loai 1 dua len reducer
      const actionLoai1 = setProductDetail(result.data.content)

      dispatch(actionLoai1);
    } catch (error) {
      console.log("🚀 ~ file: productReducer.jsx:65 ~ error:", error)
      
    }
  }
}
