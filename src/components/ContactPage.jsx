import { Mail, MessageCircle, Instagram, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xrbyzggo", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description:
            "Thank you for reaching out. We'll get back to you soon.",
          variant: "success",
        });
        e.target.reset();
      } else {
        const data = await response.json();
        toast({
          title: "Oops! Something went wrong.",
          description: data.error || "Failed to send message.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network error",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-4 sm:py-20 sm:px-6 lg:py-24 lg:px-8 bg-secondary/30 min-h-screen">
      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6">
          Know Your <span className="text-primary">Flow</span>
        </h1>
        <p className="text-center text-muted-foreground mb-8 sm:mb-12 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base">
          Email us for more information and inquiries — or join our community!
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {/* Left Column - Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-center md:text-center">
              Connect with us
            </h2>

            <a
              href="mailto:Offdaysyoga@outlook.com"
              className="p-4 sm:p-5 rounded-lg bg-card border border-border 
                         flex items-center space-x-4 sm:space-x-5 transition-colors
                         hover:bg-[var(--foreground)] hover:text-[var(--background)]"
            >
              <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              <div>
                <h4 className="font-semibold text-sm sm:text-base">Email</h4>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Offdaysyoga@outlook.com
                </p>
              </div>
            </a>

            <a
              href="https://t.me/offdaysyoga"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 sm:p-5 rounded-lg bg-card border border-border 
                         flex items-center space-x-4 sm:space-x-5 transition-colors
                         hover:bg-[var(--foreground)] hover:text-[var(--background)]"
            >
              <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              <div>
                <h4 className="font-semibold text-sm sm:text-base">Telegram</h4>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Join our community
                </p>
              </div>
            </a>

            <a
              href="https://www.instagram.com/offdays.yoga"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 sm:p-5 rounded-lg bg-card border border-border 
                         flex items-center space-x-4 sm:space-x-5 transition-colors
                         hover:bg-[var(--foreground)] hover:text-[var(--background)]"
            >
              <Instagram className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              <div>
                <h4 className="font-semibold text-sm sm:text-base">
                  Instagram
                </h4>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Follow us on IG
                </p>
              </div>
            </a>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-card p-6 sm:p-8 rounded-lg shadow-xs border border-border">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
              Send a Message
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 sm:space-y-6"
              noValidate
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm sm:text-base font-medium mb-1 sm:mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-input bg-background
                             focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
                  placeholder="Your name..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm sm:text-base font-medium mb-1 sm:mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-input bg-background
                             focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm sm:text-base font-medium mb-1 sm:mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-input bg-background
                             focus:outline-none focus:ring-2 focus:ring-primary resize-none text-sm sm:text-base"
                  placeholder="Write your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full flex items-center justify-center gap-2 px-4 py-2 sm:py-3 rounded-md",
                  "bg-primary/10 text-primary border border-input transition-colors",
                  "hover:bg-[var(--foreground)] hover:text-[var(--background)] text-sm sm:text-base"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
