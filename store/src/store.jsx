import React from "react";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistReducer, persistStore } from "redux-persist";
import { useSelector, useDispatch } from "react-redux";
import thunk from "redux-thunk";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import themeSlice from "./reducers/themeSlice";
import sidebarSlice from "./reducers/sidebarSlice";
import { themeActions } from "./reducers/themeSlice";
import { sidebarActions } from "./reducers/sidebarSlice";

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
  theme: themeSlice,
  sidebar: sidebarSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);

export function useThemeStore() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return {
    theme,
    setColorTo: (newColor) => dispatch(themeActions.setColorTo(newColor)),
  };
}

export function useSidebarStore() {
  const sidebar = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  return {
    sidebar,
    toggleSidebarState: () => dispatch(sidebarActions.toggleSidebarState()),
  };
}

export function StoreProvider({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
