import React from "react";
import styles from "./FormHeader.module.scss";

const FormHeader = () => {
  return (
    <div className={styles["form-header"]}>
      <h6 className={styles["form-header__text"]}>Informações Pessoais</h6>
    </div>
  );
};

export default FormHeader;
