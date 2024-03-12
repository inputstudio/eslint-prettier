const eslintConfig = {
  "root": true,
  "env": {
    "browser": true,
    "node": true
  },
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "parser": "@typescript-eslint/parser"
  },
  "extends": ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended"],
  "plugins": [],
  "rules": {
    "prettier/prettier": [
      "error", 
      {
        "singleQuote": true,
        "tabWidth": 2,
        "printWidth": 120,
        "trailingComma": "es5",
        "plugins": ["prettier-plugin-tailwindcss"]
      }
    ]
  }
}


module.exports = eslintConfig; 