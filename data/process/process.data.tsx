import IllusStartUps from "@/app/assets/images/Illus01.png";
import IllusAngels from "@/app/assets/images/Illus02.png";
import IllusVenture from "@/app/assets/images/Illus03.png";
import IllusEsos from "@/app/assets/images/Illus04.png";

type StaticImageData = {
  src: string;
  height?: number;
  width?: number;
  alt?: string;
  blurDataURL?: string;
};

export interface Process {
  id: number;
  title: string;
  description: string;
  illustration: HTMLImageElement;
  link: string;
}

export const data: Array<Process> = [
  {
    id: 1,
    title: "Start-ups",
    description:
      "Startups are the engines of job creation. By supporting startups, we're contributing to reducing unemployment.",
    illustration: IllusStartUps,
    link: "#",
  },
  {
    id: 2,
    title: "Angel Investors",
    description:
      "Angel Investors are the engines of job creation. By supporting startups, we're contributing to develop.",
    illustration: IllusAngels,
    link: "#",
  },
  {
    id: 3,
    title: "Venture Capitalist",
    description:
      "Venture Capitalist are the engines of job creation. By supporting startups, we're contributing to develop.",
    illustration: IllusVenture,
    link: "#",
  },
  {
    id: 4,
    title: "ESOs",
    description:
      "ESOs are the engines of job creation. By supporting startups, we're contributing to develop.",
    illustration: IllusEsos,
    link: "#",
  },
];
