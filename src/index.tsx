import {createRoot} from 'react-dom/client';
import { App } from "./components/App";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { About } from './pages/about/About';
import { Shop } from './pages/shop/Shop';

const root = document.getElementById('root')

if (!root) {
	throw new Error('root not found')
}

const container = createRoot(root)

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/shop',
				element: <Shop />,
			},
		]
	}
])

container.render(<RouterProvider router={router} />)

