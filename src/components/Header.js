import { MENUS } from "../utils/constants";
import HeaderMenus from "./HeaderMenus";

const Header = () => {
  return (
    <div>
      <header className="App-header">
        <div className="flex p-2 justify-between bg-[#f6f8fa] pt-4">
          <div className="flex">
            <div className="flex mx-2">
              <button className="rounded-lg border-[1px] border-gray-200 px-2 py-2 text-sm hover:bg-[#ebeef1]">
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  className="octicon octicon-three-bars Button-visual"
                >
                  <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
                </svg>
              </button>
            </div>
            <div className="mx-2 flex">
              <button className="border-gray-200 text-sm rounded-lg ">
                <svg
                  height="32"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  version="1.1"
                  width="32"
                  data-view-component="true"
                  className="octicon octicon-mark-github v-align-middle"
                >
                  <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
                </svg>
              </button>
            </div>
            <div className="mx-1 flex">
              <div className=" inline-flex w-full min-w-0 max-w-full overflow-hidden">
                <nav className="w-full">
                  <ul className="flex flex-row pt-2 ">
                    <li className="w-full text-sm rounded-lg hover:bg-[#ebeef1]">
                      <span>
                        <button className="mx-2 ">sagarraut</button>
                      </span>
                    </li>
                    <li className="w-full text-sm ">
                      <span className="mx-2">/</span>
                    </li>
                    <li className="w-full text-sm rounded-lg hover:bg-[#ebeef1]">
                      <button className="font-medium mx-2 ">portfolio</button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="flex mx-2">
            <div className="flex">
              {/* search input */}
              <div className="mx-1 flex text-sm mt-1">
                <input
                  name="global-search"
                  className="px-3 rounded bg-[#f6f8fa] h-8 border-[1px] border-gray-200"
                  placeholder="Type / to search"
                />
              </div>
              <div className="mx-1 flex text-sm">
                <button className="rounded-lg border-[1px] border-gray-200 px-2 py-2 inline-flex items-center hover:bg-[#ebeef1]">
                  <svg
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    className="octicon octicon-plus mr-3"
                  >
                    <path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path>
                  </svg>
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
                </button>
              </div>
              <div className="mx-1 flex text-sm">
                <button className="rounded-lg border-[1px] border-gray-200 px-2 py-2 hover:bg-[#ebeef1]">
                  <svg
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    className="octicon octicon-issue-opened Button-visual"
                  >
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
                  </svg>
                </button>
              </div>
              <div className="mx-1 flex text-sm">
                <button className="rounded-lg border-[1px] border-gray-200 px-2 py-2 hover:bg-[#ebeef1]">
                  <svg
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    className="octicon octicon-git-pull-request Button-visual"
                  >
                    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
                  </svg>
                </button>
              </div>
              <div className="mx-1 flex text-sm">
                <button className="rounded-lg border-[1px] border-gray-200 px-2 py-2 hover:bg-[#ebeef1]">
                  <svg
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    className="octicon octicon-inbox Button-visual"
                  >
                    <path d="M2.8 2.06A1.75 1.75 0 0 1 4.41 1h7.18c.7 0 1.333.417 1.61 1.06l2.74 6.395c.04.093.06.194.06.295v4.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-4.5c0-.101.02-.202.06-.295Zm1.61.44a.25.25 0 0 0-.23.152L1.887 8H4.75a.75.75 0 0 1 .6.3L6.625 10h2.75l1.275-1.7a.75.75 0 0 1 .6-.3h2.863L11.82 2.652a.25.25 0 0 0-.23-.152Zm10.09 7h-2.875l-1.275 1.7a.75.75 0 0 1-.6.3h-3.5a.75.75 0 0 1-.6-.3L4.375 9.5H1.5v3.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Z"></path>
                  </svg>
                </button>
              </div>
              <div className="mx-1 flex text-sm">
                <img
                  src="https://avatars.githubusercontent.com/u/36417693?v=4"
                  alt=""
                  size="32"
                  height="32"
                  width="32"
                  data-view-component="true"
                  className="avatar circle size-8 h-8 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mt px-4 flex bg-[#f6f8fa]">
            <nav className="">
              <ul className="flex items-center">
                {MENUS.map((MENU) => {
                  return <HeaderMenus key={MENU.id} MENU={MENU} />;
                })}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
