import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import CalendarScreen from "./screens/CalendarScreen";
import AuthWrapper from "./context/AuthWrapper";

import PrivateRoute from "./routes/PrivateRoute";
import HomeScreen from "./screens/HomeScreen";
import GithubLink from "./components/GithubLink";
import TestDatabaseScreen from "./screens/TestDatabaseScreen";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import DesktopOnly from "./screens/DesktopOnly";

function App() {
  return (
    <Fragment>
      <MobileView>
        <DesktopOnly />
      </MobileView>
      <BrowserView>
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
      </BrowserView>
    </Fragment>
  );
}

export default App;
