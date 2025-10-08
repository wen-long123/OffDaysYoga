import { useState, useEffect } from "react";
import { Preload } from "../components/Preload";
import { Hero } from "../components/Hero";
import { AboutUs } from "../components/AboutUs";

export const Home = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    // Skip preloader if URL has #aboutus and NOT a page reload
    if (window.location.hash === "#aboutus" && !isReload) {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }, []);

  return (
    <>
      {!loaded && <Preload onFinish={() => setLoaded(true)} />}
      {loaded && (
        <main>
          <Hero />
          <AboutUs />
        </main>
      )}
    </>
  );
};
