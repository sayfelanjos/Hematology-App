import React from "react";
import { ReactLocation, Router, createBrowserHistory, Outlet } from "@tanstack/react-location";
import RootLayout from "./layout/RootLayout";
import Statistics from "./pages/statistics/Statistics";
import CustomersAndSuppliers from "./pages/customers-and-suppliers/CustomersAndSuppliers";
import Contracts from "./pages/contracts/Contracts";
import Invoices from "./pages/invoices/Invoices";
import Login from "./pages/login/Login";
import Orders from "./pages/orders/Orders";
import SearchSupply from "./pages/supplies/search-supply/SearchSupply";
import Users from "./pages/users/Users";
import { useRouteStore } from "store/store";

const routes = [
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Statistics /> },
      { path: "statistics", element: <Statistics /> },
      {
        path: "contracts",
        element: <Outlet />,
        children: [
          { path: "/", element: <Contracts /> },
          { path: "new", element: <Contracts /> },
          { path: "list", element: <Contracts /> },
        ],
      },
      { path: "customers-and-suppliers", element: <CustomersAndSuppliers /> },
      { path: "invoices", element: <Invoices /> },
      { path: "orders", element: <Orders /> },
      { path: "users", element: <Users /> },
      {
        path: "supplies",
        element: <Outlet />,
        children: [
          {
            path: "/",
            element: <SearchSupply />,
          },
          {
            path: "new",
            element: <SearchSupply />,
          },
          { path: "list", element: <SearchSupply /> },
          { path: "remove", element: <SearchSupply /> },
        ],
      },
    ],
  },
];
const history = createBrowserHistory();
const location = new ReactLocation({ history });

const App = () => {
  const { route, updateRoute } = useRouteStore();
  console.log(route.pathname);
  location.history.listen(({ location }) => {
    updateRoute(location.pathname);
  });

  return <Router routes={routes} location={location}></Router>;
};

export default App;
