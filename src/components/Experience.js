import { useEffect, useState } from "react";
import { WORKEXPERIENCES } from "../utils/constants";

const Stepper = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");

    const handleMediaChange = (e) => {
      setIsSmallScreen(e.matches); // Update state based on media query match
    };

    // Initial check
    setIsSmallScreen(mediaQuery.matches);

    // Listen for changes
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  return (
    <div className="my-4 bg-white border border-gray-200 rounded-lg">
      <div className="m-6 pb-2 text-2xl font-semibold text-gray-800 border-b-[#d1d9e0] border-b-solid border-b-[1px]">
        Work Experience
      </div>

      <div className="relative md:left-8 top-2">
        {WORKEXPERIENCES.map((exp) => (
          <div key={exp.id} className="flex items-start mb-8">
            {/* Step Circle */}
            {!isSmallScreen && (
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full border-2 z-10  ${
                  exp.id === WORKEXPERIENCES.length
                    ? "bg-blue-500 text-white animate-bounce"
                    : "border-gray-500 text-white bg-gray-500"
                }`}
              >
                {exp.id}
              </div>
            )}

            {/* Line Connector */}
            {!isSmallScreen && (
              <>
                {exp.id < WORKEXPERIENCES.length && (
                  <div className="w-0.5 h-full bg-gray-500 absolute left-4 top-0"></div>
                )}
              </>
            )}

            {/* Experience Details */}
            <div className="ml-12">
              <p className="font-semibold">{exp.role}</p>
              <p className="text-sm text-gray-600">{exp.company}</p>
              <p className="text-sm text-gray-500">{exp.location}</p>
              <p className="text-xs text-gray-400">{exp.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
