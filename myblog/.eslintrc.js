module.exports = {
  extends: ['airbnb'],
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    graphql: false,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      ecmaVersion: 2018,
      jsx: true,
    },
  },
}
