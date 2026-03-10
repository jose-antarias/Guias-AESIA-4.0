"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserCheck, Users, Eye, AlertTriangle, PlayCircle, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

const levels = [
    {
        id: "loop",
        title: "Human-in-the-loop",
        subtitle: "Intervención Directa",
        icon: UserCheck,
        color: "text-blue-400",
        description: "El humano interviene en cada ciclo de decisión del sistema.",
        details: "Ejemplo: Un sistema de IA sugiere un diagnóstico médico, pero el médico debe validar y firmar cada diagnóstico antes de que se envíe al paciente. La IA no puede actuar sin la confirmación humana previa."
    },
    {
        id: "on-loop",
        title: "Human-on-the-loop",
        subtitle: "Supervisión Activa",
        icon: Eye,
        color: "text-emerald-400",
        description: "El humano supervisa el funcionamiento y puede intervenir si detecta anomalías.",
        details: "Ejemplo: Un sistema de control de tráfico aéreo automatizado. El controlador humano observa las pantallas y solo toma el control manual si detecta una situación de riesgo o un error del sistema. El sistema actúa autónomamente por defecto."
    },
    {
        id: "command",
        title: "Human-in-command",
        subtitle: "Mando General",
        icon: Lock,
        color: "text-purple-400",
        description: "El humano define los parámetros generales y tiene el poder de veto final.",
        details: "Ejemplo: Un sistema de armas autónomo donde el humano establece las reglas de enfrentamiento y zonas de operación, pero el sistema elige los objetivos. El humano tiene un 'botón de pánico' para desactivar todo el sistema instantáneamente."
    }
];

export function HumanOversightLevels() {
    const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

    return (
        <div className="w-full py-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {levels.map((level) => {
                    const isSelected = selectedLevel === level.id;
                    return (
                        <motion.div
                            key={level.id}
                            onClick={() => setSelectedLevel(isSelected ? null : level.id)}
                            className={cn(
                                "relative p-6 rounded-xl border cursor-pointer group transition-all duration-300",
                                isSelected
                                    ? "bg-slate-800 border-indigo-500 shadow-lg shadow-indigo-500/20 md:col-span-3" // Expand on selection? Maybe too jumpy. Let's keep grid but expand content.
                                    : "bg-slate-900/40 border-slate-800 hover:border-slate-700"
                            )}
                            layout // Enable layout animation for smooth transitions
                        >
                            <div className="flex flex-col items-center text-center space-y-3">
                                <div className={cn("p-4 rounded-full bg-slate-950 border border-slate-800 group-hover:scale-110 transition-transform", isSelected ? "border-indigo-500/50" : "")}>
                                    <level.icon className={cn("w-8 h-8", level.color)} />
                                </div>
                                <h3 className={cn("font-bold text-lg", isSelected ? "text-white" : "text-slate-200")}>
                                    {level.title}
                                </h3>
                                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                                    {level.subtitle}
                                </span>
                            </div>

                            <AnimatePresence>
                                {isSelected && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="mt-6 pt-6 border-t border-slate-700/50"
                                    >
                                        <p className="text-sm text-slate-300 mb-4 font-medium">
                                            {level.description}
                                        </p>
                                        <div className="bg-slate-950/50 p-4 rounded-lg border border-slate-800 text-xs text-slate-400 italic">
                                            <span className="text-indigo-400 font-bold not-italic block mb-1">Caso Práctico:</span>
                                            {level.details}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
            <p className="text-center text-xs text-slate-500 italic mt-6">
                Selecciona un nivel de supervisión para ver ejemplos prácticos.
            </p>
        </div>
    );
}

