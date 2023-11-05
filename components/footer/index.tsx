"use client";

import React, { FC } from "react";
import Box from "@mui/material/Box";
import MuiLink from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FooterNavigation from "./footer-navigation";
import FooterSectionTitle from "./footer-section-title";
import Logo from "../logo";
import FooterSocialLinks from "./footer-social-links";
import StyledButton from "../styled-button";
import {
  HomeOutlined,
  Mail,
  MailOutline,
  PhoneOutlined,
} from "@mui/icons-material";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "background.paper",
        py: { xs: 6, md: 6 },
        color: "text.secondary",
      }}
    >
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} md={4}>
            <Box sx={{ width: { xs: "100%", md: 360 }, mb: { xs: 3, md: 0 } }}>
              <Logo />
              <Typography
                sx={{
                  letterSpacing: 0,
                  mb: 2,
                  fontSize: { xs: "1.2rem", md: "0.9rem" },
                }}
              >
                The Start-up Support and Engagement Portal is a one-stop portal
                that provides start-ups with easy access to registrations,
                access to information, resources, incentives, collaboration and
                linkages.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <FooterNavigation />
          </Grid>
          <Grid item xs={12} md={2}>
            <Box sx={{ width: { xs: "100%", md: 360 }, mb: { xs: 3, md: 0 } }}>
              <StyledButton color="dark">Download Start-up Act</StyledButton>
              <Box mt={2} />
              <Typography
                sx={{
                  letterSpacing: 0,
                  mb: 2,
                  fontSize: { xs: "1.2rem", md: "0.9rem" },
                  display: "flex",
                  alignItems: "center", // Align the items vertically
                }}
              >
                <HomeOutlined sx={{ marginRight: "8px" }} />{" "}
                {/* Add margin to the right of the icon */}
                Plot 790, Alimoh-Abu Street, Behind VIO Yard, Wuye District,
                Abuja, Nigeria
              </Typography>

              <Typography
                sx={{
                  letterSpacing: 1,
                  mb: 2,
                  fontSize: { xs: "1.2rem", md: "0.9rem" },
                  display: "flex",
                  alignItems: "center", // Align the items vertically
                }}
              >
                <MailOutline sx={{ marginRight: "8px" }} />{" "}
                {/* Add margin to the right of the icon */}
                <Link href="mailto:ondi@nitda.gov.ng" passHref>
                  <MuiLink
                    underline="hover"
                    sx={{
                      display: "block",
                      mb: 1,
                      color: "text.primary",
                      fontSize: { xs: "1.2rem", md: "0.9rem" },
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    ondi@nitda.gov.ng
                  </MuiLink>
                </Link>
              </Typography>

              <FooterSocialLinks />
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={1}>
          <Grid item xs={12} md={12}>
            <Box
              sx={{
                width: { xs: "100%", md: "100%" },
                mb: { xs: 3, md: 0 },
                display: "flex",
                justifyContent: "center", // Center content horizontally
                alignItems: "center", // Center content vertically
              }}
            >
              <Typography
                sx={{
                  letterSpacing: 0,
                  mt: 5,
                  fontWeight: 600,
                  fontSize: { xs: "1.2rem", md: "0.9rem" },
                }}
              >
                &copy; Copyrights {new Date().getFullYear()} | Nigeria Start-up
                Act
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
