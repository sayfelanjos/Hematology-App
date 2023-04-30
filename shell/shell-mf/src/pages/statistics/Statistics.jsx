import React from "react";
import styles from "./Statistics.module.scss";
import themeColors from "../../styles/themes/_themes.module.scss";
const StatisticsModule = React.lazy(() => import("statistics/StatisticsModule"));

const Statistics = () => {
  return (
    <div
      className={`${styles["statistics-background"]} ${themeColors["blue-main-container-color-background"]}`}>
      <StatisticsModule />
    </div>
  );
};

export default Statistics;
