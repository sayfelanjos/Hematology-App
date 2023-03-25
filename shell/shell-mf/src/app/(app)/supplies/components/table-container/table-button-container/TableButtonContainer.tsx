"use client";
import React from "react";
import styles from "./TableButtonContainer.module.scss";
import TableButton from "@/app/(app)/supplies/components/table-container/table-button-container/table-button/TableButton";

function TableButtonContainer() {
  return (
    <div className={styles["table-button-container"]}>
      <TableButton></TableButton>
    </div>
  );
}

export default TableButtonContainer;
