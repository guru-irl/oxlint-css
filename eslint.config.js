import css from "@eslint/css";
import oxlint from "eslint-plugin-oxlint";

export default [
  // Lint .css files with @eslint/css
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    rules: {
      "css/no-duplicate-imports": "error",
      "css/no-empty-blocks": "error",
      "css/no-invalid-at-rules": "error",
      "css/no-invalid-properties": "error",
      "css/no-duplicate-keyframe-selectors": "error",
      "css/no-important": "warn",
      "css/use-baseline": "warn",
    },
  },

  // Disable ESLint JS rules already covered by oxlint (avoid duplicates)
  ...oxlint.configs["flat/recommended"],
];
