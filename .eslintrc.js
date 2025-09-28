module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin: import/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    // ---- TypeScript adjustments ----
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    //'@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': [
        'warn',
        {
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: true,
        }
    ],
    // ---- Prettier ----
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        trailingComma: 'all',
        printWidth: 80,
        tabWidth: 2,
      },
    ],
  },
  ignorePatterns: ['dist', 'node_modules'],
};
