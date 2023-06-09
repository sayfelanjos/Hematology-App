import React from "react";
import themeColors from "../../styles/themes/_themes.module.scss";
import { useThemeStore } from "store/store";

const InvoicesIcon = () => {
  const { theme } = useThemeStore();
  return (
    <svg
      name={"invoices-icon"}
      id={themeColors[`${theme.color}-theme-invoices-icon`]}
      width="37"
      height="36"
      viewBox="0 0 37 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M7.1084 3.375V32.625H29.6084V10.8L29.2709 10.4625L22.5209 3.7125L22.1834 3.375H7.1084ZM9.3584 5.625H20.6084V12.375H27.3584V30.375H9.3584V5.625ZM22.8584 7.2L25.7834 10.125H22.8584V7.2ZM11.6084 14.625V16.875H25.1084V14.625H11.6084ZM11.6084 20.25V22.5H19.4834V20.25H11.6084ZM21.7334 20.25V22.5H25.1084V20.25H21.7334ZM11.6084 24.75V27H19.4834V24.75H11.6084ZM21.7334 24.75V27H25.1084V24.75H21.7334Z" />
    </svg>
  );
};

export default InvoicesIcon;
