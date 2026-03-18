"use client";

import Link from "next/link";
import { worlds } from "@/lib/aventuraData";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Lock, Play, Star, Trophy, Medal, Award, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { getStoredProgress, getStoredAchievements, ACHIEVEMENTS, type MissionProgress } from "@/lib/aventuraStorage";

export default function AventuraPage() {
    const [progress, setProgress] = useState<Record<string, MissionProgress>>({});
    const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>([]);

    useEffect(() => {
        // Load initial data
        setProgress(getStoredProgress());
        setUnlockedAchievements(getStoredAchievements());

        // Listen for achievement updates
        const handleUnlock = () => {
            setUnlockedAchievements(getStoredAchievements());
        };
        window.addEventListener("achievement-unlocked", handleUnlock);
        return () => window.removeEventListener("achievement-unlocked", handleUnlock);
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white pb-20 pt-24 transition-colors">
            {/* Background Ambience */}
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/50 via-slate-50 to-slate-50 dark:from-indigo-900/30 dark:via-slate-950 dark:to-slate-950 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 max-w-7xl">
                <header className="mb-12 text-center">
                    <div className="flex items-start justify-start mb-8">
                        <Link
                            href="/#gamificacion"
                            className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4 mr-1" />
                            Volver al inicio
                        </Link>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block mb-4"
                    >
                        <span className="px-4 py-1.5 rounded-full border border-indigo-200 dark:border-indigo-500/30 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-sm font-medium uppercase tracking-wider backdrop-blur-md">
                            Modo aventura
                        </span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 text-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br dark:from-white dark:via-indigo-100 dark:to-indigo-400 dark:drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                    >
                        Sistemas AESIA
                    </motion.h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
                        Selecciona un sistema planetario para iniciar su conquista regulatoria.
                        <br />
                        Completa misiones para desbloquear nuevos conocimientos.
                    </p>

                    {/* Achievements Bar */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-4xl mx-auto bg-white/60 dark:bg-slate-900/50 p-6 rounded-xl border border-transparent dark:border-slate-800/50 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-2xl">
                        <div className="flex items-center gap-2 text-amber-500 font-bold uppercase text-sm border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-700 pb-2 md:pb-0 md:pr-4">
                            <Trophy className="w-6 h-6" /> Logros
                        </div>
                        <div className="flex flex-wrap gap-4 justify-center">
                            {ACHIEVEMENTS.map((ach) => {
                                const isUnlocked = unlockedAchievements.includes(ach.id);
                                return (
                                    <div
                                        key={ach.id}
                                        className={cn(
                                            "relative group p-3 rounded-lg border transition-all duration-300 transform hover:scale-105",
                                            isUnlocked
                                                ? "bg-amber-50 border-amber-200 text-amber-500 dark:bg-amber-500/10 dark:border-amber-500/30 dark:text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.15)] dark:shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                                                : "bg-slate-100 border-transparent text-slate-400 dark:bg-slate-800/50 dark:border-slate-700 dark:text-slate-600 grayscale opacity-50 hover:opacity-100 hover:grayscale-0"
                                        )}
                                    >
                                        <div className="text-3xl">{ach.icon}</div>

                                        {/* Tooltip */}
                                        <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-3 rounded-lg shadow-xl text-xs text-slate-800 dark:text-white z-50 pointer-events-none">
                                            <div className="font-bold text-amber-500 dark:text-amber-300 mb-1 text-sm">{ach.title}</div>
                                            <div className="text-slate-600 dark:text-slate-400 leading-tight">{ach.description}</div>
                                            {!isUnlocked && (
                                                <div className="text-red-500 dark:text-red-400 mt-2 font-mono text-[10px] uppercase flex items-center justify-center border-t border-slate-100 dark:border-slate-800 pt-1">
                                                    <Lock className="w-3 h-3 mr-1" /> Bloqueado
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {worlds.map((world, index) => {
                        // Default mock progress if nothing stored, or read from state
                        const worldProgress = progress[world.id] || { completedMissions: 0, isCompleted: false };

                        return (
                            <WorldCard
                                key={world.id}
                                world={world}
                                index={index}
                                progress={worldProgress}
                            />
                        );
                    })}
                </div>


            </div>
        </div>
    );
}

function WorldCard({ world, index, progress }: { world: any, index: number, progress: MissionProgress }) {
    // Mock locked state for visuals - generally unlocked in this demo
    // Real logic would be: const isLocked = index > 0 && !progress[world-prev].isCompleted;
    const isLocked = false;

    // Calculate percentage for progress bar (assuming 10 missions max)
    const totalMissions = 10;
    const progressPercent = Math.min((progress.completedMissions / totalMissions) * 100, 100);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="h-full"
        >
            <Link href={`/aventura/${world.id}`} className={cn("block group relative h-full", isLocked && "pointer-events-none")}>
                <div className={cn(
                    "absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl",
                    world.color
                )} />

                <div className="relative h-full bg-white dark:bg-slate-900/50 backdrop-blur-md border border-transparent dark:border-slate-800 rounded-2xl p-6 overflow-hidden dark:hover:border-slate-500 transition-all duration-300 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.15)] dark:hover:shadow-2xl hover:-translate-y-1">
                    {/* Header Icon */}
                    <div className="flex justify-between items-start mb-4">
                        <div className={cn(
                            "w-12 h-12 rounded-xl flex items-center justify-center text-3xl shadow-lg border border-transparent dark:border-white/10 relative transition-transform group-hover:scale-110",
                            `bg-gradient-to-br ${world.color}`
                        )}>
                            {world.icon}
                            {/* Achievement Badge if Completed */}
                            {progress.isCompleted && (
                                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full w-8 h-8 flex items-center justify-center border-4 border-slate-900 shadow-xl animate-[bounce_2s_infinite]">
                                    <Star className="w-4 h-4 text-white fill-white" />
                                </div>
                            )}
                        </div>
                        {isLocked ? (
                            <Lock className="w-5 h-5 text-slate-400 dark:text-slate-700" />
                        ) : (
                            <div className="flex flex-col items-end">
                                <span className={cn(
                                    "text-[10px] font-bold px-2 py-1 rounded-full border uppercase tracking-wider",
                                    progress.isCompleted
                                        ? "bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30"
                                        : "bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-500 dark:border-slate-700"
                                )}>
                                    {progress.isCompleted ? "Completado" : "En progreso"}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Texts */}
                    <div className="flex-1 mb-4">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                            {world.name}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                            {world.description}
                        </p>
                    </div>

                    {/* Progress Bar & Footer */}
                    <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/50">
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-xs font-mono text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors">
                                SISTEMA {world.guideId}
                            </span>
                            <span className={cn(
                                "text-xs font-bold transition-colors",
                                progress.completedMissions > 0 ? "text-indigo-600 dark:text-indigo-400" : "text-slate-400 dark:text-slate-600"
                            )}>
                                {progress.completedMissions} / {totalMissions} Misiones
                            </span>
                        </div>

                        {/* Progress Bar Track */}
                        <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
                            <motion.div
                                className={cn("h-full rounded-full transition-all duration-1000 ease-out", `bg-gradient-to-r ${world.color}`)}
                                initial={{ width: 0 }}
                                animate={{ width: `${progressPercent}%` }}
                            />
                        </div>
                    </div>

                    {/* Hover Effect Light */}
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
            </Link>
        </motion.div>
    );
}
