import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";

function App() {
  return (
    <Container>
      <Switch>
        <Route exact path="/">
          <h1>Landing Page</h1>
        </Route>
        <Route path="/data-gems">
          <h1>Data Gems</h1>
        </Route>
        <Route path="/webinars">
          <h1>Webinars</h1>
        </Route>
        <Route path="/courses">
          <h1>Courses</h1>
        </Route>
        <Route path="/resources">
          <h1>Resources</h1>
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
