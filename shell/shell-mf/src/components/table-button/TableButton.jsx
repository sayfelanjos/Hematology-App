import React from "react";
import styles from "./TableButton.module.scss";

const TableButton = () => {
  return (
    <button className={styles["table-button"]}>
      <span className={styles["table-button-content"]}>Adicionar Insumo</span>
    </button>
  );
};

export default TableButton;
