import React, { FC } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { Feature } from "@/data/features/features.data";

interface Props {
  item: Feature;
}

const FeatureCardItem: FC<Props> = ({ item }) => {
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
          textAlign: "start",
          transition: (theme) => theme.transitions.create(["box-shadow"]),
          "&:hover": {
            boxShadow: 4,
          },
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
            lineHeight: 0,
            overflow: "hidden",
            mb: 2,
            "& svg": { width: "32px !important", height: "auto" },
          }}
        >
          {item.icon}
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
      </Box>
    </Box>
  );
};

export { FeatureCardItem };
