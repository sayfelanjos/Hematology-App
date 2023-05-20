import React, { Suspense } from "react";
import Wrapper from "../../components/wrapper/wrapper";
const UsersModule = React.lazy(() => import("users/UsersModule"));

const Users = () => {
  return (
    <Wrapper>
      <Suspense>
        <UsersModule onNavigate={() => console.log("The container Navigation in Users!!!")} />
      </Suspense>
    </Wrapper>
  );
};

export default Users;
