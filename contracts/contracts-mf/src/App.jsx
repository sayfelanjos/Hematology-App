import React from "react";
<<<<<<< HEAD
import "./App.module.scss";

function App() {
  return <div className="App">Hi there!!! I am Contracts Micro Frontend.</div>;
=======
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
>>>>>>> b4e4f22 (Sync routes across Micro Frontends)
}

export default App;
