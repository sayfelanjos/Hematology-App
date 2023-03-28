import React from "react";
import styles from "./WidgetNumber.module.scss";
import Image from "next/image";

const WidgetNumber = () => {
  return (
    <div className={styles["widget-number-container"]}>
      <header className={styles["widget-number-header"]}></header>
      <div className={styles["widget-number-content"]}>
        <span></span>
        <Image
          src={"/mini-arrow-graph-up.svg"}
          alt={"Widget Arrow Graph"}
          height={27}
          width={72}
        ></Image>
      </div>
      <footer className={styles["widget-number-footer"]}></footer>
    </div>
  );
};

export default WidgetNumber;