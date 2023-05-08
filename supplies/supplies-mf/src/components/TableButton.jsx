import React from "react";
import componentStyles from "./TableButton.module.scss";
import themeColors from "../styles/themes/_themes.module.scss";
import { useThemeStore } from "store/store";

const TableButton = () => {
  const { theme } = useThemeStore((state) => state.theme);
  return (
    <button
      className={`${componentStyles["table-button"]} ${
        themeColors[`${theme.color}-theme-add-supplies-button`]
      }`}>
      <span className={componentStyles["table-button-content"]}>Adicionar Insumo</span>
    </button>
  );
};

export default TableButton;
