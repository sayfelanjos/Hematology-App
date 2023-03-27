"use client";
import React from "react";
import styles from "./SuppliesHeader.module.scss";

const SuppliesHeader = () => {
  return (
    <div className={styles["supplies-header"]}>
      <h3 className={styles["supplies-header-breadcrumb"]}>
        Home/Insumos/Consultar
      </h3>
      <h1>Insumos-Lista</h1>
    </div>
  );
};

export default SuppliesHeader;
