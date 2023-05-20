import React from "react";
import "./App.scss";
import PageNotFoundImage from "../public/24487811_6961929.jpg";

function App() {
  return (
    <div className="contracts-container">
      <img
        className="contracts-page-not-found-image"
        src={PageNotFoundImage}
        alt="Page Not Found Image"
      />
    </div>
  );
}

export default App;
