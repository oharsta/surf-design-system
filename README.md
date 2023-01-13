# surf-design-system

Design System for https://surf.nl

## Getting Started

Install this package with `npm`:
```shell
npm install @surfnet/sds
```
or using `yarn`
```shell
yarn add @surfnet/sds
```
Import the sds.css in your index.js:
```js
import '@surfnet/sds/styles/sds.css';
```
Import the component's you want to use:
```js
import {LanguageSwitcher, Header} from "@surfnet/sds";
```
You can then render the `LanguageSwitcher` component like any other React component in JSX.

## Publishing

Increment the version in `package.json` and run the following commands:
```
npm run build
npm login
npm publish --access public ./dist
```
The package is published on https://www.npmjs.com/package/@surfnet/sds