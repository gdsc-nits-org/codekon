import { execa } from "execa";

export const isGitInstalled = (): boolean => {
  try {
    execa("git --version", { stdio: "ignore" });
    console.log("git is installed");
    return true;
  } catch (error) {
    return false;
  }
};

export const isGitHubCLIInstalled = (): boolean => {
  try {
    execa("gh --version", { stdio: "ignore" });
    console.log("gh is installed");
    return true;
  } catch (error) {
    return false;
  }
};

export const isPnpmInstalled = (): boolean => {
  try {
    execa("pnpm --version", { stdio: "ignore" });
    console.log("pnpm is installed");
    return true;
  } catch (error) {
    return false;
  }
};
