import React, { FC } from "react";
import { Box } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import StyledButton from "@/components/styled-button";
import { LanguageOutlined } from "@mui/icons-material";

const AuthNavigation: FC = () => {
  return (
    <Box sx={{ "& button:first-child": { mr: 2 } }}>
      <Box
        component={ScrollLink}
        key="language"
        activeClass="current"
        to="#"
        spy={true}
        smooth={true}
        duration={350}
        sx={{
          position: "relative",
          color: "text.secondary",
          cursor: "pointer",
          fontWeight: 600,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 0, md: 3 },
          mb: { xs: 3, md: 0 },
          fontSize: { xs: "1.2rem", md: "1rem" },
          "& > div": { display: "none" },

          "&.current>div": { display: "block" },

          "&:hover": {
            color: "primary.main",
            "&>div": {
              display: "block",
            },
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 12,
            transform: "rotate(3deg)",
            "& img": { width: 44, height: "auto" },
          }}
        >
          {/* eslint-disable-next-line */}
          <img src="/images/headline-curve.svg" alt="Headline curve" />
        </Box>
        <span style={{ display: "inline-flex", alignItems: "center" }}>
          <LanguageOutlined />
          English
        </span>
      </Box>
      <StyledButton disableHoverEffect={true} size="large">
        Login
      </StyledButton>
    </Box>
  );
};

export default AuthNavigation;
