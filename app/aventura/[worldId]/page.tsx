"use client";

import Link from "next/link";
import { worlds, getMissionsForWorld, type Mission } from "@/lib/aventuraData";
import { notFound, useRouter } from "next/navigation";
import { ArrowLeft, Target, Shield, Zap, Skull, Brain } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { use } from "react";

export default function WorldPage({ params }: { params: Promise<{ worldId: string }> }) {
    const { worldId } = use(params);
    const world = worlds.find((w) => w.id === worldId);

    // useRouter is client-only hook, we are client component so it's fine.
    const router = useRouter();

    if (!world) {
        notFound();
    }

    const missions = getMissionsForWorld(world.id);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white pt-24 pb-20 overflow-x-hidden transition-colors">
            {/* Dynamic Background */}
            <div className={cn("fixed inset-0 bg-gradient-to-br opacity-10 dark:opacity-20 pointer-events-none blur-3xl", world.color)} />

            <div className="container mx-auto px-4 relative z-10 max-w-5xl">
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                    <Link
                        href="/aventura"
                        className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-1" />
                        Volver al mapa
                    </Link>
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
                    <span className="text-4xl">{world.icon}</span>
                    {world.name}
                </h1>

                <p className="text-slate-600 dark:text-slate-400 text-lg mb-12 max-w-2xl leading-relaxed">
                    {world.description}
                    <br />
                    <span className="text-sm uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mt-2 block">
                        Sector {world.guideId} - Estado: Activo
                    </span>
                </p>

                {/* Missions List */}
                <div className="space-y-4">
                    {missions.map((mission, index) => (
                        <MissionCard key={mission.id} mission={mission} index={index} worldId={world.id} guideId={world.guideId} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function MissionCard({ mission, index, worldId, guideId }: { mission: Mission, index: number, worldId: string, guideId: string }) {
    const Icon = getMissionIcon(mission.type);
    const delay = index * 0.1;

    // For gamified feel, calculate a "level requirement" or status
    const isLocked = false; // Evaluate logic here

    return (
        <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay }}
        >
            <Link
                href={`/aventura/${worldId}/play/${mission.id}?guide=${guideId}`}
                className={cn(
                    "group flex items-center gap-6 p-6 rounded-xl border transition-all duration-300 relative overflow-hidden",
                    isLocked
                        ? "bg-slate-100 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 opacity-50 cursor-not-allowed"
                        : "bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-slate-50 dark:hover:bg-slate-800/80 shadow-sm hover:shadow-[0_4px_20px_rgba(99,102,241,0.15)] dark:hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
                )}
            >
                {/* Level Number */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center font-mono text-xl font-bold text-slate-400 dark:text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-white group-hover:border-indigo-500 transition-colors">
                    {index + 1}
                </div>

                {/* Content */}
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                            {mission.title}
                        </h3>
                        <span className={cn(
                            "px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider",
                            mission.difficulty === "Fácil" ? "bg-emerald-500/20 text-emerald-400" :
                                mission.difficulty === "Medio" ? "bg-amber-500/20 text-amber-400" :
                                    mission.difficulty === "Difícil" ? "bg-orange-500/20 text-orange-400" :
                                        "bg-red-600/20 text-red-500"
                        )}>
                            {mission.difficulty}
                        </span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl">
                        {mission.description}
                    </p>
                </div>

                {/* Type Icon */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute right-6 md:static">
                    <Icon className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
                </div>

                {/* Action Button (Desktop) */}
                <div className="hidden md:flex items-center pl-6 border-l border-slate-200 dark:border-slate-800">
                    <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 mr-2">INICIAR</span>
                    <Target className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                </div>
            </Link>
        </motion.div>
    );
}

function getMissionIcon(type: Mission["type"]) {
    switch (type) {
        case "quiz": return Brain;
        case "puzzle": return Zap;
        case "simulation": return Shield;
        case "boss": return Skull;
        default: return Target;
    }
}
