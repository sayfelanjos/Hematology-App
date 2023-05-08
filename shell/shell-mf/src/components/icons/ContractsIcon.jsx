import React from "react";
import themeColors from "../../styles/themes/_themes.module.scss";
import { useThemeStore } from "store/store";

const ContractsIcon = () => {
  const { theme } = useThemeStore();
  return (
    <svg
      name={"contracts-icon"}
      id={themeColors[`${theme.color}-theme-contracts-icon`]}
      width="37"
      height="36"
      viewBox="0 0 37 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M29.9084 19.35L21.3584 27.9H17.9084V24.45L26.4584 15.9L29.9084 19.35ZM35.0084 18.15C35.0084 18.6 34.5584 19.05 34.1084 19.5L30.3584 23.25L29.0084 21.9L32.9084 18L32.0084 17.1L30.9584 18.15L27.5084 14.7L30.8084 11.55C31.1084 11.25 31.7084 11.25 32.1584 11.55L34.2584 13.65C34.5584 13.95 34.5584 14.55 34.2584 15C33.9584 15.3 33.6584 15.6 33.6584 15.9C33.6584 16.2 33.9584 16.5 34.2584 16.8C34.7084 17.25 35.1584 17.7 35.0084 18.15ZM4.8584 30V6H15.3584V13.5H22.8584V15.75L25.8584 12.75V12L16.8584 3H4.8584C3.2084 3 1.8584 4.35 1.8584 6V30C1.8584 31.65 3.2084 33 4.8584 33H22.8584C24.5084 33 25.8584 31.65 25.8584 30H4.8584ZM16.8584 25.65C16.5584 25.65 16.2584 25.8 16.1084 25.8L15.3584 22.5H13.1084L9.9584 25.05L10.8584 21H8.6084L7.1084 28.5H9.3584L13.7084 24.6L14.6084 28.05H16.1084L16.8584 27.9V25.65Z" />
    </svg>
  );
};

export default ContractsIcon;
