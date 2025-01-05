import { Octokit } from "@octokit/core";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import { REPOSITORYBUTTONS } from "../utils/constants";

const ListRepositories = () => {
  // eslint-disable-next-line
  const [repoData, setRepoData] = useState([]);
  const [filteredRepoData, setFilteredRepoData] = useState([]);
  const [loading, setloading] = useState(true);

  const token = process.env.REACT_APP_AUTH_TOKEN;
  const octokit = new Octokit({
    auth: token, // Replace with your GitHub token
  });

  useEffect(() => {
    fetchPersonalRepos();
    // eslint-disable-next-line
  }, []);

  async function fetchPersonalRepos() {
    try {
      // Fetch your repositories
      const response = await octokit.request("GET /user/repos", {
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });

      // Log repository data
      //   console.log(response);
      setRepoData(response.data);

      //   filtering data by latest updated_at and sting in setFilteredRepoData
      const filteredData = response.data.sort((a, b) => {
        return new Date(b.updated_at) - new Date(a.updated_at);
      });
      //   console.log(filteredData);

      //   setting filtered data
      setFilteredRepoData(filteredData);
      setloading(false);

      return response.data; // Return data if needed
    } catch (error) {
      console.error("Error fetching repositories:", error);
      setloading(false);
    }
  }

  function convertToRelativeTime(isoString) {
    const date = new Date(isoString);
    const now = new Date();

    const diffInSeconds = Math.floor((now - date) / 1000);

    // Define time intervals in seconds
    const intervals = {
      year: 31536000, // 60 * 60 * 24 * 365
      month: 2592000, // 60 * 60 * 24 * 30
      day: 86400, // 60 * 60 * 24
      hour: 3600, // 60 * 60
      minute: 60,
      second: 1,
    };

    for (const [unit, secondsInUnit] of Object.entries(intervals)) {
      const amount = Math.floor(diffInSeconds / secondsInUnit);
      if (amount >= 1) {
        return `${amount} ${unit}${amount > 1 ? "s" : ""} ago`;
      }
    }

    return "just now"; // If less than a second has passed
  }

  function capitalizeFirstLetter(str) {
    if (!str) return ""; // Handle empty or undefined input
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className="">
      {/* bg-gray-100 up */}
      <div className="mt-4 bg-white ">
        <div className="flex flex-justify-between gap-2 text-sm border-b-[1px] border-gray-200 pb-4">
          <input
            name="seach-repository "
            placeholder="Find a reository..."
            className="px-2 flex-1 border-[1px] border-gray-200 rounded-lg"
          />
          {REPOSITORYBUTTONS.map((button) => {
            return (
              <button
                key={button.id}
                className="rounded-lg border-[1px] border-gray-200 px-4 py-[5px] inline-flex items-center bg-[#f6f8fa] hover:bg-[#ebeef1]"
              >
                {button.label}
                {button.element}
              </button>
            );
          })}
        </div>
        <div>
          {loading && <Loader />}
          {filteredRepoData.map((repo) => {
            // console.log(repo);
            const visibility = capitalizeFirstLetter(repo.visibility);
            const updatedAt = convertToRelativeTime(repo.updated_at);
            return (
              <ul key={repo.id} className="border-b-[1px] border-gray-200 pb-4">
                <li className="flex w-full justify-between py-6">
                  <div className="inline-block">
                    <div className="inline-block mb-1">
                      <h3 className="break-all">
                        <a
                          href={repo.html_url}
                          rel="noreferrer"
                          className="text-[#0969da] bg-transparent text-xl font-semibold hover:border-b-[2px] border-[#0969da]"
                        >
                          {repo.name}
                        </a>
                        <span className="border-[#d1d9e0] text-[#59636e] border rounded-full inline-block text-xs font-[500] leading-4 px-1 whitespace-nowrap ml-4 mb-1 text-center">
                          {visibility}
                        </span>
                      </h3>
                    </div>
                    <div>
                      <p className="text-[#59636e] text-sm">
                        {repo.description}
                      </p>
                    </div>
                    <div className="text-xs mt-2">
                      <span className="text-xs">{repo.language}</span> Updated{" "}
                      {updatedAt}
                    </div>
                  </div>
                  <div>
                    {/* <div>{repo.stargazers_url}</div> */}
                    <div></div>
                  </div>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListRepositories;
