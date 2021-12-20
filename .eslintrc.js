module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  env: {
    browser: true,
    amd: true,
    node: true,
    es2021: true
  },
  plugins: ['simple-import-sort', 'react', 'prettier', 'react-hooks'],
  extends: ['airbnb', 'prettier', 'plugin:react/recommended', 'plugin:import/typescript'],
  rules: {
    'no-nested-ternary': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['off'],
    'react-hooks/rules-of-hooks': 'error',
    'no-debugger': 0,
    'no-alert': 0,
    'no-unused-vars': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'all'
      }
    ],
    'arrow-body-style': [2, 'as-needed'],
    'no-unused-expressions': [
      2,
      {
        allowTaggedTemplates: true
      }
    ],
    'no-param-reassign': [
      2,
      {
        props: false
      }
    ],
    'react/jsx-key': ['error', { checkFragmentShorthand: true }],
    'no-console': 'error',
    'import/prefer-default-export': 0,
    import: 0,
    'func-names': 0,
    'space-before-function-paren': 0,
    'max-len': 0,
    'import/extensions': 0,
    'no-underscore-dangle': 0,
    'consistent-return': 0,
    'react/display-name': 1,
    'react/no-array-index-key': 0,
    'react/react-in-jsx-scope': 0,
    'react/prefer-stateless-function': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-unescaped-entities': 'off',
    'jsx-a11y/accessible-emoji': 0,
    'react/require-default-props': 0,
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'no-trailing-spaces': 1,
    'no-extra-parens': 0,
    'react/prop-types': 0,
    semi: [1, 'always'],
    'object-curly-spacing': ['error', 'always', { objectsInObjects: true }],
    'space-in-parens': [1, 'never'],
    'spaced-comment': ['error', 'always'],
    'no-this-before-super': 'warn',
    'no-undef': 'warn',
    'no-unreachable': 'warn',
    'constructor-super': 'warn',
    'valid-typeof': 'warn',
    'react/jsx-uses-vars': 'error',
    'react/jsx-one-expression-per-line': 'error',
    'react/jsx-closing-bracket-location': 'warn',
    'comma-dangle': ['error', 'never'],
    'global-require': 'off',
    'one-var': 'off',
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    'import/no-unresolved': [2, { ignore: ['@env'], caseSensitiveStrict: true }],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    ],
    radix: 0,
    'no-shadow': 'off',
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'none',
        singleQuote: true,
        printWidth: 100,
        bracketSpacing: true,
        jsxBracketSameLine: false
      }
    ],
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref']
      }
    ]
  }
};
