<<<<<<< HEAD
import React from "react";
import styles from "./Users.module.scss";
=======
import React, { Suspense } from "react";
import styles from "./Users.module.scss";
import themeColors from "../../styles/themes/_themes.module.scss";
>>>>>>> b4e4f22 (Sync routes across Micro Frontends)
const UsersModule = React.lazy(() => import("users/UsersModule"));

const Users = () => {
  return (
<<<<<<< HEAD
    <div className={styles["users-background"]}>
      <UsersModule />
=======
    <div
      className={`${styles["users-container"]} ${themeColors["blue-main-container-color-background"]}`}>
      <Suspense>
        <UsersModule onNavigate={() => console.log("The container Navigation in Users!!!")} />
      </Suspense>
>>>>>>> b4e4f22 (Sync routes across Micro Frontends)
    </div>
  );
};

export default Users;
