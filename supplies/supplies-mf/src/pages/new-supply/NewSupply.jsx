import React from "react";
import componentStyles from "../../App.module.scss";
import AppHeader from "../../components/AppHeader";
import TableContainer from "../../components/TableContainer";
import { Outlet } from "@tanstack/react-location";

function NewSupply() {
  return (
    <div className={componentStyles["supplies-container"]}>
      <AppHeader />
      <TableContainer />
      <Outlet />
    </div>
  );
}

export default NewSupply;
