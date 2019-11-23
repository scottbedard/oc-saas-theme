/* eslint-disable */

const production = process.env.NODE_ENV === 'production';

module.exports = {
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
    ],
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)',
            ],
            env: {
                jest: true,
            },
        },
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    root: true,
    rules: {
        'import/prefer-default-export': 'off',
        'indent': ['error', 4],
        'max-len': 0,
        'no-console': production ? 'error' : 'off',
        'no-debugger': production ? 'error' : 'off',
    },
};
