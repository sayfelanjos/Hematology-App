import React from "react";
import styles from "./Statistics.module.scss";
const StatisticsModule = React.lazy(() => import("statistics/StatisticsModule"));

const Statistics = () => {
  return (
    <div className={styles["statistics-background"]}>
      <StatisticsModule />
    </div>
  );
};

export default Statistics;
