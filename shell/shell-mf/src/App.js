import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Statistics from "./pages/statistics/Statistics";
import CostumersAndSuppliers from "./pages/costumers-and-suppliers/CostumersAndSuppliers";
import Contracts from "./pages/contracts/Contracts";
import Invoices from "./pages/invoices/Invoices";
import Login from "./pages/login/Login";
import Orders from "./pages/orders/Orders";
import Supplies from "./pages/supplies/Supplies";
import RootLayout from "./components/layout/RootLayout";
import Users from "./pages/users/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/contracts", element: <Contracts /> },
      { path: "/costumers-and-suppliers", element: <CostumersAndSuppliers /> },
      { path: "/", element: <Statistics /> },
      { path: "/invoices", element: <Invoices /> },
      { path: "/orders", element: <Orders /> },
      { path: "/supplies", element: <Supplies /> },
      { path: "/users", element: <Users /> },
    ],
  },
  { path: "/login", element: <Login /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
