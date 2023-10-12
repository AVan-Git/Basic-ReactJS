//rxslice

import { createSlice } from "@reduxjs/toolkit";

// hai cach khai bao
const ComponentDefault = (props) => {
  return <div>default value</div>;
};

const initialState = {
  title: "title",
  Component: (props) => {
    return <div>default value</div>;
  },
  Component2: ComponentDefault,
};

const modalReducer = createSlice({
  name: "modalReducer",
  initialState,
  reducers: {
    setModalAction: (state, action) => {
      //action: Component, title
      // lay data tu action
      let { Component, title } = action.payload;

      state.Component = Component;
      state.title = title;
    },
  },
});
// exp nay de sử dụng theo cách 2
export const { setModalAction } = modalReducer.actions;
export default modalReducer.reducer;
