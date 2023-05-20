import React from "react";
import "./App.scss";
import PageNotFoundImage from "./assets/images/7437895_32516.jpg";

function App() {
  return (
    <div className="invoices-container">
      {/*<h1>Hi there!!!</h1>*/}
      {/*<h1>I am Invoices Micro Frontend!!!</h1>*/}
      <img
        className="invoices-page-not-found-image"
        src={PageNotFoundImage}
        alt="Page Not Found Image"
      />
    </div>
  );
}

export default App;
