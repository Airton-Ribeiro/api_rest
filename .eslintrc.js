module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/first': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true, dependencies: true}],

    'no-console': 'off',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
  },
};
