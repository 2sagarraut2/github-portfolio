import { Octokit } from "@octokit/core";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import {
  CLEARFILTER,
  REPOSITORYBUTTONS,
  RESULTLABEL,
} from "../utils/constants";
import CommonButton from "./CommonButton";
import RepoCard from "./RepoCard";

const ListRepositories = () => {
  // eslint-disable-next-line
  const [repoData, setRepoData] = useState([]);
  const [filteredRepoData, setFilteredRepoData] = useState([]);
  const [loading, setloading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [selectedItem, setSelectedItem] = useState("");

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
        return new Date(b.pushed_at) - new Date(a.pushed_at);
      });
      //   console.log(filteredData);

      //   setting filtered data
      setFilteredRepoData(filteredData);
      //   console.log(response.data, response.data);
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

  //   Sorting functions
  const sortByLastUpdated = () => {
    setSearchText("");
    const sortedData = [...repoData].sort(
      (a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated)
    );
    setFilteredRepoData(sortedData);
  };

  const sortByName = () => {
    setSearchText("");
    const sortedData = [...repoData].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setFilteredRepoData(sortedData);
  };

  const sortByAllLanguage = () => {
    setFilteredRepoData(repoData);
  };

  const sortByHTML = () => {
    setSearchText("");
    const sortedData = [...repoData].filter((res) => res.language === "HTML");
    setFilteredRepoData(sortedData);
  };

  const sortByJavaScript = () => {
    setSearchText("");
    const sortedData = [...repoData].filter(
      (res) => res.language === "JavaScript"
    );
    setFilteredRepoData(sortedData);
  };

  const sortByJava = () => {
    setSearchText("");
    const sortedData = [...repoData].filter((res) => res.language === "Java");
    setFilteredRepoData(sortedData);
  };

  const sortAllNames = () => {
    setSearchText("");
    setFilteredRepoData(repoData);
  };

  const sortByPublic = () => {
    setSearchText("");
    const sortedData = [...repoData].filter(
      (res) => res.visibility === "public"
    );
    setFilteredRepoData(sortedData);
  };

  const sortByPrivate = () => {
    setSearchText("");
    const sortedData = [...repoData].filter(
      (res) => res.visibility === "private"
    );
    setFilteredRepoData(sortedData);
  };

  //   handle searchbox input
  const searchValueInserted = (e) => {
    const value = e.target.value;
    setSearchText(value);

    const sortedData = [...repoData].filter((res) =>
      res.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setFilteredRepoData(sortedData);

    if (searchText === "") {
      setFilteredRepoData(repoData);
    }
  };

  //   handle clear button click
  const handleClearButtonClick = () => {
    setSearchText("");
    setFilteredRepoData(repoData);
  };

  return (
    <div className="">
      {/* bg-gray-100 up */}
      <div className="my-4 bg-white ">
        <div className="flex flex-justify-between gap-2 flex-wrap text-sm border-b-[1px] border-gray-200 pb-4">
          <input
            name="seach-repository"
            placeholder="Find a repository..."
            className="px-2 py-[1px] flex-1 border-[1px] border-gray-200 rounded-lg text-base sm:text-sm"
            value={searchText}
            onChange={searchValueInserted}
          />
          {REPOSITORYBUTTONS.map((button) => {
            return (
              <CommonButton
                key={button.id}
                element={button.element}
                id={button.id}
                label={button.label}
                menus={button.menus}
                sortByLastUpdated={sortByLastUpdated}
                sortByName={sortByName}
                sortByAllLanguage={sortByAllLanguage}
                sortByHTML={sortByHTML}
                sortByJavaScript={sortByJavaScript}
                sortByJava={sortByJava}
                sortAllNames={sortAllNames}
                sortByPublic={sortByPublic}
                sortByPrivate={sortByPrivate}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
              />
            );
          })}
        </div>
        {searchText && (
          <div className="flex items-center border-b-[1px] border-gray-200 justify-between">
            <h5 className="text-sm py-3">
              <strong>{filteredRepoData.length}</strong> {RESULTLABEL}
              <strong>{searchText}</strong>
            </h5>
            <button
              className="text-sm flex items-center hover:bg-[#ebeef1] py-1 px-1 rounded-lg"
              onClick={handleClearButtonClick}
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                className="octicon octicon-x issues-reset-query-icon mr-1 text-white bg-[#59636e] rounded-md fill-current p-[1px]"
              >
                <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
              </svg>
              <span>{CLEARFILTER}</span>
            </button>
          </div>
        )}
        <div>
          {loading && <Loader />}
          {filteredRepoData.map((repo) => {
            const visibility = capitalizeFirstLetter(repo.visibility);
            const updatedAt = convertToRelativeTime(repo.pushed_at);
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
