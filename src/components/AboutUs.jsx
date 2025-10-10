import aboutus1 from "../assets/aboutus/aboutus1.png";
import aboutus2 from "../assets/aboutus/aboutus2.png";
import aboutus3 from "../assets/aboutus/aboutus3.png";

export const AboutUs = () => {
  return (
    <section
      id="aboutus"
      className="py-24 relative min-h-screen flex flex-col items-center justify-center px-4 scroll-mt-14"
    >
      <div className="container mx-auto">
        {/* ---------------- Our Mission ---------------- */}
        <div className="mb-16">
          {/* Desktop layout */}
          <div className="hidden md:flex items-center justify-center gap-6">
            <img
              src={aboutus1}
              alt="Mission Left"
              className="w-1/4 max-h-64 object-contain"
            />

            <div className="w-1/2 text-center px-6">
              <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">
                Our Mission
              </h2>
              <p className="text-[var(--foreground)] text-lg leading-relaxed">
                We created this cozy and humble yoga studio as a space where
                everyone—from beginners to advanced practitioners—can feel at
                home in their practice. Our mission is to provide a comfortable,
                affordable sanctuary to relax, recharge, and challenge yourself
                at your own pace. With a variety of classes for all levels,
                every session at Off Days feels like a well-deserved
                break—perfect for unwinding and resetting.
              </p>
            </div>

            <img
              src={aboutus2}
              alt="Mission Right"
              className="w-1/4 max-h-64 object-contain"
            />
          </div>

          {/* Mobile layout */}
          <div className="md:hidden relative">
            <div className="grid grid-cols-2 gap-2">
              <img
                src={aboutus1}
                alt="Mission Left"
                className="w-full max-h-40 object-contain"
              />
              <img
                src={aboutus2}
                alt="Mission Right"
                className="w-full max-h-40 object-contain"
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div className="bg-[var(--background)]/80 text-center max-w-xs">
                <h2 className="text-2xl font-bold mb-2 text-[var(--foreground)]">
                  Our Mission
                </h2>
                <p className="text-[var(--foreground)] text-sm leading-relaxed">
                  We created this cozy and humble yoga studio as a space where
                  everyone—from beginners to advanced practitioners—can feel at
                  home in their practice. Our mission is to provide a
                  comfortable, affordable sanctuary to relax, recharge, and
                  challenge yourself at your own pace. With a variety of classes
                  for all levels, every session at Off Days feels like a
                  well-deserved break—perfect for unwinding and resetting.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- Cofounder Section ---------------- */}
        <div>
          {/* Desktop layout */}
          <div className="hidden md:flex items-center justify-center gap-6">
            <img
              src={aboutus3}
              alt="Cofounder"
              className="w-1/2 max-h-[32rem] object-contain transition-transform duration-300 ease-in-out hover:scale-105"
            />

            <div className="w-1/2 text-left px-1">
              <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">
                Meet Our Cofounders
              </h2>
              <p className="text-[var(--foreground)] text-lg leading-relaxed">
                Hi! We are Celyne and Ethel, co-founders of OffDays Yoga. We
                created OffDays Yoga to be a cozy and welcoming space for
                everyone, from beginners to advanced practitioners. Our mission
                is to provide an affordable and comfortable environment where
                you can relax, recharge, and challenge yourself. With classes
                for all levels, every session feels like an off day—perfect for
                unwinding and resetting.
              </p>
            </div>
          </div>

          {/* Mobile layout */}
          <div className="md:hidden relative mt-12">
            <div className="grid grid-cols-1 gap-2">
              <img
                src={aboutus3}
                alt="Cofounder"
                className="w-full max-h-[28rem] object-contain -translate-y-6"
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div className="bg-[var(--background)]/80 text-center max-w-xs">
                <h2 className="text-2xl font-bold mb-2 text-[var(--foreground)]">
                  Meet Our Cofounders
                </h2>
                <p className="text-[var(--foreground)] text-sm leading-relaxed">
                  Hi! We are Celyne and Ethel, co-founders of OffDays Yoga. We
                  created OffDays Yoga to be a cozy and welcoming space for
                  everyone, from beginners to advanced practitioners. Our
                  mission is to provide an affordable and comfortable
                  environment where you can relax, recharge, and challenge
                  yourself. With classes for all levels, every session feels
                  like an off day—perfect for unwinding and resetting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
