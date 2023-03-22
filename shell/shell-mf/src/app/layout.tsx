import React from "react";
// These styles apply to every route in the application
import "./globals.scss";
import styles from "./layout.module.scss";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <section className={styles["root-background"]}>
          {/* Include shared UI here e.g. a header or sidebar */}
          {children}
        </section>
      </body>
    </html>
  );
};

export default RootLayout;
