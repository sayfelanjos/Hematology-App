import React from "react";
import componentStyles from "./App.module.scss";
import PageNotFoundImage from "../public/24487811_6961929.jpg";

function App() {
  return (
    <div className={componentStyles["contracts-container"]}>
      <img
        className={componentStyles["contracts-page-not-found-image"]}
        src={PageNotFoundImage}
        alt="Page Not Found Image"
      />
    </div>
  );
}

export default App;
