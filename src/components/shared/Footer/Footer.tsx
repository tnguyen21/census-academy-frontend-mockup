import React from "react";
import { Container, Grid } from "@material-ui/core";
import { StyledFooter } from "./style";

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <h2>Sign Up for Email Updates</h2>
            <p>
              To sign up for updates please enter your contact information below
            </p>
          </Grid>
          <Grid item xs={2}>
            <h2>Stay Current</h2>
          </Grid>
          <Grid item xs={2}>
            <h2>Stay Connected</h2>
          </Grid>
        </Grid>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
