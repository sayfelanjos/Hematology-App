import React from "react";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={styles["login-page-container"]}>
      <div className={styles["login-image-container"]}>
        <img
          className={styles["login-image"]}
          src={"/laboratory_01.jpeg"}
          alt="Login Supplies Image"
        />
      </div>
      <div className={styles["login-form-container"]}>
        <div className={styles["login-form-main"]}>
          <h1 className={styles["login-form-header"]}>Entrar na Aplicação</h1>
          <input
            className={styles["login-form-email"]}
            type={"text"}
            placeholder={"Entre com o seu e-mail"}
          />
          <input
            className={styles["login-form-password"]}
            type={"text"}
            placeholder={"Entre com a sua senha"}
          />
          <span className={styles["login-form-forget-password-container"]}>
            <Link className={styles["login-form-forget-password-link"]} to={"/"}>
              Esqueceu sua senha?
            </Link>
          </span>
          <button className={styles["login-form-button-enter"]}>
            <span className={styles["login-form-button-text"]}>Entrar</span>
          </button>
          <button className={styles["login-form-button-google"]}>
            <img src={"/google-logo.svg"} height={24} width={24} alt={"Google Icon"}></img>
            <span className={styles["login-form-button-text"]}>Entrar com Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
