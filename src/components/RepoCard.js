const RepoCard = ({
  id,
  html_url,
  name,
  visibility,
  description,
  language,
  updatedAt,
}) => {
  return (
    <ul key={id} className="border-b-[1px] border-gray-200 pb-4">
      <li className="flex w-full justify-between py-6">
        <div className="inline-block">
          <div className="inline-block mb-1">
            <h3 className="break-all">
              <a
                href={html_url}
                target="_blank"
                rel="noreferrer"
                className="text-[#0969da] bg-transparent text-xl font-semibold hover:border-b-[2px] border-[#0969da]"
              >
                {name}
              </a>
              {visibility && (
                <span className="border-[#d1d9e0] text-[#59636e] border rounded-full inline-block text-xs font-[500] leading-4 px-1 whitespace-nowrap ml-4 mb-1 text-center">
                  {visibility}
                </span>
              )}
            </h3>
          </div>
          <div>
            <p className="text-[#59636e] text-sm">{description}</p>
          </div>
          <div className="text-xs mt-2 flex items-start">
            {language && (
              <>
                <span className="relative top-1 inline-block w-3 h-3 rounded-[50%] bg-[#f1e05a] mr-2 border-solid border=[#c4c6c9] border-[1px]"></span>
                <span className="text-xs mr-4">{language}</span>
              </>
            )}
            {updatedAt && <span>Updated {updatedAt}</span>}
          </div>
        </div>
        <div>
          {/* <div>{stargazers_url}</div> */}
          <div></div>
        </div>
      </li>
    </ul>
  );
};

export default RepoCard;
