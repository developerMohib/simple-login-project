import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPath from './Component/MainPath/MainPath';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Blog from './Component/Blog/Blog';
import Contact from './Component/Contact/Contact';
import LogIn from './Component/LogIn/LogIn';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPath> </MainPath>,
    children: [
      {
        path: "/",
        element: <Home> </Home>,
      },
      {
        path: "/about",
        element: <About> </About>,
      },
      {
        path: "/blog",
        element: <Blog> </Blog>,
      },
      {
        path: "/contact",
        element: <Contact> </Contact>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
