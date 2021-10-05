# Create tsconfig.json
```json
{
  "compilerOptions": {
    "outDir": "./lib",
    "declaration": true,
    "target": "es5",
    "module": "commonjs",
    "lib": ["es6", "dom"],
    "jsx": "react",
    "sourceMap": true,
    "strict": true,
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "resolveJsonModule": true
  },
  "compileOnSave": true,
  "include": ["./src/**/*"]
}
```
# Create package.json
```json
{
  "name": "react-ts",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@types/react": "^17.0.0",
    "@types/react-dom": "^17.0.0",
    "clean-webpack-plugin": "latest",
    "html-webpack-plugin": "latest",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "ts-loader": "latest",
    "typescript": "^4.1.2",
    "webpack-cli": "latest",
    "webpack-dev-server": "latest"
  },
  "scripts": {
    "build": "webpack",
    "start": "webpack-dev-server"
  },
  "main": "lib/index",
  "types": "lib/index"
}


```

# Add webpack.config.js
```js
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/app/app.tsx',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/template/index.html'
        })
    ],
    output: {
        path: __dirname + '/public',
        filename: 'build/[name].[contenthash].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    },
    mode: 'development',
    devtool: 'eval-cheap-source-map'
}
```

# Create ./src/template/index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
    <div id='root'></div>
</body>
</html>
```

# Create ./src/app/app.tsx
```typescript
import React from 'react'
import ReactDom from 'react-dom'

const Hello: React.FunctionComponent<{ compiler: string; framework: string }> =
  (props) => {
    return (
      <div>
        <div>{props.compiler}</div>
        <div>{props.framework}</div>
        <div>{'Fuck webpack5'}</div>
      </div>
    )
  }

ReactDom.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById('root')
)
```

# Run webpacl dev server
```console
npm run start
```