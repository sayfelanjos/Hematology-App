import React from "react";

const SuppliesButton = React.lazy(() => import("supplies/SuppliesButton"));

const SuppliesAppSidebarRouterButton = () => {
  return <SuppliesButton />;
};

export default SuppliesAppSidebarRouterButton;
