import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AboutPage from '../src/components/pages/about/AboutPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Plans from '../src/components/pages/plans/Plans';
import Chef from '../src/components/pages/chefs/Chefs';
import Luo from '../src/components/pages/chefs/luo/Luo';
import Choi from '../src/components/pages/chefs/choi/Choi';
import Jack from '../src/components/pages/chefs/jack/Jack';
import Stacy from '../src/components/pages/chefs/stacy/Stacy';
import Aren from '../src/components/pages/chefs/aren/Aren';
import Javier from '../src/components/pages/chefs/javier/Javier';
import Shop from '../src/components/pages/shop/Shop';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "about",
    element: <AboutPage/>,
  },
  {
    path: "plans",
    element: <Plans />
  },
  {
    path: "chefs",
    element: <Chef />
  },
  {
    path: "luo",
    element: <Luo />
  },
  {
    path: "choi",
    element: <Choi />
  },
  {
    path: "jack",
    element: <Jack />
  },
  {
    path: "stacy",
    element: <Stacy />
  },
  {
    path: "aren",
    element: <Aren />
  },
  {
    path: "javier",
    element: <Javier />
  },
  {
    path: "shop",
    element: <Shop />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


