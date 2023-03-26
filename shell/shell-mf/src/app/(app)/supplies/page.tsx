"use client";
import React from "react";
import TableContainer from "./components/table-container/TableContainer";
import styles from "./page.module.scss";
import SuppliesHeader from "@/app/(app)/supplies/components/supplies-header/SuppliesHeader";

const Supplies = () => {
  return (
    <div className={styles["supplies-background"]}>
      <SuppliesHeader></SuppliesHeader>
      <TableContainer></TableContainer>
    </div>
  );
};

export default Supplies;
