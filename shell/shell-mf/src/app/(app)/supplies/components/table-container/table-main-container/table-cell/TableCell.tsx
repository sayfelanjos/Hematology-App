"use client";
import React from "react";
import styles from "./TableCell.module.scss";

const TableCell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles["table-cell-container"]}>
      {children}
      <td className={styles["table-cell"]}></td>
    </div>
  );
};

export default TableCell;
