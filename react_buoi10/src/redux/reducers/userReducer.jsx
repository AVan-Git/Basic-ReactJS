//rxslice

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  ACCESS_TOKEN,
  USER_LOGIN,
  getStore,
  getStoreJSON,
  setCookie,
  setStore,
  setStoreJSON,
} from "../../unit/config";
import { history } from "../../index";

const initialState = {
  // userLogin: {
  //     email: '',
  //     accessToken: ''
  // },
  userLogin: getStoreJSON(USER_LOGIN),
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setUserLoginAction: (state, action) => {
      let userLogin = action.payload;
      // state.userLogin = {...state.userLogin, email:emailLogin}
      state.userLogin = userLogin;
    },
  },
});
// exp nay de sử dụng theo cách 2
export const { setUserLoginAction } = userReducer.actions;
export default userReducer.reducer;

// ----------------- Action Call Api --------------

export const signinApi = (userLogin) => {
  // userLogin = {email:'', password:''}

  return async (dispatch2) => {
    try {
      let result = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/signin",
        method: "POST",
        data: userLogin,
      });

      console.log(result);
      // thanh cong
      // luu lai token 2 cho
      setStore(ACCESS_TOKEN, result.data.content.accessToken);
      setCookie(result.data.content.accessToken, 30, ACCESS_TOKEN);

      // luu lai email
      setStoreJSON(USER_LOGIN, result.data.content);

      // dua len reducer
      const action = setUserLoginAction(result.data.content);
      dispatch2(action);

      // dang nhập thanh cong thi chuyển den trang profile

      history.push('/hook-profile')

    } catch (error) {
      console.log("🚀 ~ file: userReducer.jsx:34 ~ signinApi ~ error:", error);
      // DNhap khogn thanh cong thi quay lai login
      alert('Đăng nhập không thành công. Sai thông tin')
      history.push('/login')
    }
  };
};

// call api getProfile
export const getProfileApi = () => {
  return async (dispatch2) => {
    try {
      let result = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/getProfile",
        method: "POST",
        // data: //dữ liệu người dùng nhập, chọn, thay đổi
        // headers: {} //1 lượng data để dev sử lý
        headers: {
          Authorization: `Bearer ${getStore(ACCESS_TOKEN)}`,
        },
      });

      // tao action creator  => dispatch len redux
      const action = setUserLoginAction(result.data.content);
      dispatch2(action);
    } catch (error) {
      console.log(
        "🚀 ~ file: userReducer.jsx:73 ~ getProfileApi ~ error:",
        error
      );
      // khi chua dang nhap thi phai TB Dang nhap moi duco sd trang
      alert('Chưa đăng nhập hệ thống !!');
      // tra ve trang login
      history.push('/login')
      
       
    }
  };
};
