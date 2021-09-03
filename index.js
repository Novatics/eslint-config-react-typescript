const OFF = 0;
const WARNING = 1;
const ERROR = 2;

const config = {
  env: {
    browser: true,
    es6: true,
    "jest/globals": true,
  },
  extends: [
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "@novatics-tools/eslint-config-react",
  ],
  plugins: ["@typescript-eslint", "react", "jest"],
  parser: "@typescript-eslint/parser",
  rules: {
    "react/prop-types": OFF,
    // Remove regras de prop-types
    "@typescript-eslint/no-unused-vars": ERROR,
    // Variáveis ​​que são declaradas e não usadas em nenhum lugar do código são provavelmente um erro devido à refatoração incompleta.
    "@typescript-eslint/no-explicit-any": WARNING,
    // Usar o any tipo anula o propósito de usar o TypeScript. Quando any é usado, todas as verificações de tipo de compilador em torno desse valor são ignoradas.
    "@typescript-eslint/explicit-function-return-type": ERROR,
    // Isso garante que o valor de retorno seja atribuído a uma variável do tipo correto
    "@typescript-eslint/explicit-member-accessibility": OFF,
    // Deixar de lado o modificador de acessibilidade e tornar tudo público pode tornar sua interface difícil de usar por outras pessoas.
    "@typescript-eslint/no-namespace": OFF,
    // Módulos TypeScript personalizados ( module foo {}) e namespaces ( namespace foo {}) são considerados formas desatualizadas de organizar o código TypeScript.
    "@typescript-eslint/explicit-module-boundary-types": OFF, // Tipos explícitos para valores de retorno de função e argumentos tornam claro para qualquer código de chamada qual é a entrada e saída do limite do módulo.
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ], // ignore import com extensão explicita
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".jsx", ".js"],
    },
    "import/resolver": {
      typescript: {
        project: "./tsconfig.json",
        node: {
          paths: ["src"],
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
  },
};

module.exports = config;
