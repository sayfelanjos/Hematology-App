import React from "react";
import styles from "./WidgetContainer.module.scss";

const WidgetContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles["widget-container"]}>{children}</div>;
};

export default WidgetContainer;
