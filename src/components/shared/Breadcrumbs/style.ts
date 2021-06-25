import styled from "styled-components";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "@material-ui/core";

export const StyledBreadcrumbs = styled(Breadcrumbs)`
  && {
    margin-top: 16px;
    margin-bottom: 32px;
  }
`;

export const BreadcrumbLink = styled(Link)`
  color: blue;
  text-decoration: none;
  color: hsl(213deg 65% 19%);
  &:hover {
    text-decoration: underline;
  }
`;
