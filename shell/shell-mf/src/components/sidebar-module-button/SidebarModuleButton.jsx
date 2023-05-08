<<<<<<< HEAD
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
=======
import React, { useState } from "react";
import componentStyles from "./SidebarModuleButton.module.scss";
import fontStyles from "../../styles/fonts/_fonts.modules.scss";
import themeColors from "../../styles/themes/_themes.module.scss";
import { Link } from "@tanstack/react-location";
import { useThemeStore, useSidebarStore } from "store/store";

const SidebarModuleButton = (props) => {
  const [state, toggleState] = useState(false);
  const { sidebar } = useSidebarStore((state) => state.sidebar);
  const { theme } = useThemeStore();
  const whenClicked = () => {
    toggleState(!state);
    props.onClick();
  };

  return (
    <div className={componentStyles["module-button-container"]} onClick={whenClicked}>
      <Link
        className={`${
          state
            ? `${componentStyles["module-button"]} ${
                themeColors[`${theme.color}-theme-button-pressed`]
              }`
            : `${componentStyles["module-button"]} ${themeColors[`${theme.color}-theme-button`]}`
        }`}
        to={props.pageUrl}>
        {props.children}
        {sidebar.isOpen && (
          <span
            className={`${componentStyles["module-button-text"]} ${
              fontStyles["semi-bold-normal-monospace-17"]
            } ${themeColors[`${theme.color}-theme-button-text-color`]}`}>
            {props.moduleName}
          </span>
        )}
      </Link>
    </div>
  );
};

export default SidebarModuleButton;
>>>>>>> b4e4f22 (Sync routes across Micro Frontends)
