import React, { Suspense } from "react";
import Wrapper from "../../components/wrapper/wrapper";
const CustomersAndSuppliersModule = React.lazy(() => import("contracts/ContractsModule"));

const Contracts = () => {
  return (
    <Wrapper>
      <Suspense>
        <CustomersAndSuppliersModule />
      </Suspense>
    </Wrapper>
  );
};

export default Contracts;
