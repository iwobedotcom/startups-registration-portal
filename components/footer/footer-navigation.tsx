import React, { FC } from "react";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";
import type { Navigation } from "@/interfaces/navigation";
import { navigations as headerNavigations } from "@/data/menu/navigation.data";
import FooterSectionTitle from "./footer-section-title";

const aboutMenu: Array<Navigation> = [
  {
    label: "Start-up Nigeria",
    path: "#",
  },
  {
    label: "Get Labelled",
    path: "#",
  },
  {
    label: "Venture Capitalist",
    path: "#",
  },
  {
    label: "Incubators & Accelerator",
    path: "#",
  },
  {
    label: "Angel Investors",
    path: "#",
  },
];

const informationMenu: Array<Navigation> = [
  {
    label: "FAQs",
    path: "#",
  },
  {
    label: "Help & Support",
    path: "#",
  },
  {
    label: "Terms & Conditions",
    path: "#",
  },
  {
    label: "Privacy Policies",
    path: "#",
  },
  {
    label: "Contact Us",
    path: "#",
  },
];

const resourceMenu: Array<Navigation> = [
  {
    label: "Start-up Directory",
    path: "#",
  },
  {
    label: "Founder Directory",
    path: "#",
  },
  {
    label: "Programmes",
    path: "#",
  },
  {
    label: "MDAs",
    path: "#",
  },
];

// const pageMenu = headerNavigations;

// const companyMenu: Array<Navigation> = [
//   { label: "Contact Us", path: "#" },
//   { label: "Privacy & Policy", path: "#" },
//   { label: "Term & Condition", path: "#" },
//   { label: "FAQ", path: "#" },
// ];

interface NavigationItemProps {
  label: string;
  path: string;
}

const NavigationItem: FC<NavigationItemProps> = ({ label, path }) => {
  return (
    <Link href={path} passHref>
      <MuiLink
        underline="none" // Use "none" to remove underline
        sx={{
          display: "block",
          mb: 1,
          color: "text.primary",
          fontSize: { xs: "1.2rem", md: "0.9rem" },
          "&:hover": {
            color: "primary.main",
          },
        }}
      >
        {label}
      </MuiLink>
    </Link>
  );
};

const FooterNavigation: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="About" />
        {aboutMenu.map(({ label, path }, index) => (
          <NavigationItem
            key={index + path}
            label={label}
            path={/* path */ "#"}
          />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Information" />
        {informationMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Resources" />
        {resourceMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>
    </Grid>
  );
};

export default FooterNavigation;
