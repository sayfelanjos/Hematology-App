"use client";
import React from "react";
import styles from "./Sidebar.module.scss";
import { sidebarSlice } from "@/app/(app)/components/sidebar/sidebarSlice";
import Image from "next/image";
import SidebarModules from "./sidebar-modules/SidebarModules";
import SidebarModuleButton from "./sidebar-modules/sidebar-module-button/SidebarModuleButton";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

const Sidebar = () => {
  const { setActiveButton } = sidebarSlice.actions;
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);

  const Dashboard: MenuButton[] = [
    {
      id: 1,
      icon: "/Icon=Statistics.svg",
      moduleName: "Estatísticas",
      pageUrl: "",
      isPressed: state.sidebar.activeButton === "dashboard",
      toggleStateFunction: () => dispatch(setActiveButton("dashboard")),
    },
  ];
  const SideBarModules: MenuButton[] = [
    {
      id: 2,
      icon: "/Icon=Supplies.svg",
      moduleName: "Insumos",
      pageUrl: "/supplies",
      isPressed: state.sidebar.activeButton === "supplies",
      toggleStateFunction: () => dispatch(setActiveButton("supplies")),
    },
    {
      id: 3,
      icon: "/Icon=Orders.svg",
      moduleName: "Pedido de Compras",
      pageUrl: "/orders",
      isPressed: state.sidebar.activeButton === "orders",
      toggleStateFunction: () => dispatch(setActiveButton("orders")),
    },
    {
      id: 4,
      icon: "/Icon=Invoices.svg",
      moduleName: "Notas Fiscais",
      pageUrl: "/invoices",
      isPressed: state.sidebar.activeButton === "invoices",
      toggleStateFunction: () => dispatch(setActiveButton("invoices")),
    },
    {
      id: 5,
      icon: "/Icon=Contracts.svg",
      moduleName: "Contratos",
      pageUrl: "/contracts",
      isPressed: state.sidebar.activeButton === "contracts",
      toggleStateFunction: () => dispatch(setActiveButton("contracts")),
    },
    {
      id: 6,
      icon: "/Icon=Costumers-and-Suppliers.svg",
      moduleName: "Clientes e Fornecedores",
      pageUrl: "/costumers-and-suppliers",
      isPressed: state.sidebar.activeButton === "costumers-and-suppliers",
      toggleStateFunction: () =>
        dispatch(setActiveButton("costumers-and-suppliers")),
    },
    {
      id: 7,
      icon: "/Icon=User.svg",
      moduleName: "Users",
      pageUrl: "/users",
      isPressed: state.sidebar.activeButton === "users",
      toggleStateFunction: () => dispatch(setActiveButton("users")),
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
