/** @type {import("eslint/conf/eslint-all")} */
module.exports = {
  ignorePatterns: ["node_modules", "build"],
  settings: {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
};
