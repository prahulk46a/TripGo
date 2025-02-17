import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";

export let routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const Routes = () => {
  return <div>Routers</div>;
};

export default Routes;
