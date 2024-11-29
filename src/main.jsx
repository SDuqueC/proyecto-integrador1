import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Scene from "./components/Scene.jsx";
import WaterScene from "./components/environment/WaterScene.jsx"; // Nueva escena

import EnvironmentalIssues from "./pages/environmental/EnvironmentalIssues.jsx";
import App from "./App.jsx";
import "./index.css";

const router = createBrowserRouter([
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

  { path: "/scene", element: <Scene /> },
  { path: "/water-scene", element: <WaterScene /> }, // Nueva ruta
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
