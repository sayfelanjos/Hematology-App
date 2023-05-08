import React from "react";
<<<<<<< HEAD
import { Outlet } from "react-router-dom";
import styles from "./RootLayout.module.scss";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";

const RootLayout = () => {
  return (
    <>
      <div className={styles["root-layout-container"]}>
        <Sidebar />
        <div className={styles["root-layout-main"]}>
=======
import componentStyles from "./RootLayout.module.scss";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import ConfigurationBar from "../configuration-bar/ConfigurationBar";
import { useAppStore } from "../../store/store";
import { Outlet } from "@tanstack/react-location";

const RootLayout = () => {
  const configurationBarIsOpen = useAppStore((state) => state.configurationBarIsOpen);
  return (
    <>
      <div className={componentStyles["root-layout-container"]}>
        <Sidebar />
        {configurationBarIsOpen && <ConfigurationBar />}
        <div className={componentStyles["root-layout-main"]}>
>>>>>>> b4e4f22 (Sync routes across Micro Frontends)
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
