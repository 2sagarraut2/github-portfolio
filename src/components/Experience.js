import { useEffect, useState } from "react";
import { WORKEXPERIENCES } from "../utils/constants";
import TitleComponent from "./TitleComponent";

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

  // function calculateDuration(duration) {
  //   const [start, end] = duration.split(" - ");

  //   const parseDate = (dateString) => {
  //     const [month, year] = dateString.split(" ");
  //     const monthIndex = new Date(`${month} 1`).getMonth(); // Get month index
  //     return new Date(year, monthIndex);
  //   };

  //   const startDate = parseDate(start);
  //   const endDate = end === "Present" ? new Date() : parseDate(end);

  //   const years = endDate.getFullYear() - startDate.getFullYear();
  //   const months = endDate.getMonth() - startDate.getMonth();

  //   // Adjust for negative months (crossed year boundary)
  //   const totalMonths = years * 12 + months;
  //   const resultYears = Math.floor(totalMonths / 12);
  //   const resultMonths = totalMonths % 12;

  //   // Build the result string
  //   let result = "";
  //   if (resultYears >= 1) result += `${resultYears} years`;
  //   if (resultMonths > 0)
  //     result += (resultYears >= 1 ? " and " : "") + `${resultMonths} months`;

  //   return result || "0 months";
  // }

  return (
    <div className="my-4 bg-white border border-gray-200 rounded-lg p-6">
      <TitleComponent title="Work Experience" />

      <div className="relative md:left-8 top-2">
        {WORKEXPERIENCES.map((exp) => {
          // const durationOfExperience = calculateDuration(exp.duration);
          return (
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
              <div className="ml-12 truncate">
                <p className="font-semibold">{exp.role}</p>
                <p className="text-sm text-gray-600 truncate">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.location}</p>
                <p className="text-xs text-gray-400">
                  {exp.duration}
                  {/* | {durationOfExperience} */}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
