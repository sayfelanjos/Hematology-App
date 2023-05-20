import React from "react";
import "./App.scss";
import PageNotFoundImage from "../public/4265848_16906.jpg";

const App = () => {
  return (
    <div className="statistics-background">
      {/*<WidgetContainer>*/}
      {/*  <WidgetNumber></WidgetNumber>*/}
      {/*  <WidgetNumber></WidgetNumber>*/}
      {/*  <WidgetNumber></WidgetNumber>*/}
      {/*  <WidgetNumber></WidgetNumber>*/}
      {/*</WidgetContainer>*/}
      <img className="page-not-found-image" src={PageNotFoundImage} alt="Page Not Found Image" />
    </div>
  );
};

export default App;
