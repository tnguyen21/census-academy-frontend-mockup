import React from "react";
import { Grid } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  PageTitle,
  SocialBanner,
  SocialShareLink,
  PublishedDate,
  StyledSection,
  StyledParagraph,
  VideoWrapper,
  VideoPlayer,
  DataGemInfoSection,
  DataGemInfoSectionHeader,
  DataGemInfoSectionParagraph,
  DataGemGrid,
  DataGemCardLink,
  DataGemCardImage,
} from "./styles";

import { mockDataGemData } from "./temp";

function DataGemCard({
  slug,
  title,
  imageLink,
}: {
  slug: string;
  title: string;
  imageLink: string;
}) {
  return (
    <a href={"/#/data-gems/" + slug}>
      <DataGemCardLink>
        <DataGemCardImage src={imageLink} alt="Data Gem" />
        <p>{title}</p>
      </DataGemCardLink>
    </a>
  );
}

const exampleDataGemData = {
  title: "How to Visualize your Data Using Thematic Maps on data.census.gov",
  publishedDate: "January 19, 2021",
  // in prod, content would likely be some kind of rich text that we
  // would need to parse before we put into the DOM
  content:
    "You found your data, now let's create a thematic map! Follow along with this Data Gem, where we show you just how quick and easy it is to create a visualization from a table on data.census.gov.",
  videoLink: "https://youtu.be/KKwsxEh6ImI",
};

function DataGem() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={10}>
        <PageTitle>Data Gems: {exampleDataGemData.title}</PageTitle>
      </Grid>
      <Grid item xs={2}>
        <SocialBanner justify="space-between" container spacing={3}>
          <Grid item xs={1}>
            <SocialShareLink href="#">
              <FontAwesomeIcon icon={faFacebookF} />
            </SocialShareLink>
          </Grid>
          <Grid item xs={1}>
            <SocialShareLink href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </SocialShareLink>
          </Grid>
          <Grid item xs={1}>
            <SocialShareLink href="#">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </SocialShareLink>
          </Grid>
        </SocialBanner>
      </Grid>
      <PublishedDate item xs={12}>
        {exampleDataGemData.publishedDate}
      </PublishedDate>
      <Grid item xs={12}>
        <StyledSection>
          <StyledParagraph>{exampleDataGemData.content}</StyledParagraph>
        </StyledSection>
      </Grid>
      <Grid item container xs={12}>
        <VideoWrapper>
          <VideoPlayer
            src={`https://www.youtube.com/embed/${exampleDataGemData.videoLink
              .split("/")
              .pop()}`}
            title="YouTube video player"
          ></VideoPlayer>
        </VideoWrapper>
      </Grid>
      <Grid item container xs={12}>
        <DataGemInfoSection>
          <DataGemInfoSectionHeader>Data Gems</DataGemInfoSectionHeader>
          <DataGemInfoSectionParagraph>
            A series of "how-to" videos available for data users who are looking
            for an easy and quick way to enhance their knowledge of Census data.
          </DataGemInfoSectionParagraph>
          <DataGemInfoSectionParagraph>
            They will introduce you to various concepts and techniques to
            improve your ability to navigate our website and use our data-access
            tools.
          </DataGemInfoSectionParagraph>
        </DataGemInfoSection>
      </Grid>
      <Grid item container xs={12}>
        <DataGemInfoSectionHeader>Recently Released</DataGemInfoSectionHeader>
      </Grid>
      <Grid item container xs={12}>
        <DataGemGrid justify="space-between" container spacing={3}>
          {mockDataGemData.slice(5).map((dataGem) => (
            <Grid item xs={3}>
              <DataGemCard
                title={dataGem.title}
                imageLink={dataGem.img}
                slug={dataGem.slug}
              />
            </Grid>
          ))}
        </DataGemGrid>
      </Grid>
    </Grid>
  );
}

export default DataGem;
