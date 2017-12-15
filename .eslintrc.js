module.exports = {
  plugins: ['react'],
  extends: ['standard', 'plugin:react/recommended'],
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    semi: [2, 'always'],
    'space-before-function-paren': 0,
    'no-mixed-operators': 0
  },
  env: {
    browser: true,
    jest: true
  }
};
