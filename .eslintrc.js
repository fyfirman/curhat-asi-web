module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "prettier", "eslint:recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint", "react-hooks"],
  settings: {
    react: {
      version: "latest"
    }
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      rules: {
        "no-undef": "off",
        "no-unused-vars": "off",
        "prefer-template": "error",
        "spaced-comment": ["error", "always", { markers: ["/"] }],
        "import/no-unresolved": "off",
        "@typescript-eslint/camelcase": "off",
        // "@typescript-eslint/explicit-function-return-type": ["off"],
        // "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": [
          "error",
          { argsIgnorePattern: "^_", varsIgnorePattern: "^_|[R-r]eact" }
        ]
      }
    },
    {
      files: [".eslintrc.js", "*.config.js"],
      parserOptions: { sourceType: "script" },
      env: { node: true }
    }
  ],
  rules: {}
};
