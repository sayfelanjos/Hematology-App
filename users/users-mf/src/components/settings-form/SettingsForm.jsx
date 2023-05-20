import React from "react";
import styles from "./SettingsForm.module.scss";
import FormHeader from "../form-header/FormHeader";
import TextInput from "../text-input/TextInput";

const SettingsForm = () => {
  return (
    <form className={styles["settings-form"]}>
      <FormHeader />
      <div className={styles["settings-form__row"]}>
        <TextInput />
        <TextInput />
        <TextInput />
      </div>
    </form>
  );
};
export default SettingsForm;
