import React from "react";
import componentStyles from "./App.module.scss";
import PageNotFoundImage from "../public/6867596_28791.jpg";

function App() {
  return (
    <div className={componentStyles["orders-container"]}>
      <img
        className={componentStyles["orders-page-not-found-image"]}
        src={PageNotFoundImage}
        alt="Not Found Page Image"
      />
    </div>
  );
}

export default App;
