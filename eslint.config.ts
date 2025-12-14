import js from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import checkFile from 'eslint-plugin-check-file'
import prettier from 'eslint-plugin-prettier/recommended'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
	prettier,
	...tseslint.configs.recommended,
	reactHooks.configs.flat.recommended,
	js.configs.recommended,
	{ ignores: ['build', 'node_modules', 'dist', 'src/routeTree.gen.ts'] },
	{
		files: ['**/*.js', '**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: tsParser,
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: { ...globals.browser },
			parserOptions: {
				tsconfigRootDir: import.meta.dirname,
				ecmaFeatures: { jsx: true },
			},
		},
		plugins: { react, 'check-file': checkFile },
		rules: {
			'prettier/prettier': 'warn',
			camelcase: 'off',
			'prefer-const': 'off',
			'no-extra-semi': 'warn',
			semi: ['error', 'never'],
			'@typescript-eslint/no-use-before-define': 'off',
			'@typescript-eslint/ban-ts-comment': 'off',
			'@typescript-eslint/ban-types': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/prefer-const': 'off',
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
				alias: {
					map: [['@', './src']],
					extensions: ['.js', '.jsx', '.ts', '.tsx'],
				},
			},
			tailwindcss: { callees: ['cn', 'clsx', 'classnames'] },
		},
	},
])
