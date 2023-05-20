import React from "react";
import componentStyles from "../../App.scss";
import AppHeader from "../../components/AppHeader";
import TableContainer from "../../components/TableContainer";

function NewSupply() {
  return (
    <div className={componentStyles["supplies-container"]}>
      <AppHeader />
      <TableContainer />
    </div>
  );
}

export default NewSupply;
