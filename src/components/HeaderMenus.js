import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const HeaderMenus = ({ MENU }) => {
  const { id, label, element, path } = MENU;

  const { pathname } = useLocation();

  return (
    <ul className="flex flex-wrap">
      <Link key={id} to={path}>
        <li
          key={id}
          className={
            pathname === path ? "border-b-2 border-[#fd8c73]" : "" // Active tab style
          }
        >
          <button
            id={id}
            className="p-2 flex items-center rounded-lg text-sm hover:bg-[#ebeef1] my-2"
          >
            <span className="mr-2 ">{element}</span>
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
