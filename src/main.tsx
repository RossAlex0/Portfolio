import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import ProjectsWeb from "./pages/Projects/ProjectsWeb/ProjectsWeb";
import ProjectsMobile from "./pages/Projects/ProjectsMobile/ProjectsMobile";
import { getProjectsFormat } from "./services/utils/filterFormat";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/projects/web",
        element: <ProjectsWeb />,
        loader: () => getProjectsFormat("web"),
      },
      {
        path: "/projects/web/:id",
        element: <ProjectsWeb />,
        loader: () => getProjectsFormat("web"),
      },
      {
        path: "/projects/mobile",
        element: <ProjectsMobile />,
        loader: () => getProjectsFormat("mobile"),
      },
      {
        path: "/projects/mobile/:id",
        element: <ProjectsMobile />,
        loader: () => getProjectsFormat("mobile"),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found.");
}
