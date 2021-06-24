import React from "react";
import { Container, Grid } from "@material-ui/core";
import { StyledHeader, StyledNavbar, StyledLink, Logo } from "./style";
import logo from "../../../assets/us-census-bureau-logo-white.svg";

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Grid justify="space-between" container spacing={3}>
          <Grid item xs={4} role="banner">
            <Logo src={logo} alt="United States Census Bureau Logo" />
          </Grid>
          {/* TODO search bar logic + styles */}
          <Grid
            item
            xs={8}
            style={{
              fontSize: "1.25rem",
              color: "white",
              textAlign: "center",
              borderLeft: "thin solid hsl(213deg 28% 35%)",
            }}
          >
            Search Bar Here
          </Grid>
          <StyledNavbar item container xs={12}>
            <Grid
              item
              component="nav"
              justify="space-between"
              container
              role="navigation"
            >
              <Grid item component={StyledLink} to="/">
                Home
              </Grid>
              <Grid item component={StyledLink} to="/topics">
                Topics
              </Grid>
              <Grid item component={StyledLink} to="/courses">
                Courses
              </Grid>
              <Grid item component={StyledLink} to="/webinars">
                Webinars
              </Grid>
              <Grid item component={StyledLink} to="/data-gems">
                Data Gems
              </Grid>
              <Grid item component={StyledLink} to="/data-challenges">
                Data Challenges
              </Grid>
              {/* TODO set up user accounts, dashaboard only becomes visible when logged in */}
              {/* <Grid item>
                  <Link to="/">Dashboard</Link>
                </Grid> */}
              <Grid item component={StyledLink} to="/resources">
                Resources
              </Grid>
              <Grid item component={StyledLink} to="/about">
                About
              </Grid>
            </Grid>
          </StyledNavbar>
        </Grid>
      </Container>
    </StyledHeader>
  );
}

export default Header;
