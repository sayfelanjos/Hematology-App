import React from "react";
import styles from "./TableContainer.scss";
import TableButtonContainer from "./TableButtonContainer";
import TableSearchContainer from "./TableSearchContainer";
import TableRowsContainer from "./TableRowsContainer";
import TablePaginationContainer from "./TablePaginationContainer";

function TableContainer() {
  return (
    <div className={styles["table-container"]}>
      <TableButtonContainer></TableButtonContainer>
      <TableSearchContainer></TableSearchContainer>
      <TableRowsContainer></TableRowsContainer>
      <TablePaginationContainer></TablePaginationContainer>
    </div>
  );
}

export default TableContainer;
