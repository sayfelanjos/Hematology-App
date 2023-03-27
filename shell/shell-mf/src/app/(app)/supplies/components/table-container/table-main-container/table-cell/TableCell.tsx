"use client";
import React from "react";
import styles from "./TableCell.module.scss";

const TableCell = ({ children }: { children: React.ReactNode }) => {
  return (
    // <div className={styles["table-cell-container"]}>    </div>
    <th className={styles["table-cell"]}> {children}</th>
  );
};

export default TableCell;
