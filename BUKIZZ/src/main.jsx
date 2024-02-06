import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Contact from './contact/Contact.jsx';
import About from './about/About.jsx';
import Solution from './solution/Solution.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/contact',
		element: <Contact />,
	},
	{
		path: '/about1',
		element: <About />,
	},
	{
		path: '/solution',
		element: <Solution />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <App /> */}
		<RouterProvider router={router} />
	</React.StrictMode>
);
