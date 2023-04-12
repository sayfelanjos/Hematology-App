import React from "react";
import styles from "./Users.module.scss";
const UsersModule = React.lazy(() => import("users/UsersModule"));

const Users = () => {
  return (
    <div className={styles["users-background"]}>
      <UsersModule />
    </div>
  );
};

export default Users;
