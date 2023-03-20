import React from "react";
// These styles apply to every route in the application
import "./globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";
import styles from "./layout.module.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <section className={styles["root-background"]}>
          {/* Include shared UI here e.g. a header or sidebar */}
          <Sidebar></Sidebar>
          <div className={styles["layout-main-content"]}>
            <Navbar></Navbar>
            {children}
          </div>
        </section>
      </body>
    </html>
  );
};

export default RootLayout;
