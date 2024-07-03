import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    ignores: ['node_modules/**', 'dist/**']
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser
    },
    plugins: {
      js: pluginJs
    },
    rules: {
      'no-console': 'warn',
      'no-alert': 'warn',
      'no-var': 'error',
      'prefer-const': 'error',
      'no-escape-character': 'off',
    }
  }
];
