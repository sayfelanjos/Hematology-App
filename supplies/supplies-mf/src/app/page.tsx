import React from "react";
import styles from "./page.module.scss";
import dynamic from "next/dynamic";
import SuppliesHeader from "../components/supplies-header/SuppliesHeader";
import TableContainer from "../components/table-container/TableContainer";

const SuppliesModule = () => {
  return (
    <div className={styles["supplies-background"]}>
      <SuppliesHeader></SuppliesHeader>
      <TableContainer></TableContainer>
    </div>
  );
};

export default SuppliesModule;
