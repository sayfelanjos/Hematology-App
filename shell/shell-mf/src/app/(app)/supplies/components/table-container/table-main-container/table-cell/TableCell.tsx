"use client";
import React from "react";
import styles from "./TableCell.module.scss";

const TableCell = ({ children }: { children: React.ReactNode }) => {
  return <td className={styles["table-cell"]}> {children}</td>;
};

export default TableCell;
