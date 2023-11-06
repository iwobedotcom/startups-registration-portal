"use client";

import React, { FC } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { data } from "@/data/highlight/highlight.data";
import StyledButton from "@/components/styled-button";

const HomeHighlight: FC = () => {
  return (
    <Box
      id="highlight"
      sx={{ py: { xs: 10, md: 14 }, backgroundColor: "background.paper" }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box sx={{ position: "relative" }}>
              <Image
                src="/images/home-highlight.png"
                width={552}
                height={546}
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
              <Typography
                component="mark"
                sx={{
                  position: "relative",
                  color: "secondary.main",
                  fontSize: "inherit",
                  fontWeight: "inherit",
                  backgroundColor: "unset",
                }}
              >
                Highlights{" "}
              </Typography>
              of the Nigeria Start-up Act
            </Typography>

            <Grid container spacing={2} sx={{ ml: { xs: 0, md: 2 } }}>
              {data.map(({ title, description, icon }, index) => (
                <Grid key={String(index)} item xs={12} md={12}>
                  <Box
                    sx={{
                      px: 2,
                      py: 1.5,
                      boxShadow: 4,
                      borderRadius: 3,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "background.paper",
                        boxShadow: 4,
                        borderRadius: "50%",
                        height: 44,
                        width: 44,
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
                    <Box
                      sx={{ display: "flex", flex: 1, flexDirection: "column" }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "1rem",
                          mb: 1,
                          color: "text.secondary",
                        }}
                      >
                        {title}
                      </Typography>
                      {/* <Typography
                        sx={{ lineHeight: 1.3, color: "text.secondary" }}
                        variant="subtitle1"
                      >
                        {description}
                      </Typography> */}
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Box sx={{ mt: 3, mb: 2, ml: { xs: 0, md: 4 } }}>
              <StyledButton color="primary" size="large">
                Learn More
              </StyledButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeHighlight;
