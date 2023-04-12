import React from "react";
import styles from "./TableContainer.module.scss";
import TableButtonContainer from "./TableButtonContainer";
import TableSearchContainer from "./TableSearchContainer";
import TableMainContainer from "./TableMainContainer";
import TablePaginationContainer from "./TablePaginationContainer";

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
