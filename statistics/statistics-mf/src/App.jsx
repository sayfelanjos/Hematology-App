import React from "react";
import styles from "./App.module.scss";
<<<<<<< HEAD
import WidgetContainer from "@sayfelanjos/hematology-app/libs/WidgetContainer";
import WidgetNumber from "@sayfelanjos/hematology-app/libs/WidgetNumber";
=======
// import WidgetContainer from "@sayfelanjos/hematology-app/libs/WidgetContainer";
// import WidgetNumber from "@sayfelanjos/hematology-app/libs/WidgetNumber";
import PageNotFoundImage from "../public/4265848_16906.jpg";
import componentStyles from "./App.module.scss";
>>>>>>> b4e4f22 (Sync routes across Micro Frontends)

const App = () => {
  return (
    <div className={styles["statistics-background"]}>
<<<<<<< HEAD
      <WidgetContainer>
        <WidgetNumber></WidgetNumber>
        <WidgetNumber></WidgetNumber>
        <WidgetNumber></WidgetNumber>
        <WidgetNumber></WidgetNumber>
      </WidgetContainer>
=======
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
>>>>>>> b4e4f22 (Sync routes across Micro Frontends)
    </div>
  );
};

export default App;
