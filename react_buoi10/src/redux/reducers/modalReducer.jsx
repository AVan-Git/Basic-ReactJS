//rxslice
import React from "react";

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
  submitForm: () => {
    alert('submit form');
  },
  
  
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
    setSubmitAction: (state, action) => {
        state.submitForm = action.payload
    },
   
  },
});
// exp nay de sử dụng theo cách 2
export const { setModalAction, setSubmitAction } = modalReducer.actions;
export default modalReducer.reducer;
