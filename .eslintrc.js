module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential"],
  plugins: ["vue", "@typescript-eslint"],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    extraFileExtensions: [".vue"],
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "vue/no-unused-components": 1,
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.vue"],
      rules: {
        "@typescript-eslint/no-unused-vars": [1, { args: "none" }],
        "vue/multi-word-component-names": 0,
      },
    },
  ],
};
