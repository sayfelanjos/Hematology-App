import React from "react";
import "./RootLayout.scss";
import Sidebar from "./sidebar/Sidebar";
import Navbar from "./navbar/Navbar";
import ConfigurationBar from "./configuration-bar/ConfigurationBar";
import { useAppStore } from "../app-store/app-store";
import { Outlet } from "@tanstack/react-location";

const RootLayout = () => {
  const configurationBarIsOpen = useAppStore((state) => state.configurationBarIsOpen);
  return (
    <div className="layout">
      <Sidebar />
      {configurationBarIsOpen && <ConfigurationBar />}
      <div className="layout__main-block">
        <Navbar />
        <main className="main-block__content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
