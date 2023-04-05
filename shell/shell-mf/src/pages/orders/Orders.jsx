import React, { Suspense } from "react";
import styles from "./Orders.module.scss";
const OrdersModule = React.lazy(() => import("orders/OrdersModule"));

const Orders = () => {
  return (
    <div className={styles["orders-background"]}>
      <Suspense>
        <OrdersModule />
      </Suspense>
    </div>
  );
};

export default Orders;
