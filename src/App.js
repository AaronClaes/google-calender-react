import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import CalendarScreen from "./screens/CalendarScreen";
import AuthWrapper from "./context/AuthWrapper";

import PrivateRoute from "./routes/PrivateRoute";
import HomeScreen from "./screens/HomeScreen";
import GithubLink from "./components/GithubLink";
import TestDatabaseScreen from "./screens/TestDatabaseScreen";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route path="/database">
            <TestDatabaseScreen />
          </Route>
          <PrivateRoute path="/calendar">
            <CalendarScreen />
          </PrivateRoute>
        </Switch>
        <GithubLink />
      </Router>
    </AuthWrapper>
  );
}

export default App;
