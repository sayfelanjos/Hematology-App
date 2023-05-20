import React from "react";
import styles from "./PasswordForm.module.scss";
import TextInput from "../text-input/TextInput";
import FormHeader from "../form-header/FormHeader";

const PasswordForm = () => {
  return (
    <form className={styles["password-form"]}>
      <FormHeader />
      <div className={styles["password-form__row"]}>
        <TextInput />
        <TextInput />
        <TextInput />
      </div>
    </form>
  );
};

export default PasswordForm;
