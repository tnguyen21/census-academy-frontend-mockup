import React from "react";
import { Container, Grid } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  StyledFooter,
  FooterHeader,
  FooterLinks,
  LinkItem,
  Link,
  Span,
  Slogan,
  OutboundLinks,
  CenteredIcon,
} from "./style";

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <h2>Sign Up for Email Updates</h2>
            <p>
              To sign up for updates please enter your contact information below
            </p>
            <div>Email Subscription Here</div>
          </Grid>
          <Grid item xs={2}>
            <FooterHeader>Stay Current</FooterHeader>
            {/* TODO check this for accessibility */}
            <FooterLinks>
              <LinkItem>
                <Link href="https://www.census.gov/newsroom.html">
                  Newsroom
                </Link>
              </LinkItem>
              <LinkItem>
                <Link href="https://www.census.gov/library/stories.html">
                  America Counts
                </Link>
              </LinkItem>
              <LinkItem>
                <Link href="https://www.census.gov/newsroom/blogs.html">
                  Blogs
                </Link>
              </LinkItem>
              <LinkItem>
                <Link href="https://www.census.gov/newsroom/stories.html">
                  Stats for Stories
                </Link>
              </LinkItem>
            </FooterLinks>
          </Grid>
          <Grid item xs={2}>
            <h2>Stay Connected</h2>
            <Grid container spacing={2}>
              <CenteredIcon item xs={4}>
                <Link href="#">
                  <FontAwesomeIcon icon={faFacebookF} />
                </Link>
              </CenteredIcon>
              <CenteredIcon item xs={4}>
                <Link href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </CenteredIcon>
              <CenteredIcon item xs={4}>
                <Link href="#">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </Link>
              </CenteredIcon>
              <CenteredIcon item xs={6}>
                <Link href="#">
                  <FontAwesomeIcon icon={faYoutube} />
                </Link>
              </CenteredIcon>
              <CenteredIcon item xs={6}>
                <Link href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </CenteredIcon>
            </Grid>
          </Grid>
        </Grid>
        <OutboundLinks justify="center" container spacing={2}>
          <Link href="#">Census Jobs</Link>
          <Span>|</Span>
          <Link href="#">Information Quality</Link>
          <Span>|</Span>
          <Link href="#">Data Linkage Infrastructure</Link>
          <Span>|</Span>
          <Link href="#">Data Protection and Privacy Policy</Link>
          <Span>|</Span>
          <Link href="#">Accessibility</Link>
          <Span>|</Span>
          <Link href="#">FOIA</Link>
          <Span>|</Span>
          <Link href="#">U.S. Department of Commerce</Link>
          <Span>|</Span>
          <Link href="#">USA.gov</Link>
        </OutboundLinks>
        <Grid justify="center" container spacing={2}>
          <Slogan>Measuring America's People, Places, and Economy</Slogan>
        </Grid>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
