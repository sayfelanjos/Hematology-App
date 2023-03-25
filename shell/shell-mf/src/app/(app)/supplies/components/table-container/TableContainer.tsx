"use client";
import React from "react";
import styles from "./TableContainer.module.scss";
import TableButtonContainer from "@/app/(app)/supplies/components/table-container/table-button-container/TableButtonContainer";
import TablePaginationContainer from "@/app/(app)/supplies/components/table-container/table-pagination-container/TablePaginationContainer";
import TableMainContainer from "@/app/(app)/supplies/components/table-container/table-main-container/TableMainContainer";

function TableContainer() {
  return (
    <div className={styles["table-container"]}>
      <TableButtonContainer></TableButtonContainer>
      <TableMainContainer></TableMainContainer>
      <TablePaginationContainer></TablePaginationContainer>
    </div>
  );
}

export default TableContainer;
