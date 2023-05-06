import prompts from "prompts";
// import { blue, red} from 'kolorist'

// type ColorFunc = (str: string | number) => string

type Concern = {
  name: string;
  display: string;
  // color: ColorFunc;
  // id: number;
  variants: Framework[];
};

type Framework = {
  name: string;
  display: string;
  // color: ColorFunc;
  // id: number;
  variants?: FrameworkVariant[];
};

type FrameworkVariant = {
  name: string;
  display: string;
  // color: ColorFunc;
  //   id: number;
};

const FRAMEWORKS: Concern[] = [
  {
    name: "front",
    display: "Frontend",
    variants: [
      {
        name: "react",
        display: "React",
        variants: [
          {
            name: "react",
            display: "JavaScript",
          },
          {
            name: "react-ts",
            display: "TypeScript",
          },
        ],
      },
      {
        name: "svelte",
        display: "Svelte",
        variants: [
          {
            name: "svelte",
            display: "JavaScript",
          },
          {
            name: "svelte-ts",
            display: "TypeScript",
          },
        ],
      },
    ],
  },
  {
    name: "back",
    display: "Backend",
    variants: [
      {
        name: "python",
        display: "Python",
      },
      {
        name: "vanilla",
        display: "JavaScipt",
      },
      {
        name: "vanilla-ts",
        display: "TypeScript",
      },
    ],
  },
];

// const TEMPLATES = FRAMEWORKS;

// console.log(TEMPLATES[0].variants[0].variants);

let result: prompts.Answers<
  "projectName" | "concern" | "framework" | "variant"
>;

async function init() {
  try {
    result = await prompts([
      {
        type: "text",
        name: "projectName",
        message: "Project name: ",
        initial: "Project name",
      },
      {
        type: "select",
        name: "concern",
        message: "Select the concern: ",
        initial: 0,
        choices: FRAMEWORKS.map((f) => {
          return {
            title: f.display || f.name,
            value: f,
          };
        }),
      },
      {
        type: "select",
        name: "framework",
        message: "Select a framework: ",
        initial: 0,
        choices: (framework: Concern) =>
          framework.variants?.map((f) => {
            return {
              title: f.display || f.name,
              value: f.name,
            };
          }),
      },
      {
        type: "select",
        name: "variant",
        message: "select a variant: ",
        choices: (variant: Framework) =>
          variant.variants?.map((v) => {
            return {
              title: v.display || v.name,
              value: v.name,
            };
          }),
      },
    ]);
  } catch (e: any) {
    console.log(e);
    return;
  }

  const { projectName, concern, framework, variant } = result; // destructure the choices - todo: destructure the id as well
}

init().catch((e) => {
  console.error(e);
});
