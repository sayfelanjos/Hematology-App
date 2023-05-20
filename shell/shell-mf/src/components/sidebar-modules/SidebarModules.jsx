import React from "react";
import "./SidebarModules.scss";
import SidebarModuleButton from "../sidebar-module-button/SidebarModuleButton";

const SidebarModules = (props) => {
  return (
    <div className="sidebar-modules">
      <h1 className="sidebar-modules-header">{props.domainName}</h1>
      <ul className="sidebar-modules-buttons">
        {props.modules.map((item) => {
          return (
            <SidebarModuleButton
              key={item.id}
              id={item.id}
              icon={item.icon}
              moduleName={item.moduleName}
              pageUrl={item.pageUrl}
              isPressed={item.isPressed}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default SidebarModules;
