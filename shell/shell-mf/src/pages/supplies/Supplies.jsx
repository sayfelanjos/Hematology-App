import React from "react";
import styles from "./Supplies.module.scss";
import themeColors from "../../styles/themes/_themes.module.scss";
const SuppliesModule = React.lazy(() => import("supplies/SuppliesModule"));

const Supplies = () => {
  return (
    <div
      className={`${styles["supplies-background"]} ${themeColors["blue-main-container-color-background"]}`}>
      <SuppliesModule />
    </div>
  );
};

export default Supplies;
