module.exports = {
    plugins: [
      "prettier"
    ],
    extends: [
      "eslint:recommended",
      "prettier"
    ],
    parser: "babel-eslint",
    env: {
      es6: true,
      node: true
    },
    rules: {
      "prettier/prettier": "error", // Prettier errors (autofixes) are now ESLint errors (autofixes)
    },
    overrides: [
      { files: ["**/__tests__/**/*.js", "**/*.test.js"], env: { jest: true } }
    ]
  };
  