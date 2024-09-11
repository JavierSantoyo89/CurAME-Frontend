import { Dashboard, Home, Login } from '@/views'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/dashboard',
		element: <Dashboard />,
	},
])

const myRoutes = () => <RouterProvider router={router} />

export default myRoutes
