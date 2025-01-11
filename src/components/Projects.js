import { PROJECTS } from "../utils/constants";

const Projects = () => {
  return (
    <div className="">
      <ul className="flex flex-col items-start">
        {PROJECTS.map((item) => {
          return (
            <li key={item.id} className="my-2 h-4/6">
              <div className=" rounded-2xl text-start h-4/6">
                <div className="font-semibold text-lg text-[#0000EE] w-max">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className=" border-[#0000EE] hover:border-b-[2px]"
                  >
                    {item.title}
                  </a>
                </div>
                {/* <div className="text-sm w-fit">{item.description}</div> */}
                {/* <div className="text-sm text-[#0000EE]">{item.link}</div> */}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Projects;
