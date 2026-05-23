# oxlint-css

CSS linting with [oxlint](https://oxc.rs/) using [eslint-plugin-css](https://github.com/ota-meshi/eslint-plugin-css) via the `jsPlugins` feature.

## How it works

Oxlint's `jsPlugins` array lets you load ESLint plugins directly. This repo uses `eslint-plugin-css` to lint CSS definition objects in JavaScript/JSX — including `style={}` JSX attributes and `// @css` annotated objects.

## Setup

```bash
npm install
```

## Lint

```bash
npm run lint
```

## Configuration

The `.oxlintrc.json` loads the plugin and enables CSS rules:

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

## Example output

```
src/App.jsx:14:11  css(no-unknown-property): Unexpected unknown property 'colour'.
src/App.jsx:12:11  eslint(no-dupe-keys): Duplicate key 'padding'
src/styles.js:13:3 eslint(no-dupe-keys): Duplicate key 'color'
```
