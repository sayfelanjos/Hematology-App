import React from "react";
import "./TableHeader.scss";
import TableCell from "./TableCell";

const TableHeader = () => {
  return (
    <thead className="table-header">
      <tr className="table-header-row">
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
