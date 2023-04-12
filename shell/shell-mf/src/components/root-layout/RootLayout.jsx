import React from "react";
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
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
