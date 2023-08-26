/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  ignorePatterns: ["server.ts"],
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "@config/eslint-config-custom",
  ],
};
