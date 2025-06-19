import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import perfectionist from "eslint-plugin-perfectionist";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      perfectionist,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "perfectionist/sort-jsx-props": [
        "error",
        {
          type: "alphabetical",
          order: "asc",
          fallbackSort: { type: "unsorted" },
          ignoreCase: true,
          specialCharacters: "keep",
          ignorePattern: [],
          partitionByNewLine: false,
          newlinesBetween: "ignore",
          useConfigurationIf: {},
          groups: [],
          customGroups: {},
        },
      ],
      "perfectionist/sort-imports": [
        "error",
        {
          type: "alphabetical",
          order: "asc",
          fallbackSort: { type: "unsorted" },
          ignoreCase: true,
          specialCharacters: "keep",
          internalPattern: ["^~/.+", "^@/.+"],
          partitionByComment: false,
          partitionByNewLine: false,
          newlinesBetween: 1,
          maxLineLength: undefined,
          groups: [
            "type-import",
            ["value-builtin", "value-external"],
            "type-internal",
            "value-internal",
            ["type-parent", "type-sibling", "type-index"],
            ["value-parent", "value-sibling", "value-index"],
            "ts-equals-import",
            "unknown",
          ],
          customGroups: [],
          environment: "node",
        },
      ],
    },
  },
);
