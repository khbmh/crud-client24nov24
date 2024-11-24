import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Users from './Users.jsx';
import Update from './Update.jsx';
const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/home',
    element: <div>Home</div>,
  },
  {
    path: '/users',
    element: <Users />,
    loader: () =>
      fetch('http://localhost:2024/users')
        .then((res) => res.json())
        .then((users) => ({ users })), // Return an object with a 'users' key
  },
  {
    path: '/update/:id/',
    element: <Update />,
    loader: ({ params }) => fetch(`http://localhost:2024/users/${params.id}`),
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
);
