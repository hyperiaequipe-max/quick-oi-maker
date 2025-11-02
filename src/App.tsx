import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Hero from "@/components/home/hero";
import Features from "@/components/features";
import { PricingSection } from "@/components/pricing-section";
import { TestimonialsSection } from "@/components/testimonials";
import { FAQSection } from "@/components/faq-section";
import { StickyFooter } from "@/components/sticky-footer";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileNavClick = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background">
      {/* Desktop Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg" />
              <span className="text-xl font-bold">Check In-IA</span>
            </div>

            <div className="flex items-center space-x-8">
              <a
                href="#features"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("features")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                Recursos
              </a>
              <a
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("pricing")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                Como Funciona
              </a>
              <a
                href="#testimonials"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("testimonials")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                Depoimentos
              </a>
              <a
                href="#faq"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("faq")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                FAQ
              </a>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm hover:bg-primary/90 transition-colors">
                Começar Agora
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 md:hidden transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg" />
              <span className="text-xl font-bold">Check In-IA</span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-accent rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-background/95 backdrop-blur-md"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative h-full flex flex-col items-center justify-center space-y-8">
            <a
              href="#features"
              onClick={(e) => {
                e.preventDefault();
                handleMobileNavClick("features");
              }}
              className="text-2xl font-semibold hover:text-primary transition-colors"
            >
              Recursos
            </a>
            <a
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                handleMobileNavClick("pricing");
              }}
              className="text-2xl font-semibold hover:text-primary transition-colors"
            >
              Como Funciona
            </a>
            <a
              href="#testimonials"
              onClick={(e) => {
                e.preventDefault();
                handleMobileNavClick("testimonials");
              }}
              className="text-2xl font-semibold hover:text-primary transition-colors"
            >
              Depoimentos
            </a>
            <a
              href="#faq"
              onClick={(e) => {
                e.preventDefault();
                handleMobileNavClick("faq");
              }}
              className="text-2xl font-semibold hover:text-primary transition-colors"
            >
              FAQ
            </a>
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg text-lg hover:bg-primary/90 transition-colors">
              Começar Agora
            </button>
          </div>
        </div>
      )}

      <main>
        <Hero />
        <Features />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
      </main>

      <StickyFooter />
    </div>
  );
}
