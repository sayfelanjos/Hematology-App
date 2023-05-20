import React from "react";
import styles from "./TableRow.scss";
import TableCell from "./TableCell";

function TableRow() {
  return (
    <tr className={styles["table-row-container"]}>
      <input className={styles["table-checkbox"]} type="checkbox" />
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
