import React, { useEffect } from "react";
import { packages } from "../constants/Packages";

export const Schedule = () => {
  useEffect(() => {
    // Load jQuery (needed by Momoyoga)
    const jqueryScript = document.createElement("script");
    jqueryScript.src = "https://code.jquery.com/jquery-3.3.1.min.js";
    jqueryScript.integrity =
      "sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=";
    jqueryScript.crossOrigin = "anonymous";
    document.body.appendChild(jqueryScript);

    // Load Momoyoga schedule script after jQuery
    jqueryScript.onload = () => {
      const momoScript = document.createElement("script");
      momoScript.src =
        "https://www.momoyoga.com/schedule-plugin/v2/js/schedule.js";
      momoScript.crossOrigin = "anonymous";
      document.body.appendChild(momoScript);
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Momoyoga Schedule */}
      <div
        className="momoyoga-schedule w-full max-w-3xl mb-12"
        data-momo-schedule="https://www.momoyoga.com/offdaysyoga/schedule"
      ></div>

      {/* Packages Section */}
      <h3 className="text-2xl font-semibold mb-6">Class Packages & Pricing</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {packages.map((pkg, index) => (
          <a
            key={index}
            href={pkg.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 border-2 border-[var(--foreground)] rounded-xl shadow-lg 
                       hover:shadow-2xl transition-all flex flex-col items-center text-center
                       hover:bg-[var(--foreground)] hover:text-[var(--background)]"
          >
            <span className="text-xl font-bold">{pkg.name}</span>
            <span className="text-lg font-semibold mt-2">{pkg.price}</span>
            <span className="text-sm mt-1">{pkg.description}</span>
            <span className="text-sm text-gray-400 mt-2">
              Click to purchase
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};
