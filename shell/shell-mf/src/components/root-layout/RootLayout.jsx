import React from "react";
import componentStyles from "./RootLayout.module.scss";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import ConfigurationBar from "../configuration-bar/ConfigurationBar";
import { useAppStore } from "../../app-store/app-store";
import { Outlet } from "@tanstack/react-location";

const RootLayout = () => {
  const configurationBarIsOpen = useAppStore((state) => state.configurationBarIsOpen);
  return (
    <>
      <div className={componentStyles["root-layout-container"]}>
        <Sidebar />
        {configurationBarIsOpen && <ConfigurationBar />}
        <div className={componentStyles["root-layout-main"]}>
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
