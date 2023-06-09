import React from "react";
import styleComponent from "./ListMarkerIcon.module.scss";
const ListMarkerIcon = () => {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle id={styleComponent["list-marker-icon"]} transform="matrix(1 0 0 -1 0 10)" />
    </svg>
  );
};
export default ListMarkerIcon;
