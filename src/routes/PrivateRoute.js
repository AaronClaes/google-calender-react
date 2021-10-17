import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import Loading from "../components/Loading";
import AuthContext from "../context/AuthContext";

function PrivateRoute({ children, ...rest }) {
  const { user, loadingAuth } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return loadingAuth ? (
          <Loading />
        ) : user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}

export default PrivateRoute;
