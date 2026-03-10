"use client";

import Link from "next/link";
import Image from "next/image";
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

            <div className="container relative mx-auto max-w-7xl flex flex-col items-center text-center z-10 pt-20">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    {t.hero.title} <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400 pb-2">{t.hero.subtitle}</span>
                </h1>

                <p className="text-sm md:text-lg font-semibold text-indigo-200 mb-10 tracking-wider bg-slate-900/50 px-6 py-2 rounded-full border border-indigo-500/30 inline-block shadow-[0_0_15px_rgba(99,102,241,0.15)]">
                    {t.hero.menciaLegend}
                </p>

                <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl font-light text-balance mb-12">
                    {t.hero.description} <span className="font-semibold text-indigo-400">{t.hero.highlight}</span>
                </p>
            </div>
        </section>
    );
}
