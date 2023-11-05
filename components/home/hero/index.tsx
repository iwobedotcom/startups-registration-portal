"use client";

import React, { FC } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link as ScrollLink } from "react-scroll";
import StyledButton from "@/components/styled-button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { relative } from "path";

interface Exp {
  label: string;
  value: string;
  color: string;
}
interface ExpItemProps {
  item: Exp;
}

const exps: Array<Exp> = [
  {
    label: "Labelled Start-ups",
    value: "10K+",
    color: "#007A27",
  },
  {
    label: "Investors",
    value: "4+",
    color: "#FBC02D",
  },
  // {
  //   label: "Experience Mentors",
  //   value: "10+",
  // },
];

const ExpItem: FC<ExpItemProps> = ({ item }) => {
  const { value, label, color } = item;
  return (
    <Box
      sx={{
        textAlign: "left",
        display: "flex",
        alignItems: "center",
        mb: { xs: 1, md: 0 },
      }}
    >
      <Typography
        sx={{
          color: "secondary.main",
          mb: { xs: 1, md: 2 },
          fontSize: { xs: 34, md: 44 },
          fontWeight: "bold",
          marginRight: 1, // Add a margin between value and label
        }}
      >
        {value}
      </Typography>
      <Typography color="text.disabled" variant="h5">
        {label}
      </Typography>
    </Box>
  );
};

const HomeHero: FC = () => {
  return (
    <Box
      id="hero"
      sx={{
        backgroundColor: "background.paper",
        position: "relative",
        pt: 4,
        pb: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={0}
          sx={{ flexDirection: { xs: "column", md: "unset" } }}
        >
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                textAlign: { xs: "center", md: "left" },
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography
                  component="h2"
                  sx={{
                    position: "relative",
                    fontSize: { xs: 40, md: 53 },
                    letterSpacing: 1.5,
                    fontWeight: "bold",
                    lineHeight: 1.3,
                  }}
                >
                  Unlocking Nigeria&apos;s Innovation Potential{" "}
                  <Typography
                    component="span"
                    sx={{
                      fontSize: "inherit",
                      fontWeight: "inherit",
                      position: "relative",
                      "& svg": {
                        position: "absolute",
                        top: -16,
                        right: -21,
                        width: { xs: 22, md: 30 },
                        height: "auto",
                      },
                    }}
                  >
                    with the{" "}
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
                      Nigeria Startup Act{" "}
                    </Typography>
                  </Typography>{" "}
                </Typography>
              </Box>
              <Box sx={{ mb: 4, width: { xs: "100%", md: "70%" } }}>
                <Typography sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                  {
                    "The portal will facilitate the labelling of Nigerian startups, venture capital companies, hubs and innovation centres in Nigeria."
                  }
                </Typography>
              </Box>
              <Box sx={{ "& button": { mr: 2 } }}>
                <ScrollLink
                  to="popular-course"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={350}
                >
                  <StyledButton
                    color="primary"
                    size="large"
                    variant="contained"
                  >
                    Explore With Us
                  </StyledButton>
                </ScrollLink>
                <ScrollLink
                  to="video-section"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={350}
                >
                  <StyledButton
                    color="primary"
                    size="large"
                    variant="outlined"
                    startIcon={<PlayArrowIcon />}
                  >
                    See Video
                  </StyledButton>
                </ScrollLink>
              </Box>
              <Box sx={{ py: 4 }}>
                <Grid container spacing={2}>
                  {exps.map((item) => (
                    <Grid key={item.value} item xs={12} md={4}>
                      <Box
                        sx={{
                          textAlign: "left",
                          display: "flex",
                          alignItems: "center",
                          mb: { xs: 1, md: 0 },
                        }}
                      >
                        <Typography
                          sx={{
                            color: item.color,
                            mb: { xs: 1, md: 2 },
                            fontSize: { xs: 34, md: 44 },
                            fontWeight: "bold",
                            marginRight: 1, // Add a margin between value and label
                          }}
                        >
                          {item.value}
                        </Typography>
                        <Typography color="text.disabled" variant="h5">
                          {item.label}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              position: "relative",
            }}
          >
            {/* Sertificate badge */}
            <Box
              sx={{
                position: "absolute",
                bottom: 30,
                left: { xs: 0, md: -150 },
                boxShadow: 4,
                borderRadius: 3,
                px: 2,
                py: 1.4,
                zIndex: 1,
                backgroundColor: "background.paper",
                display: "flex",
                alignItems: "flex-start",
                width: 240,
              }}
            >
              <Box
                sx={{
                  boxShadow: 4,
                  borderRadius: "50%",
                  width: 44,
                  height: 44,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 2,
                  "& img": { width: "32px !important", height: "auto" },
                }}
              >
                <Image
                  src="/images/icon03.png"
                  alt="Accelerator Program"
                  width={50}
                  height={50}
                  quality={97}
                />
              </Box>
              <Box>
                <Typography
                  component="h6"
                  sx={{
                    color: "secondary.text",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    mb: 0.5,
                  }}
                >
                  Accelerator Program
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "text.secondary", lineHeight: 1.3 }}
                >
                  Programs
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: 220,
                left: { xs: 0, md: -30 },
                borderRadius: 3,
                px: 2,
                py: 1.4,
                zIndex: 1,
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "background.paper",
                  boxShadow: 4,
                  borderRadius: "50%",
                  width: 44,
                  height: 44,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 2,
                  "& img": { width: "32px !important", height: "auto" },
                }}
              >
                <Image
                  src="/images/icon04.png"
                  alt="Badge icon"
                  width={50}
                  height={50}
                  quality={97}
                />
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                bottom: 100,
                right: { xs: 0, md: -50 },
                boxShadow: 4,
                borderRadius: 3,
                px: 2,
                py: 1.4,
                zIndex: 1,
                backgroundColor: "background.paper",
                display: "flex",
                alignItems: "flex-start",
                width: 200,
              }}
            >
              <Box
                sx={{
                  boxShadow: 4,
                  borderRadius: "50%",
                  width: 44,
                  height: 44,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 2,
                  "& img": { width: "32px !important", height: "auto" },
                }}
              >
                <Image
                  src="/images/icon02.png"
                  alt="Funding"
                  width={50}
                  height={50}
                  quality={97}
                />
              </Box>
              <Box>
                <Typography
                  component="h6"
                  sx={{
                    color: "secondary.text",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    mb: 0.5,
                  }}
                >
                  $100,000
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "text.secondary", lineHeight: 1.3 }}
                >
                  Funding Opportunity
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: 100,
                right: { xs: 0, md: -50 },
                boxShadow: 4,
                borderRadius: 3,
                px: 2,
                py: 1.4,
                zIndex: 1,
                backgroundColor: "background.paper",
                display: "flex",
                alignItems: "flex-start",
                width: 170,
              }}
            >
              <Box
                sx={{
                  boxShadow: 4,
                  borderRadius: "50%",
                  width: 44,
                  height: 44,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 2,
                  "& img": { width: "32px !important", height: "auto" },
                }}
              >
                <Image
                  src="/images/icon01.png"
                  alt="Funding"
                  width={50}
                  height={50}
                  quality={97}
                />
              </Box>
              <Box>
                <Typography
                  component="h6"
                  sx={{
                    color: "secondary.text",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    mb: 0.5,
                  }}
                >
                  Over 1000
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "text.secondary", lineHeight: 1.3 }}
                >
                  Angel Investors
                </Typography>
              </Box>
            </Box>
            <Box sx={{ lineHeight: 0, position: "relative", top: 0, left: 0 }}>
              <Image
                src="/images/home-hero-alt.png"
                width={384}
                height={574}
                alt="Hero img"
                style={{ position: "absolute", top: "30px", left: "30px" }}
              />
              <Image
                src="/images/home-hero.png"
                width={384}
                height={574}
                alt="Hero img"
                style={{ position: "relative", top: 0, left: 0 }}
              />
            </Box>
          </Grid>
        </Grid>

        {/* Experience */}
        {/* <Box sx={{ boxShadow: 2, py: 4, px: 7, borderRadius: 4 }}>
          <Grid container spacing={2}>
            {exps.map((item) => (
              <Grid key={item.value} item xs={12} md={4}>
                <ExpItem item={item} />
              </Grid>
            ))}
          </Grid>
        </Box> */}
      </Container>
    </Box>
  );
};

export default HomeHero;
