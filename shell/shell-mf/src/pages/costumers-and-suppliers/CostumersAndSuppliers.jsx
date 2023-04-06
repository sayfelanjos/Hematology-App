import React from "react";
import styles from "./CostumersAndSuppliers.module.scss";
// const CostumersAndSuppliersModule = React.lazy(() =>
//   import("costumers-and-suppliers/CostumersAndSuppliersModuleModule"),
// );

const CostumersAndSuppliers = () => {
  return (
    <div className={styles["costumers-and-suppliers-background"]}>
      {/*<CostumersAndSuppliersModule />*/}
    </div>
  );
};

export default CostumersAndSuppliers;
