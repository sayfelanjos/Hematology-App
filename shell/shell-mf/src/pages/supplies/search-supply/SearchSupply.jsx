import React, { Suspense } from "react";
import styles from "./SearchSupply.module.scss";
import themeColors from "../../../styles/themes/_themes.module.scss";
const SuppliesModule = React.lazy(() => import("supplies/SuppliesModule"));

const SearchSupply = () => {
  return (
    <div
      className={`${styles["supplies-background"]} ${themeColors["blue-main-container-color-background"]}`}>
      <Suspense>
        <SuppliesModule />
      </Suspense>
    </div>
  );
};

export default SearchSupply;
