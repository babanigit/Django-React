import { Navigate, Navigation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import api from "../files/api";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../files/constants";
import React, { Children, useState } from "react";

const ProtectedRoutes = ( { children }: { children: React.ReactNode } ) => {
  const [isAuthorized, setIsAuthorized] = useState(null);

  const refreshToken = async () => {};
  const auth = async () => {};

  if (isAuthorized == null) {
    return <div> Loading... </div>;
  }

  return isAuthorized ? <> {children} </> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
