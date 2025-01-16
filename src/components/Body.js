import { useState } from "react";
import ReadMe from "./ReadMe";
import Index from "./Index";
import About from "./About";
import Projects from "./Projects";
import HeaderMenus from "./HeaderMenus";
import { AVATARURL, REPOMENUS } from "../utils/constants";

const Body = () => {
  const [activeComponent, setActiveComponent] = useState("README");

  // Function to handle button clicks
  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div>
      <div>
        <div className="mt px-4 flex bg-[#f6f8fa] border-b-[1px] border-gray-200">
          <nav className="">
            <ul className="flex items-center border-b-[1px] border-[#fd8c73]">
              {REPOMENUS.map((MENU) => {
                return <HeaderMenus key={MENU.id} MENU={MENU} />;
              })}
            </ul>
          </nav>
        </div>
      </div>
      <div className="pt-4">
        <div className="mx-28 px-9 ">
          <div className="border-b-[1px] flex grid-cols-2 gap-8 justify-between pb-4">
            <ul className="flex gap-4 grid-cols-3">
              <a
                href="https://github.com/2sagarraut2/portfolio"
                className="flex gap-4 grid-cols-3"
                target="_blank"
                rel="noreferrer"
              >
                <li className="inline-flex">
                  <img
                    src={AVATARURL}
                    alt="avatar"
                    data-view-component="true"
                    className="size-8 h-8 rounded-full avatar circle"
                  />
                </li>
                <li className="flex items-center">
                  <div className="font-bold hover:underline-offset-1 text-xl">
                    portfolio
                  </div>
                </li>
              </a>
              <li className="flex items-center rounded-full border-[1px] border-gray-200 text-[#59636e] px-2">
                <span className="text-xs">Public</span>
              </li>
            </ul>

            <ul className="flex gap-4 grid-cols-4 text-xs">
              <li className="inline-flex">
                <button className="rounded-lg border-[1px] border-gray-200 p-2 inline-flex items-center bg-[#f6f8fa] hover:bg-[#ebeef1]">
                  <svg
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    className="octicon octicon-pin mr-2"
                  >
                    <path d="m11.294.984 3.722 3.722a1.75 1.75 0 0 1-.504 2.826l-1.327.613a3.089 3.089 0 0 0-1.707 2.084l-.584 2.454c-.317 1.332-1.972 1.8-2.94.832L5.75 11.311 1.78 15.28a.749.749 0 1 1-1.06-1.06l3.969-3.97-2.204-2.204c-.968-.968-.5-2.623.832-2.94l2.454-.584a3.08 3.08 0 0 0 2.084-1.707l.613-1.327a1.75 1.75 0 0 1 2.826-.504ZM6.283 9.723l2.732 2.731a.25.25 0 0 0 .42-.119l.584-2.454a4.586 4.586 0 0 1 2.537-3.098l1.328-.613a.25.25 0 0 0 .072-.404l-3.722-3.722a.25.25 0 0 0-.404.072l-.613 1.328a4.584 4.584 0 0 1-3.098 2.537l-2.454.584a.25.25 0 0 0-.119.42l2.731 2.732Z"></path>
                  </svg>
                  <span>Pin</span>
                </button>
              </li>
              <li className="inline-flex">
                <button className="rounded-lg border-[1px] border-gray-200 px-3 inline-flex items-center bg-[#f6f8fa] hover:bg-[#ebeef1]">
                  <span
                    data-component="leadingVisual"
                    className="prc-Button-Visual-2epfX prc-Button-VisualWrap-Db-eB mr-2"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      className="octicon octicon-eye"
                      viewBox="0 0 16 16"
                      width="16"
                      height="16"
                      fill="currentColor"
                    >
                      <path d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"></path>
                    </svg>
                  </span>
                  Unwatch
                  <span
                    data-component="trailingAction"
                    className="prc-Button-Visual-2epfX prc-Button-VisualWrap-Db-eB ml-2"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      className="octicon octicon-triangle-down"
                      viewBox="0 0 16 16"
                      width="16"
                      height="16"
                      fill="currentColor"
                    >
                      <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
                    </svg>
                  </span>
                </button>
              </li>
              <li className="inline-flex">
                <button className="rounded-lg border-[1px] border-gray-200 px-3 inline-flex items-center bg-[#f6f8fa] hover:bg-[#ebeef1]">
                  <span className="">
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      className="octicon octicon-repo-forked mr-2"
                    >
                      <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
                    </svg>
                  </span>
                  Fork
                  <span className="ml-2">
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      className="octicon octicon-triangle-down"
                    >
                      <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
                    </svg>
                  </span>
                </button>
              </li>
              <li className="inline-flex">
                <button className="rounded-lg border-[1px] border-gray-200 px-3 inline-flex items-center bg-[#f6f8fa] hover:bg-[#ebeef1]">
                  <span>
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      className="octicon octicon-star d-inline-block mr-2"
                    >
                      <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                    </svg>
                  </span>
                  Star
                  <span className="ml-2">
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      className="octicon octicon-triangle-down"
                    >
                      <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
                    </svg>
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-28 px-9">
        <div>
          <div className="grid-cols-2 flex mt-4">
            <div className="flex-col justify-between pb-3">
              <div className="flex">
                <section className="flex text-sm h-fit flex-grow">
                  <ul className="flex text-sm h-fit flex-grow justify-between">
                    <li className="pt-2">
                      <button className="rounded-lg border-[1px] border-gray-200 px-3 py-[6px] inline-flex items-center bg-[#f6f8fa] hover:bg-[#ebeef1]">
                        <span className="mr-2">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            className="octicon octicon-git-branch"
                            viewBox="0 0 16 16"
                            width="16"
                            height="16"
                            fill="currentColor"
                            style={{
                              display: "inline-block",
                              userSelect: "none",
                              verticalAlign: "text-bottom",
                              overflow: "visible",
                            }}
                          >
                            <path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path>
                          </svg>
                        </span>
                        master
                        <span className="ml-2">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            className="octicon octicon-triangle-down"
                            viewBox="0 0 16 16"
                            width="16"
                            height="16"
                            fill="currentColor"
                            style={{
                              display: "inline-block",
                              userSelect: "none",
                              verticalAlign: "text-bottom",
                              overflow: "visible",
                            }}
                          >
                            <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
                          </svg>
                        </span>
                      </button>
                    </li>
                    <li className="p-2">
                      <button className="rounded-lg px-3 py-[6px] inline-flex items-center hover:bg-[#ebeef1]">
                        <span className="mr-[2px]">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            className="octicon octicon-git-branch"
                            viewBox="0 0 16 16"
                            width="16"
                            height="16"
                            fill="currentColor"
                            style={{
                              display: "inline-block",
                              userSelect: "none",
                              verticalAlign: "text-bottom",
                              overflow: "visible",
                            }}
                          >
                            <path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path>
                          </svg>
                        </span>
                        <span className="mx-[2px]">1</span>
                        <span className="ml-[4px]">Branch</span>
                      </button>
                    </li>
                    <li className="p-2">
                      <button className="rounded-lg px-3 py-[6px] inline-flex items-center cursor-pointer hover:bg-[#ebeef1]">
                        <span className="mr-[2px]">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            className="octicon octicon-tag"
                            viewBox="0 0 16 16"
                            width="16"
                            height="16"
                            fill="currentColor"
                            style={{
                              display: "inline-block",
                              userSelect: "none",
                              verticalAlign: "text-bottom",
                              overflow: "visible",
                            }}
                          >
                            <path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path>
                          </svg>
                        </span>
                        <span className="mx-[2px]">0</span>
                        <span className="ml-[4px]">Tags</span>
                      </button>
                    </li>

                    <li className="p-2">
                      <span>
                        <input
                          name="search-file"
                          placeholder="Go to file"
                          className="rounded-lg px-3 py-[6px] inline-flex items-center text-sm border-[1px] border-gray-200"
                        />
                      </span>
                    </li>
                    <li className="p-2">
                      <button className="rounded-lg px-3 py-[6px] inline-flex items-center bg-[#f6f8fa] text-sm border-[1px] border-gray-200 hover:bg-[#ebeef1]">
                        <span className="mr-2">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            className="hide-sm"
                            viewBox="0 0 16 16"
                            width="16"
                            height="16"
                            fill="currentColor"
                            style={{
                              display: "inline-block",
                              userSelect: "none",
                              verticalAlign: "text-bottom",
                              overflow: "visible",
                            }}
                          >
                            <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
                          </svg>
                        </span>
                        <span>Add file</span>
                        <span className="ml-2">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            className="octicon octicon-triangle-down"
                            viewBox="0 0 16 16"
                            width="16"
                            height="16"
                            fill="currentColor"
                            style={{
                              display: "inline-block",
                              userSelect: "none",
                              verticalAlign: "text-bottom",
                              overflow: "visible",
                            }}
                          >
                            <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
                          </svg>
                        </span>
                      </button>
                    </li>
                    <li className="p-2">
                      <button className="rounded-lg px-3 py-[6px] inline-flex items-center text-sm bg-[#1f883d] border-[#1f232826] text-white hover:bg-[#2f8c3e]">
                        <span className="mr-2">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            className="hide-sm"
                            viewBox="0 0 16 16"
                            width="16"
                            height="16"
                            fill="currentColor"
                            style={{
                              display: "inline-block",
                              userSelect: "none",
                              verticalAlign: "text-bottom",
                              overflow: "visible",
                            }}
                          >
                            <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
                          </svg>
                        </span>
                        <span>Code</span>
                        <span className="ml-2">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            viewBox="0 0 16 16"
                            width="16"
                            height="16"
                            fill="currentColor"
                            style={{
                              display: "inline-block",
                              userSelect: "none",
                              verticalAlign: "text-bottom",
                              overflow: "visible",
                            }}
                          >
                            <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
                          </svg>
                        </span>
                      </button>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="mt-3 w-fit">
                <div className="rounded-lg border-[1px] border-gray-200">
                  <div className="">
                    <div className="flex-col ">
                      <ul className="flex text-sm flex-grow w-full border-b-[1px] border-gray-200">
                        <li className="">
                          <button className="flex py-3 px-4 bg-[#f6f8fa] items-center rounded-lg text-[#0000EE]">
                            <span className="pr-2">
                              <img
                                src={AVATARURL}
                                alt="avatar"
                                data-view-component="true"
                                className="size-6 h-6 rounded-full avatar circle"
                              />
                            </span>
                            <span>2sagarraut2</span>
                          </button>
                        </li>
                        <li className="flex py-3 px-2 bg-[#f6f8fa] items-center">
                          <p>Merge pull request</p>
                        </li>
                        <li className="flex py-3 px-2 bg-[#f6f8fa] items-center">
                          <p>#16</p>
                        </li>
                        <li className="flex py-3 px-2 bg-[#f6f8fa] items-center">
                          <p>
                            from 2sagarraut2/2024-12-09-update-changes
                            <span className="ml-3 py-1 px-2 rounded-lg hover:bg-[#ebeef1] cursor-pointer">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                className="octicon octicon-ellipsis"
                                viewBox="0 0 16 16"
                                width="16"
                                height="16"
                                fill="currentColor"
                                style={{
                                  display: "inline-block",
                                  userSelect: "none",
                                  verticalAlign: "text-bottom",
                                  overflow: "visible",
                                }}
                              >
                                <path d="M0 5.75C0 4.784.784 4 1.75 4h12.5c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 14.25 12H1.75A1.75 1.75 0 0 1 0 10.25ZM12 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM7 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM4 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"></path>
                              </svg>
                            </span>
                          </p>
                        </li>

                        <li className="flex py-3 px-2 bg-[#f6f8fa] items-center text-xs">
                          <p>c7372cb · last week</p>
                        </li>
                        <li className="flex py-3 px-2 bg-[#f6f8fa] items-center rounded-lg">
                          <span className="mr-2 ">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              className="octicon octicon-history"
                              viewBox="0 0 16 16"
                              width="16"
                              height="16"
                              fill="currentColor"
                              style={{
                                display: "inline-block",
                                userSelect: "none",
                                verticalAlign: "text-bottom",
                                overflow: "visible",
                              }}
                            >
                              <path d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z"></path>
                            </svg>
                          </span>
                          <span>5 Commits</span>
                        </li>
                      </ul>
                      <ul className="flex text-sm flex-grow w-full border-b-[1px] border-gray-200 justify-between hover:bg-[#ebeef1]">
                        <li className="flex-grow w-[33%] py-2.5 px-4 items-center ">
                          <span className="pl-[2px] pr-4">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              className="color-fg-muted"
                              viewBox="0 0 16 16"
                              width="16"
                              height="16"
                              fill="currentColor"
                              style={{
                                display: "inline-block",
                                userSelect: "none",
                                verticalAlign: "text-bottom",
                                overflow: "visible",
                              }}
                            >
                              <path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path>
                            </svg>
                          </span>
                          <button onClick={() => handleButtonClick("index")}>
                            <span>index.html</span>
                          </button>
                        </li>
                        <li className="flex-grow w-[33%] py-2.5 px-4 items-center">
                          <span>
                            <p>Profile information added!</p>
                          </span>
                        </li>
                        <li className="flex-grow w-[33%] py-2.5 px-4 items-center flex justify-end">
                          <span>
                            <p>last week</p>
                          </span>
                        </li>
                      </ul>

                      {/* About.js */}
                      <ul className="flex text-sm flex-grow w-full border-b-[1px] border-gray-200 justify-between hover:bg-[#ebeef1]">
                        <li className="flex-grow w-[33%] py-2.5 px-4 items-center">
                          <span className="pl-[2px] pr-4">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              className="color-fg-muted"
                              viewBox="0 0 16 16"
                              width="16"
                              height="16"
                              fill="currentColor"
                              style={{
                                display: "inline-block",
                                userSelect: "none",
                                verticalAlign: "text-bottom",
                                overflow: "visible",
                              }}
                            >
                              <path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path>
                            </svg>
                          </span>
                          <button onClick={() => handleButtonClick("about")}>
                            <span>about.js</span>
                          </button>
                        </li>
                        <li className="flex-grow w-[33%] py-2.5 px-4 items-center">
                          About me added!
                        </li>
                        <li className="flex-grow w-[33%] py-2.5 px-4 items-center flex justify-end">
                          <span>
                            <p>last week</p>
                          </span>
                        </li>
                      </ul>

                      {/* Projects.js */}
                      <ul className="flex text-sm flex-grow w-full border-b-[1px] border-gray-200 justify-between hover:bg-[#ebeef1]">
                        <li className="flex-grow w-[33%] py-2.5 px-4 items-center">
                          <span className="pl-[2px] pr-4">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              className="color-fg-muted"
                              viewBox="0 0 16 16"
                              width="16"
                              height="16"
                              fill="currentColor"
                              style={{
                                display: "inline-block",
                                userSelect: "none",
                                verticalAlign: "text-bottom",
                                overflow: "visible",
                              }}
                            >
                              <path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path>
                            </svg>
                          </span>
                          <button onClick={() => handleButtonClick("projects")}>
                            <span>projects.js</span>
                          </button>
                        </li>
                        <li className="flex-grow w-[33%] py-2.5 px-4 items-center">
                          Projects added!
                        </li>
                        <li className="flex-grow w-[33%] py-2.5 px-4 items-center flex justify-end">
                          <span>
                            <p>last week</p>
                          </span>
                        </li>
                      </ul>

                      {/* Style.css */}
                      {/* <ul className="flex text-sm flex-grow w-full border-b-[1px] border-gray-200 justify-between">
                        <li className="flex-grow w-[33%] py-3 px-4 items-center">
                          <span className="pl-[2px] pr-4">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              className="color-fg-muted"
                              viewBox="0 0 16 16"
                              width="16"
                              height="16"
                              fill="currentColor"
                              style={{
                                display: "inline-block",
                                userSelect: "none",
                                verticalAlign: "text-bottom",
                                overflow: "visible",
                              }}
                            >
                              <path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path>
                            </svg>
                          </span>
                          styles.css
                        </li>
                        <li className="flex-grow w-[33%] py-3 px-4 items-center">
                          Style added!
                        </li>
                        <li className="flex-grow w-[33%] py-3 px-4 items-center flex justify-end">
                          <span>
                            <p>last week</p>
                          </span>
                        </li>
                      </ul> */}

                      {/* README.md */}
                      <ul className="flex text-sm flex-grow w-full justify-between hover:bg-[#ebeef1]">
                        <li className="flex-grow w-[33%] py-2.5 px-4 items-center">
                          <span className="pl-[2px] pr-4">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              className="color-fg-muted"
                              viewBox="0 0 16 16"
                              width="16"
                              height="16"
                              fill="currentColor"
                              style={{
                                display: "inline-block",
                                userSelect: "none",
                                verticalAlign: "text-bottom",
                                overflow: "visible",
                              }}
                            >
                              <path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path>
                            </svg>
                          </span>
                          <button onClick={() => handleButtonClick("README")}>
                            <span>README.md</span>
                          </button>
                        </li>
                        <li className="flex-grow w-[33%] py-2.5 px-4 items-center">
                          Readme file added!
                        </li>
                        <li className="flex-grow w-[33%] py-2.5 px-4 items-center flex justify-end">
                          <span>
                            <p>last week</p>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Show file table */}
                <div className="mt-5 rounded-lg border-[1px] border-gray-200">
                  <div>
                    <div className="flex-col rounded-lg px-2">
                      <ul className="w-full flex border-b-[1px] border-gray-200">
                        <li className="flex py-2 pt-4 px-2 flex-grow text-sm font-semibold text-red-400 ">
                          <button className="py-1 px-2 cursor-pointer hover:bg-[#ebeef1] rounded-lg">
                            <span className="mr-2">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                className="octicon octicon-book"
                                viewBox="0 0 16 16"
                                width="16"
                                height="16"
                                fill="currentColor"
                                style={{
                                  display: "inline-block",
                                  userSelect: "none",
                                  verticalAlign: "text-bottom",
                                  overflow: "visible",
                                }}
                              >
                                <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path>
                              </svg>
                            </span>
                            <span className="pr-2">
                              {activeComponent || "None Selected"}
                            </span>
                          </button>
                        </li>
                        <li className="flex py-2 pt-4 px-2 rounded-lg">
                          {/* Pencil button */}
                          <button className="py-1 px-2 rounded-lg hover:bg-[#ebeef1]">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              className="octicon octicon-pencil"
                              viewBox="0 0 16 16"
                              width="16"
                              height="16"
                              fill="currentColor"
                              style={{
                                display: "inline-block",
                                userSelect: "none",
                                verticalAlign: "text-bottom",
                                overflow: "visible",
                              }}
                            >
                              <path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"></path>
                            </svg>
                          </button>

                          <button className="py-1 px-2 rounded-lg hover:bg-[#ebeef1]">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              className="octicon octicon-list-unordered"
                              viewBox="0 0 16 16"
                              width="16"
                              height="16"
                              fill="currentColor"
                              style={{
                                display: "inline-block",
                                userSelect: "none",
                                verticalAlign: "text-bottom",
                                overflow: "visible",
                              }}
                            >
                              <path d="M5.75 2.5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5Zm0 5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5Zm0 5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5ZM2 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM2 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path>
                            </svg>
                          </button>
                        </li>
                      </ul>
                      <div className="rounded-lg w-full flex p-8">
                        {/* file content here */}
                        {activeComponent === "index" && <Index />}
                        {activeComponent === "about" && <About />}
                        {activeComponent === "projects" && <Projects />}
                        {activeComponent === "README" && (
                          <ReadMe onClick={handleButtonClick} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About section */}
            <div className="flex flex-grow">
              <div className="table-row w-full pt-2 pl-4">
                <ul className=" border-b-[1px] border-gray-200">
                  <li className="flex justify-between items-center">
                    <div className="">
                      <h2 className="text-sm font-semibold">About</h2>
                    </div>
                    <div>
                      <span className="py-1 px-2 rounded-lg hover:bg-[#ebeef1] cursor-pointer">
                        <svg
                          aria-label="Edit repository metadata"
                          role="img"
                          height="16"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          data-view-component="true"
                          className="octicon octicon-gear float-right "
                        >
                          <path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path>
                        </svg>
                      </span>
                    </div>
                  </li>
                  <li className="py-3">
                    <p className="text-base">My Portfolio</p>
                  </li>
                  <li className="text-xs py-2">
                    <span className="bg-cyan-300 rounded-2xl px-2 py-[2px]">
                      react
                    </span>
                  </li>
                  <li className="text-sm pt-3 flex items-center">
                    <span>
                      <svg
                        aria-hidden="true"
                        height="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        data-view-component="true"
                        className="octicon octicon-book mr-2"
                      >
                        <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path>
                      </svg>
                    </span>
                    <span>Readme</span>
                  </li>
                  <li className="text-sm pt-3 flex items-center">
                    <span>
                      <svg
                        text="gray"
                        aria-hidden="true"
                        height="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        data-view-component="true"
                        className="octicon octicon-pulse mr-2"
                      >
                        <path d="M6 2c.306 0 .582.187.696.471L10 10.731l1.304-3.26A.751.751 0 0 1 12 7h3.25a.75.75 0 0 1 0 1.5h-2.742l-1.812 4.528a.751.751 0 0 1-1.392 0L6 4.77 4.696 8.03A.75.75 0 0 1 4 8.5H.75a.75.75 0 0 1 0-1.5h2.742l1.812-4.529A.751.751 0 0 1 6 2Z"></path>
                      </svg>
                    </span>
                    <span>Activty</span>
                  </li>
                  <li className="text-sm pt-3 flex items-center">
                    <span>
                      <svg
                        aria-hidden="true"
                        height="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        data-view-component="true"
                        className="octicon octicon-star mr-2"
                      >
                        <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                      </svg>
                    </span>
                    <span>stars</span>
                  </li>
                  <li className="text-sm pt-3 flex items-center">
                    <span>
                      <svg
                        aria-hidden="true"
                        height="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        data-view-component="true"
                        className="octicon octicon-eye mr-2"
                      >
                        <path d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"></path>
                      </svg>
                    </span>
                    <span>watching</span>
                  </li>
                  <li className="text-sm pt-3 pb-3 flex items-center">
                    <span>
                      <svg
                        aria-hidden="true"
                        height="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        data-view-component="true"
                        className="octicon octicon-repo-forked mr-2"
                      >
                        <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
                      </svg>
                    </span>
                    <span>forks</span>
                  </li>
                </ul>

                {/* Languages used */}
                <ul className="py-3">
                  <h2 className="font-semibold mb-2">Languages</h2>

                  {/* Progess Bar */}
                  <span
                    data-view-component="true"
                    className="bg-[#818b981f] rounded-lg flex h-2 outline-1 outline outline-[#0000] overflow-hidden mb-2"
                  >
                    <span
                      style={{ backgroundColor: "#f1e05a", width: "56.6%" }}
                      itemProp="keywords"
                      aria-label="JavaScript 56.6"
                      data-view-component="true"
                      className="outline-2 outline-[#00000000] outline"
                    ></span>
                    <span
                      style={{ backgroundColor: "#663399", width: "31.6%" }}
                      itemProp="keywords"
                      aria-label="CSS 31.6"
                      data-view-component="true"
                      className="outline-2 outline-[#00000000] outline"
                    ></span>
                    <span
                      style={{ backgroundColor: "#e34c26", width: "11.8%" }}
                      itemProp="keywords"
                      aria-label="HTML 11.8"
                      data-view-component="true"
                      className="outline-2 outline-[#00000000] outline"
                    ></span>
                  </span>

                  {/* Languages */}
                  <ul className="list-none flex flex-col flex-wrap">
                    <li className="text-xs flex mr-2">
                      <svg
                        style={{ color: "#f1e05a" }}
                        aria-hidden="true"
                        height="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        data-view-component="true"
                        className="inline-block overflow-visible align-bottom fill-current w-4 mr-2"
                      >
                        <path d="M8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"></path>
                      </svg>
                      <span className="text-[#1f2328] font-semibold mr-1">
                        JavaScript
                      </span>
                      <span>56.6%</span>
                    </li>
                    <li className="text-xs flex">
                      <svg
                        style={{ color: "#663399" }}
                        aria-hidden="true"
                        height="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        data-view-component="true"
                        className="inline-block overflow-visible align-bottom fill-current w-4 mr-2"
                      >
                        <path d="M8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"></path>
                      </svg>
                      <span className="text-[#1f2328] font-semibold mr-1">
                        CSS
                      </span>
                      <span>31.6%</span>
                    </li>
                    <li className="text-xs flex">
                      <svg
                        style={{ color: "#e34c26" }}
                        aria-hidden="true"
                        height="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        data-view-component="true"
                        className="inline-block overflow-visible align-bottom fill-current w-4 mr-2"
                      >
                        <path d="M8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"></path>
                      </svg>
                      <span className="text-[#1f2328] font-semibold mr-1">
                        HTML
                      </span>
                      <span>11.8%</span>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
