import React from "react";
import styles from "./Table.module.scss";
import TableButtonContainer from "./TableButtonContainer";
import TableSearchContainer from "./TableSearchContainer";
import TableMainContainer from "./TableMainContainer";
import TablePaginationContainer from "./TablePaginationContainer";

function Table() {
  return (
    <div className={styles["table-container"]}>
      <TableButtonContainer></TableButtonContainer>
      <TableSearchContainer></TableSearchContainer>
      <TableMainContainer></TableMainContainer>
      <TablePaginationContainer></TablePaginationContainer>
    </div>
  );
}

export default Table;
