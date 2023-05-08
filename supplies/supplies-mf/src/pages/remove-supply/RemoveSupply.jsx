import React from "react";
import { Outlet } from "@tanstack/react-location";

function NewSupply() {
  return (
    <div className="">
      Remove Supply!!!
      <Outlet />
    </div>
  );
}

export default NewSupply;
