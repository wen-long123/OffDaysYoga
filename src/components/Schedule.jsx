import React from "react";
import { packages } from "../constants/Packages";

export const Schedule = () => {
  return (
    <div className="w-full flex flex-col items-center px-4">
      {/* Google Calendar Embed */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-5xl p-2 sm:p-4 bg-[var(--background)] border-4 border-[var(--foreground)] rounded-2xl shadow-xl">
          <iframe
            src="https://calendar.google.com/calendar/embed?height=500&wkst=1&ctz=Asia%2FSingapore&showPrint=0&showCalendars=0&title=OFFDAYS%20SCHEDULE&src=b2ZmZGF5c3lvZ2FAZ21haWwuY29t&src=ZW4uc2luZ2Fwb3JlI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039be5&color=%230b8043"
            style={{ border: "0", borderRadius: "10px" }}
            width="100%"
            height="500"
            frameBorder="0"
            scrolling="auto"
            title="Off Days Yoga Calendar"
          ></iframe>
        </div>
      </div>

      {/* Schedule Button */}
      <a
        href="https://www.momoyoga.com/offdaysyoga/schedule"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-12 mt-4 px-6 py-3 bg-[var(--foreground)] text-[var(--background)] font-semibold rounded-lg shadow-lg hover:opacity-90 transition"
      >
        Schedule with Us
      </a>

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
