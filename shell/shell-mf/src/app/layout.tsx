"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "@/store/store";
// These styles apply to every route in the application
import "./globals.scss";
import styles from "./layout.module.scss";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title></title>
      </head>
      <body>
        <Provider store={store}>
          <section className={styles["root-background"]}>
            {/* Include shared UI here e.g. a header or sidebar */}
            {children}
          </section>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
