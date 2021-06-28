import styled from "styled-components";
import { Grid } from "@material-ui/core";

export const PageTitle = styled.h1`
  && {
    margin-bottom: 8px;
    font-size: 2.8125rem;
    color: hsl(213deg 65% 19%);
  }
`;

export const SocialBanner = styled(Grid)`
  && {
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-size: 1.25rem;
    padding-right: 100px;
  }
`;

export const SocialShareLink = styled.a`
  color: hsl(213 65% 19%);
`;

export const StyledSection = styled.section`
  max-width: 90%;
`;

export const StyledParagraph = styled.p`
  margin-top: 0px;
  margin-bottom: 8px;
  line-height: 1.4;
  font-family: Lora serif;
  font-size: 1.25rem;
`;

export const DataGemGrid = styled(Grid)`
  && {
    margin-bottom: 16px;
    max-width: 80%;
  }
`;

export const DataGemCardImage = styled.img`
  width: 100%;
`;

export const DataGemCardLink = styled.div`
  border: solid thin black;
  max-width: 202px;

  &:hover {
    outline: 5px solid hsl(186deg 49% 66%);
  }
`;

export const PublishedDate = styled(Grid)`
  && {
    margin: 0px;
    font-size: 0.8rem;
    color: hsl(199deg 19% 36%);
    text-transform: uppercase;
  }
`;

export const VideoWrapper = styled.div`
  position: relative;
  margin: 0px auto 16px;
  padding-bottom: 50%;
  width: 80%;
`;

export const VideoPlayer = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const DataGemInfoSection = styled.section`
  margin: 8px auto 16px;
  padding: 4% 5%;
  background: hsl(210deg 14% 92%);
`;

export const DataGemInfoSectionHeader = styled.h2`
  color: hsl(213deg 65% 19%);
  font-size: 2.125rem;
  font-weight: 400;
`;

export const DataGemInfoSectionParagraph = styled.p`
  color: hsl(213deg 65% 19%);
  font-size: 1.125rem;
  margin-top: 0px;
  margin-bottom: 8px;
  line-height: 1.4;
`;
