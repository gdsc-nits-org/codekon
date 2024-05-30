import prompts from "prompts";
import { red, lightBlue } from "kolorist";
import { TEMPLATES, DEFAULT_NAME } from "./constants/index.js";

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
  const { projectName, template } = result;
}

init().catch((e) => {
  console.error(e);
});
