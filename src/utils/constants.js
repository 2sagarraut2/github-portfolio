export const AVATARURL = "https://avatars.githubusercontent.com/u/36417693?v=4";
export const LINKEDINTAG =
  "https://camo.githubusercontent.com/bbd5a3be2124528ab2064d49356ed845b5f9a05fc79c603e25c76c6601e28b67/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c696e6b6564496e2d2532333030373742352e7376673f6c6f676f3d6c696e6b6564696e266c6f676f436f6c6f723d7768697465";

// Repo view menus
export const REPOMENUS = [
  {
    id: 1,
    label: "Code",
    element: (
      <svg
        aria-hidden="true"
        height="16"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        data-view-component="true"
        className="octicon octicon-code UnderlineNav-octicon d-none d-sm-inline"
      >
        <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
      </svg>
    ),
  },
  {
    id: 2,
    label: "Issues",
    element: (
      <svg
        aria-hidden="true"
        height="16"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        data-view-component="true"
        className="octicon octicon-issue-opened UnderlineNav-octicon d-none d-sm-inline"
      >
        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
      </svg>
    ),
  },
  {
    id: 3,
    label: "Pull requests",
    element: (
      <svg
        aria-hidden="true"
        height="16"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        data-view-component="true"
        className="octicon octicon-git-pull-request UnderlineNav-octicon d-none d-sm-inline"
      >
        <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
      </svg>
    ),
  },

  {
    id: 4,
    label: "Actions",
    element: (
      <svg
        aria-hidden="true"
        height="16"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        data-view-component="true"
        className="octicon octicon-play UnderlineNav-octicon d-none d-sm-inline"
      >
        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path>
      </svg>
    ),
  },

  {
    id: 5,
    label: "Projects",
    element: (
      <svg
        aria-hidden="true"
        height="16"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        data-view-component="true"
        className="octicon octicon-table UnderlineNav-octicon d-none d-sm-inline"
      >
        <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></path>
      </svg>
    ),
  },

  {
    id: 6,
    label: "Wiki",
    element: (
      <svg
        aria-hidden="true"
        height="16"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        data-view-component="true"
        className="octicon octicon-book UnderlineNav-octicon d-none d-sm-inline"
      >
        <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path>
      </svg>
    ),
  },

  {
    id: 7,
    label: "Security",
    element: (
      <svg
        aria-hidden="true"
        height="16"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        data-view-component="true"
        className="octicon octicon-shield UnderlineNav-octicon d-none d-sm-inline"
      >
        <path d="M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
      </svg>
    ),
  },

  {
    id: 8,
    label: "Insights",
    element: (
      <svg
        aria-hidden="true"
        height="16"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        data-view-component="true"
        className="octicon octicon-graph UnderlineNav-octicon d-none d-sm-inline"
      >
        <path d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Zm14.28 2.53-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06 4.28 9.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path>
      </svg>
    ),
  },

  {
    id: 9,
    label: "Settings",
    element: (
      <svg
        aria-hidden="true"
        height="16"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        data-view-component="true"
        className="octicon octicon-gear UnderlineNav-octicon d-none d-sm-inline"
      >
        <path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path>
      </svg>
    ),
  },
];

// Profile Menus
export const PROFILEMENUS = [
  {
    id: 1,
    label: "Overview",
    element: (
      <svg
        aria-hidden="true"
        height="16"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        data-view-component="true"
        className="octicon octicon-book UnderlineNav-octicon"
      >
        <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path>
      </svg>
    ),
    path: "/",
  },
  {
    id: 2,
    label: "Repositories",
    element: (
      <svg
        aria-hidden="true"
        height="16"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        data-view-component="true"
        className="octicon octicon-repo UnderlineNav-octicon"
      >
        <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
      </svg>
    ),
    path: "/repositories",
  },
  {
    id: 3,
    label: "Work Experiences",
    element: (
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
    ),
    path: "/experiences",
  },
  {
    id: 4,
    label: "Projects",
    element: (
      <svg
        aria-hidden="true"
        height="16"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        data-view-component="true"
        className="octicon octicon-package UnderlineNav-octicon"
      >
        <path d="m8.878.392 5.25 3.045c.54.314.872.89.872 1.514v6.098a1.75 1.75 0 0 1-.872 1.514l-5.25 3.045a1.75 1.75 0 0 1-1.756 0l-5.25-3.045A1.75 1.75 0 0 1 1 11.049V4.951c0-.624.332-1.201.872-1.514L7.122.392a1.75 1.75 0 0 1 1.756 0ZM7.875 1.69l-4.63 2.685L8 7.133l4.755-2.758-4.63-2.685a.248.248 0 0 0-.25 0ZM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432Zm6.25 8.271 4.625-2.683a.25.25 0 0 0 .125-.216V5.677L8.75 8.432Z"></path>
      </svg>
    ),
    path: "/projects",
  },
  // {
  //   id: 5,
  //   label: "Stars",
  //   element: (
  //     <svg
  //       aria-hidden="true"
  //       height="16"
  //       viewBox="0 0 16 16"
  //       version="1.1"
  //       width="16"
  //       data-view-component="true"
  //       className="octicon octicon-star UnderlineNav-octicon"
  //     >
  //       <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
  //     </svg>
  //   ),
  //   path: "/stars",
  // },
];

// About
// Profile
export const livingIn = "I am an enthusiastic Front-end developer. Living in ";
export const pcmc = "PCMC, Pune, India.";
export const workingWith =
  "I am a Software Engineer, currently working with awesome folks at ";
export const haveALook = "Have a look at my ";
export const skills = ", skills or just connect with me on ";
export const excited = "I am always excited to enhance my knowledge.";

export const REPOSITORYBUTTONS = [
  {
    id: 1,
    label: "Type",
    element: (
      <svg
        aria-hidden="true"
        focusable="false"
        className="octicon octicon-triangle-down ml-[2px]"
        viewBox="0 0 16 16"
        width="16"
        height="16"
        data-slot="icon"
        style={{
          display: "inline-block",
          userSelect: "none",
          verticalAlign: "text-bottom",
          overflow: "visible",
        }}
      >
        <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
      </svg>
    ),
    menus: [
      {
        id: 1,
        label: "All",
        action: "sortAllNames",
      },
      {
        id: 2,
        label: "Public",
        action: "sortByPublic",
      },
      {
        id: 3,
        label: "Private",
        action: "sortByPrivate",
      },
    ],
  },
  {
    id: 2,
    label: "Language",
    element: (
      <svg
        aria-hidden="true"
        focusable="false"
        className="octicon octicon-triangle-down ml-[2px]"
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
    ),
    menus: [
      {
        id: 1,
        label: "All",
        action: "sortByAllLanguage",
      },
      {
        id: 2,
        label: "JavaScript",
        action: "sortByJavaScript",
      },
      {
        id: 3,
        label: "Java",
        action: "sortByJava",
      },
      {
        id: 4,
        label: "HTML",
        action: "sortByHTML",
      },
    ],
  },
  {
    id: 3,
    label: "Sort",
    element: (
      <svg
        aria-hidden="true"
        focusable="false"
        className="octicon octicon-triangle-down ml-[2px]"
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
    ),
    menus: [
      {
        id: 1,
        label: "Last Updated",
        action: "sortByLastUpdated",
      },
      {
        id: 2,
        label: "Name",
        action: "sortByName",
      },
    ],
  },
];

export const RESULTLABEL = " result for repositories matching with ";

export const WORKEXPERIENCES = [
  {
    id: 1,
    role: "Service Desk L1 Engineer",
    company: "Alten Calsoft Labs",
    location: "Pune",
    duration: "Jan 2019 - May 2019",
  },
  {
    id: 2,
    role: "Associate Analyst",
    company: "Wipro Technologies",
    location: "Pune",
    duration: "Dec 2019 - May 2021",
  },
  {
    id: 3,
    role: "Software Engineer",
    company: "Anand Rathi Wealth Limited",
    location: "Mumbai",
    duration: "May 2021 - Apr 2022",
  },
  {
    id: 4,
    role: "Software Engineer",
    company: "NCSI Technologies (India) Private Limited",
    location: "Pune",
    duration: "Apr 2022 - Present",
  },
];

export const TECHSTACK = [
  {
    id: 1,
    element: (
      <img
        className="cursor-pointer"
        src="https://camo.githubusercontent.com/c3fd6682e8cca0f7c262a00f94ef0f65cadd0c8470669a2d7d6f3614e81b10c2/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f632d2532333030353939432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d63266c6f676f436f6c6f723d7768697465"
        alt="C"
      />
    ),
  },
  {
    id: 2,
    element: (
      <img
        className="cursor-pointer"
        src="https://camo.githubusercontent.com/88e1b21c4e11afd4f06cfb2b510dbb3690dbd300fb1a6d4676fd553a70bafa82/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f632b2b2d2532333030353939432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d63253242253242266c6f676f436f6c6f723d7768697465"
        alt="C++"
      />
    ),
  },
  {
    id: 3,
    element: (
      <img
        className="cursor-pointer"
        src="https://camo.githubusercontent.com/930c71eac967cc5cec61c0aa08ba3719f9cb68e28cdffa63b28b0a31be1663b4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f637373332d2532333135373242362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465"
        alt="CSS3"
      />
    ),
  },
  {
    id: 4,
    element: (
      <img
        className="cursor-pointer"
        src="https://camo.githubusercontent.com/d4d9d935f85b68223a3514c6a889ea3ed6a77afb5f560c05baa1a1b168077830/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f68746d6c352d2532334533344632362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465"
        alt="HTML5"
      />
    ),
  },
  {
    id: 5,
    element: (
      <img
        className="cursor-pointer"
        src="https://camo.githubusercontent.com/bea90da226e09b503e6c8fde824f4816b98dcf30cd31e803006bf6335af06890/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176612d2532334544384230302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6f70656e6a646b266c6f676f436f6c6f723d7768697465"
        alt="Java"
      />
    ),
  },
  {
    id: 6,
    element: (
      <img
        className="cursor-pointer"
        src="https://camo.githubusercontent.com/29d02b3669d6450d67e043cf5909e740dcb94c1e2306d88ac48b15b4ec55dc65/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145"
        alt="JavaScript"
      />
    ),
  },
  {
    id: 7,
    element: (
      <img
        className="cursor-pointer"
        src="https://camo.githubusercontent.com/873c09f11f469258183d6e64e34c12195f5f7f3d311b4c7a1461339a7255ee00/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4157532d2532334646393930302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d616d617a6f6e2d617773266c6f676f436f6c6f723d7768697465"
        alt="AWS"
      />
    ),
  },
  {
    id: 8,
    element: (
      <img
        className="cursor-pointer"
        src="https://camo.githubusercontent.com/394d48e0a5beee0e3104eb04c8b8e6923567be3ba104754c8c141c6dee91c75e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f67697468756225323070616765732d3132313031333f7374796c653d666f722d7468652d6261646765266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465"
        alt="GithubPages"
      />
    ),
  },
  {
    id: 9,
    element: (
      <img
        className="cursor-pointer"
        src="https://camo.githubusercontent.com/0803e71d7164cc4981c78ebdbc694b84c20800ca471c185caa101813ea58edc2/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f476f6f676c65436c6f75642d2532333432383546342e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d676f6f676c652d636c6f7564266c6f676f436f6c6f723d7768697465"
        alt="Google Cloud"
      />
    ),
  },
  {
    id: 10,
    element: (
      <img
        className="cursor-pointer"
        src="https://camo.githubusercontent.com/da76fac7e908e0b025b99413c1270537b9af35c6dfec4aa8c7cb3307c13a5581/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d416e7444657369676e2d2532333031373046453f7374796c653d666f722d7468652d6261646765266c6f676f3d616e742d64657369676e266c6f676f436f6c6f723d7768697465"
        alt="Ant-Design"
      />
    ),
  },
  {
    id: 11,
    element: (
      <img
        className="cursor-pointer"
        src="https://camo.githubusercontent.com/87d97e4553a60edf0a89b98ae7e96ff2293c51ca69754f7b605c342ab0400a7a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f626f6f7473747261702d2532333835313146412e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d626f6f747374726170266c6f676f436f6c6f723d7768697465"
        alt="Bootstrap"
      />
    ),
  },
  {
    id: 12,
    element: (
      <img
        className="cursor-pointer"
        src="https://camo.githubusercontent.com/e31233448c414211b0ccee1366e11e12b2bda7667c21eb2bc7f0aeae9fa24da2/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f63686172742e6a732d4635373838442e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d63686172742e6a73266c6f676f436f6c6f723d7768697465"
        alt="Chart.js"
      />
    ),
  },
  {
    id: 13,
    element: (
      <img
        className="cursor-pointer"
        src="https://camo.githubusercontent.com/1b551c798116d28a27cbc8a8650f7d8bd834b4df5b349af032cf65e38fb81453/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a71756572792d2532333037363941442e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a7175657279266c6f676f436f6c6f723d7768697465"
        alt="jQuery"
      />
    ),
  },
  {
    id: 14,
    element: (
      <img
        className="cursor-pointer"
        src="https://camo.githubusercontent.com/dba3dfd2738d8ef9cda9409fb0b4e6edb41483f05ec5f81a1000accdf066f09a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d55492d2532333030383143422e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6d7569266c6f676f436f6c6f723d7768697465"
        alt="MUI"
      />
    ),
  },
  {
    id: 15,
    element: (
      <img
        className="cursor-pointer"
        src="https://camo.githubusercontent.com/fd00f5fb76a02f6093a50142c52193fa6353f4a1b5199827c57cbe99d611b532/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e504d2d2532334342333833372e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6e706d266c6f676f436f6c6f723d7768697465"
        alt="NPM"
      />
    ),
  },
  {
    id: 16,
    element: (
      <img
        className="cursor-pointer"
        src="https://camo.githubusercontent.com/f93e05694a6f01f2f6a37713a454a942442a5ff2b33083891096a6f7e57842f8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742d2532333230323332612e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642"
        alt="React"
      />
    ),
  },
  {
    id: 17,
    element: (
      <img
        className="cursor-pointer"
        src="https://camo.githubusercontent.com/44827058d4b05d71c87e257a4ef305f59a6732654cd9de1ee2f818e15dba31a4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163745f526f757465722d4341343234353f7374796c653d666f722d7468652d6261646765266c6f676f3d72656163742d726f75746572266c6f676f436f6c6f723d7768697465"
        alt="React Router"
      />
    ),
  },
  {
    id: 18,
    element: (
      <img
        className="cursor-pointer"
        src="https://camo.githubusercontent.com/cf57bdae6cd284d883710828917fd9f7e1220ef4710ed19b2e9ae2163bb339f4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5265616374253230486f6f6b253230466f726d2d2532334543353939302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374686f6f6b666f726d266c6f676f436f6c6f723d7768697465"
        alt="React Hook Form"
      />
    ),
  },
  {
    id: 19,
    element: (
      <img
        className="cursor-pointer"
        src="https://camo.githubusercontent.com/e295d0d1e6177be7fea7a386b987eb60077135419f901c302c2d1d327528b776/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656475782d2532333539336438382e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7265647578266c6f676f436f6c6f723d7768697465"
        alt="Redux"
      />
    ),
  },
  {
    id: 20,
    element: (
      <img
        className="cursor-pointer"
        src="https://camo.githubusercontent.com/77313247cef0919ec6cc60592ebeb879580c2558f5817a4cd3b658d3e2bbbaae/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f53656d616e746963253230554925323052656163742d2532333335424442322e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d53656d616e74696355495265616374266c6f676f436f6c6f723d7768697465"
        alt="Semantic UI React"
      />
    ),
  },
  {
    id: 21,
    element: (
      <img
        className="cursor-pointer"
        src="https://camo.githubusercontent.com/9ee242f2c2b1eb587f7e42704b3a0629082aac88f66fff96d34723f777b07775/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f737072696e672d2532333644423333462e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d737072696e67266c6f676f436f6c6f723d7768697465"
        alt="Spring"
      />
    ),
  },
  {
    id: 22,
    element: (
      <img
        className="cursor-pointer"
        src="https://camo.githubusercontent.com/b2eac0f505dfd05c25acf8c285b5eb346916090126c8836c6cbf9aeb754eac32/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7461696c77696e646373732d2532333338423241432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7461696c77696e642d637373266c6f676f436f6c6f723d7768697465"
        alt="TailwindCSS"
      />
    ),
  },
  {
    id: 23,
    element: (
      <img
        className="cursor-pointer"
        src="https://camo.githubusercontent.com/7fc04bf38043707d286c6e516431ead2587dd2768f6552df60ec7e119ec8dd6d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f74687265656a732d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f3d74687265652e6a73266c6f676f436f6c6f723d7768697465"
        alt="Three js"
      />
    ),
  },
  {
    id: 24,
    element: (
      <img
        className="cursor-pointer"
        src="https://camo.githubusercontent.com/91df23e19780cabd9b72044893ec4fb6d3596fa6bb2910c820dd4cdf71933c33/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f576f726450726573732d2532333131374143392e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d576f72645072657373266c6f676f436f6c6f723d7768697465"
        alt="WordPress"
      />
    ),
  },
  {
    id: 25,
    element: (
      <img
        className="cursor-pointer"
        src="https://camo.githubusercontent.com/02ac2b3a53dcf63e2fa316c969621bbc985825476e197c2d19835da32dd6a5a2/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f617061636865253230746f6d6361742d2532334638444337352e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6170616368652d746f6d636174266c6f676f436f6c6f723d626c61636b"
        alt="Apache Tomcat"
      />
    ),
  },
  {
    id: 26,
    element: (
      <img
        className="cursor-pointer"
        src="https://camo.githubusercontent.com/38ce4d8be94d27406f2989b56efec7cdc5e2c2d6509600746fede440245c5afa/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6d7973716c2d3434373941312e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6d7973716c266c6f676f436f6c6f723d7768697465"
        alt="MySQL"
      />
    ),
  },
  {
    id: 27,
    element: (
      <img
        className="cursor-pointer"
        src="https://camo.githubusercontent.com/94d83dc5838e2784bee25fe9e019bc2fda128676f32cef2f06baa0f6f3849b8c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6769742d2532334630353033332e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d676974266c6f676f436f6c6f723d7768697465"
        alt="Git"
      />
    ),
  },
  {
    id: 28,
    element: (
      <img
        className="cursor-pointer"
        src="https://camo.githubusercontent.com/7e282220b8ec0dd29cf99be1c0f5e82d74a42bc84ed834ee6afd86b4bad3bfee/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6769746875622d2532333132313031312e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465"
        alt="GitHub"
      />
    ),
  },
  {
    id: 29,
    element: (
      <img
        className="cursor-pointer"
        src="https://camo.githubusercontent.com/470df5ea3f00228b503351e80c51f1a7299fa8d513693f70cfd3fb3e2f61f041/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6269746275636b65742d2532333030343742332e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6269746275636b6574266c6f676f436f6c6f723d7768697465"
        alt="Bitbucket"
      />
    ),
  },
  {
    id: 30,
    element: (
      <img
        className="cursor-pointer"
        src="https://camo.githubusercontent.com/4f55e1d06c1cf523db63cf3b0cdf4c18f7e2135a42fdfd6fa556ccf800e21d2f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6972612d2532333041304646462e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a697261266c6f676f436f6c6f723d7768697465"
        alt="Jira"
      />
    ),
  },
  {
    id: 31,
    element: (
      <img
        className="cursor-pointer"
        src="https://camo.githubusercontent.com/1c706c2be439f151709fa947538324e79afce9d69c1a2b5c4d31919a924c6395/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636f6e666c75656e63652d2532333137324246342e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d636f6e666c75656e6365266c6f676f436f6c6f723d7768697465"
        alt="Confluence"
      />
    ),
  },
  {
    id: 32,
    element: (
      <img
        className="cursor-pointer"
        src="https://camo.githubusercontent.com/579cca9d03e324c90d59af069554195682c0f3b67f61cd401efeaa3c0ae3974b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d537761676765722d253233436c6f6a7572653f7374796c653d666f722d7468652d6261646765266c6f676f3d73776167676572266c6f676f436f6c6f723d7768697465"
        alt="Swagger"
      />
    ),
  },
];

export const SAGARRAUT2 = "2sagarraut2";
export const SAGARRAUT = "2sagarraut2/README.md";

export const WELCOME = "💫 Welcome to My Portfolio!";

export const SOCIALLABEL = "🌐 Socials:";
export const TECHSTACKLABEL = "💻 Tech Stack:";

export const INTRO = `Hi there!<br/> I'm <strong>Sagar Raut</strong>, a passionate
              developer focused on building innovative and scalable web
              applications. Welcome to my portfolio! It's designed to reflect
              the structure and style of my GitHub profile, providing an easy
              way for you to explore my projects, skills, and achievements. Feel
              free to navigate and get a deeper understanding of my work.
              <br/> 🔭 I’m currently working on Dr. In A Way (Personal
              Healthcare companion)<br/>👯 I’m looking to collaborate on
              everything I can be help of<br/>
              🤝 I’m looking for help with learning Backend<br/>🌱 I’m
              currently learning NodeJS<br/>💬 Ask me about ReactJS<br/>`;

export const HEADERBUTTONELEMENTS = [
  {
    id: 1,
    element: (
      <>
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
      </>
    ),
  },
  {
    id: 2,
    element: (
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
    ),
  },
  {
    id: 3,
    element: (
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
    ),
  },
  {
    id: 4,
    element: (
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
    ),
  },
];

export const MYPROJECTS = [
  {
    id: 1,
    name: "Loan Management System",
    html_url: "https://lms.4fin.in/login",
    description:
      "The Loan Management System is a comprehensive web application designed to streamline and manage the end-to-end lifecycle of loan processing. This system provides a user-friendly interface and robust backend to handle all critical functionalities related to loans, from initiation to closure. It ensures seamless integration with payment systems.",
  },
  {
    id: 2,
    name: "Swiggy WebApp clone",
    html_url: "https://github.com/2sagarraut2/deliveryapp",
    description:
      "The Swiggy Web-App Clone is a feature-rich, responsive web application built to emulate the core functionalities and user experience of the Swiggy food delivery platform. This project demonstrates expertise in building scalable, user-friendly interfaces, seamless API integration, and real-time data handling, ensuring an interactive and intuitive user experience.",
  },
  {
    id: 3,
    name: "Github Portfolio",
    description:
      "The GitHub Portfolio Web-App Clone is a sleek and professional portfolio web application inspired by GitHub's repository user interface. This project combines functionality with aesthetics, providing a clean, intuitive design for showcasing projects, skills, and achievements in a format that resonates with developers and recruiters.",
    html_url: "https://github.com/2sagarraut2/github-portfolio",
  },
  {
    id: 4,
    name: "Blog App",
    description:
      "The Blog App is a sleek, user-friendly platform for creating, managing, and exploring blogs. Built with React, it provides a seamless experience for both content creators and readers. Users can add new blog posts, view a detailed blog list, and dive into individual blogs for an immersive reading experience.",
    html_url: "https://2sagarraut2.github.io/blog-writer/",
  },
  {
    id: 5,
    name: "Shopping Cart",
    description:
      "The Shopping Cart Project is a modular and reusable feature designed to replicate the 'Add to Cart' functionality commonly found in e-commerce websites. Built using Redux, this project provides a robust solution for managing cart operations efficiently and can be easily integrated into any web application.",
    html_url: "https://github.com/2sagarraut2/shopping-cart",
  },
];

export const CLEARFILTER = "Clear filter";

export const FOOTERTEXT = "No © 2025 copyright issues.";
