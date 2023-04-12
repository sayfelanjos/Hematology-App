import React from "react";
import styles from "./Orders.module.scss";
const OrdersModule = React.lazy(() => import("orders/OrdersModule"));

const Orders = () => {
  return (
    <div className={styles["orders-background"]}>
      <OrdersModule />
    </div>
  );
};
export default Orders;
