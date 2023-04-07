import React from "react";
import styles from "./CustomersAndSuppliers.module.scss";
const CustomersAndSuppliersModule = React.lazy(() =>
  import("customers_and_suppliers/CustomersAndSuppliersModule"),
);

const CustomersAndSuppliers = () => {
  return (
    <div className={styles["customers-and-suppliers-background"]}>
      <CustomersAndSuppliersModule />
    </div>
  );
};

export default CustomersAndSuppliers;
