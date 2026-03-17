"use client";

import { useState } from "react";
import { getGuide, GlossaryTerm } from "@/lib/data/index";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Search, Book, X } from "lucide-react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

export function GuideGlossary({ id }: { id: string }) {
    const { t, language } = useLanguage();
    const guide = getGuide(id, language);
    const [searchTerm, setSearchTerm] = useState("");

    if (!guide || !guide.glossary) {
        if (guide && !guide.glossary) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold mb-4">{t.glossary.noResults}</h1>
                        <p className="mb-6 text-slate-600 dark:text-slate-400">Esta guía aún no tiene términos definidos.</p>
                        <Link href={`/guides/${id}`} className="text-indigo-600 dark:text-indigo-400 hover:underline">
                            {t.glossary.backToGuide}
                        </Link>
                    </div>
                </div>
            );
        }
        notFound();
        return null; // TS Check
    }

    const filteredTerms = guide.glossary.filter(term =>
        term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        term.definition.toLowerCase().includes(searchTerm.toLowerCase())
    ).sort((a, b) => a.term.localeCompare(b.term));

    // Group by first letter
    const groupedTerms = filteredTerms.reduce((acc, term) => {
        const letter = term.term.charAt(0).toUpperCase();
        if (!acc[letter]) acc[letter] = [];
        acc[letter].push(term);
        return acc;
    }, {} as Record<string, GlossaryTerm[]>);

    const sortedLetters = Object.keys(groupedTerms).sort();

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 font-sans selection:bg-indigo-500/30">
            {/* Header Sticky */}
            <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-indigo-500/10 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-5xl">
                    <Link
                        href={`/guides/${guide.id}`}
                        className="flex items-center text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors group"
                    >
                        <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mr-3 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/20 text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                        </div>
                        <span className="hidden sm:inline">{t.glossary.backToGuide}</span>
                    </Link>

                    <div className="flex items-center gap-3">
                        <div className="hidden sm:flex items-center px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider">
                            <Book className="w-3 h-3 mr-2" />
                            {t.glossary.officialGlossary}
                        </div>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12 max-w-4xl">
                {/* Title Section */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-400 mb-4 animate-gradient-text pb-2">
                        {t.glossary.title}
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        {t.glossary.subtitle} <strong>{guide.title}</strong>
                    </p>
                </div>

                {/* Search Bar */}
                <div className="relative max-w-xl mx-auto mb-16 group">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-10 dark:opacity-20 group-hover:opacity-20 dark:group-hover:opacity-40 transition-opacity" />
                    <div className="relative flex items-center bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus-within:border-indigo-400 dark:focus-within:border-indigo-500 rounded-full px-4 py-3 shadow-inner dark:shadow-xl transition-all">
                        <Search className="w-5 h-5 text-slate-400 dark:text-slate-500 mr-3" />
                        <input
                            type="text"
                            placeholder={t.glossary.searchPlaceholder}
                            className="bg-transparent border-none outline-none text-slate-900 dark:text-white w-full placeholder:text-slate-500 dark:placeholder:text-slate-600"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {searchTerm && (
                            <button onClick={() => setSearchTerm("")} className="ml-2 text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-white">
                                <X className="w-4 h-4" />
                            </button>
                        )}
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-12">
                    {filteredTerms.length === 0 ? (
                        <div className="text-center py-20">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-900 mb-4">
                                <Search className="w-8 h-8 text-slate-400 dark:text-slate-700" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-300">{t.glossary.noResults}</h3>
                            <p className="text-slate-600 dark:text-slate-500">Prueba con otra búsqueda.</p>
                        </div>
                    ) : (
                        sortedLetters.map((letter) => (
                            <div key={letter} className="relative">
                                <div className="sticky top-20 z-10 flex items-center mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg font-black text-2xl text-white border border-white/20">
                                        {letter}
                                    </div>
                                    <div className="h-px bg-slate-200 dark:bg-slate-800 flex-grow ml-4" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-0 md:pl-16">
                                    {groupedTerms[letter].map((item, idx) => (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.05 }}
                                            key={item.term}
                                            className="bg-white dark:bg-slate-900/50 border border-transparent dark:border-slate-800/60 p-5 rounded-xl hover:border-indigo-100 dark:hover:border-indigo-500/30 hover:bg-slate-50 dark:hover:bg-slate-800/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all group"
                                        >
                                            <h3 className="text-lg font-bold text-indigo-600 dark:text-indigo-300 mb-2 group-hover:text-indigo-700 dark:group-hover:text-indigo-200 transition-colors">
                                                {item.term}
                                            </h3>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                                {item.definition}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </main>
        </div>
    );
}
