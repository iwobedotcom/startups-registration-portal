"use client";

import React, { FC } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme, styled } from "@mui/material/styles";
import IconArrowBack from "@mui/icons-material/ArrowBack";
import IconArrowForward from "@mui/icons-material/ArrowForward";
import { FeatureCardItem } from "@/components/feature-card-item";
import { data } from "@/data/features/features.data";
import { Grid } from "@mui/material";
import StyledButton from "@/components/styled-button";

const HomeFeatures: FC = () => {
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down("md"));

  return (
    <Box
      sx={{
        backgroundImage: "url('/images/home-features-bg.svg')",
        py: { xs: 8, md: 10 },
      }}
    >
      <Container>
        <Box
          sx={{
            py: { xs: 4, md: 4 },
            px: { xs: 4, md: 8 },
            textAlign: "center",
          }}
        >
          <Typography
            variant="h1"
            component="h2"
            color="primary.contrastText"
            sx={{ mb: 5, fontSize: { xs: 32, md: 42 } }}
          >
            Features of the Start-up Support & Engagement Portal
          </Typography>
          <Grid container spacing={2} sx={{ ml: { xs: 0, md: 2 } }}>
            {data.map((item) => (
              <Grid key={String(item.id)} item xs={12} md={4}>
                <FeatureCardItem item={item} />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ mt: 5 }}>
            <StyledButton color="dark" size="large">
              Learn More
            </StyledButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeFeatures;
