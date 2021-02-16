# section-io-axios-client

> OpenAPI client for Section.io

## What's Section

Please find all the information about Section [here](https://www.section.io/).

This package implements [Axios](https://www.npmjs.com/package/axios)-based client for [Section REST service endpoints](https://aperture.section.io/api/ui).

## Installation

Navigate to the folder of your consuming project and run the following command:

```
npm install --save section-io-axios-client
```
or

```
yarn add section-io-axios-client
```

## Usage

```typescript
import { AccountApi } from './api';

const accountApi = new AccountApi();

...

const accountId = 123;
const account = await accountApi.accountGet(accountId)
```

Section API documentation is [here](https://www.section.io/docs/api/).

## About swagger-codegen

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment

- Node.js
- Webpack
- Browserify

Language level

- ES5 - you must have a Promises/A+ library installed
- ES6

Module system

- CommonJS
- ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition should be automatically resolved via `package.json`. ([Reference](http://www.typescriptlang.org/docs/handbook/typings-for-npm-packages.html))

### Building

To build and compile the typescript sources to javascript use:

```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install section-io-axios-client --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

## Contributing

Contributing to this package implies one to regenerate client `*.ts` files. Manual changes will be lost. Now, some flaws in the source swagger declaration file prevent us from the clear approach and minor code fixes are required to make the code compile. The goal is to fix that `yaml` file and streamline the development of the package so that no extra code changes are required.

### Regenerate TypeScript files

To regenerate TypeScript files follow these steps:

1. Download the declaration file from the Section swagger. Now it resides here:  
   https://aperture.section.io/api/v1/swagger.yaml
2. Download the latest [swagger-codegen](https://swagger.io/tools/swagger-codegen/) CLI as described [here](https://github.com/swagger-api/swagger-codegen#prerequisites).
3. Unzip and install the CLI.
4. Run the command to generate `*.ts` files to the current directory:
   ```sh
   java -jar /path/to/swagger-codegen-cli.jar generate -l typescript-axios -i /path/to/section.io/swagger.yaml  -o .
   ```
5. Move the codegen output files in respective directories.
6. Build the project running the following:
   ```sh
   yarn build
   ```

If any question, please create an issue.
