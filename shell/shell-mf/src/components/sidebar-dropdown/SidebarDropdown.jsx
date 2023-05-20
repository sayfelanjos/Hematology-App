import React from "react";
import { Link } from "@tanstack/react-location";
import "./SidebarDropdown.scss";
import ListMarkerIcon from "../../icons/ListMarkerIcon";

const SidebarDropdown = (props) => {
  return (
    <div className="sidebar-dropdown-menu">
      <ul className="sidebar-dropdown-list">
        {props.sidebarButtonAttributes.map((item) => (
          <div key={item.key} className="sidebar-dropdown-list-item">
            <Link className="sidebar-dropdown-list-item-link" to={item.path}>
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
