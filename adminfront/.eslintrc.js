module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "react-app",
    // "prettier",
    // "plugin:react-hooks/recommended",
    // "plugin:storybook/recommended",
  ],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/ban-ts-comment": "off",
  },
}
