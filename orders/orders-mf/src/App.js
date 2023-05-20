import React from "react";
import "./App.scss";
import PageNotFoundImage from "../public/6867596_28791.jpg";

function App() {
  return (
    <div className="orders-container">
      <img
        className="orders-page-not-found-image"
        src={PageNotFoundImage}
        alt="Not Found Page Image"
      />
    </div>
  );
}

export default App;
