import React from "react";
import styles from "./SuppliesHeader.module.scss";

const SuppliesHeader = () => {
  return (
    <div className={styles["supplies-header"]}>
      <h6 className={styles["supplies-header-breadcrumb"]}>Home/Insumos/Consultar</h6>
      <h1 className={styles["supplies-header-module-name"]}>Insumos-Lista</h1>
    </div>
  );
};

export default SuppliesHeader;
