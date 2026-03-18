"use client";
import { useEffect, useState } from "react";
import { useOrder } from "@/context/OrderContext";

export default function ConfirmationScreen() {
  const { state, dispatch } = useOrder();
  const [readyTime, setReadyTime] = useState("");

  useEffect(() => {
    const now = new Date();
    now.setMinutes(now.getMinutes() + 10);
    const h = now.getHours() % 12 || 12;
    const m = now.getMinutes().toString().padStart(2, "0");
    const ampm = now.getHours() >= 12 ? "PM" : "AM";
    setReadyTime(`${h}:${m} ${ampm}`);
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark flex flex-col items-center justify-center px-4 py-16 step-container relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-red/10 blur-[100px]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-brand-orange/8 blur-[80px]" />
      </div>

      <div className="relative z-10 text-center max-w-sm mx-auto">
        {/* Flame icon */}
        <div className="text-7xl mb-4 animate-float">🔥</div>

        {/* Order placed headline */}
        <h1 className="text-4xl sm:text-5xl font-black uppercase text-white mb-2 leading-tight">
          Order <span className="text-brand-gold">Placed!</span>
        </h1>

        {/* Brand line */}
        <p className="text-brand-orange font-bold text-lg mb-8">
          Your late night fix is on the way.
        </p>

        {/* Order details card */}
        <div className="card-dark rounded-2xl p-6 mb-8 text-left space-y-4">
          {/* Order number */}
          <div className="flex items-center justify-between">
            <span className="text-brand-cream/40 text-sm uppercase tracking-wider">
              Order #
            </span>
            <span className="text-brand-gold font-black text-xl">
              {state.orderId}
            </span>
          </div>

          {/* Bundle */}
          <div className="flex items-center justify-between">
            <span className="text-brand-cream/40 text-sm uppercase tracking-wider">
              Order
            </span>
            <span className="text-white font-bold text-sm text-right max-w-[60%]">
              {state.selectedBundle?.name}
            </span>
          </div>

          {/* Pickup */}
          <div className="flex items-center justify-between">
            <span className="text-brand-cream/40 text-sm uppercase tracking-wider">
              Pickup
            </span>
            <span className="text-white font-bold">Counter Pickup</span>
          </div>

          {/* Ready time */}
          <div className="flex items-center justify-between pt-3 border-t border-brand-gold/15">
            <span className="text-brand-cream/40 text-sm uppercase tracking-wider">
              Est. Ready
            </span>
            <div className="text-right">
              <span className="text-brand-gold font-black text-2xl">{readyTime}</span>
              <p className="text-brand-cream/30 text-xs">~10 minutes</p>
            </div>
          </div>
        </div>

        {/* Progress pill */}
        <div className="flex items-center gap-2 bg-brand-charcoal/60 rounded-full px-4 py-2.5 mb-8 justify-center">
          <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
          <span className="text-brand-cream/70 text-sm font-semibold">
            Kitchen is cranking 🔥
          </span>
        </div>

        {/* Start new order */}
        <button
          onClick={() => dispatch({ type: "RESET" })}
          className="w-full btn-shimmer text-brand-dark font-black text-lg py-4 rounded-2xl uppercase tracking-wide hover:scale-[1.01] active:scale-[0.99] transition-transform shadow-lg"
          id="start-new-order"
        >
          Start New Order
        </button>

        <p className="text-brand-cream/30 text-xs mt-4">
          Jimmy&apos;s Chicken Shack — Real food. No waiting.
        </p>
      </div>
    </div>
  );
}
