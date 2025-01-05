import React from "react";

const SkillComponent = (props) => {
  //   console.log(props);
  const { image, value } = props.sikllsList;
  return (
    <div>
      <ul className="p-0">
        <li className="m-4 rounded-xl min-w-[120px] p-2.5 bg-white flex flex-col items-center justify-center">
          <span className="">{image}</span>
          <p className="mt-2 text-center">{value}</p>
        </li>
      </ul>
    </div>
  );
};

export default SkillComponent;
