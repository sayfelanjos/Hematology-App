import React from "react";
import styles from "./Supplies.module.scss";
const SuppliesModule = React.lazy(() => import("supplies/SuppliesModule"));

const Supplies = () => {
  return (
    <div className={styles["supplies-background"]}>
      <SuppliesModule />
    </div>
  );
};

export default Supplies;
