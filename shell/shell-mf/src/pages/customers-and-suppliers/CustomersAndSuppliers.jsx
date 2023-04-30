import React from "react";
import styles from "./CustomersAndSuppliers.module.scss";
import themeColors from "../../styles/themes/_themes.module.scss";
const CustomersAndSuppliersModule = React.lazy(() =>
  import("customers_and_suppliers/CustomersAndSuppliersModule"),
);

const CustomersAndSuppliers = () => {
  return (
    <div
      className={`${styles["customers-and-suppliers-background"]} ${themeColors["blue-main-container-color-background"]}`}>
      <CustomersAndSuppliersModule />
    </div>
  );
};

export default CustomersAndSuppliers;
