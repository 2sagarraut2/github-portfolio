import "./App.css";
import Header from "./components/Header";
import ProfileMenus from "./components/ProfileMenus";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
  const location = useLocation();

  // Determine if Sidebar should be displayed (e.g., for overview and repositories)
  const showSidebar =
    location.pathname === "/" ||
    location.pathname === "/repositories" ||
    location.pathname === "/projects" ||
    location.pathname === "/packages" ||
    location.pathname === "/stars";

  return (
    <div className="App">
      {/* Header always displayed */}
      <Header />

      {/* ProfileMenus always displayed */}
      <ProfileMenus />

      <div className="max-w-none mx-32 px-md-4 px-6 mt-2">
        <div
          className={`grid ${
            showSidebar ? "grid-cols-[25%_75%]" : "grid-cols-1"
          } gap-6`}
        >
          {/* Sidebar displayed on Overview and Repositories pages */}
          {showSidebar && <Sidebar />}

          {/* Outlet for dynamic content based on the route */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
