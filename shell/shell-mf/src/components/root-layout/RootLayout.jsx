import React from "react";
import { Outlet } from "react-router-dom";
import componentStyles from "./RootLayout.module.scss";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import Configbar from "../configbar/ConfigurationBar";
import { useAppStore } from "../../store/store";

const RootLayout = () => {
  const configbarIsOpen = useAppStore((state) => state.configbarIsOpen);
  return (
    <>
      <div className={componentStyles["root-layout-container"]}>
        <Sidebar />
        {configbarIsOpen && <Configbar />}
        <div className={componentStyles["root-layout-main"]}>
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
