#!/usr/bin/env node

import { red } from "kolorist";
import { cli } from "./cli/index.js";
import { ORG_NAME } from "./constants/index.js";
import {
  installCommand,
  isGitInstalled,
  isPnpmInstalled,
  isValidProjectName,
  toValidProjectName,
} from "./utils/index.js";

/**
 * Main program entry point. Sanitises the project name, checks if git and pnpm are installed, and installs the template.
 */
const main = async () => {
  let { projectName, template } = await cli();
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
};

main().catch((e) => {
  console.error(e);
});
