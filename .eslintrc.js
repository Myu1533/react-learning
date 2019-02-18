// module.exports = {
//   parser: 'babel-eslint',
//   env: {
//     es6: true,
//     node: true,
//     browser: true
//   },
//   parserOptions: {
//     ecmaVersion: 6,
//     sourceType: 'module',
//     ecmaFeatures: {
//       jsx: true
//     }
//   },
//   plugins: ['react'],
//   extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended']
// };
module.exports = {
  ecmaFeatures: {
    jsx: true,
    modules: true
  },
  env: {
    browser: true,
    node: true
  },
  parser: 'babel-eslint',
  rules: {
    // quotes: [2, 'single'],
    strict: [2, 'never'],
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/react-in-jsx-scope': 2
  },
  plugins: ['react']
};
