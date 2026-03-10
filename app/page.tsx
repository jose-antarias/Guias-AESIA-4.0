"use client";

import { useState } from "react";
import { getGuides } from "@/lib/data";
import { GuideCard } from "@/components/GuideCard";
import { HeroSection } from "@/components/HeroSection";
import { TrainingZone } from "@/components/TrainingZone";
import { useLanguage } from "@/components/LanguageProvider";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const { t, language } = useLanguage();
  const guides = getGuides(language);
  const [showAllGuides, setShowAllGuides] = useState(false);

  const displayedGuides = showAllGuides ? guides : guides.slice(0, 6);

  return (
    <main className="min-h-screen pb-20 bg-slate-950 text-slate-100">
      <HeroSection />

      {/* Guías Técnicas - Section moved to top */}
      <section className="container mx-auto px-4 py-16 relative z-10" id="guides">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-sm font-bold text-indigo-400 uppercase tracking-widest bg-indigo-950/50 px-3 py-1 rounded-full border border-indigo-500/20 mb-3 inline-block">
              {guides.length} {t.common.guides}
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              {t.guides.title}
            </h2>
            <p className="text-slate-400 max-w-2xl text-lg">
              {t.guides.description}
            </p>
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedGuides.map((guide, index) => (
              <motion.div
                key={guide.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                <GuideCard guide={guide} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Expand/Collapse Button */}
        {guides.length > 6 && (
          <div className="flex justify-center mt-12">
            <Button
              onClick={() => setShowAllGuides(!showAllGuides)}
              className="bg-slate-900 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-950 hover:text-white hover:border-indigo-500 px-8 py-6 rounded-full text-base font-semibold group transition-all duration-300 shadow-[0_0_20px_-5px_rgba(99,102,241,0.2)]"
            >
              {showAllGuides ? (
                <>
                  <ChevronUp className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform" />
                  {t.guides.viewLess}
                </>
              ) : (
                <>
                  <Layers className="w-5 h-5 mr-2" />
                  {t.guides.viewAll} ({guides.length})
                  <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
                </>
              )}
            </Button>
          </div>
        )}
      </section>

      {/* Zona de Entrenamiento - Gamification moved to bottom */}
      <TrainingZone />

    </main>
  );
}
