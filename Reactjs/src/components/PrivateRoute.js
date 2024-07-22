import React from "react";
import { Outlet ,useNavigate} from "react-router-dom";
import { isLoggedIn } from "./auth.js";

const PrivateRoute = () => {
  const navigation = useNavigate();
// console.log(isLoggedIdn());
  // const isLoggedIn = false;
  if (isLoggedIn()) {
    return <Outlet />;
  } else {
    return <>{navigation("/login")}</>;
  }
};

export default PrivateRoute;
