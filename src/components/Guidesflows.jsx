import Flowcarousel from "./Flowcarousel";
import trainer1 from "../assets/Trainers/Celyne.jpg";
import trainer2 from "../assets/Trainers/Ethel.jpg";

export const Guidesflows = () => {
  return (
    <section className="min-h-screen px-8 py-16 bg-[var(--background)] text-[var(--foreground)] text-center">
      {/* Section Title */}
      <h1 className="text-4xl font-bold mb-6 mt-10">Find Your Flow</h1>
      <p className="max-w-2xl mx-auto text-[var(--foreground)] mb-6">
        Not all flows are the same — whether you’re here to sweat, stretch, or
        simply vibe, we’ve got a class for you.
      </p>

      {/* Carousel */}
      <Flowcarousel autoplay pauseOnHover />

      {/* Book button */}
      <div className="pt-4 opacity-0 animate-fade-in-delay-1 mt-6">
        <a href="/getyourflow" className="pulsating-btn">
          Book Your Flow
        </a>
      </div>

      {/* Guides Display */}
      <h1 className="text-4xl font-bold mb-6 mt-10">Flow with Us</h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">
        {/* Trainer 1 */}
        <div className="w-full max-w-sm md:max-w-md lg:max-w-lg aspect-[2.8/3]">
          <img
            src={trainer1}
            alt="Trainer 1"
            className="w-full h-full object-cover rounded-xl shadow-lg border border-[var(--foreground)]/20
            transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:border-[var(--primary)]"
          />
        </div>

        {/* Trainer 2 */}
        <div className="w-full max-w-sm md:max-w-md lg:max-w-lg aspect-[2.8/3]">
          <img
            src={trainer2}
            alt="Trainer 2"
            className="w-full h-full object-cover rounded-xl shadow-lg border border-[var(--foreground)]/20
            transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:border-[var(--primary)]"
          />
        </div>
      </div>
    </section>
  );
};
