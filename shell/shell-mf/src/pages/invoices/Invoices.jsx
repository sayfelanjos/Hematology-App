import React from "react";
import styles from "./Invoices.module.scss";
const InvoicesModule = React.lazy(() => import("invoices/InvoicesModule"));

const Invoices = () => {
  return (
    <div className={styles["invoices-background"]}>
      <InvoicesModule />
    </div>
  );
};

export default Invoices;
