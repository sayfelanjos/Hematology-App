import React from "react";
import styles from "./TableSearchContainer.scss";

function TableSearchContainer() {
  return (
    <div className={styles["table-search-supply-container"]}>
      <input className={styles["table-search-supply-input"]} type={"search"}></input>
      <div className={styles["table-search-supply-dropdown"]}></div>
    </div>
  );
}

export default TableSearchContainer;
