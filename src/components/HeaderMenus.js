import { Link, useLocation } from "react-router-dom";
import { useTheme } from "./ThemeContext";

const HeaderMenus = ({ MENU }) => {
  const { id, label, element, path } = MENU;
  const { pathname } = useLocation();
  console.log(pathname);
  const { theme } = useTheme();

  return (
    <ul
      className={`flex flex-wrap ${
        theme === "dark" ? "text-white" : "text-black"
      }`}
    >
      <Link key={id} to={path}>
        <li
          key={id}
          className={pathname === path ? "border-b-2 border-[#fd8c73]" : ""}
        >
          <button
            id={id}
            className={`p-2 flex items-center rounded-lg text-sm ${
              theme === "dark" ? "hover:bg-gray-700" : "hover:bg-[#ebeef1]"
            } my-2`}
          >
            <span
              className={`mr-2 fill-current ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              {element}
            </span>
            <span
              className={pathname === path ? "font-semibold" : "font-normal"}
            >
              {label}
            </span>
          </button>
        </li>
      </Link>
    </ul>
  );
};

export default HeaderMenus;
