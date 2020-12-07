module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'prettier'
  ],
  parserOptions: {
     project: './tsconfig.json',
  },
  extends: [
    'airbnb-typescript/base',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'warn',
    // 'vue/custom-event-name-casing': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'import/no-named-as-default': 0,
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-unused-vars': 'off',

    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    'prettier/prettier': [
      'warn',
      {
        printWidth: 100,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'avoid',
      },
    ],

    // provide by prettier
    semi: 'off',
    'arrow-parens': 'off',
    'object-curly-spacing': 'off',
    'object-curly-newline': 'off',
    'comma-dangle': 'off',
    'implicit-arrow-linebreak': 'off',
    indent: 'off',
    'space-before-blocks': 'off',
    'switch-colon-spacing': 'off',
    'block-spacing': 'off',
    'comma-spacing': 'off',
    'space-infix-ops': 'off',
    'brace-style': 'off',
    'no-void': 'off',
    // prettier ignore end

    'import/prefer-default-export': 0,

    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    '@typescript-eslint/no-extra-non-null-assertion': ['error'],
    '@typescript-eslint/no-extraneous-class': ['error', { allowWithDecorator: true }],
    
    // these linter need complex config
    '@typescript-eslint/promise-function-async': ['error'],
    '@typescript-eslint/require-array-sort-compare': ['warn'],
    '@typescript-eslint/restrict-plus-operands': ['error'],
    '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],
    '@typescript-eslint/switch-exhaustiveness-check': ['warn'],
    '@typescript-eslint/no-floating-promises': ['warn', { ignoreVoid: true }],
    '@typescript-eslint/no-unnecessary-condition': ['error', { }],
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/test/**/*.{spec,test}.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};
