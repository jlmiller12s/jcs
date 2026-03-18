"use client";
import { Bundle } from "@/lib/data";
import Image from "next/image";
import { useOrder } from "@/context/OrderContext";

const TAG_CLASSES: Record<string, string> = {
  Fastest: "tag-fastest",
  "Fan Favorite": "tag-fan-favorite",
  "Best Deal": "tag-best-deal",
  "Protein Pick": "tag-protein-pick",
  "Sweet Pick": "tag-sweet-pick",
  "Car Ready": "tag-car-ready",
  "Solo Pick": "tag-solo-pick",
  "Kid Approved": "tag-kid-approved",
  "Past Order": "tag-past-order",
};

interface BundleCardProps {
  bundle: Bundle;
}

export default function BundleCard({ bundle }: BundleCardProps) {
  const { dispatch } = useOrder();

  return (
    <div className="card-dark rounded-2xl overflow-hidden group hover:border-brand-gold/25 hover:-translate-y-1 transition-all duration-200 flex flex-col">
      {/* Tag banner */}
      <div
        className={`px-4 py-2 flex items-center justify-between ${TAG_CLASSES[bundle.tag] || "bg-brand-charcoal"}`}
      >
        <span className="text-xs font-black text-white uppercase tracking-[0.15em]">
          {bundle.tag}
        </span>
        <span className="text-xs font-semibold text-white/90">
          ~{bundle.estimatedTime} min
        </span>
      </div>

      {/* Featured Image */}
      {bundle.image && (
        <div className="w-full h-[220px] relative overflow-hidden bg-[#161616] border-b border-brand-charcoal">
          <Image 
            src={bundle.image} 
            alt={bundle.name} 
            fill 
            className="object-cover hover:scale-105 transition-transform duration-500 brightness-95 contrast-110" 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      {/* Card body */}
      <div className="p-5 flex-1 flex flex-col">
        {/* Bundle name */}
        <h3 className="text-xl font-black text-white mb-1 leading-tight">
          {bundle.name}
        </h3>

        {/* Description */}
        <p className="text-brand-cream/60 text-sm mb-4">{bundle.description}</p>

        {/* Items */}
        <ul className="flex-1 space-y-1 mb-5">
          {bundle.items.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm">
              <span className="text-brand-orange text-xs">•</span>
              <span className="text-brand-cream/70">{item}</span>
            </li>
          ))}
        </ul>

        {/* Price + CTA */}
        <div className="flex items-center justify-between gap-3">
          <span className="text-3xl font-black text-brand-gold">
            ${bundle.price.toFixed(2)}
          </span>
          <button
            onClick={() => dispatch({ type: "SET_BUNDLE", bundle })}
            className="flex-1 btn-shimmer text-brand-dark font-bold py-3 rounded-xl text-sm uppercase tracking-wide hover:scale-105 active:scale-95 transition-transform"
            id={`add-bundle-${bundle.id}`}
          >
            {bundle.tag === "Past Order" ? "Reorder" : "Add to Order"}
          </button>
        </div>
      </div>
    </div>
  );
}
