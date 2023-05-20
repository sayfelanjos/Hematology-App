import React from "react";
import styles from "./RootLayout.module.scss";
import { Outlet } from "@tanstack/react-location";

const RootLayout = () => {
  return (
    <div className={styles["background"]}>
      <Outlet />
    </div>
  );
};

export default RootLayout;
