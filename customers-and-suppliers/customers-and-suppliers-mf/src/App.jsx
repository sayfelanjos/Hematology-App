import React from "react";
<<<<<<< HEAD
import "./App.module.scss";

function App() {
  return (
    <div className="App">
      <h1>Hi there!!! I am Customers and Suppliers Micro Frontend</h1>
    </div>
  );
}
=======
import componentStyles from "./App.module.scss";
import PageNotFoundImage from "../public/15635884_5638965.jpg";

const App = () => {
  return (
    <div className={componentStyles["customers-and-suppliers-container"]}>
      <img
        className={componentStyles["customers-and-suppliers-page-not-found-image"]}
        src={PageNotFoundImage}
        alt="Page Not Found Image"
      />
    </div>
  );
};
>>>>>>> b4e4f22 (Sync routes across Micro Frontends)

export default App;
