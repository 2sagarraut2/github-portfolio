import { MYPROJECTS } from "../utils/constants";
import RepoCard from "./RepoCard";
import TitleComponent from "./TitleComponent";

const EmptyPackages = () => {
  return (
    <div className="mt-4 p-6 bg-white border border-gray-200 rounded-lg">
      <TitleComponent title="Projects" />
      <div>
        {MYPROJECTS.map((project) => {
          return (
            <RepoCard
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
