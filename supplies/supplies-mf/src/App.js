import React from "react";
import SuppliesHeader from "./components/supplies-header/SuppliesHeader";
import TableContainer from "./components/table-container/TableContainer";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles["supplies-background"]}>
      <SuppliesHeader />
      <TableContainer />
    </div>
  );
}

export default App;
