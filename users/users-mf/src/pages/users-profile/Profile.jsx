import React from "react";
import styles from "./Profile.module.scss";
import Header from "../../components/profile-header/Header";
import Card from "../../components/card/Card";
import { Outlet } from "@tanstack/react-location";

const Profile = () => {
  return (
    <div className={styles["user-profile"]}>
      <Header />
      <main className={styles["user-profile__main-content"]}>
        <Card />
        <Outlet />
      </main>
    </div>
  );
};

export default Profile;
