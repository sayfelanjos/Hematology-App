import React from "react";
import styles from "./Card.module.scss";
import avatar from "../../assets/images/woman-avatar-small.jpg";
import { Link } from "@tanstack/react-location";
// import Avatar from "../avatar/Avatar";

const Card = () => {
  return (
    <div className={styles["card"]}>
      <div className={styles["card__three-dots-button-box"]}>
        <button className={styles["card__three-dots-button"]}></button>
      </div>
      <div className={styles["card__user-photo-box"]}>
        {/*<Avatar />*/}
        <img src={avatar} alt="User Photo" className={styles["card__user-photo"]} />
        <h6 className={styles["card__user-name"]}>Julia Cara de Sapato</h6>
        <p className={styles["card__user-designation"]}>Full Stack Developer</p>
        <div className={styles["card__social-medias-icons"]}>
          <svg width="32" height="32" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <rect
              x="0"
              y="0"
              rx="15"
              ry="15"
              width="32"
              height="32"
              stroke="black"
              fill="transparent"
              strokeWidth="5"
            />
          </svg>
          <svg width="32" height="32" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <rect
              x="0"
              y="0"
              rx="15"
              ry="15"
              width="32"
              height="32"
              stroke="black"
              fill="transparent"
              strokeWidth="5"
            />
          </svg>
          <svg width="32" height="32" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <rect
              x="0"
              y="0"
              rx="15"
              ry="15"
              width="32"
              height="32"
              stroke="black"
              fill="transparent"
              strokeWidth="5"
            />
          </svg>
        </div>
      </div>
      <nav className={styles["card__menu"]}>
        <div className={styles["card__menu-item"]}>
          <Link className={styles["card__menu-item-link"]} to={"/profile/personal"}>
            Informações Pessoais
          </Link>
        </div>
        <div className={styles["card__menu-item"]}>
          <Link className={styles["card__menu-item-link"]} to={"/profile/password"}>
            Mudar Senha
          </Link>
        </div>
        <div className={styles["card__menu-item"]}>
          <Link className={styles["card__menu-item-link"]} to={"/profile/settings"}>
            Configurações
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Card;
