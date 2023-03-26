"use client";
import React from "react";
import styles from "./Sidebar.module.scss";
import Image from "next/image";
import SidebarModules from "./sidebar-modules/SidebarModules";
import SidebarModuleButton from "./sidebar-modules/sidebar-module-button/SidebarModuleButton";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const url: string | null = usePathname();
  const re: string = "/.*\\/(.*?)/";
  let urlSlice: RegExpMatchArray | null | string =
    url != null ? url.match(re) : "/";

  let pathName = urlSlice != null ? urlSlice : "/";
  console.log(pathName);
  const Dashboard: MenuButton[] = [
    {
      id: 1,
      icon: "/Icon=Statistics.svg",
      moduleName: "Estatísticas",
      pageUrl: "",
      isPressed: pathName === "/",
    },
  ];
  const SideBarModules: MenuButton[] = [
    {
      id: 2,
      icon: "/Icon=Supplies.svg",
      moduleName: "Insumos",
      pageUrl: "/supplies",
      isPressed: pathName === "/supplies",
    },
    {
      id: 3,
      icon: "/Icon=Orders.svg",
      moduleName: "Pedido de Compras",
      pageUrl: "/orders",
      isPressed: pathName === "/orders",
    },
    {
      id: 4,
      icon: "/Icon=Invoices.svg",
      moduleName: "Notas Fiscais",
      pageUrl: "/invoices",
      isPressed: pathName === "/invoices",
    },
    {
      id: 5,
      icon: "/Icon=Contracts.svg",
      moduleName: "Contratos",
      pageUrl: "/contracts",
      isPressed: pathName === "/contracts",
    },
    {
      id: 6,
      icon: "/Icon=Costumers-and-Suppliers.svg",
      moduleName: "Clientes e Fornecedores",
      pageUrl: "/costumers-and-suppliers",
      isPressed: pathName === "/costumers-and-suppliers",
    },
    {
      id: 7,
      icon: "/Icon=User.svg",
      moduleName: "Users",
      pageUrl: "/users",
      isPressed: pathName === "/users",
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
        />
      </div>
      <SidebarModules modules={SideBarModules} domainName={"Aplicações"} />
    </div>
  );
};

export default Sidebar;
