import React from "react";
<<<<<<< HEAD
import "./App.module.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hey there!!!</h1>
        <h1>I am Orders Micro Frontend!</h1>
      </header>
=======
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
>>>>>>> b4e4f22 (Sync routes across Micro Frontends)
    </div>
  );
}

export default App;
