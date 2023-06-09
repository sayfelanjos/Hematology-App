import React, { Suspense } from "react";
import styles from "./Contracts.module.scss";
import themeColors from "../../styles/themes/_themes.module.scss";
const CustomersAndSuppliersModule = React.lazy(() => import("contracts/ContractsModule"));

const Contracts = () => {
  return (
    <div className={`${styles["contracts-background"]} ${themeColors["contracts-background"]}`}>
      <Suspense>
        <CustomersAndSuppliersModule />
      </Suspense>
    </div>
  );
};

export default Contracts;
