import styled from "styled-components";
import { Grid } from "@material-ui/core";

export const PageTitle = styled.h1`
  font-size: 2.8125rem;
  color: hsl(213deg 65% 19%);
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
