import { useTheme } from "./ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      //   className="px-2 rounded-md text-2xl"
      className={`px-2 rounded-md text-2xl ${
        theme === "dark" ? "hover:bg-white" : "hover:bg-black"
      }`}
    >
      {theme === "dark" ? "🌞" : "🌙"}
    </button>
  );
};

export default ThemeToggle;
