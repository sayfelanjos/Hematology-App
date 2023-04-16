import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/root-layout/RootLayout";
// import Statistics from "./pages/statistics/Statistics";
// import CustomersAndSuppliers from "./pages/customers-and-suppliers/CustomersAndSuppliers";
// import Contracts from "./pages/contracts/Contracts";
// import Invoices from "./pages/invoices/Invoices";
import Login from "./pages/login/Login";
// import Orders from "./pages/orders/Orders";
// import Supplies from "./pages/supplies/Supplies";
import Users from "./pages/users/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // { path: "/contracts", element: <Contracts /> },
      // { path: "/costumers-and-suppliers", element: <CustomersAndSuppliers /> },
      // { path: "/", element: <Statistics /> },
      // { path: "/invoices", element: <Invoices /> },
      // { path: "/orders", element: <Orders /> },
      // { path: "/supplies", element: <Supplies /> },
      { path: "/users", element: <Users /> },
    ],
  },
  { path: "/login", element: <Login /> },
]);

const App = () => {
  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
