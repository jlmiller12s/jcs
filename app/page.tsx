"use client";
import { useOrder } from "@/context/OrderContext";
import BrandHeader from "@/components/BrandHeader";
import HeroSection from "@/components/HeroSection";
import BenefitsStrip from "@/components/BenefitsStrip";
import WhyItWorks from "@/components/WhyItWorks";
import MoodSelector from "@/components/MoodSelector";
import RecommendationGrid from "@/components/RecommendationGrid";
import CustomizationSheet from "@/components/CustomizationSheet";
import OrderSummary from "@/components/OrderSummary";
import ConfirmationScreen from "@/components/ConfirmationScreen";
import FooterNav from "@/components/FooterNav";

export default function Home() {
  const { state } = useOrder();
  const step = state.currentStep;

  return (
    <>
      {/* Always show header except on confirm */}
      {step !== "confirm" && <BrandHeader />}

      <main>
        {step === "landing" && (
          <>
            <HeroSection />
            <BenefitsStrip />
            <WhyItWorks />
            {/* Landing section footer */}
            <footer className="bg-brand-charcoal/50 border-t border-brand-gold/10 py-10 px-4">
              <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-brand-cream/40">
                <div>
                  <p className="font-bold text-brand-gold/70 mb-2 uppercase text-xs tracking-wider">Company</p>
                  {["About", "Careers", "Press"].map(l => <p key={l} className="mb-1 hover:text-brand-cream/70 cursor-pointer">{l}</p>)}
                </div>
                <div>
                  <p className="font-bold text-brand-gold/70 mb-2 uppercase text-xs tracking-wider">Order</p>
                  {["Menu", "Quick Pick", "Rewards"].map(l => <p key={l} className="mb-1 hover:text-brand-cream/70 cursor-pointer">{l}</p>)}
                </div>
                <div>
                  <p className="font-bold text-brand-gold/70 mb-2 uppercase text-xs tracking-wider">Locations</p>
                  {["Find a Shack", "Catering", "Franchise"].map(l => <p key={l} className="mb-1 hover:text-brand-cream/70 cursor-pointer">{l}</p>)}
                </div>
                <div>
                  <p className="font-bold text-brand-gold/70 mb-2 uppercase text-xs tracking-wider">Follow</p>
                  {["Instagram", "TikTok", "Twitter/X"].map(l => <p key={l} className="mb-1 hover:text-brand-cream/70 cursor-pointer">{l}</p>)}
                </div>
              </div>
              <div className="max-w-5xl mx-auto border-t border-brand-gold/10 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
                <p className="text-brand-cream/30 text-xs">
                  © 2025 Jimmy&apos;s Chicken Shack. All rights reserved.
                </p>
                <p className="text-brand-cream/20 text-xs">
                  Late Night Quick Pick — Prototype v1.0
                </p>
              </div>
            </footer>
          </>
        )}

        {step === "mood" && <MoodSelector />}
        {step === "recommend" && <RecommendationGrid />}
        {step === "customize" && <CustomizationSheet />}
        {step === "summary" && <OrderSummary />}
        {step === "confirm" && <ConfirmationScreen />}
      </main>

      {/* Mobile sticky bottom nav (landing only) */}
      <FooterNav />
    </>
  );
}
