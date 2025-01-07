import { useEffect, useState } from "react";
import {
  INTRO,
  SAGARRAUT,
  SOCIALLABEL,
  TECHSTACK,
  TECHSTACKLABEL,
  WELCOME,
} from "../utils/constants";

const MainContent = () => {
  // eslint-disable-next-line
  const [contributions, setContributions] = useState([]);

  const token = process.env.REACT_APP_AUTH_TOKEN;

  useEffect(() => {
    getContributions(token, "2sagarraut2");
    // eslint-disable-next-line
  }, []);

  //   Contributions api call
  async function getContributions(token, username) {
    const headers = {
      Authorization: `bearer ${token}`,
    };
    const body = {
      query: `query {
                user(login: "${username}") {
                  name
                  contributionsCollection {
                    contributionCalendar {
                      colors
                      totalContributions
                      weeks {
                        contributionDays {
                          color
                          contributionCount
                          date
                          weekday
                        }
                        firstDay
                      }
                    }
                  }
                }
              }`,
    };
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      body: JSON.stringify(body),
      headers: headers,
    });
    const data = await response.json();
    // console.log("Contributions Data: ", data);
    setContributions(data);
    return data;
  }

  return (
    // second column
    <div className="">
      {/* bg-gray-100 up */}
      <div className="my-4 bg-white border-[#d1d9e0] rounded-md border-solid border-[1px]">
        <div className="flex-justify-between p-6">
          <div className="font-mono text-xs mb-5">
            <span className="color-fg-muted d-inline-block">{SAGARRAUT}</span>
          </div>
          <div>
            <h3 className="font-semibold text-3xl pb-2 mb-2 border-b-[#d1d9e0] border-b-solid border-b-[1px]">
              {WELCOME}
            </h3>
            <p dangerouslySetInnerHTML={{ __html: INTRO }} />
          </div>
          <div>
            <h4 className="font-semibold text-xl py-2 mb-2 border-b-[#d1d9e0] border-b-solid border-b-[1px]">
              {SOCIALLABEL}
            </h4>
            <p dir="auto">
              <a href="https://linkedin.com/in/2sagarraut2" rel="nofollow">
                <img
                  src="https://camo.githubusercontent.com/bbd5a3be2124528ab2064d49356ed845b5f9a05fc79c603e25c76c6601e28b67/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c696e6b6564496e2d2532333030373742352e7376673f6c6f676f3d6c696e6b6564696e266c6f676f436f6c6f723d7768697465"
                  alt="LinkedIn"
                  data-canonical-src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&amp;logoColor=white"
                />
              </a>
            </p>
          </div>
          <div className="markdown-heading" dir="auto">
            <h1
              className="font-semibold text-3xl pb-2 mt-6 mb-4 border-b-[#d1d9e0] border-b-solid border-b-[1px]"
              dir="auto"
            >
              {TECHSTACKLABEL}
            </h1>
            <p className="flex flex-wrap gap-2">
              {TECHSTACK.map((tech) => {
                return (
                  <span key={tech.id} className="">
                    {tech.element}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
