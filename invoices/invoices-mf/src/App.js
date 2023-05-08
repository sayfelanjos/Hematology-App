import React from "react";
<<<<<<< HEAD
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <h1>Hi there!!!</h1>
      <h1>I am Invoices Micro Frontend!!!</h1>
=======
import componentStyles from "./App.module.scss";
import PageNotFoundImage from "./assets/images/7437895_32516.jpg";

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
>>>>>>> b4e4f22 (Sync routes across Micro Frontends)
    </div>
  );
}

export default App;
