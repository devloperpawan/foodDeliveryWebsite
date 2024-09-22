import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Section2 from './pages/Home/Section2.jsx';
import Section3 from './pages/Home/Section3.jsx';
import Section4 from './pages/Home/Section4.jsx';
import Section5 from './pages/Home/Section5.jsx';
import Section6 from './pages/Home/Section6.jsx';

let allRoutes = createBrowserRouter(
    [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "about",
            element: <Section2/>
        },{
            path: "menu",
            element: <Section3/>
        },{
            path: "shop",
            element: <Section4/>
        },{
            path: "blog",
            element: <Section5/>
        },{
            path: "contact",
            element: <Section6/>
        }
    ]
)
createRoot(document.getElementById('root')).render(
    <StrictMode>
    <RouterProvider router={allRoutes}/>
    </StrictMode>
)
