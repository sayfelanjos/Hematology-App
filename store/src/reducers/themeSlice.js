import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: "blue",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setColorTo(state, action) {
      state.color = action.payload;
    },
  },
});

export const themeActions = themeSlice.actions;

export default themeSlice.reducer;
