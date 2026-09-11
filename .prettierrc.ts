import { type Config } from 'prettier'
import { type PluginOptions } from 'prettier-plugin-tailwindcss'

const config: Config & PluginOptions = {
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
	plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],
	tailwindFunctions: ['cn'],
	tailwindStylesheet: './src/styles/main.css',
}

export default config
