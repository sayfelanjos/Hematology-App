import React from "react";
import styles from "./TableRowsContainer.scss";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

function TableRowsContainer() {
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

export default TableRowsContainer;
