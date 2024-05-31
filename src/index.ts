import prompts from "prompts";
import { red, lightBlue } from "kolorist";
import { TEMPLATES, DEFAULT_NAME, ORG_NAME } from "./constants/index.js";
import {
  installCommand,
  isGitInstalled,
  isPnpmInstalled,
  isValidProjectName,
  toValidProjectName,
} from "./utils/index.js";

async function init() {
  let result: prompts.Answers<"projectName" | "template">;
  try {
    result = await prompts(
      [
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
  } catch (e) {
    console.log((e as Error).message);
    return;
  }

  let { projectName, template } = result;
  template = ORG_NAME + "/" + template;
  if (!isValidProjectName(projectName)) {
    projectName = toValidProjectName(projectName);
  }

  try {
    if (isGitInstalled()) {
      try {
        if (isPnpmInstalled()) {
          installCommand(template, projectName);
        } else {
          throw new Error(red("✖") + " pnpm is required for operation.");
        }
      } catch (e) {
        console.error(e);
      }
    } else {
      throw new Error(red("✖") + " git is required for operation.");
    }
  } catch (e) {
    console.error(e);
  }
}

init().catch((e) => {
  console.error(e);
});
