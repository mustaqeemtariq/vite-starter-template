import { type Config } from 'prettier'

const config: Config = {
	singleQuote: true,
	semi: false,
	printWidth: 80,
	bracketSameLine: true,
	bracketSpacing: true,
	arrowParens: 'avoid',
	trailingComma: 'all',
	useTabs: true,
	objectWrap: 'collapse',
	tabWidth: 2,
	plugins: ['prettier-plugin-tailwindcss'],
	tailwindFunctions: ['cn'],
}

export default config
