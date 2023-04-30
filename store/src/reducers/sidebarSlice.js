import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: true,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebarState(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const sidebarActions = sidebarSlice.actions;

export default sidebarSlice.reducer;
