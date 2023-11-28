module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
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
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'import'],
  rules: {
    'no-undefined': 'off',
    'no-undef': 'off',
    'import/no-unresolved': 'off',
    'no-eq-null': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'no-prototype-builtins': 'off',
    'no-useless-constructor': 'off',
    'no-empty-function': [
      'warn',
      {
        allow: ['constructors'],
      },
    ],
    '@typescript-eslint/no-empty-function': ['off'],
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: ['index', 'builtin', 'object', 'type', 'external', 'internal', 'parent', 'sibling'],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
  },
};
