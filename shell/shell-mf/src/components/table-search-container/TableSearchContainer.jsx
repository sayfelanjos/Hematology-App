import React from "react";
import styles from "./TableSearchContainer.module.scss";

function TableSearchContainer() {
  return (
    <div className={styles["table-search-container"]}>
      <input className={styles["table-search-input"]} type={"search"}></input>
      <div className={styles["table-search-dropdown"]}></div>
    </div>
  );
}

export default TableSearchContainer;
