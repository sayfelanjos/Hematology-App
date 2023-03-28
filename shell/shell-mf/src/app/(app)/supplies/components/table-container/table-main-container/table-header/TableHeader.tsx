"use client";
import React from "react";
import styles from "./TableHeader.module.scss";
import TableCell from "@/app/(app)/supplies/components/table-container/table-main-container/table-cell/TableCell";

const TableHeader = () => {
  return (
    <thead className={styles["table-header"]}>
      <tr className={styles["table-header-row"]}>
        <input type="checkbox" />
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
    </thead>
  );
};

export default TableHeader;
