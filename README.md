# oxlint-css

CSS linting with [oxlint](https://oxc.rs/) and [ESLint v9](https://eslint.org/) chained together.

- **oxlint** — fast JS/TS linting + CSS-in-JS linting via `eslint-plugin-css` (loaded as a `jsPlugin`)
- **ESLint** — `.css` file linting via `@eslint/css` language plugin
- **eslint-plugin-oxlint** — disables ESLint rules already covered by oxlint to avoid duplicates

## Setup

```bash
npm install
```

## Lint

```bash
npm run lint          # runs oxlint then eslint
npm run lint:oxlint   # oxlint only (JS/CSS-in-JS)
npm run lint:eslint   # eslint only (CSS files)
```

## Configuration

### oxlint (`.oxlintrc.json`)

Loads `eslint-plugin-css` as a JS plugin for CSS-in-JS object linting:

```json
{
  "jsPlugins": ["eslint-plugin-css"],
  "rules": {
    "css/no-dupe-properties": "error",
    "css/no-invalid-color-hex": "error",
    "css/no-shorthand-property-overrides": "error",
    "css/no-unknown-property": "warn",
    "css/no-unknown-unit": "error"
  }
}
```

### ESLint (`eslint.config.js`)

Uses `@eslint/css` for `.css` file linting and `eslint-plugin-oxlint` to avoid duplicate JS rules:

```js
import css from "@eslint/css";
import oxlint from "eslint-plugin-oxlint";

export default [
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    rules: {
      "css/no-invalid-properties": "error",
      "css/no-empty-blocks": "error",
      // ...
    },
  },
  ...oxlint.configs["flat/recommended"],
];
```

## Example output

```
=== oxlint (JS/CSS-in-JS) ===
src/App.jsx:14:11  css(no-unknown-property): Unexpected unknown property 'colour'.
src/styles.js:13:3 eslint(no-dupe-keys): Duplicate key 'color'

=== eslint (CSS files) ===
src/styles.css:5:3   error  Unknown property 'colour' found    css/no-invalid-properties
src/styles.css:9:14  error  Unexpected empty block found        css/no-empty-blocks
src/styles.css:13:1  error  Unexpected duplicate @import rule   css/no-duplicate-imports
```
