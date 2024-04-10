import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayouts from "../Layouts/MainLayouts";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import Career from "../pages/Career";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: "/about",
        element: <PrivateRoutes><About/></PrivateRoutes>
      },
      {
        path: "/career",
        element: <PrivateRoutes><Career/></PrivateRoutes>
      }
    ],
  },
]);

export default router;
