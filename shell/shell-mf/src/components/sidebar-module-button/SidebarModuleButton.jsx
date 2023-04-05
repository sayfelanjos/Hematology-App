import React from "react";
import styles from "./SidebarModuleButton.module.scss";
import { Link } from "react-router-dom";

const SidebarMenuButton = (props) => {
  return (
    <>
      <Link
        className={
          props.isPressed
            ? styles["sidebar-module-button-pressed"]
            : styles["sidebar-module-button-enabled"]
        }
        to={props.pageUrl}>
        <img src={props.icon} alt="Sidebar menu icon" width={36} height={36} />
        {props.moduleName}
      </Link>
    </>
  );
};

export default SidebarMenuButton;
