import js from '@eslint/js'
import ts from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import checkFile from 'eslint-plugin-check-file'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import globals from 'globals'

export default [
	js.configs.recommended,
	{
		ignores: ['build', 'node_modules', 'dist'],
	},
	{
		files: ['**/*.js', '**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: tsParser,
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.browser,
			},
			parserOptions: {
				tsconfigRootDir: import.meta.dirname,
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		plugins: {
			'@typescript-eslint': ts,
			react,
			prettier,
			'check-file': checkFile,
		},
		rules: {
			'prettier/prettier': 'warn',
			camelcase: 'off',
			'@typescript-eslint/no-use-before-define': 'off',
			'@typescript-eslint/ban-ts-comment': 'off',
			'@typescript-eslint/ban-types': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'prefer-const': 'off',
			'@typescript-eslint/prefer-const': 'off',
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'react/display-name': 'warn',
			'react/no-unescaped-entities': 'warn',
			'react/no-deprecated': 'warn',
			'@typescript-eslint/no-empty-interface': 'warn',
			'react/jsx-key': 'warn',
			'no-extra-semi': 'warn',
			'@typescript-eslint/no-empty-function': 'off',
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{ argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
			],
			'react/jsx-uses-react': 'off',
			'react/react-in-jsx-scope': 'off',
			semi: ['error', 'never'],
			'check-file/filename-naming-convention': [
				'error',
				{
					'**/*.{ts,tsx}': 'KEBAB_CASE',
				},
				{
					ignoreMiddleExtensions: true,
				},
			],
			'check-file/folder-naming-convention': [
				'error',
				{
					'src/**/!(__tests__)': 'KEBAB_CASE',
				},
			],
		},
		settings: {
			react: {
				version: 'detect',
			},
			'import/resolver': {
				alias: {
					map: [['@', './src']],
					extensions: ['.js', '.jsx', '.ts', '.tsx'],
				},
			},
			tailwindcss: {
				callees: ['cn', 'clsx', 'classnames'],
			},
		},
	},
]
