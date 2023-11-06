"use client";

import React, { FC } from "react";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import StyledButton from "@/components/styled-button";

const HomeNewsLetter: FC = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url('/images/home-newsletter-bg.svg')",
        py: { xs: 10, md: 14 },
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              mb: 1,
              fontSize: { xs: 18, md: 28 },
              color: "primary.contrastText",
            }}
          >
            Don&apos;t miss out &mdash; Subscribe now to fuel your journey to
            success!
          </Typography>
          {/* <Typography sx={{ mb: 6, color: "primary.contrastText" }}>
            Stay Informed with Our Newsletter for the Latest Updates.
          </Typography> */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-around",
              width: { xs: "100%", md: 560 },
              mx: "auto",
            }}
          >
            <InputBase
              sx={{
                backgroundColor: "background.paper",
                borderRadius: 1,
                width: "100%",
                height: 48,
                px: 2,
                mr: { xs: 0, md: 3 },
                mb: { xs: 2, md: 0 },
              }}
              placeholder="Enter your Email Address"
            />
            <Box>
              <StyledButton disableHoverEffect size="large" color="dark">
                Subscribe
              </StyledButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeNewsLetter;
