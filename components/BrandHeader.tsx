import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useOrder } from "@/context/OrderContext";

export default function BrandHeader() {
  const { dispatch } = useOrder();
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-brand-dark/95 backdrop-blur-md border-b border-brand-gold/10 transition-all duration-300 ${isScrolled ? "shadow-lg shadow-black/50" : ""}`}>
      <div className={`max-w-7xl mx-auto px-4 flex items-center justify-between transition-all duration-300 ${isScrolled ? "h-16 md:h-20" : "h-24 md:h-28"}`}>
        {/* Mobile logo (flame icon only) */}
        <button
          className="flex items-center gap-2 py-2"
          onClick={() => {
            dispatch({ type: "RESET" });
            if (pathname !== "/") router.push("/");
          }}
        >
          <div className="block md:hidden">
            <Image
              src="/mobile-logo.png"
              alt="Jimmy's Chicken Shack"
              width={64}
              height={64}
              className={`object-contain transition-all duration-300 ${isScrolled ? "h-10 w-10" : "h-14 w-14"}`}
            />
          </div>
          {/* Web logo (full wordmark) */}
          <div className="hidden md:block">
            <Image
              src="/web-logo.png"
              alt="Jimmy's Chicken Shack"
              width={240}
              height={100}
              className={`object-contain w-auto transition-all duration-300 ${isScrolled ? "h-12" : "h-16 lg:h-20"}`}
              priority
            />
          </div>
        </button>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-6">
          {["Menu", "Find a Shack", "Rewards"].map((item) => (
            <button
              key={item}
              onClick={() => {
                if (item === "Menu") router.push("/menu");
              }}
              className="text-sm font-semibold text-brand-cream/70 hover:text-brand-gold transition-colors uppercase tracking-wider"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => {
              dispatch({ type: "GO_TO_STEP", step: "mood" });
              if (pathname !== "/") router.push("/");
            }}
            className="btn-shimmer text-brand-dark text-sm font-bold px-6 py-2.5 rounded-full uppercase tracking-wider transition-all hover:scale-105 active:scale-95"
          >
            Order Now
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className={`block h-0.5 w-6 bg-brand-gold transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-brand-gold transition-all ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-brand-gold transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-charcoal/98 border-t border-brand-gold/10 animate-fade-in">
          <div className="px-4 py-4 flex flex-col gap-3">
            {["View Menu", "Find a Shack", "Rewards"].map((item) => (
              <button
                key={item}
                className="text-left text-brand-cream/80 font-semibold py-2 border-b border-brand-gold/10 uppercase tracking-wider text-sm"
                onClick={() => {
                  if (item === "View Menu") router.push("/menu");
                  setMenuOpen(false);
                }}
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => {
                dispatch({ type: "GO_TO_STEP", step: "mood" });
                setMenuOpen(false);
                if (pathname !== "/") router.push("/");
              }}
              className="btn-shimmer text-brand-dark font-bold py-3 rounded-full uppercase tracking-wider mt-2 hover:opacity-90 active:scale-95"
            >
              Order Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
