import MainContent from "./MainContent";
// import { useLocation } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      {/* <div>
        <div className="mt px-4 flex bg-[#f6f8fa] border-b-[1px] border-gray-200">
          <nav className="">
            <ul className="flex items-center ">
              {PROFILEMENUS.map((MENU) => {
                return <HeaderMenus key={MENU.id} MENU={MENU} />;
              })}
            </ul>
          </nav>
        </div>
      </div> */}
      <div>
        {/* MainContent is displayed as the primary content for the Overview page */}
        <MainContent />
      </div>
    </div>
  );
};

export default Profile;
