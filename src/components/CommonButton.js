const CommonButton = ({ label, id, element }) => {
  return (
    <button
      key={id}
      className="rounded-lg border-[1px] border-gray-200 px-4 py-[5px] inline-flex items-center bg-[#f6f8fa] hover:bg-[#ebeef1]"
    >
      {label}
      {element}
    </button>
  );
};

export default CommonButton;
