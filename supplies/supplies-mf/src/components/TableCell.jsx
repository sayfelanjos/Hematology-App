import React from "react";
import styles from "./TableCell.scss";

const TableCell = ({ children }) => {
  return (
    <td className={styles["table-cell"]}>
      <span className={styles["table-cell-content"]}>{children}</span>
    </td>
  );
};

export default TableCell;
