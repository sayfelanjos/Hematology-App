<<<<<<< HEAD
import React from "react";
import styles from "./Contracts.module.scss";
=======
import React, { Suspense } from "react";
import styles from "./Contracts.module.scss";
import themeColors from "../../styles/themes/_themes.module.scss";
>>>>>>> b4e4f22 (Sync routes across Micro Frontends)
const CustomersAndSuppliersModule = React.lazy(() => import("contracts/ContractsModule"));

const Contracts = () => {
  return (
<<<<<<< HEAD
    <div className={styles["contracts-background"]}>
      <CustomersAndSuppliersModule />
=======
    <div className={`${styles["contracts-background"]} ${themeColors["contracts-background"]}`}>
      <Suspense>
        <CustomersAndSuppliersModule />
      </Suspense>
>>>>>>> b4e4f22 (Sync routes across Micro Frontends)
    </div>
  );
};

export default Contracts;
