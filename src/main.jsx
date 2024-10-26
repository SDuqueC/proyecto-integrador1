import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
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
    element: <App />, // Cambiamos App como el layout principal
    children: [
      { path: "", element: <Home /> }, // La ruta raíz (home) anidada
      { path: "about", element: <About /> }, // Ruta relativa para About
      { path: "environmental-issues", element: <EnvironmentalIssues /> }, // Ruta relativa para Environmental Issues
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
