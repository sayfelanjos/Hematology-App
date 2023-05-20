import React from "react";
import "./TableCell.scss";

const TableCell = ({ children }) => {
  return (
    <td className="table-cell">
      <span className="table-cell-content">{children}</span>
    </td>
  );
};

export default TableCell;
