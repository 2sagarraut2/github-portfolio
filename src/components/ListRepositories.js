import { Octokit } from "@octokit/core";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import { REPOSITORYBUTTONS } from "../utils/constants";
import CommonButton from "./CommonButton";
import RepoCard from "./RepoCard";

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
      <div className="my-4 bg-white ">
        <div className="flex flex-justify-between gap-2 flex-wrap text-sm border-b-[1px] border-gray-200 pb-4">
          <input
            name="seach-repository "
            placeholder="Find a repository..."
            className="px-2 flex-1 border-[1px] border-gray-200 rounded-lg"
          />
          {REPOSITORYBUTTONS.map((button) => {
            return (
              <CommonButton
                key={button.id}
                element={button.element}
                id={button.id}
                label={button.label}
              />
            );
          })}
        </div>
        <div>
          {loading && <Loader />}
          {filteredRepoData.map((repo) => {
            const visibility = capitalizeFirstLetter(repo.visibility);
            const updatedAt = convertToRelativeTime(repo.updated_at);
            return (
              <div key={repo.id}>
                <RepoCard
                  id={repo.id}
                  html_url={repo.html_url}
                  name={repo.name}
                  visibility={visibility}
                  description={repo.description}
                  language={repo.language}
                  updatedAt={updatedAt}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListRepositories;
