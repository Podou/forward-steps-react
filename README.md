## Forward steps - React (Stater)

This is a starter project which uses typescript to quickly start a react project.

## Steps

### 1. Init a new project

```
create-react-app framework-test --scripts-version=react-scripts-ts
```


### 2. Use webpack and support less

Add `webpack.config.js` file in project. And add packages support:
```json
{
  "devDependencies": {
    "awesome-typescript-loader": "^4.0.1",
    "babel-core": "^6.26.0",
    "css-loader": "^0.28.11",
    "extract-text-webpack-plugin": "^3.0.2",
    "file-loader": "^1.1.11",
    "less": "^2.7.3",
    "less-loader": "^4.1.0",
    "postcss-loader": "^2.1.3",
    "react-hot-loader": "^4.0.0",
    "source-map-loader": "^0.2.3",
    "style-loader": "^0.20.3",
  }
}
```

### 3. Start project with `webpack.config.js`

Change the `start` script
```json
{
  "scripts": {
    "start": "node --max-old-space-size=4096 node_modules/webpack-dev-server/bin/webpack-dev-server.js --config webpack.config.js"
  }
}
```
