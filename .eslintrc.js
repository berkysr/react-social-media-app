module.exports = {
  env: {
    browser: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.js"],
      parserOptions: {
        parser: "@typescript-eslint/parser",
        project: "./tsconfig.json",
      },
    },
  ],
  parserOptions: {
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  plugins: ["react"],
  rules: {
    "no-undefined": "off",
    "no-undef": "off",
    "no-eq-null": "off",
    "no-prototype-builtins": "off",
    "no-useless-constructor": "off",
    "no-empty-function": [
      "warn",
      {
        allow: ["constructors"],
      },
    ],
    "@typescript-eslint/no-empty-function": ["off"],
  },
};
