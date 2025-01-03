const ReadMe = ({ onClick }) => {
  return (
    <div className="">
      <h1 className="font-bold text-4xl border-b-[1px] border-gray-200 py-2">
        Getting Started with Portfolio app
      </h1>
      <p className="pt-3">Hello Friends!</p>
      <p className="py-2">I am Sagar Raut from India.</p>
      <p className="py-2">
        I have created this portfolio project using{" "}
        <a
          className="underline-offset-4 text-[#0000EE]"
          href="https://github.com/facebook/create-react-app"
        >
          Create React App
        </a>
        .
      </p>
      <ul className="indent-4 list-outside">
        <li className="py-2">
          Click on{" "}
          <button
            className="underline-offset-4 text-[#0000EE]"
            onClick={() => onClick("index")}
          >
            index.html
          </button>{" "}
          file to view my profile information.
        </li>
        <li className="py-2">
          Click on{" "}
          <button
            className="underline-offset-4 text-[#0000EE]"
            onClick={() => onClick("about")}
          >
            about.js
          </button>{" "}
          file to read about me.
        </li>
        <li className="py-2">
          Click on{" "}
          <button
            className="underline-offset-4 text-[#0000EE]"
            onClick={() => onClick("projects")}
          >
            projects.js
          </button>{" "}
          file to see projects I have worked on.
        </li>
        <li className="py-2">
          Click on{" "}
          <button
            className="underline-offset-4 text-[#0000EE]"
            onClick={() => onClick("README")}
          >
            README.md
          </button>{" "}
          file to get information on how to navigate.
        </li>
      </ul>
      <p className="py-2">
        Email:{" "}
        <a
          className="underline-offset-4 text-blue-800"
          href="mailto:2sagarraut2@gmail.com"
        >
          2sagarraut2@gmail.com
        </a>
      </p>
    </div>
  );
};

export default ReadMe;
