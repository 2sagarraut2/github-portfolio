import { useEffect, useState } from "react";
import { Octokit } from "@octokit/core";

const Sidebar = () => {
  const [userData, setUserData] = useState({
    avatar_url: "https://avatars.githubusercontent.com/u/36417693?v=4",
    bio: "Eat, Sleep, Code, Repeat....",
    company: "NCS india",
    email: "2sagarraut2@gmail.com",
    html_url: "https://github.com/2sagarraut2",
    location: "India",
    login: "2sagarraut2",
    name: "Sagar Raut",
    blog: "https://2sagarraut2.github.io/portfolio/",
  });
  const token = process.env.REACT_APP_AUTH_TOKEN;
  const octokit = new Octokit({
    auth: token, // Replace with your GitHub token
  });

  useEffect(() => {
    fetchUserData();
    // eslint-disable-next-line
  }, []);

  async function fetchUserData() {
    try {
      const response = await octokit.request("GET /user", {
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });
      //   console.log("User Data:", response);
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching repositories:", error);
    }
  }

  console.log("User Data:", userData);

  return (
    // first column
    <div className="">
      {/* bg-gray-200 up */}
      <div className="mt-4">
        <div>
          <div className="p-[1px]">
            <span>
              <span>
                <img
                  alt="avatar"
                  src={userData.avatar_url}
                  className="align-middle rounded-[50%] w-full border-[1px] border-solid border-[#d1d9e0] bg-[#ffffff]"
                />
              </span>
            </span>
          </div>
          <div className="top-0 float-left w-[100%] py-3 sticky">
            <h1 className="leading-none grid">
              <span className="text-2xl font-semibold">{userData.name}</span>
              <span className="text-xl font-light">
                {userData.login} · <span itempprop="pronouns">he/him</span>
              </span>
            </h1>
          </div>
        </div>
        <div
          className="p-note user-profile-bio mb-3 js-user-profile-bio f4"
          data-bio-text="Eat, Sleep, Code, Repeat...."
        >
          <div>{userData.bio}</div>
        </div>
        <ul className="flex list-none flex-col gap-1">
          <li
            className="flex items-start text-sm gap-2 "
            itempprop="worksFor"
            show_title="false"
            aria-label="Organization: NCS india"
          >
            <svg
              className="octicon octicon-organization"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path>
            </svg>
            <span className="p-org">
              <div>{userData.company}</div>
            </span>
          </li>
          <li
            className="flex items-start text-sm gap-2"
            itempprop="homeLocation"
            show_title="false"
            aria-label="Home location: India"
          >
            <svg
              className="octicon octicon-location"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z"></path>
            </svg>
            <span className="p-label">{userData.location}</span>
          </li>

          <li
            itempprop="email"
            aria-label="Email: 2sagarraut2@gmail.com"
            className="flex items-start text-sm gap-2 pt-1 "
          >
            <svg
              className="octicon octicon-mail"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z"></path>
            </svg>
            <a className="Link--primary" href="mailto:2sagarraut2@gmail.com">
              {userData.email}
            </a>
          </li>
          <li
            itempprop="url"
            data-test-selector="profile-website-url"
            className="flex items-start text-sm gap-2 pt-1 "
          >
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              className="octicon octicon-link"
            >
              <path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path>
            </svg>
            <a rel="nofollow me" className="Link--primary" href={userData.blog}>
              {userData.blog}
            </a>
          </li>
        </ul>
      </div>
      <div className="border-top color-border-muted pt-3 mt-3 d-none d-md-block">
        <h2 className="h4 mb-2">
          <div>Achievements</div>
        </h2>
        <div className="flex flex-wrap">
          <span>
            <img
              src="https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png"
              data-hovercard-type="achievement"
              data-hovercard-url="/users/2sagarraut2/achievements/pull-shark/detail?hovercard=1"
              width="64"
              alt="Achievement: Pull Shark"
              data-view-component="true"
              className="achievement-badge-sidebar"
            />
          </span>
          <span>
            <img
              src="https://github.githubassets.com/assets/yolo-default-be0bbff04951.png"
              data-hovercard-type="achievement"
              data-hovercard-url="/users/2sagarraut2/achievements/yolo/detail?hovercard=1"
              width="64"
              alt="Achievement: YOLO"
              data-view-component="true"
              className="achievement-badge-sidebar"
            />
          </span>
          <span>
            <img
              src="https://github.githubassets.com/assets/quickdraw-default-39c6aec8ff89.png"
              data-hovercard-type="achievement"
              data-hovercard-url="/users/2sagarraut2/achievements/quickdraw/detail?hovercard=1"
              width="64"
              alt="Achievement: Quickdraw"
              data-view-component="true"
              className="achievement-badge-sidebar"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
