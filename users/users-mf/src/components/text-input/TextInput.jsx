import React from "react";
import styles from "./TextInput.module.scss";

const TextInput = (props) => {
  return (
    <div className={styles["text-input"]}>
      <label className={`${styles["text-input__label"]} ${styles["three"]}`}>
        <input type="text" className={styles["text-input__widget"]} required />
        <span className={styles["text-input__placeholder"]}>{props.label}</span>
        <span className={styles["text-input__border"]}></span>
      </label>
    </div>
  );
};

export default TextInput;
