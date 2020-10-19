[![npm](https://img.shields.io/npm/dw/fitbit-asap-types.svg?logo=npm&label=npm%20version)](https://www.npmjs.com/package/fitbit-asap-types)

# Introduction
This package include Types definitions to use [Fitbit ASAP](https://github.com/dillpixel/fitbit-asap) with TypeScript.

Types have comments to allow developers to view documentation in Visual Studio Code.

# Installation
## 1. Install the module
You could use a any package manager to install this module. It was tested with npm, yarn and pnpm.
```sh
npm install fitbit-asap-types --save-dev
```
## 2. Include types in your projects
Update the `tsconfig.json` inside the app folder. Add `"../node_modules/fitbit-asap-types/types"`  to paths to include.
```json
{
 "extends": "../tsconfig.json",
 "include": [
  "**/*.ts",
  "../node_modules/fitbit-sdk-types/types/device",
  "../node_modules/fitbit-asap-types/types"
 ]
}
```

Update the `tsconfig.json` inside the companion folder. Add `"../node_modules/fitbit-asap-types/types"` to paths to include.
```json
{
 "extends": "../tsconfig.json",
 "include": [
  "**/*.ts",
  "../node_modules/fitbit-sdk-types/types/companion",
  "../node_modules/fitbit-asap-types/types"
 ]
}
```