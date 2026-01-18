import { useEffect, useState } from "react";
import preloadGif from "../assets/preload.gif"; // your GIF
import logo from "../assets/logo.png"; // your logo

export const Preload = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Show preload for the GIF duration (e.g., 3000ms)
    const timer = setTimeout(() => {
      setVisible(false);
      if (onFinish) onFinish();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    visible && (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-[var(--background)] text-[var(--foreground)] z-50">
        {/* GIF */}
        <img
          src={preloadGif}
          alt="OffDays Yoga Preload"
          className="w-24 h-24 mb-6"
        />

        {/* <h1 className="text-4xl font-bold font text-center"> OFFDAYS<br /> YOGA </h1> */}
        <img src={logo} alt="OffDays Yoga Logo" className="w-48 h-24 mb-6" />

        {/* Wave Text */}
        {/* <h1 className="text-4xl font-bold">
          {text.split("").map((char, i) => (
            <span
              key={i}
              className="animate-wave"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1> */}
      </div>
    )
  );
};
