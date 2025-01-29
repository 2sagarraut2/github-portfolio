import {
  // INTRO,
  LINKEDINTAG,
  SAGARRAUT,
  // SOCIALLABEL,
  NEW_TECH_STACK,
  // TECHSTACKLABEL,
  // WELCOME,
} from "../utils/constants";
import TitleComponent from "./TitleComponent";
import TitleComponentHOC from "./TitleComponentHOC";
import { useTheme } from "./ThemeContext";
import lang from "../utils/LanguageConstants";

const MainContent = ({ language }) => {
  // eslint-disable-next-line
  // const [contributions, setContributions] = useState([]);

  const { theme } = useTheme();

  // const token = process.env.REACT_APP_AUTH_TOKEN;

  // useEffect(() => {
  //   // getContributions(token, "2sagarraut2");
  //   // eslint-disable-next-line
  // }, []);

  //   Contributions api call
  // async function getContributions(token, username) {
  //   const headers = {
  //     Authorization: `bearer ${token}`,
  //   };
  //   const body = {
  //     query: `query {
  //               user(login: "${username}") {
  //                 name
  //                 contributionsCollection {
  //                   contributionCalendar {
  //                     colors
  //                     totalContributions
  //                     weeks {
  //                       contributionDays {
  //                         color
  //                         contributionCount
  //                         date
  //                         weekday
  //                       }
  //                       firstDay
  //                     }
  //                   }
  //                 }
  //               }
  //             }`,
  //   };
  //   const response = await fetch("https://api.github.com/graphql", {
  //     method: "POST",
  //     body: JSON.stringify(body),
  //     headers: headers,
  //   });
  //   const data = await response.json();
  //   // console.log("Contributions Data: ", data);
  //   setContributions(data);
  //   return data;
  // }

  const EnhancedTitleComponent = TitleComponentHOC(TitleComponent);

  return (
    // second column
    <div className="">
      {/* bg-gray-100 up */}
      <div
        className={`my-4 border-[#d1d9e0] rounded-md border-solid border-[1px] ${
          theme === "dark" ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div className="flex-justify-between p-6">
          <EnhancedTitleComponent
            text={SAGARRAUT}
            title={lang.en.WELCOME_TEXT}
          />
          <div className="py-2 font-mono -tracking-wider text-sm">
            <p dangerouslySetInnerHTML={{ __html: lang.en.INTRO_TEXT }} />
          </div>
          <div>
            <h4 className="font-mono -tracking-wider font-semibold text-xl py-2 mb-2 border-b-[#d1d9e0] border-b-solid border-b-[1px]">
              {lang.en.SOCIALS_TEXT}
            </h4>
            <p dir="auto">
              <a
                href="https://linkedin.com/in/2sagarraut2"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src={LINKEDINTAG}
                  alt="LinkedIn"
                  data-canonical-src={LINKEDINTAG}
                />
              </a>
            </p>
          </div>
          <div className="markdown-heading" dir="auto">
            <h1
              className="font-mono -tracking-wider font-semibold text-base pb-2 mt-6 mb-4 border-b-[#d1d9e0] border-b-solid border-b-[1px]"
              dir="auto"
            >
              {lang.en.TECH_STACK_LABEL}
            </h1>
            {/* <p className="flex flex-wrap gap-2">
              {TECHSTACK.map((tech) => {
                return (
                  <span key={tech.id} className="">
                    {tech.element}
                  </span>
                );
              })}
            </p> */}
            <div className="flex flex-wrap gap-8">
              {NEW_TECH_STACK.map((item) => (
                <div className="">
                  <p className="font-mono text-sm underline underline-offset-2 w-fit">
                    {item.title}
                  </p>
                  <ul className="font-mono text-xs list-[square] list-inside">
                    {item.technologies.map((tech) => (
                      <li>{tech}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
