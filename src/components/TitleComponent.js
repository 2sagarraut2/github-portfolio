import { useTheme } from "./ThemeContext";

const TitleComponent = ({ title }) => {
  const { theme } = useTheme();
  return (
    <div
      className={`font-mono -tracking-wider pb-2 text-2xl font-semibold text-gray-800 border-b-[#d1d9e0] border-b-solid border-b-[1px] ${
        theme === "dark" ? "text-white" : "text-black"
      }`}
    >
      {title}
    </div>
  );
};

export default TitleComponent;
