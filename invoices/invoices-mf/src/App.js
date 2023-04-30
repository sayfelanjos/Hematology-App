import React from "react";
import componentStyles from "./App.module.scss";
import PageNotFoundImage from "../public/7437895_32516.jpg";

function App() {
  return (
    <div className={componentStyles["invoices-container"]}>
      {/*<h1>Hi there!!!</h1>*/}
      {/*<h1>I am Invoices Micro Frontend!!!</h1>*/}
      <img
        className={componentStyles["invoices-page-not-found-image"]}
        src={PageNotFoundImage}
        alt="Page Not Found Image"
      />
    </div>
  );
}

export default App;
