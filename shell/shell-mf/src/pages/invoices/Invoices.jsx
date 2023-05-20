import React, { Suspense } from "react";
import Wrapper from "../../components/wrapper/wrapper";
const InvoicesModule = React.lazy(() => import("invoices/InvoicesModule"));

const Invoices = () => {
  return (
    <Wrapper>
      <Suspense>
        <InvoicesModule />
      </Suspense>
    </Wrapper>
  );
};

export default Invoices;
