import React from "react";
import styles from "./Dashboard.module.scss";
import WidgetContainer from "../../components/widget-container/WidgetContainer";
import WidgetNumber from "../../components/widget-number/WidgetNumber";

const Dashboard = () => {
  return (
    <div className={styles["dashboard-background"]}>
      <WidgetContainer>
        <WidgetNumber></WidgetNumber>
        <WidgetNumber></WidgetNumber>
        <WidgetNumber></WidgetNumber>
        <WidgetNumber></WidgetNumber>
      </WidgetContainer>
    </div>
  );
};

export default Dashboard;
