import React from "react";
import styleComponents from "./SidebarButton.scss";
import { useNavigate } from "@tanstack/react-location";

const SidebarButton = (props) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate({ to: props.path, replace: true });
  };

  return (
    <button className={styleComponents["sidebar-button"]} onClick={onClick}>
      {props.action}
    </button>
  );
};

export default SidebarButton;
