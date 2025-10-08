import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

export const ContactBtn = () => {
  const [bottomOffset, setBottomOffset] = useState(24); // default 24px

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.body.offsetHeight - 100; // 100px from bottom
      if (scrollPosition >= threshold) {
        setBottomOffset(80); // move up 80px to avoid footer button
      } else {
        setBottomOffset(24); // default
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Link
      to="/contactpage"
      className="fixed right-6 z-50 flex items-center justify-center p-4 rounded-full
                 bg-primary/10 text-primary border-2 border-primary shadow-lg
                 hover:bg-[var(--foreground)] hover:text-[var(--background)]
                 transition-all duration-300"
      style={{ bottom: `${bottomOffset}px` }}
    >
      <Phone size={20} />
    </Link>
  );
};
