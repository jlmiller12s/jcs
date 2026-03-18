"use client";
import { useState } from "react";
import { useOrder, Customizations } from "@/context/OrderContext";
import { CUSTOMIZATION_OPTIONS } from "@/lib/data";

export default function CustomizationSheet() {
  const { state, dispatch } = useOrder();
  const bundle = state.selectedBundle;

  const [form, setForm] = useState<Customizations>({
    spice: "Medium",
    side: "Seasoned Fries",
    drink: "Fountain Drink",
    sauces: ["House Sauce"],
    dessert: "None",
  });

  const toggleSauce = (sauce: string) => {
    setForm((prev) => ({
      ...prev,
      sauces: prev.sauces.includes(sauce)
        ? prev.sauces.filter((s) => s !== sauce)
        : [...prev.sauces, sauce],
    }));
  };

  const handleConfirm = () => {
    dispatch({ type: "SET_CUSTOMIZATIONS", customizations: form });
  };

  const handleBack = () => {
    dispatch({ type: "GO_TO_STEP", step: "recommend" });
  };

  if (!bundle) return null;

  return (
    <div className="min-h-screen bg-brand-dark pt-24 pb-0 step-container flex flex-col">
      {/* Header */}
      <div className="px-4 pt-6 pb-4 border-b border-brand-gold/10">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-brand-cream/50 hover:text-brand-gold transition-colors text-sm mb-4 group"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:-translate-x-0.5 transition-transform">
              <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Back to picks
          </button>
          <span className="text-brand-orange text-xs font-bold uppercase tracking-[0.2em] block mb-1">
            Step 3 of 3 · Customize
          </span>
          <h2 className="text-3xl font-black text-white">
            Make It <span className="text-brand-gold">Yours</span>
          </h2>
          <p className="text-brand-cream/50 text-sm mt-1">
            Customizing: <span className="text-brand-gold font-semibold">{bundle.name}</span>
          </p>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-2xl mx-auto space-y-7">
          {/* Spice level */}
          <Section title="🌶️ Spice Level">
            <div className="flex flex-wrap gap-2">
              {CUSTOMIZATION_OPTIONS.spiceLevels.map((level) => (
                <button
                  key={level}
                  onClick={() => setForm((p) => ({ ...p, spice: level }))}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 ${
                    form.spice === level
                      ? "bg-brand-red text-white shadow-[0_0_12px_rgba(212,43,43,0.5)]"
                      : "bg-brand-charcoal text-brand-cream/60 border border-brand-gold/10 hover:border-brand-gold/30"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </Section>

          {/* Side */}
          <Section title="🍟 Swap Your Side">
            <div className="grid grid-cols-2 gap-2">
              {CUSTOMIZATION_OPTIONS.sides.map((side) => (
                <button
                  key={side}
                  onClick={() => setForm((p) => ({ ...p, side }))}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold text-left transition-all hover:scale-[1.02] active:scale-95 ${
                    form.side === side
                      ? "bg-brand-orange/20 border border-brand-orange text-brand-gold"
                      : "bg-brand-charcoal text-brand-cream/60 border border-brand-gold/10 hover:border-brand-gold/25"
                  }`}
                >
                  {side}
                </button>
              ))}
            </div>
          </Section>

          {/* Drink */}
          <Section title="🥤 Pick Your Drink">
            <div className="grid grid-cols-2 gap-2">
              {CUSTOMIZATION_OPTIONS.drinks.map((drink) => (
                <button
                  key={drink}
                  onClick={() => setForm((p) => ({ ...p, drink }))}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold text-left transition-all hover:scale-[1.02] active:scale-95 ${
                    form.drink === drink
                      ? "bg-brand-orange/20 border border-brand-orange text-brand-gold"
                      : "bg-brand-charcoal text-brand-cream/60 border border-brand-gold/10 hover:border-brand-gold/25"
                  }`}
                >
                  {drink}
                </button>
              ))}
            </div>
          </Section>

          {/* Sauces (multi-select) */}
          <Section title="🍯 Add Sauce (Pick any)">
            <div className="flex flex-wrap gap-2">
              {CUSTOMIZATION_OPTIONS.sauces.map((sauce) => (
                <button
                  key={sauce}
                  onClick={() => toggleSauce(sauce)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 ${
                    form.sauces.includes(sauce)
                      ? "bg-brand-gold text-brand-dark shadow-[0_0_10px_rgba(240,172,60,0.4)]"
                      : "bg-brand-charcoal text-brand-cream/60 border border-brand-gold/10 hover:border-brand-gold/30"
                  }`}
                >
                  {sauce}
                </button>
              ))}
            </div>
          </Section>

          {/* Dessert */}
          <Section title="🍰 Add Dessert">
            <div className="grid grid-cols-2 gap-2 pb-2">
              {CUSTOMIZATION_OPTIONS.desserts.map((dessert) => (
                <button
                  key={dessert}
                  onClick={() => setForm((p) => ({ ...p, dessert }))}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold text-left transition-all hover:scale-[1.02] active:scale-95 ${
                    form.dessert === dessert
                      ? "bg-brand-orange/20 border border-brand-orange text-brand-gold"
                      : "bg-brand-charcoal text-brand-cream/60 border border-brand-gold/10 hover:border-brand-gold/25"
                  }`}
                >
                  {dessert}
                </button>
              ))}
            </div>
          </Section>
        </div>
      </div>

      {/* Sticky bottom CTA */}
      <div className="sticky bottom-0 bg-brand-dark/95 backdrop-blur-md border-t border-brand-gold/10 px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={handleConfirm}
            className="w-full btn-shimmer text-brand-dark font-black text-lg py-4 rounded-2xl uppercase tracking-wide hover:scale-[1.01] active:scale-[0.99] transition-transform shadow-lg"
            id="confirm-customization"
          >
            Confirm & Review Order →
          </button>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-brand-cream/50 mb-3">
        {title}
      </h3>
      {children}
    </div>
  );
}
