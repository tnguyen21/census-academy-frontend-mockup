import React from "react";
import { Switch, Route } from "react-router-dom";
import { CssBaseline, Container } from "@material-ui/core";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import Breadcrumbs from "../shared/Breadcrumbs";
import ViewDataGems from "../DataGems/ViewDataGems";
import DataGem from "../DataGems/DataGem";
function App() {
  return (
    <>
      <CssBaseline>
        <Header />
        <Container>
          <Breadcrumbs />
          <Switch>
            <Route exact path="/">
              <h1>Landing Page</h1>
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
