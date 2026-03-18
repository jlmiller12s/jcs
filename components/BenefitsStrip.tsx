"use client";

const benefits = [
  {
    icon: "⚡",
    text: "Feed your cravings fast",
    sub: "From tap to ready in minutes",
  },
  {
    icon: "🧠",
    text: "Skip the menu overload",
    sub: "We pick the best options for you",
  },
  {
    icon: "🌙",
    text: "Built for late night runs",
    sub: "Designed when hunger hits hardest",
  },
];

export default function BenefitsStrip() {
  return (
    <section className="relative bg-brand-charcoal/80 border-y border-brand-gold/10 py-10 overflow-hidden">
      {/* Subtle gold top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />

      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {benefits.map(({ icon, text, sub }) => (
            <div
              key={text}
              className="flex flex-col items-center text-center group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {icon}
              </div>
              <h3 className="text-brand-gold font-bold text-lg mb-1">{text}</h3>
              <p className="text-brand-cream/50 text-sm">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
