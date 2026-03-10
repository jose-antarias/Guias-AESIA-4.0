"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Bug, EyeOff, Lock, Unlock } from "lucide-react";
import { cn } from "@/lib/utils";

const threats = [
    {
        id: "poisoning",
        title: "Envenenamiento (Data Poisoning)",
        icon: Bug,
        color: "text-green-400",
        description: "El atacante inyecta datos maliciosos en el conjunto de entrenamiento para corromper el aprendizaje del modelo.",
        defense: "Validación estricta de datos, limpieza y detección de anomalías antes del entrenamiento."
    },
    {
        id: "evasion",
        title: "Evasión (Adversarial Attack)",
        icon: EyeOff,
        color: "text-purple-400",
        description: "El atacante manipula sutilmente la entrada (ej. una imagen) para engañar al modelo y provocar un error.",
        defense: "Entrenamiento adversarial (usar ejemplos de ataque para robustecer el modelo) y filtrado de entradas."
    },
    {
        id: "theft",
        title: "Robo de Modelo",
        icon: Unlock,
        color: "text-red-400",
        description: "El atacante realiza múltiples consultas para reconstruir o copiar la funcionalidad del modelo propietario.",
        defense: "Limitación de tasas (rate limiting), monitoreo de patrones de consulta y marcas de agua digitales."
    }
];

export function CyberDefense() {
    const [activeThreat, setActiveThreat] = useState<string | null>(null);

    return (
        <div className="w-full py-10 grid gap-6">
            <h3 className="text-xl font-bold text-center text-white mb-4">Amenazas y Defensas en IA</h3>

            <div className="grid md:grid-cols-3 gap-4">
                {threats.map((threat) => {
                    const isActive = activeThreat === threat.id;

                    return (
                        <motion.div
                            key={threat.id}
                            layout
                            onClick={() => setActiveThreat(isActive ? null : threat.id)}
                            className={cn(
                                "relative p-6 rounded-xl border cursor-pointer overflow-hidden group transition-all",
                                isActive
                                    ? "bg-slate-800 border-indigo-500 col-span-1 md:col-span-3"
                                    : "bg-slate-900/40 border-slate-700 hover:border-slate-500 hover:bg-slate-800/60"
                            )}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className={cn("p-3 rounded-lg bg-slate-950 border border-slate-800", isActive ? "border-indigo-500/50" : "")}>
                                    <threat.icon className={cn("w-6 h-6", threat.color)} />
                                </div>
                                <h4 className={cn("font-bold text-lg", isActive ? "text-white" : "text-slate-200")}>
                                    {threat.title}
                                </h4>
                            </div>

                            <AnimatePresence mode="wait">
                                {isActive && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="space-y-4 border-t border-slate-700 pt-4"
                                    >
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                                                <h5 className="text-red-400 font-bold mb-2 text-sm uppercase tracking-wide flex items-center gap-2">
                                                    <Bug className="w-4 h-4" /> La Amenaza
                                                </h5>
                                                <p className="text-slate-300 text-sm leading-relaxed">
                                                    {threat.description}
                                                </p>
                                            </div>

                                            <div className="bg-emerald-500/10 p-4 rounded-lg border border-emerald-500/20">
                                                <h5 className="text-emerald-400 font-bold mb-2 text-sm uppercase tracking-wide flex items-center gap-2">
                                                    <ShieldCheck className="w-4 h-4" /> La Defensa
                                                </h5>
                                                <p className="text-slate-300 text-sm leading-relaxed">
                                                    {threat.defense}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {!isActive && (
                                <p className="text-slate-500 text-xs mt-2 line-clamp-2">
                                    Click para ver detalles de ataque y defensa...
                                </p>
                            )}
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
