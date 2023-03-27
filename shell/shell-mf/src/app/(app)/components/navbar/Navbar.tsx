"use client";
import React from "react";
import styles from "./Navbar.module.scss";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className={styles["navbar-container"]}>
      <div className={styles["navbar-icons-container"]}>
        <Image
          src={"/Icon=sidebar-left-collapse.svg"}
          alt={"Button to close drawer"}
          height={28}
          width={28}
        ></Image>
        <Image
          src={"/Icon=navbar-settings-icon.svg"}
          alt={"Settings Button"}
          height={24}
          width={24}
        ></Image>
      </div>
      <div className={styles["navbar-user-photo-container"]}>
        <Image
          className={styles["navbar-user-photo"]}
          src={"/woman-avatar-small.jpg"}
          alt={"User Photo"}
          height={48}
          width={48}
        ></Image>
      </div>
      {/*<span className={styles["navbar-user-name"]}>Fulana de Tal</span>*/}
    </div>
  );
};

export default NavBar;
