# Create Project

> 这个是react + ts + airbnb 规则的初始项目

## Expanding the ESLint configuration

### replace extends

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

<!-- https://typescript-eslint.io/linting/typed-linting/ -->

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or

### add extends

添加阿里规范集

```js
extends: [
  'eslint:recommended',
  'plugin:@typescript-eslint/recommended-type-checked',
  'plugin:react-hooks/recommended',
  'airbnb-base',
],
```

修改规则及绝阿里规范导致 vite 内置的 public 引入问题

- 安装 eslint-plugin-import 插件 修改规则

```shell
$ npm i eslint-plugin-import -D
```

- 修改配置

```js
overrides: [
  {
    files: ['*.ts', '*.tsx'],
    extends: ['airbnb-base'],
    plugins: ['import'],
    rules: {
      'import/no-unresolved': [
        'error',
        {
          ignore: ['/vite.svg'],
          commonjs: true,
          amd: true,
        },
      ], // 忽略对/public/目录下资源的未解决引用警告
      'import/no-absolute-path': [
        'error',
        {
          ignore: ['/vite.svg'],
          commonjs: true,
          amd: true,
        },
      ], // 忽略对/public/目录下资源的未解决引用警告
    },
  },
],
```

## 配置 prettier 解决和 eslint 的规则冲突

### .prettierrc

```js
{
  "singleQuote": true,
  "jsxSingleQuote": false,
  "trailingComma": "all"
}
```

### .prettierignore

```
dist/
.gitignore
.npmignore
.prettierignore
.DS_Store
```

## 配置提交规范

### 安装 lint-staged 和 prettier

- 安装依赖

```
$ npm install --save-dev lint-staged prettier
```

- 配置

```json
// .lintstagedrc.json
{
  "*.{js,jsx,ts,tsx}": ["npm run eslint:lint"],
  "*.{scss,less,styl,html}": ["prettier --write"],
  "package.json": ["prettier --write"]
}
```

```json
// package.json
{
  "scripts": {
    "eslint:lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 10 --color",
    "eslint:fix": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 10 --color --fix"
  }
}
```

### 配置 husky 和 commitlint

#### 配置 [husky](https://typicode.github.io/husky/get-started.html)

- 安装依赖

```shell
$ npm i -D husky

```

- 初始化 husky

```shell
# 最新版的 husky不需要再去额外的配置了，直接 init即可
$ npx husky init
```

- 修改 .husky/pre-commit 配置

```shell
npm run lint-staged
```

```json
//package.json
{
  "scripts": {
    "lint-staged": "npx lint-staged -v true"
  }
}
```

#### 配置 [commitlint](https://commitlint.js.org/#/guides-local-setup)

- 安装 commitlint

```shell
$ npm install @commitlint/cli @commitlint/config-conventional
$ echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js

```

```shell
$ npm pkg set scripts.commitlint="commitlint --edit"
$ echo "npm run commitlint \${1}" > .husky/commit-msg
```

- 将 commitlint.config.js 改名为 .commitlintrc.cjs

- 如还在 eslint 报错，请将 .commitlintrc.cjs 加入 配置中

```json
// .eslintrc.cjs
{
  "parserOptions": {
    "project": ["./tsconfig.json", "./tsconfig.node.json", ".commitlintrc.cjs"]
  }
}
```

- 配置

```javascript
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [0],
    'lint-type': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'lint-type': ({ header }) => {
          //   [
          //     'bug', // 此项特别针对bug号，用于向测试反馈bug列表的bug修改情况
          //     'feat', // 新功能（feature）
          //     'fix', // 修补bug
          //     'docs', // 文档（documentation）
          //     'style', // 格式（不影响代码运行的变动）
          //     'refactor', // 重构（即不是新增功能，也不是修改bug的代码变动）
          //     'test', // 增加测试
          //     'chore', // 构建过程或辅助工具的变动
          //     'revert', // feat(pencil): add ‘graphiteWidth’ option (撤销之前的commit)
          //     'merge', // 合并分支， 例如： merge（前端页面）： feature-xxxx修改线程地址
          //   ],
          const commitRegex =
            // /^(?:build|chore|ci|docs|feat|fix|refactor|revert|style|test)\s*:\s*.+$/;
            /^(?:build|chore|ci|docs|feat|fix|refactor|revert|style|test)\s*:/;
          if (commitRegex.test(header)) {
            return [true, ''];
          } else {
            return [
              false,
              'commit前缀为: build|chore|ci|docs|feat|fix|refactor|revert|style|test: ',
            ];
          }
        },
      },
    },
  ],
};
```

## 配置react-router

### 安装依赖

```shell
$ npm install react-router-dom
```

### 配置

- 建立pages/pageA/index.tsx,pages/pageB/index.tsx

```tsx
// pages/pageA/index.tsx
const PageA = () => {
  return <div>PageA</div>;
};

export default PageA;
```

```tsx
// pages/pageB/index.tsx
const PageB = () => {
  return <div>PageB</div>;
};

export default PageB;
```

- 建立routes/routes.tsx

```tsx
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const PageA = lazy(() => import('../pages/pageA'));
const PageB = lazy(() => import('../pages/pageB'));

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <PageA />,
  },
  {
    path: '/a',
    element: <PageA />,
  },
  {
    path: '/b',
    element: <PageB />,
  },
]);

export default routers;
```

- 建立routes/index.tsx

```tsx
import { RouterProvider } from 'react-router-dom';
import { routers } from './routes';

const RouterView = () => <RouterProvider router={routers} />;

export default RouterView;
```

### 解决 airbnb规则导致的 eslint警告

#### Unable to resolve path to module "xxx"

- 安装eslint-import-resolver-typescript

```shell
$ npm install eslint-import-resolver-typescript  -D
```

- 修改.eslintrc.cjs配置

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:react-hooks/recommended",
    "plugin:import/typescript", // 配置
    "airbnb-base"
  ]
}
```

#### Missing file extension "tsx" from "xxx"

修改方式一：

- 将 overrides中的 import/no-unresolved 和 import/no-absolute-path 放到rules中
- 注释 .eslintrc.cjs 中的 overrides

- 配置规则覆盖[airbnb的默认规则](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js#L139)

```json
{
  "rules": {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "mjs": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ]
  }
}
```

修改方式二：

- 配置规则覆盖[airbnb的默认规则](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js#L139)将其放入overrides的rules中

```json
{
  "rules": {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "mjs": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ]
  }
}
```

### 修改入口文件 main.tsx

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import './index.css';
import RouterView from './routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterView></RouterView>
  </React.StrictMode>,
);
```

## 配置alias

- 安装依赖

```shell
$ npm install eslint-import-resolver-alias -D
```

- 配置.eslintrc.cjs

```json
{
  "settings": {
    "import/resolver": {
      "alias": {
        "map": [["@", "./src"]],
        "extensions": [".js", ".jsx", ".tsx"]
      }
    }
  }
}
```

- 配置vite.config.ts

```ts
{
  "compilerOptions": {
    // config
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

- 配置tsconfig.json

```json
{
  "compilerOptions": {
    // config
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## 安装sass

```shell
$ npm install -D sass
```
