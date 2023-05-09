import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pathname: "/",
};

export const routeSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    updateRoute(state, action) {
      state.pathname = action.payload;
    },
  },
});

export const routeActions = routeSlice.actions;

export default routeSlice.reducer;
