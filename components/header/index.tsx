"use client";

import React, { FC, useState } from "react";
import {
  Box,
  Container,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Logo from "../logo";
import Navigation from "../navigation/navigation";
import AuthNavigation from "../navigation/auth-navigation";
import { Menu, Close } from "@mui/icons-material";

const Header: FC = () => {
  const [visibleMenu, setVisibleMenu] = useState<boolean>(false);
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down("md"));

  return (
    <Box sx={{ backgroundColor: "background.paper" }}>
      <Container sx={{ py: { xs: 2, md: 3 } }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Logo />
          <Box sx={{ ml: "auto", display: { xs: "inline-flex", md: "none" } }}>
            <IconButton onClick={() => setVisibleMenu(!visibleMenu)}>
              <Menu />
            </IconButton>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },

              transition: (theme) => theme.transitions.create(["top"]),
              ...(matchMobileView && {
                py: 6,
                backgroundColor: "background.paper",
                zIndex: "appBar",
                position: "fixed",
                height: { xs: "100vh", md: "auto" },
                top: visibleMenu ? 0 : "-120vh",
                left: 0,
              }),
            }}
          >
            <Box /> {/* Magic space */}
            <Navigation />
            <AuthNavigation />
            {visibleMenu && matchMobileView && (
              <IconButton
                sx={{
                  position: "fixed",
                  top: 10,
                  right: 10,
                }}
                onClick={() => setVisibleMenu(!visibleMenu)}
              >
                <Close />
              </IconButton>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
