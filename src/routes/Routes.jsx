import { createBrowserRouter } from "react-router-dom";

import About from "../pages/About/About";
import Contact from "../pages/contact/Contact";
import DefaultPage from "../pages/default-page/DefaultPage";
import Home from "../pages/Home/Home";
import Productlist from "../pages/ProductList/Productlist";
import SignIn from "../pages/Signin/Login";
import Signup from "../pages/Signup/Signup";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <DefaultPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about-us", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/tours", element: <Productlist /> },
      { path: "/login", element: <SignIn /> },
      { path: "/signup", element: <Signup /> },
    ],
  },
]);

const Routes = () => {
  return <div>Routers</div>;
};

export default Routes;
