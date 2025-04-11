import globals from "globals";
import eslint from "@eslint/js";
import tslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ ignores: ["eslint.config.js", "dist"] },
	{ files: ["**/*.{js,ts}"] },
	{ languageOptions: { globals: globals.node } },
	eslint.configs.recommended,
	...tslint.configs.recommendedTypeChecked,
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname
			}
		}
	},
	stylistic.configs.customize({
		indent: "tab",
		quotes: "double",
		semi: true,
		commaDangle: "never",
		jsx: false
	}),
	{
		plugins: {
			"@stylistic": stylistic
		},
		rules: {
			"@stylistic/max-statements-per-line": ["error", { "max": 2 }],
			"@stylistic/keyword-spacing": ["error", { "overrides": { 
				"if": { "after": false },
				"for": { "after": false },
				"catch": { "after": false }
			} }]
		}
	},
	{
		rules: {
			"@typescript-eslint/require-await": "warn"
		}
	}
]
