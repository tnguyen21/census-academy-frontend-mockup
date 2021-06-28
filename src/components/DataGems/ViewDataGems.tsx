import React from "react";
import { Grid } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
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
  StyledSection,
  StyledParagraph,
  DataGemGrid,
  DataGemCardImage,
  DataGemCardLink,
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

function ViewDataGems() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={10}>
        <PageTitle>Data Gems</PageTitle>
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
      <Grid item xs={12}>
        <StyledSection>
          <StyledParagraph>
            Our team of experts is excited to share with you their favorite tips
            and tricks about how to access and use Census Bureau Data.
          </StyledParagraph>
          <StyledParagraph>
            So we created the Data Gems: a series of "how-to" videos available
            for data users who are looking for an easy and quick way to enhance
            their knowledge of Census data.
          </StyledParagraph>
          <StyledParagraph>
            They will introduce you to various concepts and techniques to
            improve your ability to navigate our website and use our data-access
            tools.
          </StyledParagraph>
          <StyledParagraph>
            We hope you find these Gems valuable! Drop us a line at{" "}
            <a href="mailto:census.academy@census.gov">
              census.academy@census.gov
            </a>{" "}
            and let us know what you think!
          </StyledParagraph>
        </StyledSection>
      </Grid>
      <Grid item xs={12}>
        <Pagination count={10} />
      </Grid>
      <DataGemGrid justify="space-between" container spacing={3}>
        {mockDataGemData.map((dataGem) => (
          <Grid item xs={3}>
            <DataGemCard
              slug={dataGem.slug}
              title={dataGem.title}
              imageLink={dataGem.img}
            />
          </Grid>
        ))}
      </DataGemGrid>
    </Grid>
  );
}

export default ViewDataGems;
