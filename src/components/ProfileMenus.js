import HeaderMenus from "./HeaderMenus";
import { PROFILEMENUS } from "../utils/constants";
import { useTheme } from "./ThemeContext";

const ProfileMenus = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`mt px-4 flex border-b-[1px] border-gray-200 ${
        theme === "dark" ? "bg-black" : "bg-[#f6f8fa]"
      }`}
    >
      <nav>
        <ul className="flex items-center flex-wrap">
          {PROFILEMENUS.map((MENU) => (
            <HeaderMenus key={MENU.id} MENU={MENU} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ProfileMenus;
