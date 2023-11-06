import React, { FC } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link as ScrollLink } from "react-scroll";

import type { Process } from "@/data/process/process.data";
import Link from "next/link";

interface Props {
  item: Process;
}

const ProcessCardItem: FC<Props> = ({ item }) => {
  return (
    <Box
      sx={{
        px: 1.5,
        py: 1.5,
      }}
    >
      <Box
        sx={{
          p: 2,
          backgroundColor: "background.paper",
          borderRadius: 4,
          textAlign: "center",
          transition: (theme) => theme.transitions.create(["box-shadow"]),
          "&:hover": {
            boxShadow: 4,
          },
        }}
      >
        <Box
          sx={{
            lineHeight: 0,
            overflow: "hidden",
            borderRadius: 3,
            height: 150,
            mb: 2,
          }}
        >
          <Image src={item.illustration} alt={item.title} />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography
            component="h2"
            variant="h4"
            sx={{ fontSize: "1.4rem", mb: 2 }}
          >
            {item.title}
          </Typography>
          <Typography
            sx={{ mb: 2, color: "text.secondary" }}
            variant="subtitle1"
          >
            {item.description}
          </Typography>
        </Box>
        <Box
          component={ScrollLink}
          key="language"
          activeClass="current"
          to={item.link}
          spy={true}
          smooth={true}
          duration={350}
          sx={{
            position: "relative",
            color: "primary.main",
            textTransform: "uppercase",
            cursor: "pointer",
            fontWeight: 600,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            px: { xs: 0, md: 3 },
            mb: { xs: 3, md: 3 },
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
          {/* <Box
            sx={{
              position: "absolute",
              top: 12,
              transform: "rotate(3deg)",
              "& img": { width: 44, height: "auto" },
            }}
          > */}
          {/* eslint-disable-next-line */}
          {/* <img src="/images/headline-curve.svg" alt="Headline curve" />
          </Box> */}
          Get Started
        </Box>
      </Box>
    </Box>
  );
};

export { ProcessCardItem };
