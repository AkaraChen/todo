/* eslint-disable unicorn/prefer-module */
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['plugin:prettier/recommended', 'plugin:unicorn/all'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
        'consistent-return': 0,
        'default-case': 0,
        'func-names': 0,
        'no-console': 0,
        'no-new-func': 0,
        'no-param-reassign': 0,
        'no-restricted-syntax': 0,
        'object-curly-spacing': ['error', 'never'],
        'prettier/prettier': 'error',
        'unicorn/no-keyword-prefix': 0,
        'unicorn/prefer-spread': 0,
        'unicorn/filename-case': 0,
        'unicorn/prevent-abbreviations': [
            'error',
            {
                allowList: {
                    env: true,
                },
            },
        ],
    },
    settings: {
        'import/resolver': {
            typescript: true,
        },
    },
};
