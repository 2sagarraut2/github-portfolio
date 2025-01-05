import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderMenus = ({ MENU }) => {
  const [selected, setSelectedId] = useState(1); // Initialize with no selection

  const { id, label, element, path } = MENU;

  const selectMenu = (id) => {
    // console.log("Clicked ID:", id); // Log the clicked tab ID
    setSelectedId(id); // Set the active tab ID
  };

  return (
    <ul className="flex ">
      <Link key={id} to={path}>
        <li
          key={id}
          className={
            selected === id
              ? "border-b-2 border-[#fd8c73]" // Active tab style
              : null
          }
        >
          <button
            id={id}
            className="p-2 flex items-center rounded-lg text-sm hover:bg-[#ebeef1] my-2"
            onClick={() => selectMenu(id)} // Pass the tab ID directly
          >
            <span className="mr-2 ">{element}</span>
            <span className="font-normal">{label}</span>
          </button>
        </li>
      </Link>
    </ul>
  );
};

export default HeaderMenus;
