import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./components/Profile";
import ListRepositories from "./components/ListRepositories";
import Experience from "./components/Experience";
import EmptyStars from "./components/EmptyStars";
import EmptyPackages from "./components/EmptyPackages";

const appRouter = createBrowserRouter(
  [
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
          path: "/experiences",
          element: <Experience />,
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
  ],
  {
    basename: "/github-portfolio", // Add basename for GitHub Pages
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

reportWebVitals();
