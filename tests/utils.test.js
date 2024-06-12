import { expect, test } from "@jest/globals";

import {
  isValidProjectName,
  toValidProjectName,
} from "../dist/src/utils/index.js";

test("Check for valid project name:", () => {
  expect(isValidProjectName("projectname")).toBe(true);
  expect(isValidProjectName("project-name")).toBe(true);
  expect(isValidProjectName("project_name")).toBe(true);
  expect(isValidProjectName("projectName")).toBe(false);
  expect(isValidProjectName("project name")).toBe(false);
  expect(isValidProjectName("@scope/ProjectName")).toBe(false);
  expect(isValidProjectName("scope:projectname")).toBe(false);
});

test("Convert project name to valid project name:", () => {
  expect(toValidProjectName("project name")).toBe("project-name");
  expect(toValidProjectName("projectName")).toBe("projectname");
  expect(toValidProjectName("project.name")).toBe("project-name");
  expect(toValidProjectName("project_name")).toBe("project-name");
  expect(toValidProjectName("@scope/ProjectName")).toBe("-scope-projectname");
  expect(toValidProjectName("scope:projectname")).toBe("scope-projectname");
});
