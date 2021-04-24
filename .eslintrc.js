module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  rules: {
    semi: 'off',
    'implicit-arrow-linebreak': 'off',
    'comma-dangle': 'off',
    'no-restricted-globals': 'off',
    'no-param-reassign': 'off',
    'operator-linebreak': 'off',
    'no-console': 'off',
    'no-return-assign': 'off',
    'object-curly-newline': 'off',
    'max-len': 'off',
    'no-restricted-syntax': 'off',
    'global-require': 'off',
    'arrow-parens': 'off',
    'arrow-body-style': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    quotes: 'off',
    'nonblock-statement-body-position': 'off',
    radix: 'off',
    'prefer-arrow-callback': 'off',
    'consistent-return': 'off',
    'func-names': 'off',
    'no-unused-expressions': 'off',
    'no-continue': 'off',
    'no-await-in-loop': 'off',
    'operator-assignment': 'off',
    'space-before-function-paren': 'off',
    'no-underscore-dangle': 'off',
    'no-useless-escape': 'off',
    'no-plusplus': 'off',
    'no-inner-declarations': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'options' }],
  },
  overrides: [
    {
      files: ['*.test.js'],
      rules: {
        'no-undef': 'off',
        'prefer-arrow-callback': 'off',
        'no-unused-expressions': 'off',
      },
    },
  ],
};
