import React from "react";
import styles from "./Users.module.scss";
import themeColors from "../../styles/themes/_themes.module.scss";
const UsersModule = React.lazy(() => import("users/UsersModule"));

const Users = () => {
  return (
    <div
      className={`${styles["users-container"]} ${themeColors["blue-main-container-color-background"]}`}>
      <UsersModule onNavigate={() => console.log("The container Navigation in Users!!!")} />
    </div>
  );
};

export default Users;
