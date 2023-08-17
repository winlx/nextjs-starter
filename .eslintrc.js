const commonRules = {
  'import/prefer-default-export': 'off',
  'import/no-default-export': 'error',
  'import/imports-first': ['error', 'absolute-first'],
  'no-param-reassign': [
    'error',
    { props: true, ignorePropertyModificationsFor: ['draft'] },
  ],
  'react/function-component-definition': [
    2,
    {
      namedComponents: ['function-declaration', 'arrow-function'],
    },
  ],
  'react/jsx-no-useless-fragment': [
    'error',
    {
      allowExpressions: true,
    },
  ],
  '@typescript-eslint/explicit-function-return-type': 'error',
  'padding-line-between-statements': [
    'error',
    { blankLine: 'always', prev: '*', next: ['return', 'block-like'] },
    { blankLine: 'always', prev: ['block-like'], next: '*' },
  ],
};

module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: { ...commonRules },
  overrides: [
    {
      files: ['src/app/**/page.tsx', 'src/app/**/layout.tsx'],
      rules: {
        ...commonRules,
        'import/no-default-export': 'off',
      },
    },
  ],
};
