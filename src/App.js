import React, { Fragment, useState, useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import CalendarScreen from "./screens/CalendarScreen";
import SigninScreen from "./screens/SigninScreen";
import AuthWrapper from "./context/AuthWrapper";

import PrivateRoute from "./routes/PrivateRoute";
import { auth } from "./firebase";
import AuthContext from "./context/AuthContext";

function App() {
  const { setUser } = useContext(AuthContext);

  return (
    <AuthWrapper>
      <Router>
        <Switch>
          <Route exact path="/">
            <h1>PUBLIC PAGE</h1>
          </Route>
          <Route path="/signin">
            <SigninScreen />
          </Route>
          <PrivateRoute path="/calendar">
            <CalendarScreen />
          </PrivateRoute>
        </Switch>
      </Router>
    </AuthWrapper>
  );
}

export default App;
