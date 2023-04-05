import React from "react";
import styles from "./Navbar.module.scss";

const NavBar = () => {
  return (
    <div className={styles["navbar-container"]}>
      <div className={styles["navbar-icons-container"]}>
        <img
          src={"/Icon=sidebar-left-collapse.svg"}
          alt={"Button to close drawer"}
          height={28}
          width={28}></img>
        <img
          src={"/Icon=navbar-settings-icon.svg"}
          alt={"Settings Button"}
          height={24}
          width={24}></img>
      </div>
      <div className={styles["navbar-user-photo-container"]}>
        <img
          className={styles["navbar-user-photo"]}
          src={"/woman-avatar-small.jpg"}
          alt={"User Photo"}
          height={48}
          width={48}></img>
      </div>
    </div>
  );
};

export default NavBar;
