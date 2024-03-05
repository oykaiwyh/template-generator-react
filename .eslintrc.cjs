module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/typescript',
    'airbnb-base', // airbnb-base不含ts规则，需要把ts的放在最下面
    'plugin:@typescript-eslint/recommended-type-checked',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-explicit-any': ['warn'],
    '@typescript-eslint/no-unsafe-return': ['warn'],
    '@typescript-eslint/no-unsafe-assignment': ['warn'],
    'import/no-unresolved': [
      'error',
      {
        ignore: ['/vite.svg'],
        commonjs: true,
        amd: true,
      },
    ],
    'import/no-absolute-path': [
      'error',
      {
        ignore: ['/vite.svg'],
        commonjs: true,
        amd: true,
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'object-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    // 'no-unused-vars': [2, { args: 'none' }],
    'function-paren-newline': [0],
    indent: [0],
    'operator-linebreak': 'off',
    // immer导致的规则错误
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['draft'] },
    ],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.jsx', '.tsx', '.ts'],
      },
    },
  },
};
