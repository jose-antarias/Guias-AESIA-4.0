"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { getGuide } from "@/lib/data/index";
import { QuizModule } from "@/components/QuizModule";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export function GuideQuiz({ id }: { id: string }) {
    const { t, language } = useLanguage();
    const guide = getGuide(id, language);

    if (!guide) {
        notFound();
    }

    if (!guide.quiz || guide.quiz.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Cuestionario no disponible</h1>
                    <p className="mb-6 text-slate-400">Esta guía aún no tiene preguntas definidas.</p>
                    <Link href={`/guides/${id}`} className="text-indigo-400 hover:underline">
                        Volver a la Guía
                    </Link>
                </div>
            </div>
        );
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
                        Cuestionario: <span className="text-slate-400 font-normal">{guide.title}</span>
                    </h1>
                    <div className="w-24 hidden md:block" />
                </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center p-4">
                <QuizModule questions={guide.quiz} />
            </div>
        </div>
    );
}
