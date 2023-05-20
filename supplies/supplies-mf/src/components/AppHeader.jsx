import React from "react";
import styles from "./AppHeader.scss";

const AppHeader = () => {
  return (
    <div className={styles["supplies-header"]}>
      <h6 className={styles["supplies-header-breadcrumb"]}>Home/Insumos/Consultar</h6>
      <h1 className={styles["supplies-header-module-name"]}>Insumos-Lista</h1>
    </div>
  );
};

export default AppHeader;
