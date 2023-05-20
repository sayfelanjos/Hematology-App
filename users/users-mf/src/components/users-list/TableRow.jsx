import React from "react";
import "./TableRow.scss";
import TableCell from "./TableCell";

function TableRow() {
  return (
    <tr className="table-row-container">
      <input className="table-checkbox" type="checkbox" />
      <TableCell>Código</TableCell>
      <TableCell>Código do Fabricante</TableCell>
      <TableCell>Fabricante</TableCell>
      <TableCell>Unidade</TableCell>
      <TableCell>Lote</TableCell>
      <TableCell>Disponível</TableCell>
      <TableCell>Data de Entrada</TableCell>
      <TableCell>Data de Validade</TableCell>
      <TableCell>Condição</TableCell>
    </tr>
  );
}

export default TableRow;
