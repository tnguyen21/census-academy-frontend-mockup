import React from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { StyledBreadcrumbs, BreadcrumbLink } from "./style";

// custom breadcrumbs for certain routes
const routes = [
  { path: "/", breadcrumb: "Census Academy" },
  { path: "/data-gems", breadcrumb: "Data Gems" },
  { path: "/data-challenges", breadcrumb: "Data Challenges" },
];

function Breadcrumbs() {
  const breadcrumbs = useBreadcrumbs(routes);
  return (
    <StyledBreadcrumbs aria-label="breadcrumb" separator=">">
      <BreadcrumbLink to="#">Census.gov</BreadcrumbLink>
      <BreadcrumbLink to="#">Data</BreadcrumbLink>

      {breadcrumbs.map(({ match, breadcrumb }) => (
        <BreadcrumbLink to={match.url} key={match.url}>
          {breadcrumb}
        </BreadcrumbLink>
      ))}
    </StyledBreadcrumbs>
  );
}

export default Breadcrumbs;
