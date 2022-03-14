# Novatics Style Guide - React

[![npm version](https://badge.fury.io/js/@novatics-tools%2Feslint-config-react.svg)](https://badge.fury.io/js/@novatics-tools%2Feslint-config-react)
![Code Style Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)
[![MIT License](https://img.shields.io/badge/license-MIT-red.svg?style=flat)](https://github.com/Novatics/eslint-config-react-typescript/blob/master/LICENSE)

## Melhores práticas

Guia de estilo do Airbnb React / JSX
Uma abordagem bastante razoável para React e JSX

Este guia de estilo é baseado principalmente nos padrões que prevalecem atualmente em JavaScript, embora algumas convenções possam variar adotamos e estendemos o guia de estilo do Airbnb e aplicamos algumas regras que achamos mais interessante trazendo para o contexto de projetos e aplicações amplas.

## Instalação

Para instalar e salvar em suas dependências `package.json`, execute:

```sh

npm i @novatics-tools/eslint-config-react

ou

yarn add @novatics-tools/eslint-config-react

```

## Eslint

```js
// .eslintrc.js
module.exports = {
  extends: ["@novatics-tools/eslint-config-react"],
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

## Extenções

```js
"airbnb"; // https://www.npmjs.com/package/eslint-config-airbnb
"airbnb/hooks"; // https://www.npmjs.com/package/eslint-config-airbnb
"plugin:import/recommended"; // https://www.npmjs.com/package/eslint-plugin-import
"plugin:react/recommended"; // https://www.npmjs.com/package/eslint-plugin-react
"plugin:prettier/recommended"; // https://github.com/prettier/eslint-plugin-prettier
"plugin:react-hooks/recommended"; // https://www.npmjs.com/package/eslint-plugin-react-hooks
```

## Regras

```js
"react/jsx-filename-extension"; // Arquivos que podem usar o conceito de JSX
"react/jsx-props-no-spreading"; // Desabilita a regra de não fazer spread em props exemplo: <div {...props} /> agora é aceito.
"react/react-in-jsx-scope"; // React 17 não precisamos mais ter a React importado no arquivo.
"space-infix-ops"; // Embora as preferências de formatação sejam muito pessoais, vários guias de estilo exigem espaços ao redor dos operadores, como: let sum = 1 + 2;
"prefer-spread"; // No ES2015, pode-se usar a sintaxe de propagação para chamar funções variáveis. Math.max(...args);
"no-multi-spaces"; // Esta regra visa proibir vários espaços em branco em torno de expressões lógicas, expressões condicionais, declarações, elementos de array, propriedades de objeto, sequências e parâmetros de função.
"class-methods-use-this"; // Se um método de classe não usar this, às vezes pode ser transformado em uma função estática.
"arrow-parens"; // Esta regra impõe o uso consistente de parênteses nas arrow functions.
"import/prefer-default-export"; // Quando houver apenas uma exportação de um módulo, prefira usar a exportação padrão em vez da exportação nomeada.
"import/no-unresolved"; // Por padrão, apenas as importações ES6 serão resolvidas
"consistent-return"; // Remove obrigatoriedade de sempre ter um retorno nas funções
"no-var"; // Não é possível usar var
"quotes"; // Aspas simples
"semi"; // Ponto e virgular sempre
"complexity"; // Máximo de complexidade em uma função ou arquivo
"import/extensions"; // Proíbe a importação com a extensão exemplo: home.jsx
"max-lines"; // Máximo de 200 linhas por arquivo
```
