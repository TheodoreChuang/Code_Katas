### Setup

Create ./build and ./src
`$ tsc --init`
Update tsconfig.json outDir and rootDir

`$npm init -y`
`$ npm i @types/node`

Update package.json with:

```
"scripts": {
    "build": "tsc -w"
  },
```

`$ npm start` will now watch for changes build and run with every save

### Testing

`$ npm i typescript jest @types/jest ts-jest -D`

Add 'jest.config.js`

Update package.json with:

```
"scripts": {
    "test: "jest --watch"
  },
```

source: https://basarat.gitbooks.io/typescript/docs/testing/jest.html
https://amenallah.com/node-js-typescript-jest-express-starter/
