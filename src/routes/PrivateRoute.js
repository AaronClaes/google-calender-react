import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../auth";
import AuthContext from "../context/AuthContext";

function PrivateRoute({ children, ...rest }) {
  const { user, loadingAuth } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return loadingAuth ? (
          <h1>loading</h1>
        ) : user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}

export default PrivateRoute;
