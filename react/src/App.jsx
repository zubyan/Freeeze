import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import Home from './pages/Home';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Suggestion from './pages/Suggestion';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: '/signin', element: <Signin /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/about', element: <About /> },
      { path: '/blog', element: <Blog /> },
      { path: '/contact', element: <Contact /> },
      { path: '/suggestion', element: <Suggestion /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
