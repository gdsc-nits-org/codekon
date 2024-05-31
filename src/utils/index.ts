import { execa } from "execa";
import ora from "ora";

export const isGitInstalled = (): boolean => {
  try {
    execa("git --version", { stdio: "ignore" });
    return true;
  } catch (error) {
    return false;
  }
};

export const isPnpmInstalled = (): boolean => {
  try {
    execa("pnpm --version", { stdio: "ignore" });
    return true;
  } catch (error) {
    return false;
  }
};

export const isValidProjectName = (projectName: string) => {
  return /^(?:@[a-z\d\-*~][a-z\d\-*._~]*\/)?[a-z\d\-~][a-z\d\-._~]*$/.test(
    projectName,
  );
};

export const toValidProjectName = (projectName: string) => {
  return projectName
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/^[._]/, "")
    .replace(/[^a-z\d\-~]+/g, "-");
};

export const installCommand = async (template: string, projectName: string) => {
  const spinner = ora("Downloading template").start();
  try {
    await execa`pnpm dlx degit ${template} ${projectName}`;
    spinner.succeed("Template downloaded successfully");
  } catch (error) {
    spinner.fail("Failed to download template");
    console.error(error);
  }
};
