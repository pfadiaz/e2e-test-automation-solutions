export default {
  env: {
    browser: true, // Enable browser-specific environment
    es6: true, // Enable ES6 features
    node: true, // Enable Node.js environment
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2018, // Set your preferred ECMAScript version
  },
  rules: {
    // Add specific rules or customize your configuration here
    'no-console': 'off', // Allow console.log for debugging (you can change this to 'error' for a stricter rule)
    indent: ['error', 2], // Use 2 spaces for indentation
    semi: ['error', 'always'], // Require semicolons at the end of statements
    quotes: ['error', 'single'], // Use single quotes for string literals
  },
};
