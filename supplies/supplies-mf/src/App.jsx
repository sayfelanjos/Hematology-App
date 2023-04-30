import React from "react";
import AppHeader from "./components/AppHeader";
import TableContainer from "./components/TableContainer";
import componentStyles from "./App.module.scss";

function App() {
  return (
    <div className={componentStyles["supplies-container"]}>
      <AppHeader />
      <TableContainer />
    </div>
  );
}

export default App;
