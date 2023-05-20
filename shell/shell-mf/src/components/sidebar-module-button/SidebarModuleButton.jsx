import React, { useState } from "react";
import "./SidebarModuleButton.scss";
import "../../sass/base/_typography.scss";
import "../../sass/themes/_themes.scss";
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
    <div className="module-button-container" onClick={whenClicked}>
      <Link
        className={`${
          state
            ? `module-button ${theme.color}-theme-button-pressed`
            : `module-button ${theme.color}-theme-button`
        }`}
        to={props.pageUrl}>
        {props.children}
        {sidebar.isOpen && (
          <span
            className={`module-button-text semi-bold-normal-monospace-17
            ${theme.color}-theme-button-text-color`}>
            {props.moduleName}
          </span>
        )}
      </Link>
    </div>
  );
};

export default SidebarModuleButton;
