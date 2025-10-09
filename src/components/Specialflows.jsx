import { useState, useEffect } from "react";
import { Instagram } from "lucide-react";
import { SpecialFlowsData } from "../constants/Specialflow";

export const SpecialFlows = () => {
  const today = new Date();
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  // Detect screen size (≤ 1024px = mobile/tablet)
  useEffect(() => {
    const checkDevice = () => setIsMobileOrTablet(window.innerWidth <= 1200);
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return (
    <section className="min-h-screen px-6 py-16 bg-[var(--background)] text-[var(--foreground)]">
      <h2 className="text-4xl font-bold mb-4 text-center mt-6">
        Special Flows
      </h2>
      <h3 className="text-2xl font-semibold mb-8 text-center">
        Our ongoing and past workshops
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[250px] gap-6">
        {SpecialFlowsData.map((flow, index) => {
          const isOngoing = new Date(flow.date) >= today;
          const isExpanded = expandedIndex === index;

          return (
            <div
              key={index}
              className={`relative group rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 ${flow.size}`}
            >
              {/* Label */}
              <span
                className={`absolute top-3 left-3 px-2 py-1 text-xs font-semibold rounded z-10 ${
                  isOngoing
                    ? "bg-green-500 text-white"
                    : "bg-gray-400 text-white"
                }`}
              >
                {isOngoing ? "Upcoming" : "Past"}
              </span>

              {/* Image */}
              <img
                src={flow.image}
                alt={flow.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                style={{
                  objectPosition:
                    flow.title === "Pop-up: Zen & Her" ? "50% 15%" : "center",
                }}
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-black/40 flex flex-col justify-between p-4 transition-opacity duration-500
                  xl:opacity-0 xl:group-hover:opacity-100
                  ${isExpanded ? "opacity-100" : "opacity-0"}
                `}
              >
                {/* Instagram icon for mobile + tablet expanded overlay */}
                {isExpanded && (
                  <a
                    href={flow.igLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 text-white hover:text-pink-400 transition-colors xl:hidden"
                  >
                    <Instagram size={20} />
                  </a>
                )}

                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1 mt-10">
                    {flow.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-200">
                    {new Date(flow.date).toLocaleDateString("en-GB")}
                  </p>
                  <p className="text-gray-100 text-xs md:text-sm mt-2 line-clamp-3">
                    {flow.description}
                  </p>
                </div>

                {/* Instagram icon for large screens */}
                <a
                  href={flow.igLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 self-end text-white hover:text-pink-400 transition-colors hidden lg:inline-flex"
                >
                  <Instagram size={20} />
                </a>
              </div>

              {/* Show Read More button only on mobile/tablet */}
              {isMobileOrTablet && (
                <button
                  className="absolute bottom-3 right-3 px-2 py-1 text-xs font-semibold rounded bg-[var(--primary)] text-white shadow hover:bg-[var(--primary)]/90 transition-colors"
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                >
                  {isExpanded ? "Close" : "Read More"}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
