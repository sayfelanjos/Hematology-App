import React from "react";
import styles from "./App.module.scss";
import WidgetContainer from "@sayfelanjos/hematology-app/libs/WidgetContainer";
import WidgetNumber from "@sayfelanjos/hematology-app/libs/WidgetNumber";

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
