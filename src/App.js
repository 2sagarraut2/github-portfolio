import "./App.css";
import Header from "./components/Header";
import ProfileMenus from "./components/ProfileMenus";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { useTheme } from "./components/ThemeContext";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import EmptyPackages from "./components/EmptyPackages";
import { useState } from "react";
import ListRepositories from "./components/ListRepositories";

function App() {
  // const location = useLocation();

  const [visibleComponent, setVisibleComponent] = useState("Overview");
  const [language, setLanguage] = useState("English");

  const { theme } = useTheme();

  // Determine if Sidebar should be displayed (e.g., for overview and repositories)
  // const showSidebar =
  //   location.pathname === "/" ||
  //   location.pathname === "/repositories" ||
  //   location.pathname === "/experiences" ||
  //   location.pathname === "/projects" ||
  //   location.pathname === "/github-portfolio/stars";

  return (
    <div className={` ${theme === "dark" ? "bg-black " : "bg-white"}`}>
      {/* Header always displayed */}
      <Header language={language} setLanguage={setLanguage} />

      {/* ProfileMenus always displayed */}
      <ProfileMenus
        visibleComponent={visibleComponent}
        setVisibleComponent={setVisibleComponent}
      />
      <div className="max-w-none mx-6 sm:mx-12 md:mx-32 px-6 sm:px-8 md:px-12 mt-2 bg-transparent text-black">
        <div className="grid grid-cols-1 sm:grid-cols-[25%_75%] md:grid-cols-[25%_75%] gap-6">
          <Sidebar />
          {(visibleComponent === "Overview" && (
            <Profile language={language} />
          )) ||
            (visibleComponent === "Repositories" && <ListRepositories />) ||
            (visibleComponent === "Work Experiences" && <Experience />) ||
            (visibleComponent === "Projects" && <EmptyPackages />)}
        </div>
      </div>

      {/* <div
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

          {showSidebar && <Sidebar />}


          <Outlet />
        </div>
      </div> */}
      <Footer />
    </div>
  );
}

export default App;
