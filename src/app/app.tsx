import Router from '@/app/router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@/styles/main.css'

const container = document.getElementById('root')
if (container) {
	const root = createRoot(container)
	root.render(
		<StrictMode>
			<Router />
		</StrictMode>,
	)
}
