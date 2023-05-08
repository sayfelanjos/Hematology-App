<<<<<<< HEAD
import React from "react";
import styles from "./CustomersAndSuppliers.module.scss";
=======
import React, { Suspense } from "react";
import styles from "./CustomersAndSuppliers.module.scss";
import themeColors from "../../styles/themes/_themes.module.scss";
>>>>>>> b4e4f22 (Sync routes across Micro Frontends)
const CustomersAndSuppliersModule = React.lazy(() =>
  import("customers_and_suppliers/CustomersAndSuppliersModule"),
);

const CustomersAndSuppliers = () => {
  return (
<<<<<<< HEAD
    <div className={styles["customers-and-suppliers-background"]}>
      <CustomersAndSuppliersModule />
=======
    <div
      className={`${styles["customers-and-suppliers-background"]} ${themeColors["blue-main-container-color-background"]}`}>
      <Suspense>
        <CustomersAndSuppliersModule />
      </Suspense>
>>>>>>> b4e4f22 (Sync routes across Micro Frontends)
    </div>
  );
};

export default CustomersAndSuppliers;
