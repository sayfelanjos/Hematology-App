import React from "react";
<<<<<<< HEAD
import TableContainer from "@sayfelanjos/hematology-app/libs/TableContainer";
import AppHeader from "@sayfelanjos/hematology-app/libs/AppHeader";
import "./App.module.scss";

function App() {
  return (
    <>
      <AppHeader />
      <TableContainer />
    </>
=======
import componentStyles from "./App.module.scss";
import PageNotFoundImage from "../public/10172655_8349.jpg";

function App() {
  return (
    <div className={componentStyles["users-container"]}>
      <img
        className={componentStyles["users-page-not-found-image"]}
        src={PageNotFoundImage}
        alt="Page Not Found"
      />
    </div>
>>>>>>> b4e4f22 (Sync routes across Micro Frontends)
  );
}

export default App;
