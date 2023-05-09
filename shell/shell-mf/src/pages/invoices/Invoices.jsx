import React, { Suspense } from "react";
import styles from "./Invoices.module.scss";
import themeColors from "../../styles/themes/_themes.module.scss";
const InvoicesModule = React.lazy(() => import("invoices/InvoicesModule"));

const Invoices = () => {
  return (
    <div className={`${styles["invoices-background"]} ${themeColors["invoices-background"]}`}>
      <Suspense>
        <InvoicesModule />
      </Suspense>
    </div>
  );
};

export default Invoices;
