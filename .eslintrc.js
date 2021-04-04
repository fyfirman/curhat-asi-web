module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb-typescript'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  settings: {
    react: {
      version: 'latest',
    },
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'arrow-body-style': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'prefer-template': 'error',
        'spaced-comment': ['error', 'always', { markers: ['/'] }],
        'import/no-unresolved': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_', varsIgnorePattern: '^_|[R-r]eact' },
        ],
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'variable',
            format: ['camelCase', 'PascalCase'],
            filter: {
              regex: '^_|[R-r]eact',
              match: false,
            },
          },
        ],
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-fragments': 'off',
        'react/require-default-props': 'off',
        'react/no-array-index-key': 'off',
        'react/no-unused-prop-types': 'off',
      },
    },
    {
      files: ['.eslintrc.js', '*.config.js'],
      parserOptions: { sourceType: 'script' },
      env: { node: true },
    },
  ],
  rules: {},
};
