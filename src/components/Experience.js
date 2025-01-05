import React from "react";
import { WORKEXPERIENCES } from "../utils/constants";

const Stepper = () => {
  return (
    <div className="mt-8 bg-white border border-gray-200 rounded-lg">
      <div className="p-6 text-xl font-semibold text-gray-800">
        Work Experience
      </div>

      <div className="relative left-72">
        {WORKEXPERIENCES.map((exp) => (
          <div key={exp.id} className="flex items-start mb-8">
            {/* Step Circle */}
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full border-2 z-10  ${
                exp.id === WORKEXPERIENCES.length
                  ? "bg-blue-500 text-white"
                  : "border-gray-500 text-white bg-gray-500 "
              }`}
            >
              {exp.id}
            </div>

            {/* Line Connector */}
            {exp.id < WORKEXPERIENCES.length && (
              <div className="w-0.5 h-full bg-gray-500 absolute left-4 top-0"></div>
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
