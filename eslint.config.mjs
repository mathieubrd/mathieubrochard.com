import { FlatCompat } from "@eslint/eslintrc"
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ["next", "prettier"],
  }),
  eslintPluginPrettierRecommended,
]

export default eslintConfig
