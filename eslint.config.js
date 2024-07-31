import pluginJs from "@eslint/js";
import pluginImport from "eslint-plugin-import";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      import: pluginImport,
    },
  },
  {
    rules: {
      "import/order": [
        "error",
        { alphabetize: { order: "asc", caseInsensitive: true } },
      ],
    },
  },
];
