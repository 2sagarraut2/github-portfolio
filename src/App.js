import "./App.css";
import Header from "./components/Header";
import ProfileMenus from "./components/ProfileMenus";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { useTheme } from "./components/ThemeContext";

function App() {
  const location = useLocation();

  const { theme } = useTheme();

  // Determine if Sidebar should be displayed (e.g., for overview and repositories)
  const showSidebar =
    location.pathname === "/" ||
    location.pathname === "/repositories" ||
    location.pathname === "/experiences" ||
    location.pathname === "/projects" ||
    location.pathname === "/stars";

  return (
    <div className={` ${theme === "dark" ? "bg-black " : "bg-white"}`}>
      {/* Header always displayed */}
      <Header />

      {/* ProfileMenus always displayed */}
      <ProfileMenus />

      <div
        className={`max-w-none mx-6 sm:mx-12 md:mx-32 px-6 sm:px-8 md:px-12 mt-2 ${
          theme === "dark" ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div
          className={`grid ${
            showSidebar
              ? "grid-cols-1 sm:grid-cols-[25%_75%] md:grid-cols-[25%_75%]" // 1 column for mobile, 2 columns for larger screens
              : "grid-cols-1"
          } gap-6`}
        >
          {/* Sidebar displayed on Overview and Repositories pages */}
          {showSidebar && <Sidebar />}

          {/* Outlet for dynamic content based on the route */}
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
