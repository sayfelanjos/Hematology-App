import React from "react";
import componentStyles from "./SectionDomain.module.scss";
import fontStyles from "../../styles/fonts/_fonts.modules.scss";
import themeColors from "../../styles/themes/_themes.module.scss";
import { useThemeStore } from "store/store";

const SectionDomain = (props) => {
  const { theme } = useThemeStore();

  return (
    <h6
      className={`${componentStyles["sidebar-domain-section"]} ${
        fontStyles["semi-bold-normal-monospace-17"]
      } ${themeColors[`${theme.color}-theme-sidebar-subheader-text-color`]}`}>
      {props.domainName}
    </h6>
  );
};
export default SectionDomain;
