import React from "react";
import styles from "./TableButtonContainer.module.scss";
import TableButton from "./TableButton";

function TableButtonContainer() {
  return (
    <div className={styles["table-button-container"]}>
      <TableButton></TableButton>
    </div>
  );
}

export default TableButtonContainer;
