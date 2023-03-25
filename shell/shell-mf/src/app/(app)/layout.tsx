"use client";
import React from "react";
// These styles apply to every route in the application
import "../globals.scss";
import Sidebar from "@/app/(app)/components/sidebar/Sidebar";
import Navbar from "@/app/(app)/components/navbar/Navbar";
import styles from "./layout.module.scss";

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
