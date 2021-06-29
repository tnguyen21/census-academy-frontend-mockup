import React from "react";
import { Grid } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import {
  LandingPageHeader,
  TopicLink,
  TopicCard,
  VideoWrapper,
  VideoPlayer,
} from "./styles";

function Landing() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Grid container>
          <LandingPageHeader>Hero</LandingPageHeader>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="space-between">
          <Grid item xs={12}>
            <LandingPageHeader>View by Topic</LandingPageHeader>
          </Grid>
          <Grid item xs={2}>
            <TopicLink href="#">
              <TopicCard>
                <img
                  src="https://via.placeholder.com/140x140"
                  alt="placehold svg"
                />
                <p>data.census.gov</p>
              </TopicCard>
            </TopicLink>
          </Grid>
          <Grid item xs={2}>
            <TopicLink href="#">
              <TopicCard>
                <img
                  src="https://via.placeholder.com/140x140"
                  alt="placehold svg"
                />
                <p>Geography</p>
              </TopicCard>
            </TopicLink>
          </Grid>
          <Grid item xs={2}>
            <TopicLink href="#">
              <TopicCard>
                <img
                  src="https://via.placeholder.com/140x140"
                  alt="placehold svg"
                />
                <p>Data Science & Visualization</p>
              </TopicCard>
            </TopicLink>
          </Grid>
          <Grid item xs={2}>
            <TopicLink href="#">
              <TopicCard>
                <img
                  src="https://via.placeholder.com/140x140"
                  alt="placehold svg"
                />
                <p>Population & Housing Characteristics</p>
              </TopicCard>
            </TopicLink>
          </Grid>
          <Grid item xs={2}>
            <TopicLink href="#">
              <TopicCard>
                <img
                  src="https://via.placeholder.com/140x140"
                  alt="placehold svg"
                />
                <p>Business & Economy</p>
              </TopicCard>
            </TopicLink>
          </Grid>
          <Grid item xs={2}>
            <TopicLink href="#">
              <TopicCard>
                <img
                  src="https://via.placeholder.com/140x140"
                  alt="placehold svg"
                />
                <p>Data Tools</p>
              </TopicCard>
            </TopicLink>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <LandingPageHeader>Data Gems</LandingPageHeader>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <LandingPageHeader>Courses</LandingPageHeader>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <LandingPageHeader>Upcoming Webinars</LandingPageHeader>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <LandingPageHeader>Welcome to Census Academy!</LandingPageHeader>
          <VideoWrapper>
            <VideoPlayer
              src="https://www.youtube.com/embed/QHQCbglb3FM"
              title="YouTube video player"
            ></VideoPlayer>
          </VideoWrapper>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Landing;
