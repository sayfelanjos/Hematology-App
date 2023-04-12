import React from "react";
import AppHeader from "@sayfelanjos/hematology-app/libs/AppHeader";
import TableContainer from "@sayfelanjos/hematology-app/libs/TableContainer";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles["supplies-background"]}>
      <AppHeader />
      <TableContainer />
    </div>
  );
}

export default App;
