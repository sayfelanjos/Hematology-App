"use client";
import React from "react";
import styles from "./TableMainContainer.module.scss";
import TableHeader from "@/app/(app)/supplies/components/table-container/table-main-container/table-header/TableHeader";
import TableSearchContainer from "@/app/(app)/supplies/components/table-container/table-search-container/TableSearchContainer";
import TableRow from "@/app/(app)/supplies/components/table-container/table-main-container/table-row/TableRow";

function TableMainContainer() {
  return (
    // <div className={styles["table-main-container"]}>    </div>
    <table className={styles["table-main-container"]}>
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
  );
}

export default TableMainContainer;
