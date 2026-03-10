"use client";

import { motion } from "framer-motion";
import { Gamepad2, Timer, Lock, Trophy, Brain, Activity, ShieldCheck, Cpu } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Card Component with HUD aesthetics
const TrainingCard = ({
    title,
    subtitle,
    icon: Icon,
    stats,
    color,
    href,
    locked = false,
    systemStatusLabel = "ESTADO DEL SISTEMA"
}: {
    title: string;
    subtitle: string;
    icon: any;
    stats: string;
    color: "cyan" | "purple" | "emerald";
    href: string;
    locked?: boolean;
    systemStatusLabel?: string;
}) => {

    const colorStyles = {
        cyan: {
            border: "group-hover:border-cyan-500/50",
            glow: "group-hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)]",
            text: "text-cyan-400",
            bg: "bg-cyan-500/10",
            bar: "bg-cyan-500"
        },
        purple: {
            border: "group-hover:border-purple-500/50",
            glow: "group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]",
            text: "text-purple-400",
            bg: "bg-purple-500/10",
            bar: "bg-purple-500"
        },
        emerald: {
            border: "group-hover:border-emerald-500/50",
            glow: "group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]",
            text: "text-emerald-400",
            bg: "bg-emerald-500/10",
            bar: "bg-emerald-500"
        }
    };

    const style = colorStyles[color];

    return (
        <Link href={href} className={cn("block relative group h-full", locked && "pointer-events-none opacity-70")}>
            <div className={cn(
                "h-full relative overflow-hidden bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-700/50 p-6 transition-all duration-300",
                style.border,
                style.glow
            )}>
                {/* HUD Elements - Corners */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-slate-500 transition-colors group-hover:border-white" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-slate-500 transition-colors group-hover:border-white" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-slate-500 transition-colors group-hover:border-white" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-slate-500 transition-colors group-hover:border-white" />

                {/* Animated Background Scanline */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent -translate-y-[100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-in-out" />

                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                    <div className={cn("p-3 rounded-lg border border-white/10", style.bg)}>
                        <Icon className={cn("w-6 h-6", style.text)} />
                    </div>
                    {locked && <Lock className="w-5 h-5 text-slate-500" />}
                    {!locked && <div className="flex items-center gap-1 text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                        <Activity className="w-3 h-3 animate-pulse" />
                        Online
                    </div>}
                </div>

                {/* Content */}
                <div className="space-y-4 relative z-10">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                            {title}
                        </h3>
                        <p className="text-sm text-slate-400 leading-relaxed font-light">
                            {subtitle}
                        </p>
                    </div>

                    {/* Stats / Progress Mockup */}
                    <div className="pt-4 border-t border-slate-800">
                        <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                            <span>{systemStatusLabel}</span>
                            <span>{stats}</span>
                        </div>
                        <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                            <div className={cn("h-full w-[0%] group-hover:w-[70%] transition-all duration-700 ease-out delay-100", style.bar)} />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

import { useLanguage } from "@/components/LanguageProvider";

// ... (TrainingCard component remains unchanged mostly, except usage of stats label which is passed as prop)

export function TrainingZone() {
    const { t } = useLanguage();

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background ambient light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex items-end justify-between mb-12 border-b border-indigo-500/20 pb-4">
                    <div>
                        <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                            <Cpu className="w-4 h-4" />
                            {t.gamification.title}
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-black text-white">
                            {t.gamification.simulators}
                        </h3>
                    </div>
                    <div className="hidden md:flex items-center gap-2 text-xs font-mono text-indigo-400/60">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        SYSTEM_READY
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <TrainingCard
                        title={t.gamification.adventureTitle}
                        subtitle={t.gamification.adventureDesc}
                        icon={Trophy}
                        color="purple"
                        stats={t.gamification.progressSaved}
                        systemStatusLabel={t.gamification.systemStatus}
                        href="/aventura"
                    />

                    <TrainingCard
                        title={t.gamification.pasapalabraTitle}
                        subtitle={t.gamification.pasapalabraDesc}
                        icon={Timer}
                        color="cyan"
                        stats={`${t.gamification.bestTime}: --:--`}
                        systemStatusLabel={t.gamification.systemStatus}
                        href="/pasapalabra"
                    />

                    <TrainingCard
                        title={t.gamification.escapeRoomTitle}
                        subtitle={t.gamification.escapeRoomDesc}
                        icon={ShieldCheck}
                        color="emerald"
                        stats={t.gamification.accessControlled}
                        systemStatusLabel={t.gamification.systemStatus}
                        href="/escape-room"
                    />
                </div>
            </div>
        </section>
    );
}
