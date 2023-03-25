"use client";
import React from "react";
import styles from "./TableRow.module.scss";
import TableCell from "@/app/(app)/supplies/components/table-container/table-main-container/table-cell/TableCell";

function TableRow() {
  return (
    <div className={styles["table-row-container"]}>
      <TableCell></TableCell>
    </div>
  );
}

export default TableRow;
