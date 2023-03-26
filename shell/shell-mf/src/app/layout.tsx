"use client";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/store/store";
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
          <PersistGate persistor={persistor} loading={"Loading..."}>
            <section className={styles["root-background"]}>
              {/* Include shared UI here e.g. a header or sidebar */}
              {children}
            </section>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
