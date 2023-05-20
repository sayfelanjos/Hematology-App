import React from "react";
import "./SectionDomain.scss";
import "../../sass/base/_typography.scss";
import "../../sass/themes/_themes.scss";
import { useThemeStore } from "store/store";

const SectionDomain = (props) => {
  const { theme } = useThemeStore();

  return (
    <h6
      className={`sidebar-domain-section
        semi-bold-normal-monospace-17
      ${theme.color}-theme-sidebar-subheader-text-color`}>
      {props.domainName}
    </h6>
  );
};
export default SectionDomain;
