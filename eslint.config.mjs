import { defineConfig, globalIgnores } from "eslint/config";
import eslintPluginAstro from "eslint-plugin-astro";

const eslintConfig = defineConfig([
  ...eslintPluginAstro.configs.recommended,
  globalIgnores([".astro/**", ".next/**", "app/**", "dist/**", "node_modules/**"]),
]);

export default eslintConfig;
