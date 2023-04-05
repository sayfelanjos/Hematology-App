import React from "react";
import styles from "./Supplies.module.scss";
// const OrdersModule = React.lazy(() => import("orders/OrdersModule"));
import SuppliesHeader from "../../components/supplies-header/SuppliesHeader";
import TableContainer from "../../components/table-container/TableContainer";

function Supplies() {
  return (
    <div className={styles["supplies-background"]}>
      <SuppliesHeader></SuppliesHeader>
      <TableContainer></TableContainer>
    </div>
  );
}

export default Supplies;
