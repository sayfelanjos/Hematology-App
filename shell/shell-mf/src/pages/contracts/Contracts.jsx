import React from "react";
import styles from "./Contracts.module.scss";
const CustomersAndSuppliersModule = React.lazy(() => import("contracts/ContractsModule"));

const Contracts = () => {
  return (
    <div className={styles["contracts-background"]}>
      <CustomersAndSuppliersModule />
    </div>
  );
};

export default Contracts;
