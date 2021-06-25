import styled from "styled-components";
import { Grid } from "@material-ui/core";

export const StyledFooter = styled.footer`
  background: hsl(213 65% 19%);
  color: white;
`;

export const FooterHeader = styled.h2`
  margin-bottom: 8px;
`;

export const FooterLinks = styled.ul`
  margin: 0;
  padding: 0;
`;

export const LinkItem = styled.li`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const Link = styled.a`
  color: white;
  font-weight: 500;
  text-decoration: none;
  line-height: 1.8;
  &:hover {
    text-decoration: underline;
  }
`;

export const Span = styled.span`
  margin: 0px 6px;
`;

export const Slogan = styled.p`
  font-size: 1.25rem;
`;

export const OutboundLinks = styled(Grid)`
  && {
    padding-bottom: 16px;
    margin: 32px 0px 8px;
    border-bottom: thin solid hsl(213deg 28% 35%);
  }
`;

export const CenteredIcon = styled(Grid)`
  font-size: 1.5rem;
  text-align: center;
`;
