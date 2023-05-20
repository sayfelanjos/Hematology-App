import React, { useEffect } from "react";
import { ReactLocation, Router, createMemoryHistory } from "@tanstack/react-location";
import SearchSupply from "./pages/search-supply/search-supply";
import NewSupply from "./pages/new-supply/NewSupply";
import RemoveSupply from "./pages/remove-supply/RemoveSupply";
import { useRouteStore } from "store/store";

const routes = [
  {
    path: "supplies",
    children: [
      {
        path: "/",
        element: <SearchSupply />,
      },
      {
        path: "list",
        element: <SearchSupply />,
      },
      {
        path: "new",
        element: <NewSupply />,
      },
      {
        path: "remove",
        element: <RemoveSupply />,
      },
    ],
  },
];

// Create a memory history
const memoryHistory = createMemoryHistory({
  initialEntries: ["/"], // Pass your initial url
});

// Set up a ReactLocation instance with the memory history
const location = new ReactLocation({
  history: memoryHistory,
});

function App() {
  const { route, updateRoute } = useRouteStore((state) => state.route);

  location.history.listen(({ action, location }) => {
    // console.log("This is the location pathname:", location.pathname);
    // console.log("This is the location search:", location.search);
    // console.log("This is the location hash:", location.hash);
    updateRoute(location.pathname);
    console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`);
    console.log(`The last navigation action was ${action}`);
  });

  useEffect(() => {
    location.history.push(route.pathname);
  }, [route.pathname]);

  return <Router location={location} routes={routes}></Router>;
}

export default App;
