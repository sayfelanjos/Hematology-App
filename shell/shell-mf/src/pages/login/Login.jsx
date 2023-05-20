import React from "react";
import "./Login.scss";
import { Link } from "@tanstack/react-location";

const Login = () => {
  return (
    <div className="login-page-container">
      <div className="login-image-container">
        <img className="login-image" src={"/laboratory_01.jpeg"} alt="Login SearchSupply Image" />
      </div>
      <div className="login-form-container">
        <div className="login-form-main">
          <h1 className="login-form-header">Entrar na Aplicação</h1>
          <input
            className="login-form-email"
            type={"text"}
            placeholder={"Entre com o seu e-mail"}
          />
          <input
            className="login-form-password"
            type={"text"}
            placeholder={"Entre com a sua senha"}
          />
          <span className="login-form-forget-password-container">
            <Link className="login-form-forget-password-link" to={"/"}>
              Esqueceu sua senha?
            </Link>
          </span>
          <button className="login-form-button-enter">
            <span className="login-form-button-text">Entrar</span>
          </button>
          <button className="login-form-button-google">
            <img src={"/google-logo.svg"} height={24} width={24} alt={"Google Icon"}></img>
            <span className="login-form-button-text">Entrar com Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
