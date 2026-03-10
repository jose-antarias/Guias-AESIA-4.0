"use client";

import dynamic from "next/dynamic";
import { useLanguage } from "@/components/LanguageProvider";

const HeroScene = dynamic(
    () => import("@/components/HeroScene").then((m) => m.HeroScene),
    { ssr: false }
);

export function HeroSection() {
    const { t } = useLanguage();

    return (
        <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8 min-h-[70vh] flex items-center">
            {/* 3D Background */}
            <HeroScene />

            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
            <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none mix-blend-overlay" />

            <div className="container relative mx-auto max-w-7xl flex flex-col items-center text-center z-10">
                <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300 backdrop-blur-md shadow-sm mb-8 transition-all hover:scale-105 hover:shadow-md cursor-default">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                    {t.hero.badge}
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    {t.hero.title} <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400 pb-2">{t.hero.subtitle}</span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl font-light text-balance mb-12">
                    {t.hero.description} <span className="font-semibold text-indigo-400">{t.hero.highlight}</span>
                </p>
            </div>
        </section>
    );
}
