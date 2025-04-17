const prettierConfig = require('eslint-config-prettier')
const eslintPluginPrettier = require('eslint-plugin-prettier')

module.exports = [
  {
    files: ['**/*.js'],
    plugins: {
      prettier: eslintPluginPrettier,
    },
    languageOptions: {
      globals: {
        jest: true,
      },
    },
    rules: {
      ...prettierConfig.rules,
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          trailingComma: 'all',
          printWidth: 80,
          tabWidth: 2,
          semi: false,
        },
      ],
    },
  },
  {
    ignores: ['node_modules/**', 'dist/**', '.yarn/**'],
  },
]
