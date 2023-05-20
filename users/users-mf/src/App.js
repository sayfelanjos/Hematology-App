import React, { useEffect } from "react";
import { ReactLocation, Router, createBrowserHistory } from "@tanstack/react-location";
// import { useRouteStore } from "store/store";
import RootLayout from "./components/root-layout/RootLayout";
import UsersList from "./pages/users-list/UsersList";
import Profile from "./pages/users-profile/Profile";
import PasswordForm from "./components/password-form/PasswordForm";
import PersonalInformationForm from "./components/personal-information-form/PersonalInformationForm";
import SettingsForm from "./components/settings-form/SettingsForm";

const routes = [
  {
    path: "",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <UsersList />,
      },
      {
        path: "list",
        element: <UsersList />,
      },
      {
        path: "profile",
        element: <Profile />,
        children: [
          {
            path: "/",
            element: <PersonalInformationForm />,
          },
          {
            path: "personal",
            element: <PersonalInformationForm />,
          },
          {
            path: "password",
            element: <PasswordForm />,
          },
          {
            path: "settings",
            element: <SettingsForm />,
          },
        ],
      },
    ],
  },
];

// Create a memory history
const memoryHistory = createBrowserHistory({
  initialEntries: ["/"], // Pass your initial url
});

// Set up a ReactLocation instance with the memory history
const location = new ReactLocation({
  history: memoryHistory,
});

function App() {
  // const { route, updateRoute } = useRouteStore((state) => state.route);
  //
  // location.history.listen(({ location }) => {
  //   updateRoute(location.pathname);
  // });
  //
  // useEffect(() => {
  //   location.history.push(route.pathname);
  // }, [route.pathname]);

  return <Router location={location} routes={routes} />;
}

export default App;
