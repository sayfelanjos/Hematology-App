<<<<<<< HEAD
import React from "react";
import styles from "./Orders.module.scss";
=======
import React, { Suspense } from "react";
import styles from "./Orders.module.scss";
import themeColors from "../../styles/themes/_themes.module.scss";
>>>>>>> b4e4f22 (Sync routes across Micro Frontends)
const OrdersModule = React.lazy(() => import("orders/OrdersModule"));

const Orders = () => {
  return (
<<<<<<< HEAD
    <div className={styles["orders-background"]}>
      <OrdersModule />
=======
    <div
      className={`${styles["orders-micro-frontend-container"]} ${themeColors["blue-theme-main-container-color-background"]}`}>
      <Suspense>
        <OrdersModule />
      </Suspense>
>>>>>>> b4e4f22 (Sync routes across Micro Frontends)
    </div>
  );
};
export default Orders;
