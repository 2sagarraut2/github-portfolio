import HeaderMenus from "./HeaderMenus";
import { PROFILEMENUS } from "../utils/constants";

const ProfileMenus = () => {
  return (
    <div className="mt px-4 flex bg-[#f6f8fa] border-b-[1px] border-gray-200">
      <nav>
        <ul className="flex items-center">
          {PROFILEMENUS.map((MENU) => (
            <HeaderMenus key={MENU.id} MENU={MENU} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ProfileMenus;
