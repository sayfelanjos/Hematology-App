import React from "react";
import componentStyles from "./SidebarModuleButton.module.scss";
import fontStyles from "../../styles/fonts/_fonts.modules.scss";
import themeColors from "../../styles/themes/_themes.module.scss";
import { Link } from "react-router-dom";
import { useAppStore } from "../../store/store";
import { useThemeStore } from "store/store";

const SidebarModuleButton = (props) => {
  const isOpen = useAppStore((state) => state.sidebarIsOpen);
  const { theme } = useThemeStore();
  return (
    <>
      <Link
        className={`${
          props.isPressed
            ? `${componentStyles["module-button"]} ${
                themeColors[`${theme.color}-theme-button-pressed`]
              }`
            : `${componentStyles["module-button"]} ${themeColors[`${theme.color}-theme-button`]}`
        }`}
        to={props.pageUrl}>
        {props.children}
        {isOpen && (
          <span
            className={`${componentStyles["module-button-text"]} ${
              fontStyles["semi-bold-normal-monospace-17"]
            } ${themeColors[`${theme.color}-theme-button-text-color`]}`}>
            {props.moduleName}
          </span>
        )}
      </Link>
    </>
  );
};

export default SidebarModuleButton;
