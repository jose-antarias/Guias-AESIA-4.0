"use client";

import { useState } from "react";
import { type Flashcard } from "@/lib/data/index";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, RotateCw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/LanguageProvider";

interface FlashcardDeckProps {
    flashcards: Flashcard[];
}

export function FlashcardDeck({ flashcards }: FlashcardDeckProps) {
    const { t } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const currentCard = flashcards[currentIndex];

    const handleNext = () => {
        setIsFlipped(false);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % flashcards.length);
        }, 200);
    };

    const handlePrev = () => {
        setIsFlipped(false);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
        }, 200);
    };

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="w-full max-w-2xl mx-auto space-y-8">
            <div className="relative h-80 w-full perspective-1000 group cursor-pointer" onClick={handleFlip}>
                <motion.div
                    className="relative w-full h-full transition-all duration-500 transform-style-3d"
                    initial={false}
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* Front */}
                    <div className="absolute inset-0 w-full h-full backface-hidden">
                        <Card className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-slate-900/80 backdrop-blur-xl border-2 border-indigo-500/30 shadow-[0_0_30px_rgba(99,102,241,0.1)] overflow-y-auto">
                            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-6 border border-indigo-500/20 px-3 py-1 rounded-full bg-indigo-950/50">{t.flashcards.concept}</span>
                            <h3 className="text-2xl md:text-4xl font-black text-white leading-tight">
                                {currentCard.front}
                            </h3>
                            <div className="absolute bottom-6 right-6 text-indigo-500/50 animate-pulse">
                                <RotateCw className="w-6 h-6" />
                            </div>
                        </Card>
                    </div>

                    {/* Back */}
                    <div
                        className="absolute inset-0 w-full h-full backface-hidden"
                        style={{ transform: "rotateY(180deg)" }}
                    >
                        <Card className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-slate-800/90 backdrop-blur-xl border-2 border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.1)] overflow-y-auto">
                            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6 border border-emerald-500/20 px-3 py-1 rounded-full bg-emerald-950/50">{t.flashcards.explanation}</span>
                            <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-light">
                                {currentCard.back}
                            </p>
                        </Card>
                    </div>
                </motion.div>
            </div>

            <div className="flex items-center justify-between">
                <Button
                    variant="outline"
                    onClick={handlePrev}
                    disabled={flashcards.length <= 1}
                    className="bg-slate-900 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-500 transition-all"
                >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    {t.flashcards.previous}
                </Button>
                <span className="text-sm font-medium text-slate-500">
                    {currentIndex + 1} / {flashcards.length}
                </span>
                <Button
                    variant="outline"
                    onClick={handleNext}
                    disabled={flashcards.length <= 1}
                    className="bg-slate-900 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-500 transition-all"
                >
                    {t.flashcards.next}
                    <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
            </div>
        </div>
    );
}
