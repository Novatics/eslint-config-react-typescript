# Novatics Style Guide - React Typescript

[![npm version](https://badge.fury.io/js/@novatics-tools%2Feslint-config-react-typescript.svg)](https://badge.fury.io/js/@novatics-tools%2Feslint-config-react-typescript)
![Code Style Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)
[![MIT License](https://img.shields.io/badge/license-MIT-red.svg?style=flat)](https://github.com/Novatics/eslint-config-react-typescript/blob/master/LICENSE)

## Melhores práticas

Guia de estilo do Airbnb React / TSX
Uma abordagem bastante razoável para React e TSX

Este guia de estilo é baseado principalmente nos padrões que prevalecem atualmente em Typescript, embora algumas convenções possam variar adotamos e estendemos o guia de estilo do Airbnb e aplicamos algumas regras que achamos mais interessante trazendo para o contexto de projetos e aplicações amplas.

## Instalação

Para instalar e salvar em suas dependências `package.json`, execute:

```sh

npm i @novatics-tools/eslint-config-react-typescript

ou

yarn add @novatics-tools/eslint-config-react-typescript

```

## Eslint

```js
// .eslintrc.js
module.exports = {
  parserOptions: {
    project: "./tsconfig.json",
  },
  extends: ["@novatics-tools/eslint-config-react-typescript"],
};
```

## Prettier

Porque utilizamos o prettier?

- Você pressiona salvar e o código é formatado
- Não há necessidade de discutir o estilo na revisão do código
- Economiza tempo e energia

```js
// prettier.config.js
module.exports = {
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  arrowParens: "avoid",
  semi: false,
};
```

## Extends

Extends do @novatics-tools/eslint-config-react são utilizadas.

```js
...@novatics-tools/eslint-config-react
'airbnb-typescript'; // https://www.npmjs.com/package/eslint-config-airbnb
'plugin:@typescript-eslint/recommended'; // https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
```

## Rules

Rules do @novatics-tools/eslint-config-react são utilizadas.

```js
...@novatics-tools/eslint-config-react
'@typescript-eslint/no-unused-vars'; // Variáveis ​​que são declaradas e não usadas em nenhum lugar do código são provavelmente um erro devido à refatoração incompleta.
'@typescript-eslint/no-explicit-any'; // Usar o any tipo anula o propósito de usar o TypeScript. Quando any é usado, todas as verificações de tipo de compilador em torno desse valor são ignoradas.
'@typescript-eslint/explicit-function-return-type'; // Isso garante que o valor de retorno seja atribuído a uma variável do tipo correto
'@typescript-eslint/explicit-member-accessibility'; // Deixar de lado o modificador de acessibilidade e tornar tudo público pode tornar sua interface difícil de usar por outras pessoas.
'@typescript-eslint/no-namespace'; // Módulos TypeScript personalizados ( module foo {}) e namespaces ( namespace foo {}) são considerados formas desatualizadas de organizar o código TypeScript.
'@typescript-eslint/explicit-module-boundary-types'; // Tipos explícitos para valores de retorno de função e argumentos tornam claro para qualquer código de chamada qual é a entrada e saída do limite do módulo.
'react/prop-types'; // Remove regras de prop-types

```
