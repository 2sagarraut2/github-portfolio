import { useState, useEffect, useRef } from "react";
import { useTheme } from "./ThemeContext";

const CommonButton = ({
  label,
  id,
  element,
  menus,
  sortByLastUpdated,
  sortByName,
  sortByAllLanguage,
  sortByHTML,
  sortByJavaScript,
  sortByJava,
  sortAllNames,
  sortByPublic,
  sortByPrivate,
  selectedItem,
  setSelectedItem,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const { theme } = useTheme();

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false); // Close the dropdown
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //   handle Menu clicked
  const handleMenuClicked = (action, label) => {
    setIsOpen(false); // Close dropdown on menu click
    setSelectedItem(action);

    if (action === "sortByLastUpdated") {
      sortByLastUpdated();
    } else if (action === "sortByName") {
      sortByName();
    } else if (action === "sortByAllLanguage") {
      sortByAllLanguage();
    } else if (action === "sortByHTML") {
      sortByHTML();
    } else if (action === "sortByJavaScript") {
      sortByJavaScript();
    } else if (action === "sortByJava") {
      sortByJava();
    } else if (action === "sortAllNames") {
      sortAllNames();
    } else if (action === "sortByPublic") {
      sortByPublic();
    } else if (action === "sortByPrivate") {
      sortByPrivate();
    }
  };

  return (
    <div
      ref={dropdownRef}
      className={`relative inline-block ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <button
        key={id}
        onClick={toggleDropdown}
        className={`rounded-lg border-[1px] border-gray-200 px-4 py-[5px] inline-flex items-center bg-[#f6f8fa] ${
          theme === "dark"
            ? "bg-black text-white hover:bg-slate-700"
            : "bg-white text-black hover:bg-[#ebeef1]"
        }`}
      >
        {label}
        {element}
      </button>
      {isOpen && (
        <ul
          className={`absolute mt-2 w-32  border border-gray-200 rounded-md shadow-lg ${
            theme === "dark" ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          {menus.map((menu) => (
            <li
              data-name={menu.action}
              key={menu.id}
              onClick={() => handleMenuClicked(menu.action, label)}
              className={`px-4 py-2 hover:bg-gray-100 cursor-pointer w-full flex items-start rounded-md ${
                theme === "dark"
                  ? "bg-black text-white hover:bg-slate-700"
                  : "bg-white text-black"
              }`}
            >
              {selectedItem === menu.action ? (
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  // className="mr-2"
                  className={`mr-2  fill-current
                    ${theme === "dark" ? "text-white" : "text-black"}`}
                >
                  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                </svg>
              ) : (
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  className="mr-2"
                ></svg>
              )}
              {menu.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommonButton;
