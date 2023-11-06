"use client";

import React, { FC } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import StyledButton from "@/components/styled-button";

const HomeAbout: FC = () => {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundImage: "url('/images/home-about-bg.svg')",
      }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box sx={{ position: "relative" }}>
              <Image
                src="/images/home-about.png"
                width={559}
                height={400}
                quality={97}
                alt="About img"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              component="h2"
              sx={{
                position: "relative",
                fontSize: { xs: 40, md: 50 },
                ml: { xs: 0, md: 4 },
                mt: 2,
                mb: 3,
                lineHeight: 1,
                fontWeight: "bold",
              }}
            >
              About the{" "}
              <Typography
                component="mark"
                sx={{
                  position: "relative",
                  color: "primary.main",
                  fontSize: "inherit",
                  fontWeight: "inherit",
                  backgroundColor: "unset",
                }}
              >
                Nigeria Start-up Act
              </Typography>
            </Typography>

            <Typography
              sx={{ color: "text.secondary", mb: 2, ml: { xs: 0, md: 4 } }}
            >
              The Nigerian Start-up Act 2022 provides incentives, structures
              and  programmes for Nigerian start-ups  to catalyse growth, create
              value and build a foundation to export tech-enabled services. The
              Act also creates the{" "}
              <strong>
                {" "}
                <em>
                  {" "}
                  National Council for Digital Innovation and Entrepreneurship{" "}
                </em>{" "}
              </strong>{" "}
              National Council for Digital Innovation and Entrepreneurship whose
              primary mandate is to align national policies for the development
              of start-ups and establish programmes to support tech-enabled
              start-ups in Nigeria.
            </Typography>
            <Box sx={{ mb: 2, ml: { xs: 0, md: 4 } }}>
              <StyledButton color="primary" size="large">
                Read More
              </StyledButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeAbout;
