import React from "react";
import styles from "./WidgetContainer.scss";

const WidgetContainer = (props) => {
  return <div className={styles["widget-container"]}>{props.children}</div>;
};

export default WidgetContainer;
