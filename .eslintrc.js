module.exports = {
  env: {
    browser: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.js'],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json',
      },
    },
  ],
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'no-undefined': 'off',
    'no-undef': 'off',
    'no-eq-null': 'off',
    'prettier/prettier': ['error'],
    'no-prototype-builtins': 'off',
    'no-useless-constructor': 'off',
    'no-empty-function': [
      'warn',
      {
        allow: ['constructors'],
      },
    ],
    '@typescript-eslint/no-empty-function': ['off'],
  },
};
