import React from "react";
import styles from "./TableContainer.module.scss";
import TableButtonContainer from "../table-button-container/TableButtonContainer";
import TableSearchContainer from "../table-search-container/TableSearchContainer";
import TableMainContainer from "../table-main-container/TableMainContainer";
import TablePaginationContainer from "../table-pagination-container/TablePaginationContainer";

function TableContainer() {
  return (
    <div className={styles["table-container"]}>
      <TableButtonContainer></TableButtonContainer>
      <TableSearchContainer></TableSearchContainer>
      <TableMainContainer></TableMainContainer>
      <TablePaginationContainer></TablePaginationContainer>
    </div>
  );
}

export default TableContainer;
