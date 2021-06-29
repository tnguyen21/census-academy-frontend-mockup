import React from "react";
import { Switch, Route } from "react-router-dom";
import { CssBaseline, Container } from "@material-ui/core";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import Breadcrumbs from "../shared/Breadcrumbs";
import ViewDataGems from "../DataGems/ViewDataGems";
import DataGem from "../DataGems/DataGem";
import Landing from "../Landing";

function App() {
  return (
    <>
      <CssBaseline>
        <Header />
        <Container>
          <Breadcrumbs />
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route path="/data-gems/:slug">
              <DataGem />
            </Route>
            <Route path="/data-gems">
              <ViewDataGems />
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
        <Footer />
      </CssBaseline>
    </>
  );
}

export default App;
