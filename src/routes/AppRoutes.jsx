import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import EnvironmentalIssues from "../pages/environmental/EnvironmentalIssues";
import Quiz from "../pages/quiz/Quiz3D";
import Page404 from "../pages/page-404/Page404";
import WaterScene from "../components/environment/WaterScene";
import Quiz3D from "../pages/quiz/Quiz3D";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/issues",
        element: <EnvironmentalIssues />,
      },
      {
        path: "/quiz",
        element: <Quiz3D />,
      },
      {
        path: "/water-scene",
        element: <WaterScene />,
      },
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
]);
