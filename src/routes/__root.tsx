import type { QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
	Link,
	Outlet,
	createRootRouteWithContext,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
	{
		component: RootComponent,
		notFoundComponent: () => {
			return (
				<div>
					<p>This is the notFoundComponent configured on root route</p>
					<Link to="/">Start Over</Link>
				</div>
			)
		},
	},
)

function RootComponent() {
	return (
		<>
			<div className="flex gap-2 p-2 text-lg">
				<Link
					to="/"
					activeProps={{ className: 'font-bold' }}
					activeOptions={{ exact: true }}>
					Home
				</Link>{' '}
				<Link to="/about" activeProps={{ className: 'font-bold' }}>
					About
				</Link>{' '}
				<Link
					// @ts-expect-error
					to="/this-route-does-not-exist"
					activeProps={{ className: 'font-bold' }}>
					This Route Does Not Exist
				</Link>
			</div>
			<hr />
			<Outlet />
			<ReactQueryDevtools buttonPosition="top-right" />
			<TanStackRouterDevtools position="bottom-right" />
		</>
	)
}
