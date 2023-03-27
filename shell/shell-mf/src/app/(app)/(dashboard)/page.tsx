"use client";
import styles from "./page.module.scss";
import WidgetContainer from "@/app/(app)/(dashboard)/components/widget-container/WidgetContainer";
import WidgetNumber from "@/app/(app)/(dashboard)/components/widget-number/WidgetNumber";

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
