import React, { Suspense } from "react";
import Wrapper from "../../../components/wrapper/wrapper";
const SuppliesModule = React.lazy(() => import("supplies/SuppliesModule"));

const SearchSupply = () => {
  return (
    <Wrapper>
      <Suspense>
        <SuppliesModule />
      </Suspense>
    </Wrapper>
  );
};

export default SearchSupply;
