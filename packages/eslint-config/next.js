const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "prettier",
    require.resolve("@vercel/style-guide/eslint/next"),
    "eslint-config-turbo",
  ],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
  },
  plugins: ["only-warn"],
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
  ],
  overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
  rules: {
    camelcase: "warn",
    curly: "error",
    "block-scoped-var": "error",
    "dot-notation": "error",
    "eol-last": ["error", "always"],
    eqeqeq: "error",
    "newline-before-return": "error",
    "no-alert": "error",
    "no-await-in-loop": "error",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-else-return": ["error", { allowElseIf: false }],
    "no-loop-func": "error",
    "no-return-await": "error",
    "no-shadow": "error",
    "no-useless-return": "error",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "no-var": "error",
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: ["continue", "break"] },
    ],
    "prefer-const": [
      "error",
      { destructuring: "all", ignoreReadBeforeAssign: true },
    ],
    "prefer-destructuring": [
      "error",
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: true,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    "prefer-template": "warn",
  },
};
