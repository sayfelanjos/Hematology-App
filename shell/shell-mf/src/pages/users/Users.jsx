import React, { Suspense } from "react";
import styles from "./Users.module.scss";
const UsersModule = React.lazy(() => import("users/UsersModule"));

const Users = () => {
  return (
    <div className={styles["supplies-background"]}>
      <Suspense>
        <UsersModule />
      </Suspense>
    </div>
  );
};

export default Users;
