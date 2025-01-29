import { FOOTERTEXT } from "../utils/constants";
import { useTheme } from "./ThemeContext";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`font-mono -tracking-widest flex items-center justify-center text-xs p-9 ${
        theme === "dark" ? "text-white bg-black" : "text-black bg-white"
      }`}
    >
      {FOOTERTEXT}
    </div>
  );
};

export default Footer;
