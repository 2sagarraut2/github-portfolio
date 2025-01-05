import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./components/Profile";
import ListRepositories from "./components/ListRepositories";
import EmptyProjects from "./components/EmptyProjects";
import EmptyPackages from "./components/EmptyPackages";
import EmptyStars from "./components/EmptyStars";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Profile />, // Default route for the overview page
      },
      {
        path: "/repositories",
        element: <ListRepositories />,
      },
      {
        path: "/projects",
        element: <EmptyProjects />,
      },
      {
        path: "/packages",
        element: <EmptyPackages />,
      },
      {
        path: "/stars",
        element: <EmptyStars />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

reportWebVitals();
