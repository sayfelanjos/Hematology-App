"use client";
import React from "react";
import styles from "./layout.module.scss";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles["login-layout-container"]}>{children}</div>;
};

export default LoginLayout;
