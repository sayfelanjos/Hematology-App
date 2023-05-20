import React from "react";
import "./TableSearchContainer.scss";

function TableSearchContainer() {
  return (
    <div className="table-search-container">
      <input className="table-search-input" type={"search"}></input>
      <div className="table-search-dropdown"></div>
    </div>
  );
}

export default TableSearchContainer;
