import prompts from "prompts";
import { Command } from "commander";
import { red, lightBlue } from "kolorist";
import { TEMPLATES, DEFAULT_NAME, ORG_NAME } from "../constants/index.js";

interface CliResults {
  projectName: typeof DEFAULT_NAME;
  template: (typeof TEMPLATES)[number]["name"];
}

const defaultOptions: CliResults = {
  projectName: DEFAULT_NAME,
  template: TEMPLATES[0]?.name ?? "",
};

export const cli = async (): Promise<CliResults> => {
  const cliResults = defaultOptions;

  const program = new Command()
    .name("codekon")
    .description("Entirety of GDSC NITS project templates at your fingertips")
    .version("0.0.1")
    .argument(
      "[projectName]",
      "name of your project",
      defaultOptions.projectName,
    )
    .option(
      "-t, --template <value>",
      "the template to use",
      cliResults.template,
    )
    .addHelpText(
      "afterAll",
      `\nExample call: codekon my-app react-js-app\nTemplates available: ${TEMPLATES.map((t) => t.name).join(", ")}`,
    );
  program.parse(process.argv);

  const cliProvidedName: string = program.args[0] || "";
  const cliProvidedTemplate: string = program.opts().template;
  if (
    cliProvidedTemplate &&
    !TEMPLATES.map((t) => t.name).includes(cliProvidedTemplate)
  ) {
    console.log(red("✖") + " Invalid template name");
    process.exit(1);
  }

  if (cliProvidedName) {
    cliResults.projectName = cliProvidedName;
    cliResults.template = cliProvidedTemplate;
    return cliResults;
  }

  let result: prompts.Answers<"projectName" | "template">;
  try {
    result = await prompts(
      [
        {
          type: "text",
          name: "projectName",
          message: lightBlue("Project name: "),
          initial: defaultOptions.projectName,
        },
        {
          type: "select",
          name: "template",
          message: "Select the template: ",
          initial: 0,
          choices: TEMPLATES.map((t) => {
            const color = t.color;
            return {
              title: color(t.display || t.name),
              value: t.name,
              description: color(`https://github.com/${ORG_NAME}/${t.name}`),
            };
          }),
        },
      ],
      {
        onCancel: () => {
          throw new Error(red("✖") + " Operation cancelled");
        },
      },
    );
    cliResults.projectName = result.projectName;
    cliResults.template = result.template;
    return cliResults;
  } catch (e) {
    console.log((e as Error).message);
    process.exit(1);
  }
};
