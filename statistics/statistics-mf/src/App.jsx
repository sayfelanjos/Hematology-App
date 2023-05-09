import React from "react";
import styles from "./App.module.scss";
import PageNotFoundImage from "../public/4265848_16906.jpg";
import componentStyles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles["statistics-background"]}>
      {/*<WidgetContainer>*/}
      {/*  <WidgetNumber></WidgetNumber>*/}
      {/*  <WidgetNumber></WidgetNumber>*/}
      {/*  <WidgetNumber></WidgetNumber>*/}
      {/*  <WidgetNumber></WidgetNumber>*/}
      {/*</WidgetContainer>*/}
      <img
        className={componentStyles["page-not-found-image"]}
        src={PageNotFoundImage}
        alt="Page Not Found Image"
      />
    </div>
  );
};

export default App;
