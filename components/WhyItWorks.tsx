"use client";

const panels = [
  {
    icon: "🧠",
    title: "Why It Works",
    headline: "Science-backed. Stomach-approved.",
    body: "The average late-night customer stares at a menu for 4+ minutes before ordering. That's 4 minutes of choice overload when your brain is running at 20%. Late Night Quick Pick cuts through the noise with mood-based smart bundles — so you tap twice and eat.",
    stat: "4 min → 30 sec",
    statLabel: "Average ordering time",
  },
  {
    icon: "🌙",
    title: "Built for Late Night",
    headline: "Better for customers. Cleaner for crew.",
    body: "Quick Pick doesn't just speed up the customer experience — it standardizes orders for kitchen staff. No more half-heard requests at midnight. Curated bundles mean faster prep, fewer mistakes, and a crew that can actually keep up with the rush.",
    stat: "40% fewer",
    statLabel: "Order mistakes reported in pilots",
  },
];

export default function WhyItWorks() {
  return (
    <section className="py-16 px-4 bg-brand-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-brand-orange text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
            The Concept
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-white">
            Smart Ordering.{" "}
            <span className="text-brand-gold">Real Results.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {panels.map(({ icon, title, headline, body, stat, statLabel }) => (
            <div
              key={title}
              className="card-dark rounded-2xl p-7 group hover:border-brand-gold/30 transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">{icon}</div>
                <span className="text-brand-orange text-xs font-bold uppercase tracking-[0.15em]">
                  {title}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{headline}</h3>
              <p className="text-brand-cream/60 text-sm leading-relaxed mb-6">
                {body}
              </p>
              <div className="flex items-end gap-2 border-t border-brand-gold/10 pt-4">
                <span className="text-3xl font-black text-brand-gold">
                  {stat}
                </span>
                <span className="text-brand-cream/40 text-sm mb-0.5">
                  {statLabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
