import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default {
  files: ["**/*.{js,mjs,cjs,jsx}"],
  languageOptions: {
    globals: globals.browser,
  },
  extends: [pluginJs.configs.recommended, pluginReact.configs.flat.recommended],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "no-unused-vars": "warn",
    "react/react-in-jsx-scope": "off",
  },
};
