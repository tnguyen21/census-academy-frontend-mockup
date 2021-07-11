import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Route, Router } from "react-router-dom";
import { history } from "./routing/history";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Route component={App} />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
