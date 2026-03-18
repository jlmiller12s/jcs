"use client";
import { useState } from "react";
import BrandHeader from "@/components/BrandHeader";
import FooterNav from "@/components/FooterNav";
import BundleCard from "@/components/BundleCard";
import ItemCard from "@/components/ItemCard";
import { MOODS, BUNDLES, MENU_ITEMS } from "@/lib/data";

const TABS = ["MOODS", "SIDES", "DRINKS", "DESSERTS"];

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("MOODS");

  return (
    <main className="min-h-screen bg-[#111] pb-24 pt-24">
      <BrandHeader />
      
      {/* Sub Navigation */}
      <div className="sticky top-16 z-40 bg-brand-red border-b-4 border-brand-dark/20 shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex overflow-x-auto hide-scrollbar">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap px-6 py-4 font-black uppercase tracking-wider text-sm md:text-base border-b-4 transition-colors ${
                activeTab === tab
                  ? "text-brand-cream border-brand-cream"
                  : "text-brand-dark hover:text-brand-cream/80 border-transparent"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        
        {/* MOODS TAB */}
        {activeTab === "MOODS" && (
          <div className="space-y-16 animate-fade-in">
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-6xl font-black text-brand-gold uppercase tracking-tighter shadow-sm w-fit mx-auto" style={{ textShadow: "0 4px 10px rgba(0,0,0,0.5)" }}>
                MOODS
              </h1>
              <p className="text-brand-cream/60 mt-2 font-medium">Curated packs for however you're feeling.</p>
            </div>

            {MOODS.map((mood) => {
              const bundles = BUNDLES[mood.id] || [];
              if (bundles.length === 0) return null;
              
              return (
                <section key={mood.id}>
                  <div className="mb-6 border-b border-brand-gold/10 pb-4">
                    <h2 className="text-2xl md:text-3xl font-black uppercase flex items-center gap-3">
                      <span>{mood.emoji}</span>
                      {mood.title}
                    </h2>
                    <p className="text-brand-cream/60 text-sm mt-1">{mood.subtitle}</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {bundles.map((bundle) => (
                      <BundleCard key={bundle.id} bundle={bundle} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}

        {/* SIDES TAB */}
        {activeTab === "SIDES" && (
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-black text-brand-gold uppercase tracking-tighter mb-10 text-center shadow-sm w-fit mx-auto" style={{ textShadow: "0 4px 10px rgba(0,0,0,0.5)" }}>
              SIDES
            </h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {MENU_ITEMS.Sides?.map((item) => (
                <ItemCard key={item.id} name={item.name} calories={item.calories} image={item.image} />
              ))}
            </div>
          </div>
        )}

        {/* DRINKS TAB */}
        {activeTab === "DRINKS" && (
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-black text-brand-gold uppercase tracking-tighter mb-10 text-center shadow-sm w-fit mx-auto" style={{ textShadow: "0 4px 10px rgba(0,0,0,0.5)" }}>
              DRINKS
            </h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {MENU_ITEMS.Drinks?.map((item) => (
                <ItemCard key={item.id} name={item.name} calories={item.calories} image={item.image} />
              ))}
            </div>
          </div>
        )}

        {/* DESSERTS TAB */}
        {activeTab === "DESSERTS" && (
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-black text-brand-gold uppercase tracking-tighter mb-10 text-center shadow-sm w-fit mx-auto" style={{ textShadow: "0 4px 10px rgba(0,0,0,0.5)" }}>
              DESSERTS
            </h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {MENU_ITEMS.Desserts?.map((item) => (
                <ItemCard key={item.id} name={item.name} calories={item.calories} image={item.image} />
              ))}
            </div>
          </div>
        )}

      </div>
      <FooterNav />
    </main>
  );
}
