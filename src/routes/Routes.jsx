import { createBrowserRouter } from "react-router-dom";

import About from "../pages/About/About";
import Contact from "../pages/contact/Contact";
import DefaultPage from "../pages/default-page/DefaultPage";
import Home from "../pages/Home/Home";
import Tours from "../pages/Tours/Tours";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <DefaultPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about-us", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },

  { path: "/tours", element: <Tours /> },
]);

const Routes = () => {
  return <div>Routers</div>;
};

export default Routes;
