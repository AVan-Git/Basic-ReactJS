//rxslice

import { createSlice } from "@reduxjs/toolkit";

const initialState = 1;

const zReducer = createSlice({
  name: "zReducer",
  initialState,
  reducers: {
    changeNumber: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
// exp nay de sử dụng theo cách 2
export const { changeNumber } = zReducer.actions;
export default zReducer.reducer;
