import { blue, yellow, cyan, magenta, green, red } from "kolorist";

type ColorFunc = (str: string | number) => string;

type template = {
  name: string;
  display: string;
  color: ColorFunc;
};

export const TEMPLATES: template[] = [
  {
    name: "react-js-app",
    display: "React + SASS + JavaScript Template",
    color: yellow,
  },
  {
    name: "next-js-app",
    display: "NextJS Pages router + SASS + JavaScript Template",
    color: cyan,
  },
  {
    name: "penp-t",
    display: "PostgreSQL + Express + Node + Prisma + TypeScript API Template",
    color: magenta,
  },
  {
    name: "menp-t",
    display: "MongoDB + Express + Node + Prisma + TypeScript API Template",
    color: green,
  },
  {
    name: "penpal-t",
    display:
      "PostgreSQL + Express + Node + Prisma + AWS Lambda + TypeScript API Template",
    color: red,
  },
  {
    name: "menpal-t",
    display:
      "MongoDB + Express + Node + Prisma + AWS Lambda + TypeScript API Template",
    color: blue,
  },
];

export const DEFAULT_NAME: string = "gdsc-project";

export const ORG_NAME: string = "gdsc-nits-org";
