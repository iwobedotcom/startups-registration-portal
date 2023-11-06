import React, { ReactNode } from "react";
import ArtTrackIcon from "@mui/icons-material/ArtTrack";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import { Badge } from "@mui/icons-material";

interface Data {
  title: string;
  description: string;
  icon?: ReactNode;
}

export const data: Data[] = [
  {
    title:
      "Establishes the  National Council for Digital Innovation and Entrepreneurship (The Council).",
    description:
      "Establishes the  National Council for Digital Innovation and Entrepreneurship (The Council).",
    icon: <Badge />,
  },
  {
    title:
      "Set up a consultative forum for Nigerian ecosystem stakeholders to engage and present proposals to the Council.",
    description:
      "Set up a consultative forum for Nigerian ecosystem stakeholders to engage and present proposals to the Council.",
    icon: <AttachMoneyIcon />,
  },
  {
    title:
      "Provide for the Startup Investment Seed Fund  which will be managed by the Nigerian Sovereign Investment Authority (NSIA)",
    description:
      "Provide for the Startup Investment Seed Fund  which will be managed by the Nigerian Sovereign Investment Authority (NSIA)",
    icon: <LocalLibraryIcon />,
  },
  {
    title:
      "Simplifies registrations and access to government services through the Start-up Support and Engagement Portal.",
    description:
      "Simplifies registrations and access to government services through the Start-up Support and Engagement Portal.",
    icon: <ContactSupportIcon />,
  },
];
