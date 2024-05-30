import prompts from "prompts";
import { blue, yellow, cyan, magenta, green, red, lightBlue } from "kolorist";

type ColorFunc = (str: string | number) => string;

type template = {
  name: string;
  display: string;
  color: ColorFunc;
};

const TEMPLATES: template[] = [
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

const DEFAULT_NAME: string = "gdsc-project";

async function init() {
  let result: prompts.Answers<"projectName" | "template">;
  try {
    result = await prompts([
      {
        type: "text",
        name: "projectName",
        message: lightBlue("Project name: "),
        initial: DEFAULT_NAME,
      },
      {
        type: "select",
        name: "template",
        message: "Select the template: ",
        choices: TEMPLATES.map((t) => {
          const color = t.color;
          return {
            title: color(t.display || t.name),
            value: t.name,
          };
        }),
      },
    ],
  {
    onCancel: () => {
      throw new Error(red('✖') + ' Operation cancelled');
    }
  });
  } catch (e: any) {
    console.log(e.message);
    return;
  }
  const { projectName, template } = result;
}

init().catch((e) => {
  console.error(e);
});
