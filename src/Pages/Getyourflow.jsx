import { Schedule } from "../components/Schedule";

export const Getyourflow = () => {
  return (
    <section className="min-h-screen px-6 py-16 bg-[var(--background)] text-[var(--foreground)] mt-8">
      <h1 className="text-4xl font-bold text-center mb-4">Get Your Flow</h1>
      <h2 className="text-center text-[var(--foreground)] mb-4 max-w-2xl mx-auto font-semibold">
        Check out our upcoming classes below. Click on any slot to see details
        and book your flow!
      </h2>

      {/* Timetable */}
      <div className="mb-16">
        <Schedule />
      </div>
    </section>
  );
};
