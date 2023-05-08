import React from "react";
import componentStyles from "./SidebarHeader.module.scss";
import themeColors from "../../styles/themes/_themes.module.scss";
import LogoIcon from "../icons/LogoIcon";
import fontStyles from "../../styles/fonts/_fonts.modules.scss";
import { useThemeStore } from "store/store";

const SidebarHeader = () => {
  const { theme } = useThemeStore();

  return (
    <div
      className={`${componentStyles["sidebar-header"]} ${
        themeColors[`${theme.color}-theme-sidebar-header-container`]
      }`}>
      <LogoIcon />
      <h1
        className={`${componentStyles["app.name"]} ${
          themeColors[`${theme.color}-theme-app-name`]
        } ${fontStyles["semi-bold-normal-monospace-24"]}`}>
        Hematologia
      </h1>
    </div>
  );
};
export default SidebarHeader;
