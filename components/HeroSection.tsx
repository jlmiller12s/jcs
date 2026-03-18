"use client";
import Image from "next/image";
import { useOrder } from "@/context/OrderContext";

export default function HeroSection() {
  const { dispatch } = useOrder();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-28 pb-10 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-brand-dark">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-orange/10 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-brand-red/8 blur-[80px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full bg-brand-gold/6 blur-[80px] pointer-events-none" />
      </div>

      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(240,172,60,0.1) 2px, rgba(240,172,60,0.1) 4px)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
        {/* Late Night badge */}
        <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/40 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
          <span className="text-brand-red text-xs font-bold uppercase tracking-[0.2em]">
            🔥 Now Taking Orders
          </span>
        </div>

        {/* Hero Logo */}
        <div className="animate-float mb-6">
          <Image
            src="/hero-logo.png"
            alt="Jimmy's Chicken Shack"
            width={320}
            height={320}
            className="object-contain w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 drop-shadow-[0_0_40px_rgba(232,90,27,0.5)]"
            priority
          />
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase leading-none mb-3 tracking-tight">
          <span className="text-brand-gold text-shadow-gold">Late Night</span>
          <br />
          <span className="text-white">Quick Pick</span>
        </h1>

        {/* Subhead */}
        <p className="text-brand-cream/70 text-lg sm:text-xl font-medium mb-10 max-w-md">
          Fast guided ordering for late night cravings.{" "}
          <span className="text-brand-gold font-semibold">
            Less scrolling. More eating.
          </span>
        </p>

        {/* Primary CTA */}
        <button
          onClick={() => dispatch({ type: "GO_TO_STEP", step: "mood" })}
          className="btn-shimmer animate-flame-pulse text-brand-dark font-black text-xl px-12 py-5 rounded-full uppercase tracking-wider shadow-2xl hover:scale-105 active:scale-95 transition-transform mb-5 w-full sm:w-auto"
          id="start-order-cta"
        >
          Start Your Order 🍗
        </button>

        {/* Secondary links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          {[
            { label: "View Menu", icon: "📋" },
            { label: "Find a Shack", icon: "📍" },
            { label: "Rewards", icon: "⭐" },
          ].map(({ label, icon }) => (
            <button
              key={label}
              className="flex items-center gap-1.5 text-brand-cream/60 hover:text-brand-gold transition-colors font-semibold group"
            >
              <span>{icon}</span>
              <span className="group-hover:underline underline-offset-2">
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 animate-bounce">
        <span className="text-xs text-brand-gold uppercase tracking-widest">Scroll</span>
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
          <path d="M1 1L8 8L15 1" stroke="#f0ac3c" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  );
}
