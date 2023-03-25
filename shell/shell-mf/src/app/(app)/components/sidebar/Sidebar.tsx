"use client";
import React, { useEffect, useState } from "react";
import styles from "./Sidebar.module.scss";
import Image from "next/image";
import SidebarModules from "./sidebar-modules/SidebarModules";
import SidebarModuleButton from "./sidebar-modules/sidebar-module-button/SidebarModuleButton";

const Sidebar = () => {
  const [activeButton, setActiveButton] = useState<string>("dashboard");

  useEffect(() => {
    const buttonState = window.localStorage.getItem("SIDEBAR_BUTTON_STATE");
    if (buttonState !== null) setActiveButton(JSON.parse(buttonState));
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "SIDEBAR_BUTTON_STATE",
      JSON.stringify(activeButton)
    );
  }, [activeButton]);

  const Dashboard: MenuButton[] = [
    {
      id: 1,
      icon: "/Icon=Statistics.svg",
      moduleName: "Estatísticas",
      pageUrl: "",
      isPressed: activeButton === "dashboard",
      toggleStateFunction: () => setActiveButton("dashboard"),
    },
  ];
  const SideBarModules: MenuButton[] = [
    {
      id: 2,
      icon: "/Icon=Supplies.svg",
      moduleName: "Insumos",
      pageUrl: "/supplies",
      isPressed: activeButton === "supplies",
      toggleStateFunction: () => setActiveButton("supplies"),
    },
    {
      id: 3,
      icon: "/Icon=Orders.svg",
      moduleName: "Pedido de Compras",
      pageUrl: "/orders",
      isPressed: activeButton === "orders",
      toggleStateFunction: () => setActiveButton("orders"),
    },
    {
      id: 4,
      icon: "/Icon=Invoices.svg",
      moduleName: "Notas Fiscais",
      pageUrl: "/invoices",
      isPressed: activeButton === "invoices",
      toggleStateFunction: () => setActiveButton("invoices"),
    },
    {
      id: 5,
      icon: "/Icon=Contracts.svg",
      moduleName: "Contratos",
      pageUrl: "/contracts",
      isPressed: activeButton === "contracts",
      toggleStateFunction: () => setActiveButton("contracts"),
    },
    {
      id: 6,
      icon: "/Icon=Costumers-and-Suppliers.svg",
      moduleName: "Clientes e Fornecedores",
      pageUrl: "/costumers-and-suppliers",
      isPressed: activeButton === "costumers-and-suppliers",
      toggleStateFunction: () => setActiveButton("costumers-and-suppliers"),
    },
    {
      id: 7,
      icon: "/Icon=User.svg",
      moduleName: "Users",
      pageUrl: "/users",
      isPressed: activeButton === "users",
      toggleStateFunction: () => setActiveButton("users"),
    },
  ];

  return (
    <div className={styles["sidebar-container"]}>
      <div className={styles["sidebar-header"]}>
        <Image
          src="/Icon=Logo.svg"
          alt="Sidebar menu icon"
          width={42}
          height={42}
        />
        <h1 className={styles["app-name"]}>Hematologia</h1>
      </div>
      <div className={styles["wrap-button"]}>
        <SidebarModuleButton
          id={Dashboard[0].id}
          icon={Dashboard[0].icon}
          moduleName={Dashboard[0].moduleName}
          pageUrl={Dashboard[0].pageUrl}
          isPressed={Dashboard[0].isPressed}
          toggleStateFunction={Dashboard[0].toggleStateFunction}
        />
      </div>
      <SidebarModules modules={SideBarModules} domainName={"Aplicações"} />
    </div>
  );
};

export default Sidebar;
