import { createSlice, createAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  buttonState: "dashboard",
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setButtonState(state, action) {
      state.buttonState = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.name,
      };
    },
  },
});

export const { setButtonState } = sidebarSlice.actions;

export const selectButtonState = (state) => state.name.buttonState;

export default sidebarSlice.reducer;
