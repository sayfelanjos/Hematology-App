import React from "react";
import styles from "./App.module.scss";
import WidgetContainer from "./components/widget-container/WidgetContainer";
import WidgetNumber from "./components/widget-number/WidgetNumber";

const App = () => {
  return (
    <div className={styles["statistics-background"]}>
      <WidgetContainer>
        <WidgetNumber></WidgetNumber>
        <WidgetNumber></WidgetNumber>
        <WidgetNumber></WidgetNumber>
        <WidgetNumber></WidgetNumber>
      </WidgetContainer>
    </div>
  );
};

export default App;
