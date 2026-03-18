"use client";
import { useOrder } from "@/context/OrderContext";
import { useRouter, usePathname } from "next/navigation";
const NAV_ITEMS = [
  { icon: "🏠", label: "Home", step: "landing" as const },
  { icon: "📋", label: "Menu", step: null },
  { icon: "⭐", label: "Rewards", step: null },
  { icon: "🛒", label: "Order", step: "mood" as const },
];

export default function FooterNav() {
  const { state, dispatch } = useOrder();
  const router = useRouter();
  const pathname = usePathname();

  // Only show on landing step or menu page
  if (state.currentStep !== "landing" && pathname !== "/menu") return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-brand-charcoal/95 backdrop-blur-md border-t border-brand-gold/15">
      <div className="grid grid-cols-4 h-16">
        {NAV_ITEMS.map(({ icon, label, step }) => {
          const isActive = 
            (step && state.currentStep === step && pathname === "/") || 
            (label === "Menu" && pathname === "/menu");
            
          return (
            <button
              key={label}
              onClick={() => {
                if (label === "Menu") {
                  router.push("/menu");
                } else if (label === "Home") {
                  dispatch({ type: "RESET" });
                  router.push("/");
                } else if (step) {
                  dispatch({ type: "GO_TO_STEP", step });
                  if (pathname !== "/") router.push("/");
                }
              }}
              className={`flex flex-col items-center justify-center gap-0.5 transition-all active:scale-95 ${
                isActive ? "text-brand-gold" : "text-brand-cream/40 hover:text-brand-cream/70"
              }`}
            >
              <span className="text-xl">{icon}</span>
              <span className="text-[10px] font-bold uppercase tracking-wider">
                {label}
              </span>
              {isActive && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-brand-gold rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
