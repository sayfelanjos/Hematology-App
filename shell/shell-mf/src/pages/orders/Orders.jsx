import React, { Suspense } from "react";
import styles from "./Orders.module.scss";
import themeColors from "../../styles/themes/_themes.module.scss";
const OrdersModule = React.lazy(() => import("orders/OrdersModule"));

const Orders = () => {
  return (
    <div
      className={`${styles["orders-micro-frontend-container"]} ${themeColors["blue-theme-main-container-color-background"]}`}>
      <Suspense>
        <OrdersModule />
      </Suspense>
    </div>
  );
};
export default Orders;
