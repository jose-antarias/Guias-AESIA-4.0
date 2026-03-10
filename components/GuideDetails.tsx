"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { getGuide, Guide } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, BrainCircuit, Layers, Download, ExternalLink, BookOpen } from "lucide-react";
import { notFound } from "next/navigation";
import { GuideContent } from "@/components/GuideContent";
import { motion } from "framer-motion";

export function GuideDetails({ id, initialGuide }: { id: string, initialGuide: Guide }) {
    const { t, language } = useLanguage();
    // Use the client-side translation, but default to the server-provided one initially
    const guide = getGuide(id, language) || initialGuide;

    if (!guide) {
        notFound();
    }

    return (
        <div className="min-h-screen pt-24 pb-20">
            {/* Header */}
            <div className="border-b border-indigo-500/10 bg-slate-900/50 backdrop-blur-md">
                <div className="container mx-auto px-4 py-8 max-w-5xl">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm text-indigo-400 hover:text-indigo-300 transition-colors mb-6"
                    >
                        <ArrowLeft className="w-4 h-4 mr-1" />
                        {t.navbar.home}
                    </Link>
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-bold border border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                            {guide.id}
                        </span>
                        <span className="text-sm font-bold text-indigo-400 uppercase tracking-widest bg-indigo-950/50 px-3 py-1 rounded-full border border-indigo-500/20">
                            {t.hero.title}
                        </span>
                    </div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mb-2"
                    >
                        {guide.title}
                    </motion.h1>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-5xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-slate-900/40 rounded-2xl p-8 border border-slate-800 backdrop-blur-sm shadow-xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 opacity-50" />
                            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                                <span className="w-1 h-8 bg-indigo-500 rounded-full inline-block mr-2" />
                                {t.common.summary}
                            </h2>
                            <p className="text-lg leading-relaxed text-slate-300 font-light">
                                {guide.summary}
                            </p>
                        </motion.div>

                        {/* Detailed Content Index */}
                        {guide.contentIndex && (
                            <GuideContent content={guide.contentIndex} />
                        )}
                    </div>

                    {/* Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="bg-slate-900/60 rounded-2xl p-6 border border-indigo-500/20 shadow-[0_0_30px_rgba(0,0,0,0.3)] backdrop-blur-md">
                            <h3 className="font-bold text-indigo-100 mb-6 flex items-center gap-2 uppercase tracking-wide text-sm">
                                <BrainCircuit className="w-4 h-4 text-indigo-400" />
                                {t.common.resources}
                            </h3>
                            <div className="space-y-4">
                                <Button asChild className="w-full justify-start text-base py-6 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-indigo-500 transition-all group relative overflow-hidden">
                                    <Link href={`/guides/${guide.id}/flashcards`}>
                                        <div className="absolute inset-0 bg-indigo-500/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                                        <Layers className="w-5 h-5 mr-3 text-indigo-400 group-hover:text-indigo-300" />
                                        <span>{t.common.flashcardsBtn}</span>
                                        <ArrowLeft className="w-4 h-4 ml-auto rotate-180 opacity-0 group-hover:opacity-100 transition-all text-indigo-400" />
                                    </Link>
                                </Button>
                                <Button asChild className="w-full justify-start text-base py-6 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-emerald-500 transition-all group relative overflow-hidden">
                                    <Link href={`/guides/${guide.id}/quiz`}>
                                        <div className="absolute inset-0 bg-emerald-500/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                                        <BrainCircuit className="w-5 h-5 mr-3 text-emerald-400 group-hover:text-emerald-300" />
                                        <span>{t.common.quizBtn}</span>
                                        <ArrowLeft className="w-4 h-4 ml-auto rotate-180 opacity-0 group-hover:opacity-100 transition-all text-emerald-400" />
                                    </Link>
                                </Button>

                                <Button asChild className="w-full justify-start text-base py-6 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-purple-500 transition-all group relative overflow-hidden">
                                    <Link href={`/guides/${guide.id}/glossary`}>
                                        <div className="absolute inset-0 bg-purple-500/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                                        <BookOpen className="w-5 h-5 mr-3 text-purple-400 group-hover:text-purple-300" />
                                        <span>{t.common.glossaryBtn}</span>
                                        <ArrowLeft className="w-4 h-4 ml-auto rotate-180 opacity-0 group-hover:opacity-100 transition-all text-purple-400" />
                                    </Link>
                                </Button>

                                {guide.pdfUrl && (
                                    <>
                                        <div className="h-px bg-slate-800 my-4" />
                                        <Button asChild className="w-full justify-start text-base py-6 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-blue-500 transition-all group relative overflow-hidden">
                                            <a href={guide.pdfUrl} target="_blank" rel="noopener noreferrer">
                                                <div className="absolute inset-0 bg-blue-500/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                                                <Download className="w-5 h-5 mr-3 text-blue-400 group-hover:text-blue-300" />
                                                <span>{t.common.downloadPdf}</span>
                                                <ExternalLink className="w-4 h-4 ml-auto opacity-50 group-hover:opacity-100 transition-all text-blue-400" />
                                            </a>
                                        </Button>
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
