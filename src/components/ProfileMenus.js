import HeaderMenus from "./HeaderMenus";
import { PROFILEMENUS } from "../utils/constants";
import { useTheme } from "./ThemeContext";

const ProfileMenus = ({ visibleComponent, setVisibleComponent }) => {
  const { theme } = useTheme();

  const handleMenuClicked = (label) => {
    if (label === "Overview") {
      setVisibleComponent("Overview");
    } else if (label === "Repositories") {
      setVisibleComponent("Repositories");
    } else if (label === "Work Experiences") {
      setVisibleComponent("Work Experiences");
    } else if (label === "Projects") {
      setVisibleComponent("Projects");
    }
  };
  return (
    <div
      className={`mt px-4 flex border-b-[1px] border-gray-200 ${
        theme === "dark" ? "bg-black" : "bg-[#f6f8fa]"
      }`}
    >
      <nav>
        <ul className="flex items-center flex-wrap">
          {PROFILEMENUS.map((MENU) => (
            <HeaderMenus
              key={MENU.id}
              MENU={MENU}
              visibleComponent={visibleComponent}
              setVisibleComponent={setVisibleComponent}
              handleMenuClicked={handleMenuClicked}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ProfileMenus;
