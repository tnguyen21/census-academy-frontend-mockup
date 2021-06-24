import styled from "styled-components";
import { Link } from "react-router-dom";
import { Grid, InputBase } from "@material-ui/core";

export const StyledHeader = styled.header`
  background: hsl(213 65% 19%);
`;

export const StyledSearchInput = styled(InputBase)`
  color: white;
  padding-left: calc(1em + 32px);
`;

export const StyledNavbar = styled(Grid)`
  border-top: thin solid hsl(213deg 28% 35%);
`;

export const StyledLink = styled(Link)`
  color: white;
  font-weight: 500;
  text-decoration: none;
  display: inline-block;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: white;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export const Logo = styled.img`
  height: 43px;
  margin-top: 8px;
`;
