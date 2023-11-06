import React, { FC } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { SocialLink } from "@/interfaces/social-link";

export const socialLinks: SocialLink[] = [
  {
    name: "YouTube",
    link: "#",
    icon: "/images/icons/youtube.svg",
  },
  {
    name: "X",
    link: "#",
    icon: "/images/icons/x.svg",
  },
  {
    name: "LinkedIn",
    link: "#",
    icon: "/images/icons/linkedin.svg",
  },
  {
    name: "Facebook",
    link: "#",
    icon: "/images/icons/facebook.svg",
  },
  {
    name: "Instagram",
    link: "#",
    icon: "/images/icons/instagram.svg",
  },
];

interface SocialLinkItemProps {
  item: SocialLink;
}

const SocialLinkItem: FC<SocialLinkItemProps> = ({ item }) => (
  <Box
    component="li"
    sx={{
      display: "inline-block",
      color: "text.secondary",
      mr: 0.5,
    }}
  >
    <Link
      target="_blank"
      sx={{
        lineHeight: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 36,
        height: 36,
        borderRadius: "50%",
        color: "inherit",
        "&:hover": {
          backgroundColor: "primary.main",
        },
        "& img": {
          fill: "currentColor",
          width: 22,
          height: "auto",
        },
      }}
      href={item.link}
    >
      {/* eslint-disable-next-line */}
      <img src={item.icon} alt={item.name + "icon"} />
    </Link>
  </Box>
);

// default
const FooterSocialLinks: FC = () => {
  return (
    <Box sx={{ ml: -1 }}>
      <Box
        component="ul"
        sx={{
          m: 0,
          p: 0,
          lineHeight: 0,
          borderRadius: 3,
          listStyle: "none",
        }}
      >
        {socialLinks.map((item) => {
          return <SocialLinkItem key={item.name} item={item} />;
        })}
      </Box>
    </Box>
  );
};

export default FooterSocialLinks;
