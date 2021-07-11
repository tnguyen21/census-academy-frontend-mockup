import React from "react";
import { Switch, Route } from "react-router-dom";
import { CssBaseline, Container } from "@material-ui/core";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import Landing from "../Landing";
import Topics from "../Topics";
import Courses from "../Courses";
import Webinars from "../Webinars";
import DataGems from "../DataGems";
import DataChallenges from "../DataChallenges";
import Resources from "../Resources";
import About from "../About";

function App() {
  return (
    <>
      <CssBaseline>
        <Header />
        <Container>
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route path="/topics">
              <Topics />
            </Route>
            <Route path="/courses">
              <Courses />
            </Route>
            <Route path="/webinars">
              <Webinars />
            </Route>
            <Route path="/data-gems">
              <DataGems />
            </Route>
            <Route path="/data-challenges">
              <DataChallenges />
            </Route>
            <Route path="/resources">
              <Resources />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </Container>
        <Footer />
      </CssBaseline>
    </>
  );
}

export default App;
