module.exports = {
  parser: '@typescript-eslint/parser', // Tells ESLint to use this parser installed at previous step
  parserOptions: {
    ecmaVersion: 2021, // The version of ECMAScript you're using
    sourceType: 'module', // Enables ECMAScript modules
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the version of React to use
    },
  },
  extends: [
    'plugin:react/recommended', // Add rules for React
    'plugin:react-hooks/recommended', // Add rules for React hooks
    'plugin:@typescript-eslint/recommended', // Add rules for Typescript
    'plugin:prettier/recommended', // Add Prettier rules
  ],
  rules: {
    // This is where you can disable/customize some of the rules specified by the plugins
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
