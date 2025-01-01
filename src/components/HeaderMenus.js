const HeaderMenus = ({ MENU }) => {
  const { label, element, id } = MENU;
  //   console.log(label, element);
  return (
    <li key={id} className="border-b-2 border-red-600">
      <button className="p-2 flex items-center border-b-1 border-red-600 rounded-lg text-sm hover:bg-[#ebeef1]">
        {element}
        <span className="font-light">{label}</span>
      </button>
    </li>
  );
};

export default HeaderMenus;
