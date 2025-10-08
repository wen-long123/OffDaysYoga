import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10 space-y-6">

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight opacity-0 animate-fade-in-delay-1">
          OffDays Yoga Studio
        </h1>

        {/* Subtitle with gradient flow */}
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-0 animate-fade-in-2-and-text-flow text-flow">
          Your cozy escape to unwind, recharge, and find your flow.
        </p>

        {/* View button */}
        <div className="pt-4 opacity-0 animate-fade-in-delay-3">
          <a href="/guides-flows" className="pulsating-btn">
            Find Your Flow
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-[var(--foreground)] mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-[var(--foreground)]" />
      </div>
    </section>
  );
};
