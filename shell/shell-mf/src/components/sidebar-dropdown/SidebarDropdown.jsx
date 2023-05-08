import React from "react";
import { Link } from "@tanstack/react-location";
import componentsStyles from "./SidebarDropdown.module.scss";
import ListMarkerIcon from "../icons/ListMarkerIcon";

const SidebarDropdown = (props) => {
  return (
    <div className={componentsStyles["sidebar-dropdown-menu"]}>
      <ul className={componentsStyles["sidebar-dropdown-list"]}>
        {props.sidebarButtonAttributes.map((item) => (
          <div key={item.key} className={componentsStyles["sidebar-dropdown-list-item"]}>
            <Link className={componentsStyles["sidebar-dropdown-list-item-link"]} to={item.path}>
              <ListMarkerIcon />
              {item.action}
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SidebarDropdown;
