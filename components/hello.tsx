import React, { FC } from "react";
import { Box, Typography } from "@mui/material";

interface Props {
  name: string;
}

const Hello: FC<Props> = ({ name }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography>Hello {name}</Typography>
    </Box>
  );
};

export default Hello;
