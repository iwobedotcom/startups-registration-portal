"use client";

import React, { FC, useRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme, styled } from "@mui/material/styles";
import IconArrowBack from "@mui/icons-material/ArrowBack";
import IconArrowForward from "@mui/icons-material/ArrowForward";
import { Grid } from "@mui/material";
import StyledButton from "@/components/styled-button";
import { ProcessCardItem } from "@/components/process-card-item";
import Slider, { Settings } from "react-slick";
import { Partner, partnersLogo } from "@/data/partners/partners.data";
import Image from "next/image";
import Link from "@mui/material/Link";

interface SliderArrowArrow {
  onClick?: () => void;
  type: "next" | "prev";
  className?: "string";
}

const SliderArrow: FC<SliderArrowArrow> = (props) => {
  const { onClick, type, className } = props;
  return (
    <IconButton
      sx={{
        backgroundColor: "background.paper",
        color: "primary.main",
        "&:hover": {
          backgroundColor: "primary.main",
          color: "primary.contrastText",
        },
        bottom: { xs: "-28px !important", md: "64px !important" },
        left: "unset !important",
        right: type === "prev" ? "90px !important" : "30px !important",
        zIndex: 10,
        boxShadow: 1,
      }}
      disableRipple
      color="inherit"
      onClick={onClick}
      className={className}
    >
      {type === "next" ? (
        <IconArrowForward sx={{ fontSize: 22 }} />
      ) : (
        <IconArrowBack sx={{ fontSize: 22 }} />
      )}
    </IconButton>
  );
};

const StyledSlickContainer = styled("div")(() => ({
  position: "relative",

  "& .slick-list": { marginLeft: "-30px", marginBottom: "24px" },
}));

interface PartItemProps {
  item: Partner;
}

const PartItem: FC<PartItemProps> = ({ item }) => {
  const { id, name, logo, link } = item;
  return (
    <Box
      component="li"
      sx={{
        display: "inline-block",
        mr: 10,
      }}
    >
      <Link
        target="_blank"
        sx={{
          lineHeight: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&:hover": {
            // backgroundColor: "",
            // Place an effect  here
          },
          "& img": {
            fill: "currentColor",
            width: 120,
            height: "auto",
          },
        }}
        href={item.link}
      >
        {/* eslint-disable-next-line */}
        <Image src={item.logo} alt={item.name} title={item.name} />
      </Link>
    </Box>
    // <Box sx={{ textAlign: "center", mb: { xs: 1, md: 0 } }}>
    //   <Image src={logo} />
    // </Box>
  );
};

const HomePartners: FC = () => {
  const sliderRef = useRef(null);
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down("md"));

  const sliderConfig: Settings = {
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
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
            color="text.secondary"
            sx={{ mb: 5, fontSize: { xs: 32, md: 42 } }}
          >
            Partners
          </Typography>
          <StyledSlickContainer>
            <Slider ref={sliderRef} {...sliderConfig}>
              {partnersLogo.map((item) => (
                <PartItem item={item} key={item.id} />
              ))}
            </Slider>
          </StyledSlickContainer>
          {/* <Grid container spacing={2} sx={{ ml: { xs: 0, md: 2 } }}>
            {partnersLogo.map((item) => (
              <Grid key={String(item.id)} item xs={12} md={2}>
                <PartItem item={item} />
              </Grid>
            ))}
          </Grid> */}
        </Box>
      </Container>
    </Box>
  );
};

export default HomePartners;
