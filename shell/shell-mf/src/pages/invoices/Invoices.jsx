<<<<<<< HEAD
import React from "react";
import styles from "./Invoices.module.scss";
=======
import React, { Suspense } from "react";
import styles from "./Invoices.module.scss";
import themeColors from "../../styles/themes/_themes.module.scss";
>>>>>>> b4e4f22 (Sync routes across Micro Frontends)
const InvoicesModule = React.lazy(() => import("invoices/InvoicesModule"));

const Invoices = () => {
  return (
<<<<<<< HEAD
    <div className={styles["invoices-background"]}>
      <InvoicesModule />
=======
    <div className={`${styles["invoices-background"]} ${themeColors["invoices-background"]}`}>
      <Suspense>
        <InvoicesModule />
      </Suspense>
>>>>>>> b4e4f22 (Sync routes across Micro Frontends)
    </div>
  );
};

export default Invoices;
