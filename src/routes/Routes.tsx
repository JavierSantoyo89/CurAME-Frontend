import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Home} from "../views/home/Home";

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home/>
	},

])

const myRoutes = () => <RouterProvider router={router} />

export default myRoutes