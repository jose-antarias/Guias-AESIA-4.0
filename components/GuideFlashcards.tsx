"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { getGuide } from "@/lib/data";
import { FlashcardDeck } from "@/components/FlashcardDeck";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export function GuideFlashcards({ id }: { id: string }) {
    const { t, language } = useLanguage();
    const guide = getGuide(id, language);

    if (!guide) {
        notFound();
    }

    return (
        <div className="min-h-screen pt-24 pb-20 flex flex-col">
            <div className="border-b border-indigo-500/10 bg-slate-900/50 backdrop-blur-md">
                <div className="container mx-auto px-4 py-4 max-w-5xl flex items-center justify-between">
                    <Link
                        href={`/guides/${guide.id}`}
                        className="inline-flex items-center text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        {t.navbar.activeGuide} {guide.id}
                    </Link>
                    <h1 className="text-lg font-bold text-white line-clamp-1 max-w-md hidden md:block">
                        Flashcards: <span className="text-slate-400 font-normal">{guide.title}</span>
                    </h1>
                    <div className="w-24 hidden md:block" />
                </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center p-4">
                <FlashcardDeck flashcards={guide.flashcards} />
            </div>
        </div>
    );
}
