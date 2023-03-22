"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./SidebarModuleButton.module.scss";

const SidebarMenuButton = (props: MenuButton) => {
  return (
    <>
      <Link
        className={
          props.isPressed
            ? styles["sidebar-module-button-pressed"]
            : styles["sidebar-module-button-enabled"]
        }
        onClick={props.toggleStateFunction}
        href={props.pageUrl}
      >
        <Image
          src={props.icon}
          alt="Sidebar menu icon"
          width={36}
          height={36}
        />
        {props.moduleName}
      </Link>
    </>
  );
};

export default SidebarMenuButton;
