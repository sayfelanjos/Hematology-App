"use client";
import React from "react";
import styles from "./TableCell.module.scss";
import * as child_process from "child_process";

const TableCell = () => {
  return (
    <div className={styles["table-cell-container"]}>
      <td className={styles["table-cell"]}></td>
    </div>
  );
};

export default TableCell;
