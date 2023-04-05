import React, { Suspense } from "react";
import styles from "./Supplies.module.scss";
const SuppliesModule = React.lazy(() => import("supplies/SuppliesModule"));

const Supplies = () => {
  return (
    <div className={styles["supplies-background"]}>
      <Suspense>
        <SuppliesModule />
      </Suspense>
    </div>
  );
};

export default Supplies;
