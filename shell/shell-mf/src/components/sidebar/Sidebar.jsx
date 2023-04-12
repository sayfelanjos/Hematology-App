import React from "react";
import styles from "./Sidebar.module.scss";
import SidebarModules from "../sidebar-modules/SidebarModules";
import SidebarModuleButton from "../sidebar-module-button/SidebarModuleButton";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const url = useLocation();
  let re = /\/[A-Za-z0-9:._-]*\/{0}/;
  let urlSlice = url.pathname.match(re);
  const Dashboard = [
    {
      id: 1,
      icon: "/icons/statistics.svg",
      moduleName: "Estatísticas",
      pageUrl: "/",
      isPressed: urlSlice[0] === "/",
    },
  ];
  const SideBarModules = [
    {
      id: 2,
      icon: "/icons/supplies.svg",
      moduleName: "Insumos",
      pageUrl: "/supplies",
      isPressed: urlSlice[0] === "/supplies",
    },
    {
      id: 3,
      icon: "/icons/orders.svg",
      moduleName: "Pedido de Compras",
      pageUrl: "/orders",
      isPressed: urlSlice[0] === "/orders",
    },
    {
      id: 4,
      icon: "/icons/invoices.svg",
      moduleName: "Notas Fiscais",
      pageUrl: "/invoices",
      isPressed: urlSlice[0] === "/invoices",
    },
    {
      id: 5,
      icon: "/icons/contracts.svg",
      moduleName: "Contratos",
      pageUrl: "/contracts",
      isPressed: urlSlice[0] === "/contracts",
    },
    {
      id: 6,
      icon: "/icons/costumers-and-Suppliers.svg",
      moduleName: "Clientes e Fornecedores",
      pageUrl: "/costumers-and-suppliers",
      isPressed: urlSlice[0] === "/costumers-and-suppliers",
    },
    {
      id: 7,
      icon: "/icons/user.svg",
      moduleName: "Users",
      pageUrl: "/users",
      isPressed: urlSlice[0] === "/users",
    },
  ];

  return (
    <div className={styles["sidebar-container"]}>
      <div className={styles["sidebar-header"]}>
        <img src="/icons/logo.svg" alt="Sidebar menu icon" width={42} height={42} />
        <h1 className={styles["app-name"]}>Hematologia</h1>
      </div>
      <div className={styles["wrap-button"]}>
        <SidebarModuleButton
          id={Dashboard[0].id}
          icon={Dashboard[0].icon}
          moduleName={Dashboard[0].moduleName}
          pageUrl={Dashboard[0].pageUrl}
          isPressed={Dashboard[0].isPressed}
        />
      </div>
      <SidebarModules modules={SideBarModules} domainName={"Aplicações"} />
    </div>
  );
};

export default Sidebar;
