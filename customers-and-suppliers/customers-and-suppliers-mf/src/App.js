import React from "react";
import "./App.scss";
import PageNotFoundImage from "../public/15635884_5638965.jpg";

const App = () => {
  return (
    <div className="customers-and-suppliers-container">
      <img
        className="customers-and-suppliers-page-not-found-image"
        src={PageNotFoundImage}
        alt="Page Not Found Image"
      />
    </div>
  );
};

export default App;
