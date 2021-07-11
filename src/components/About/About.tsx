import React from "react";
import styled from "styled-components";
import { Grid, Button } from "@material-ui/core";
import Breadcrumbs from "../shared/Breadcrumbs";

const StyledButton = styled(Button)`
  background-color: hsl(186deg 100% 29%);
  color: white;

  &:hover {
    background-color: hsl(186deg 100% 29%);
  }
`;

const CallToActionBox = styled.div`
  border: 2px solid hsl(213 65% 19%);
  border-radius: 5px;
  padding: 16px;
`;

function About() {
  return (
    <>
      <Breadcrumbs />
      <Grid justify-content="space-between" container xs={12}>
        <Grid item xs={12} md={8}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/QHQCbglb3FM"
            title="YouTube video player for Census Academy"
          ></iframe>
        </Grid>
        <Grid item xs={12} md={4}>
          <CallToActionBox>
            <h2>Meet one on one with our Census Academy team</h2>
            <p>
              Get personalized support and insider informatino by setting up an
              appointment with our experienced data analysts and technicians.
              This service is free for all interested data users.
            </p>
            <StyledButton variant="contained">
              Request Data Training
            </StyledButton>
          </CallToActionBox>
        </Grid>
        <Grid item xs={12}>
          <div>
            <h1>About Census Academy</h1>
            <h2>Mission Statement</h2>
            <p>
              The Census Academy team is your virtual hub for learning data
              skills. We are made of a team that aims to give free, accessible
              data resources, information, and courses to all level of data
              users.
            </p>
            <h2>Our Materials</h2>
            <p>
              Our team of experts is excited to share with you their favorite
              tips and tricks about how to access and use Census Bureau Data.
              Our materials will introduce you to various concepts and
              techniques to improve your ability to navigate our website and use
              our data-access tools.
            </p>
            <p>
              Drop us a line at{" "}
              <a href="mailto: census.academy@census.gov">
                census.academy@census.gov
              </a>{" "}
              to let use us know what you think.
            </p>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default About;
