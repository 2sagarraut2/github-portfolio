import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "./components/ThemeContext";

// const appRouter = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <App />,
//       children: [
//         {
//           path: "/",
//           element: <Profile />, // Default route for the overview page
//         },
//         {
//           path: "/repositories",
//           element: <ListRepositories />,
//         },
//         {
//           path: "/experiences",
//           element: <Experience />,
//         },
//         {
//           path: "/projects",
//           element: <EmptyPackages />,
//         },
//         {
//           path: "/github-portfolio/stars",
//           element: <EmptyStars />,
//         },
//       ],
//     },
//   ],
//   {
//     basename: "/github-portfolio", // Add basename for GitHub Pages
//   }
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      {/* <RouterProvider router={appRouter} /> */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();

/* 
The code contains several commented sections, indicating that certain features have been temporarily disabled while new features are being added. 
Please be mindful of this while reviewing or working with the code.
*/
