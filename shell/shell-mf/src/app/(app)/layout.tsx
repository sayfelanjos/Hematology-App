import React from "react";
// These styles apply to every route in the application
import "../globals.scss";
import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";
import styles from "./layout.module.scss";
// import { store } from "./store";
import { Provider } from "react-redux";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles["root-background"]}>
      <Sidebar></Sidebar>
      <div className={styles["layout-main-content"]}>
        <Navbar></Navbar>
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
