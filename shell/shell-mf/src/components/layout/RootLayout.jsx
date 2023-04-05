import React from "react";
import "../../globals.scss";
import styles from "./layout.module.scss";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className={styles["layout-container"]}>
      <Sidebar></Sidebar>
      <div className={styles["layout-main"]}>
        <Navbar></Navbar>
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
