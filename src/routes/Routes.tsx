import { Home } from '../views/home/Home'
import { Login } from '../views/login/Login'
import { Dashboard } from '../views/dashboard/Dashboard'
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
