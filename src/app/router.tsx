import Home from '@/features/home'
import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const About = lazy(() => import('@/features/about'))

const withSuspense = (component: React.ReactNode) => (
	<Suspense fallback={<div>Loading...</div>}>{component}</Suspense>
)

const router = createBrowserRouter([
	{ path: '/', element: <Home /> },
	{ path: '/about', element: withSuspense(<About />) },
])

const AppRouter = () => {
	return <RouterProvider router={router} />
}

export default AppRouter
