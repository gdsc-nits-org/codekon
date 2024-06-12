import { exec, execSync } from "node:child_process";
import util from "node:util";
// import { execa } from "execa";
import ora from "ora";

/**
 * Check if git is installed by executing `git --version`.
 *
 * @returns {boolean} - True if git is installed, false otherwise.
 */
export const isGitInstalled = (): boolean => {
  try {
    // execa("git", ["--version"], { stdio: "ignore" });
    execSync("git --version");
    return true;
  } catch (error) {
    return false;
  }
};

/**
 * Check if pnpm is installed by executing `pnpm --version`.
 *
 * @returns {boolean} - True if pnpm is installed, false otherwise.
 */
export const isPnpmInstalled = (): boolean => {
  try {
    // execa("pnpm", ["--version"], { stdio: "ignore" });
    execSync("pnpm --version");
    return true;
  } catch (error) {
    return false;
  }
};

/**
 * Check if the project name is valid. A valid project name is a string that matches the regex /^(?:@[a-z\d\-*~][a-z\d\-*._~]*\/)?[a-z\d\-~][a-z\d\-._~]*$/.
 * A valid project name can contain lowercase letters, numbers, hyphens.
 *
 * @param {string} projectName - The project name to validate.
 * @returns {boolean} - True if the project name is valid, false otherwise.
 */
export const isValidProjectName = (projectName: string): boolean => {
  return /^(?:@[a-z\d\-*~][a-z\d\-*._~]*\/)?[a-z\d\-~][a-z\d\-._~]*$/.test(
    projectName,
  );
};

/**
 * Converts an invalid project name to a valid project name. It converts it to lowercase, eemoves the leading and trailing white space and line terminator characters, replaces spaces with hyphens, and removes `.` and `_` characters from the beginning of the project name, and replaces all other non-alphanumeric characters with hyphens.
 * @param projectName - The invalid project name to convert to a valid project name.
 * @returns {string} - The valid project name.
 */
export const toValidProjectName = (projectName: string): string => {
  return projectName
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/^[._]/, "")
    .replace(/[^a-z\d\-~]+/g, "-");
};

/**
 * Installs the template by executing `pnpm dlx degit ${template} ${projectName}`.
 *
 * @param {string} template - The template to install.
 * @param {string} projectName - The project name.
 */
export const installCommand = async (
  template: string,
  projectName: string,
): Promise<void> => {
  const spinner = ora("Downloading template").start();
  try {
    const execa = util.promisify(exec);
    // await execa`pnpm dlx degit ${template} ${projectName}`;
    await execa(`pnpm dlx degit ${template} ${projectName}`);
    spinner.succeed("Template downloaded successfully");
  } catch (error) {
    spinner.fail("Failed to download template");
    console.error(error);
  }
};
