import React from "react";
import componentStyles from "./App.module.scss";
import PageNotFoundImage from "../public/15635884_5638965.jpg";

const App = () => {
  return (
    <div className={componentStyles["customers-and-suppliers-container"]}>
      <img
        className={componentStyles["customers-and-suppliers-page-not-found-image"]}
        src={PageNotFoundImage}
        alt="Page Not Found Image"
      />
    </div>
  );
};

export default App;
