import { MYPROJECTS } from "../utils/constants";
import RepoCard from "./RepoCard";
import TitleComponent from "./TitleComponent";
import { useTheme } from "./ThemeContext";

const EmptyPackages = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`mt-4 p-6 bg-white border border-gray-200 rounded-lg ${
        theme === "dark" ? "text-white bg-black" : "text-black bg-white"
      }`}
    >
      <TitleComponent title="Projects" />
      <div>
        {MYPROJECTS.map((project) => {
          return (
            <RepoCard
              key={project.id}
              id={project.id}
              html_url={project.html_url}
              name={project.name}
              description={project.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EmptyPackages;
