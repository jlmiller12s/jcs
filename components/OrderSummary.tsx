"use client";
import { useOrder } from "@/context/OrderContext";
import { TAX_RATE, MOCK_PICKUP } from "@/lib/data";

export default function OrderSummary() {
  const { state, dispatch } = useOrder();
  const { selectedBundle, customizations, selectedMood } = state;

  if (!selectedBundle || !customizations) return null;

  const subtotal = selectedBundle.price;
  // Add $2 for shake upgrade if selected
  const drinkUpcharge = customizations.drink.includes("+$2") ? 2 : 0;
  const dessertUpcharge =
    customizations.dessert && customizations.dessert.includes("+$2")
      ? 2
      : 0;
  const adjustedSubtotal = subtotal + drinkUpcharge + dessertUpcharge;
  const tax = adjustedSubtotal * TAX_RATE;
  const total = adjustedSubtotal + tax;

  return (
    <div className="min-h-screen bg-brand-dark pt-24 pb-0 step-container flex flex-col">
      {/* Header */}
      <div className="px-4 py-6 border-b border-brand-gold/10">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => dispatch({ type: "GO_TO_STEP", step: "customize" })}
            className="flex items-center gap-2 text-brand-cream/50 hover:text-brand-gold transition-colors text-sm mb-4 group"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:-translate-x-0.5 transition-transform">
              <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Edit customizations
          </button>
          <h2 className="text-3xl font-black text-white uppercase">
            Order <span className="text-brand-gold">Summary</span>
          </h2>
          <p className="text-brand-cream/50 text-sm mt-1">
            Review before you commit
          </p>
        </div>
      </div>

      {/* Order details */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-2xl mx-auto space-y-4">
          {/* Bundle summary card */}
          <div className="card-dark rounded-2xl p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-brand-orange text-xs font-bold uppercase tracking-wider mb-1">
                  {selectedMood?.emoji} {selectedMood?.title} Pick
                </p>
                <h3 className="text-xl font-black text-white">
                  {selectedBundle.name}
                </h3>
              </div>
              <span className="text-brand-gold font-black text-xl">
                ${selectedBundle.price.toFixed(2)}
              </span>
            </div>
            <ul className="space-y-1.5">
              {selectedBundle.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-brand-cream/60">
                  <span className="text-brand-orange text-xs">◆</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Customizations card */}
          <div className="card-dark rounded-2xl p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-cream/40 mb-3">
              Your Customizations
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <CustomRow label="Spice" value={customizations.spice} />
              <CustomRow label="Side" value={customizations.side} />
              <CustomRow label="Drink" value={customizations.drink} />
              <CustomRow label="Dessert" value={customizations.dessert} />
            </div>
            {customizations.sauces.length > 0 && (
              <div className="mt-2 pt-2 border-t border-brand-gold/10">
                <span className="text-brand-cream/40 text-xs">Sauces: </span>
                <span className="text-brand-cream/80 text-sm">
                  {customizations.sauces.join(", ")}
                </span>
              </div>
            )}
          </div>

          {/* Pickup + Time */}
          <div className="card-dark rounded-2xl p-5 flex items-center justify-between">
            <div>
              <p className="text-brand-cream/40 text-xs uppercase tracking-wider mb-1">
                Pickup Method
              </p>
              <p className="text-white font-bold">{MOCK_PICKUP}</p>
            </div>
            <div className="text-right">
              <p className="text-brand-cream/40 text-xs uppercase tracking-wider mb-1">
                Est. Ready In
              </p>
              <p className="text-brand-gold font-bold">
                {selectedBundle.estimatedTime}–{selectedBundle.estimatedTime + 3} min
              </p>
            </div>
          </div>

          {/* Pricing breakdown */}
          <div className="card-dark rounded-2xl p-5">
            <div className="space-y-2 text-sm">
              <PriceRow label="Subtotal" value={adjustedSubtotal} />
              <PriceRow label={`Tax (${(TAX_RATE * 100).toFixed(1)}%)`} value={tax} />
              <div className="border-t border-brand-gold/20 mt-3 pt-3 flex items-center justify-between">
                <span className="text-white font-black text-lg uppercase">Total</span>
                <span className="text-brand-gold font-black text-2xl">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky CTA */}
      <div className="sticky bottom-0 bg-brand-dark/95 backdrop-blur-md border-t border-brand-gold/10 px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => dispatch({ type: "PLACE_ORDER" })}
            className="w-full bg-brand-red hover:bg-brand-red/90 text-white font-black text-lg py-4 rounded-2xl uppercase tracking-wide hover:scale-[1.01] active:scale-[0.99] transition-all shadow-[0_0_20px_rgba(212,43,43,0.4)] animate-flame-pulse"
            id="place-order-btn"
          >
            Place Mock Order 🍗
          </button>
          <p className="text-center text-brand-cream/30 text-xs mt-2">
            No real payment. This is a prototype experience.
          </p>
        </div>
      </div>
    </div>
  );
}

function CustomRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="text-brand-cream/40 text-xs block">{label}</span>
      <span className="text-brand-cream/80 font-semibold">{value}</span>
    </div>
  );
}

function PriceRow({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-brand-cream/60">{label}</span>
      <span className="text-brand-cream/80">${value.toFixed(2)}</span>
    </div>
  );
}
