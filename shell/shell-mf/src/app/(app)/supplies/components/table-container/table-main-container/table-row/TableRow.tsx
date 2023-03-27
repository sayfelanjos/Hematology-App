"use client";
import React from "react";
import styles from "./TableRow.module.scss";
import TableCell from "@/app/(app)/supplies/components/table-container/table-main-container/table-cell/TableCell";

function TableRow() {
  return (
    <tr className={styles["table-row-container"]}>
      <div>
        <input type="checkbox" />
        <label htmlFor=""></label>
      </div>
      <TableCell>
        <span>Código</span>
      </TableCell>
      <TableCell>
        <span>Código do Fabricante</span>
      </TableCell>
      <TableCell>
        <span>Fabricante</span>
      </TableCell>
      <TableCell>
        <span>Unidade</span>
      </TableCell>
      <TableCell>
        <span>Lote</span>
      </TableCell>
      <TableCell>
        <span>Disponível</span>
      </TableCell>
      <TableCell>
        <span>Data de Entrada</span>
      </TableCell>
      <TableCell>
        <span>Data de Validade</span>
      </TableCell>
      <TableCell>
        <span>Condição</span>
      </TableCell>
    </tr>
  );
}

export default TableRow;
