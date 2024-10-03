import pluginPrettier from "eslint-config-prettier";
import pluginImport from "eslint-plugin-import";
import pluginImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

import pluginJs from "@eslint/js";

export default [
  {
    plugins: {
      import: pluginImport,
      "simple-import-sort": pluginImportSort,
      "@typescript-eslint": tseslint.plugin,
    },
    files: ["*.{js,mjs,cjs,ts,jsx,tsx}"],
    rules: {
      ...pluginPrettier.rules,
      "import/no-unresolved": "off",
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          "": "never",
          ts: "never",
          tsx: "never",
        },
      ],
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // Packages `react` and `next` related packages come first.
            ["^react", "^next", "^@?\\w"],
            // Internal packages.
            ["^(@.*)(/.*|$)", "(components)(/.*|$)"],
            // Side effect imports.
            ["^\\u0000"],
            // Parent imports. Put `..` last.
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
            // Other relative imports. Put same-folder imports and `.` last.
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$", "^.+\\.?(scss)$"],
          ],
        },
      ],
      "no-restricted-imports": [
        "error",
        {
          paths: ["lodash", "react-use"],
        },
      ],
      "no-console": "error",
      "no-prototype-builtins": "off",
      "no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "React",
          ignoreRestSiblings: true,
        },
      ],
      "prefer-destructuring": "warn",
      "max-lines-per-function": ["error", { max: 300, skipBlankLines: true }],
      "padding-line-between-statements": [
        "error",
        {
          blankLine: "always",
          prev: "*",
          next: ["return", "try", "switch", "throw"],
        },
        {
          blankLine: "always",
          prev: ["function", "expression"],
          next: "if",
        },
        {
          blankLine: "always",
          prev: ["if"],
          next: ["function", "expression", "const", "let"],
        },
        { blankLine: "always", prev: ["const", "let"], next: "*" },
        { blankLine: "any", prev: ["const", "let"], next: ["const", "let"] },
      ],
      "no-use-before-define": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "React",
          ignoreRestSiblings: true,
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": ["error"],
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
