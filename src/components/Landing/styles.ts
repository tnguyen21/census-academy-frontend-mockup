import styled from "styled-components";

export const LandingPageHeader = styled.h2`
  && {
    margin: 20px 0px 10px;
    font-family: "Roboto", sans-serif;
    font-size: 2.125rem;
    letter-spacing: 0;
    font-weight: 400;
  }
`;

export const TopicLink = styled.a`
  font-size: 1.125rem;
  text-decoration: none;
  color: hsl(186deg 100% 29%);

  &:hover {
    text-decoration: underline;
  }
`;

export const TopicCard = styled.div`
  text-align: center;
`;

export const VideoWrapper = styled.div`
  position: relative;
  margin: 0px auto 16px;
  padding-bottom: 40%;
  width: 70%;
`;

export const VideoPlayer = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
