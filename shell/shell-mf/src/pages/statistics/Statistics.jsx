<<<<<<< HEAD
import React from "react";
import styles from "./Statistics.module.scss";
=======
import React, { Suspense } from "react";
import styles from "./Statistics.module.scss";
import themeColors from "../../styles/themes/_themes.module.scss";
>>>>>>> b4e4f22 (Sync routes across Micro Frontends)
const StatisticsModule = React.lazy(() => import("statistics/StatisticsModule"));

const Statistics = () => {
  return (
<<<<<<< HEAD
    <div className={styles["statistics-background"]}>
      <StatisticsModule />
=======
    <div
      className={`${styles["statistics-background"]} ${themeColors["blue-main-container-color-background"]}`}>
      <Suspense>
        <StatisticsModule />
      </Suspense>
>>>>>>> b4e4f22 (Sync routes across Micro Frontends)
    </div>
  );
};

export default Statistics;
