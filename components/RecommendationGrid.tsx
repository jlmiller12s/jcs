"use client";
import { useOrder } from "@/context/OrderContext";
import { BUNDLES } from "@/lib/data";
import BundleCard from "./BundleCard";

export default function RecommendationGrid() {
  const { state, dispatch } = useOrder();
  const mood = state.selectedMood;
  const bundles = mood ? BUNDLES[mood.id] || [] : [];

  return (
    <div className="min-h-screen bg-brand-dark pt-28 pb-24 px-4 step-container">
      {/* Header */}
      <div className="max-w-2xl mx-auto pt-4">
        <button
          onClick={() => dispatch({ type: "GO_TO_STEP", step: "mood" })}
          className="flex items-center gap-2 text-brand-cream/50 hover:text-brand-gold transition-colors text-sm mb-6 group"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="group-hover:-translate-x-0.5 transition-transform"
          >
            <path
              d="M10 3L5 8L10 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          Change mood
        </button>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{mood?.emoji}</span>
            <span className="text-brand-orange text-xs font-bold uppercase tracking-[0.2em]">
              {mood?.title} Mode · Step 2 of 3
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black uppercase text-white leading-tight">
            Your <span className="text-brand-gold">Picks</span>
          </h2>
          <p className="text-brand-cream/50 text-base mt-2">
            Curated for the vibe. Tap one to customize.
          </p>
        </div>

        {/* Bundle cards */}
        <div className="grid grid-cols-1 gap-4">
          {bundles.map((bundle) => (
            <BundleCard key={bundle.id} bundle={bundle} />
          ))}
        </div>

        {/* Not feeling it? */}
        <div className="text-center mt-8 pb-4">
          <button
            onClick={() => dispatch({ type: "GO_TO_STEP", step: "mood" })}
            className="text-brand-cream/40 text-sm hover:text-brand-gold transition-colors"
          >
            Not feeling these? Try a different mood →
          </button>
        </div>
      </div>
    </div>
  );
}
