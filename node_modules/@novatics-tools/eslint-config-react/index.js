import rules from "./rules";

const config = {
  globals: {
    React: true,
    google: true,
    mount: true,
    mountWithRouter: true,
    shallow: true,
    shallowWithRouter: true,
    context: true,
    expect: true,
    jsdom: true,
    JSX: true,
  },
  env: {
    browser: true,
    es6: true,
    "jest/globals": true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: ["react", "jest", "prettier"],
  parser: "babel-eslint",
  rules,
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx"],
        moduleDirectory: ["node_modules", "src/"],
      },
    },
  },
};

module.exports = config;
