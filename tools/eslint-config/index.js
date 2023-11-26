module.exports = {
  overrides: [
    {
      files: ['./**/*.{ts,tsx}'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: { project: true },
      plugins: ['@typescript-eslint'],
    },
  ],
};
