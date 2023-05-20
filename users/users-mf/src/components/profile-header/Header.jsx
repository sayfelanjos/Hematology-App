import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles["users-header"]}>
      <h6 className={styles["users-header__breadcrumb"]}>Home/Insumos/Consultar</h6>
      <h1 className={styles["users-header__module-name"]}>Insumos-Lista</h1>
    </div>
  );
};

export default Header;
