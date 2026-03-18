"use client";
import { useOrder } from "@/context/OrderContext";
import { MOODS, Mood } from "@/lib/data";

export default function MoodSelector() {
  const { state, dispatch } = useOrder();

  const handleSelect = (mood: Mood) => {
    dispatch({ type: "SET_MOOD", mood });
  };

  return (
    <div className="min-h-screen bg-brand-dark pt-28 pb-24 px-4 step-container">
      {/* Header */}
      <div className="text-center mb-8 pt-4">
        <span className="text-brand-orange text-xs font-bold uppercase tracking-[0.2em] block mb-2">
          Step 1 of 3
        </span>
        <h2 className="text-4xl sm:text-5xl font-black uppercase text-white mb-3 leading-tight">
          What Are You{" "}
          <span className="text-brand-gold">Feeling?</span>
        </h2>
        <p className="text-brand-cream/50 text-base">
          Pick your vibe. We'll handle the rest.
        </p>
      </div>

      {/* Mood grid */}
      <div className="max-w-2xl mx-auto grid grid-cols-2 gap-3 sm:gap-4">
        {MOODS.map((mood) => {
          const isSelected = state.selectedMood?.id === mood.id;
          return (
            <button
              key={mood.id}
              onClick={() => handleSelect(mood)}
              className={`
                relative rounded-2xl p-5 text-left transition-all duration-200
                active:scale-95 hover:scale-[1.02] hover:-translate-y-0.5
                ${
                  isSelected
                    ? "bg-brand-orange/20 border-2 border-brand-orange shadow-[0_0_20px_rgba(232,90,27,0.4)] scale-[1.02]"
                    : "card-dark border border-brand-gold/10 hover:border-brand-gold/25"
                }
              `}
              id={`mood-${mood.id}`}
            >
              {/* Selected check */}
              {isSelected && (
                <div className="absolute top-3 right-3 w-5 h-5 bg-brand-orange rounded-full flex items-center justify-center">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path
                      d="M1 4L3.5 6.5L9 1"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              )}

              {/* Emoji */}
              <div className="text-3xl mb-2">{mood.emoji}</div>

              {/* Title */}
              <h3
                className={`font-black text-base leading-tight mb-1 ${
                  isSelected ? "text-brand-gold" : "text-white"
                }`}
              >
                {mood.title}
              </h3>

              {/* Subtitle */}
              <p className="text-brand-cream/50 text-xs leading-snug">
                {mood.subtitle}
              </p>
            </button>
          );
        })}
      </div>

      {/* Back link */}
      <div className="text-center mt-8">
        <button
          onClick={() => dispatch({ type: "GO_TO_STEP", step: "landing" })}
          className="text-brand-cream/40 text-sm hover:text-brand-cream/70 transition-colors"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}
