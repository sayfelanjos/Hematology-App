import React from "react";
import "./TableMainContainer.scss";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

function TableMainContainer() {
  return (
    <div className="table-container">
      <table className="table-rows">
        <TableHeader></TableHeader>
        <tbody>
          <TableRow></TableRow>
          <TableRow></TableRow>
          <TableRow></TableRow>
          <TableRow></TableRow>
          <TableRow></TableRow>
          <TableRow></TableRow>
          <TableRow></TableRow>
          <TableRow></TableRow>
          <TableRow></TableRow>
          <TableRow></TableRow>
        </tbody>
      </table>
    </div>
  );
}

export default TableMainContainer;
