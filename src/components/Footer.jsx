import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-2 px-4 bg-card relative border-t border-border pt-2 flex flex-wrap justify-between items-center">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} WenLong.co. All rights reserved.
      </p>

      <button
        onClick={scrollToTop}
        className="p-2 rounded-full bg-primary/10 text-primary transition-colors
                   hover:bg-[var(--foreground)] hover:text-[var(--background)]"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};
