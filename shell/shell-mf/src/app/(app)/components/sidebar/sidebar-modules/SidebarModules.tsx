"use client";
import React from "react";
import styles from "./SidebarModules.module.scss";
import SidebarModuleButton from "./sidebar-module-button/SidebarModuleButton";

type Props = {
  domainName: string;
  modules: MenuButton[];
};

const SidebarModules = (props: Props) => {
  return (
    <div className={styles["sidebar-modules"]}>
      <h1 className={styles["sidebar-modules-header"]}>{props.domainName}</h1>
      <ul className={styles["sidebar-modules-buttons"]}>
        {props.modules.map((item) => {
          return (
            <SidebarModuleButton
              key={item.id}
              id={item.id}
              icon={item.icon}
              moduleName={item.moduleName}
              pageUrl={item.pageUrl}
              isPressed={item.isPressed}
              toggleStateFunction={item.toggleStateFunction}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default SidebarModules;
