import Presidency from "@/app/assets/images/partners/presidency-logo.png";
import Fmcde from "@/app/assets/images/partners/fmcde-round-logo.png";
import Nitda from "@/app/assets/images/partners/nitdalogo.png";
import Cbn from "@/app/assets/images/partners/cbnlogo.png";
import Ncc from "@/app/assets/images/partners/ncclogo.png";
import Nsia from "@/app/assets/images/partners/nsialogo.png";
import Firs from "@/app/assets/images/partners/firslogo.png";
import Boi from "@/app/assets/images/partners/boilogo.png";
import Itf from "@/app/assets/images/partners/itf-logo.png";
import Nipc from "@/app/assets/images/partners/NIPC-logo.png";
import Finance from "@/app/assets/images/partners/Finance-logo.png";
import Cac from "@/app/assets/images/partners/caclogo.png";
import Fmiti from "@/app/assets/images/partners/fmiti-LOGO.png";
import Notap from "@/app/assets/images/partners/Notap-logo.png";

export interface Partner {
  id: number;
  name: string;
  logo: HTMLImageElement;
  link: string;
}

export const partnersLogo: Array<Partner> = [
  {
    id: 1,
    name: "Office of the President",
    logo: Presidency,
    link: "#",
  },
  {
    id: 2,
    name: "FMCDE",
    logo: Fmcde,
    link: "#",
  },
  {
    id: 3,
    name: "NITDA",
    logo: Nitda,
    link: "#",
  },
  {
    id: 4,
    name: "CBN",
    logo: Cbn,
    link: "#",
  },
  {
    id: 5,
    name: "NCC",
    logo: Ncc,
    link: "#",
  },
  {
    id: 6,
    name: "NSIA",
    logo: Nsia,
    link: "#",
  },
  {
    id: 7,
    name: "FIRS",
    logo: Firs,
    link: "#",
  },
  {
    id: 8,
    name: "BOI",
    logo: Boi,
    link: "#",
  },
  {
    id: 9,
    name: "ITF",
    logo: Itf,
    link: "#",
  },
  {
    id: 10,
    name: "NIPC",
    logo: Nipc,
    link: "#",
  },
  {
    id: 11,
    name: "Min. of Finance",
    logo: Finance,
    link: "#",
  },
  {
    id: 12,
    name: "CAC",
    logo: Cac,
    link: "#",
  },
  {
    id: 13,
    name: "FMITI",
    logo: Fmiti,
    link: "#",
  },
  {
    id: 14,
    name: "NOTAP",
    logo: Notap,
    link: "#",
  },
];
