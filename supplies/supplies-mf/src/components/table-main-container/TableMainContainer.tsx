import React from "react";
import styles from "./TableMainContainer.module.scss";
import TableHeader from "../table-header/TableHeader";
import TableRow from "../table-row/TableRow";

function TableMainContainer() {
  return (
    <div className={styles["table-container"]}>
      <table className={styles["table-rows"]}>
        <TableHeader></TableHeader>
        <tbody>
          <TableRow></TableRow>
          <TableRow></TableRow>
          <TableRow></TableRow>
          <TableRow></TableRow>
          <TableRow></TableRow>
          <TableRow></TableRow>
          <TableRow></TableRow>
          <TableRow></TableRow>
          <TableRow></TableRow>
          <TableRow></TableRow>
        </tbody>
      </table>
    </div>
  );
}

export default TableMainContainer;
