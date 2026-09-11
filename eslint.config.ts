import { fixupPluginRules } from '@eslint/compat'
import eslint from '@eslint/js'
import pluginRouter from '@tanstack/eslint-plugin-router'
import importPlugin from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier/recommended'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig([
	eslint.configs.recommended,
	tseslint.configs.recommended,
	reactHooks.configs.flat.recommended,
	{
		...importPlugin.flatConfigs.recommended,
		plugins: { import: fixupPluginRules(importPlugin) },
	},
	...pluginRouter.configs['flat/recommended'],
	prettier,
	{
		ignores: [
			'build',
			'node_modules',
			'dist',
			'src/routeTree.gen.ts',
			'.agents/**',
			'.codex/**',
			'.tanstack/**',
		],
	},
	{
		files: ['**/*.js', '**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: tseslint.parser,
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: { ...globals.browser },
			parserOptions: {
				tsconfigRootDir: __dirname,
				ecmaFeatures: { jsx: true },
			},
		},
		plugins: { react: fixupPluginRules(react) },
		rules: {
			'prettier/prettier': 'warn',
			camelcase: 'off',
			'prefer-const': 'warn',
			'no-extra-semi': 'warn',
			semi: ['error', 'never'],
			'@typescript-eslint/no-use-before-define': 'off',
			'@typescript-eslint/ban-ts-comment': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-empty-function': 'off',
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{ argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
			],
			'react/display-name': 'warn',
			'react/no-unescaped-entities': 'warn',
			'react/no-deprecated': 'warn',
			'react/jsx-key': 'warn',
			'react/jsx-uses-react': 'off',
			'react/react-in-jsx-scope': 'off',
		},
		settings: {
			react: { version: 'detect' },
			'import/resolver': {
				typescript: {
					project: './tsconfig.json',
					alias: { '@': [fileURLToPath(new URL('./src', import.meta.url))] },
				},
			},
		},
	},
])
