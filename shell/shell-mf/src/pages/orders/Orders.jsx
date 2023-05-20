import React, { Suspense } from "react";
import Wrapper from "../../components/wrapper/wrapper";
const OrdersModule = React.lazy(() => import("orders/OrdersModule"));

const Orders = () => {
  return (
    <Wrapper>
      <Suspense>
        <OrdersModule />
      </Suspense>
    </Wrapper>
  );
};
export default Orders;
