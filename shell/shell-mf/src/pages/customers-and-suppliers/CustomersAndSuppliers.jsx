import React, { Suspense } from "react";
import Wrapper from "../../components/wrapper/wrapper";
const CustomersAndSuppliersModule = React.lazy(() =>
  import("customers_and_suppliers/CustomersAndSuppliersModule"),
);

const CustomersAndSuppliers = () => {
  return (
    <Wrapper>
      <Suspense>
        <CustomersAndSuppliersModule />
      </Suspense>
    </Wrapper>
  );
};

export default CustomersAndSuppliers;
