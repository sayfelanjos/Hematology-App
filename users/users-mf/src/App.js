import React from "react";
import componentStyles from "./App.module.scss";
import PageNotFoundImage from "../public/10172655_8349.jpg";

function App() {
  return (
    <div className={componentStyles["users-container"]}>
      <img
        className={componentStyles["users-page-not-found-image"]}
        src={PageNotFoundImage}
        alt="Page Not Found"
      />
    </div>
  );
}

export default App;
