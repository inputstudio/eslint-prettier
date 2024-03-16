# prettier

![GitHub](https://img.shields.io/github/license/inputstudio/eslint-prettier)

`@inputstudio/eslint-prettier` is a package to lint and prettify our source code at Input Studio.

## Installation

Install the package with your favorite package manager:

```bash
# npm
npm i -D @inputstudio/eslint-prettier
# yarn
yarn add -D @inputstudio/eslint-prettier
# pnpm
pnpm add -D @inputstudio/eslint-prettier
```

Install the dependencies used by the package:

```bash
npx install-peerdeps --dev @inputstudio/eslint-prettier
```

## Usage

1. Create an `.eslintrc` file in your project root and add:

```json
{
  "extends": ["@inputstudio/eslint-prettier"]
}
```

2. Add a new property to your package.json file:

```json
{
  "prettier": "@inputstudio/eslint-prettier/prettier"
}
```

## License

This project is licensed under the [MIT License](./LICENSE).
