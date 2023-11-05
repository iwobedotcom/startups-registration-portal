import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import SRPLogo from "@/app/assets/images/logo/logo.png";
import Image from "next/image";

interface Props {
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

const Logo: FC<Props> = ({ onClick, variant }) => {
  return (
    <Box onClick={onClick}>
      <Image src={SRPLogo} alt="Logo" />
    </Box>
  );
};

export default Logo;
