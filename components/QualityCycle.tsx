"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClipboardList, Cog, SearchCheck, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

const phases = [
    {
        id: "plan",
        title: "1. Estrategia (Plan)",
        icon: ClipboardList,
        color: "text-blue-400",
        description: "Definir políticas de calidad, objetivos y asignar recursos.",
        details: "En esta fase se establece la 'Política de Calidad' y se planifican los recursos necesarios. Es la base normativa interna de la organización."
    },
    {
        id: "do",
        title: "2. Diseño y Desarrollo (Do)",
        icon: Cog,
        color: "text-amber-400",
        description: "Ejecutar el desarrollo del sistema de IA siguiendo los procedimientos.",
        details: "Implementación práctica controlada. Incluye el diseño del modelo, la recolección de datos y la codificación, asegurando la trazabilidad."
    },
    {
        id: "check",
        title: "3. Verificación (Check)",
        icon: SearchCheck,
        color: "text-emerald-400",
        description: "Validar y probar que el sistema cumple los requisitos.",
        details: "Etapa crítica de pruebas (testing) y validación. Se comprueba si el sistema cumple con la precisión, robustez y métricas definidas."
    },
    {
        id: "act",
        title: "4. Mejora Continua (Act)",
        icon: RefreshCw,
        color: "text-purple-400",
        description: "Corregir errores y actualizar el sistema basado en la vigilancia.",
        details: "Gestión de cambios y vigilancia poscomercialización. Se toman acciones correctiva para mejorar el sistema basándose en el feedback real."
    }
];

export function QualityCycle() {
    const [activePhase, setActivePhase] = useState<string | null>(null);

    return (
        <div className="w-full py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                {/* Center Circle Diagram (Abstract representation with CSS/SVG could be complex, using cards for clarity) */}

                {phases.map((phase, index) => {
                    const isActive = activePhase === phase.id;
                    return (
                        <motion.div
                            key={phase.id}
                            onClick={() => setActivePhase(isActive ? null : phase.id)}
                            className={cn(
                                "relative p-6 rounded-2xl border cursor-pointer overflow-hidden group transition-all duration-300",
                                isActive
                                    ? "bg-slate-800 border-indigo-500 shadow-lg"
                                    : "bg-slate-900/40 border-slate-800 hover:border-slate-700"
                            )}
                        >
                            <div className="flex items-start space-x-4">
                                <div className={cn("p-3 rounded-lg bg-slate-950 border border-slate-800", isActive ? "border-indigo-500/50" : "")}>
                                    <phase.icon className={cn("w-6 h-6", phase.color)} />
                                </div>
                                <div className="flex-1">
                                    <h3 className={cn("font-bold text-lg mb-1", isActive ? "text-white" : "text-slate-200")}>
                                        {phase.title}
                                    </h3>
                                    <p className="text-sm text-slate-400 leading-snug">
                                        {phase.description}
                                    </p>
                                </div>
                            </div>

                            <AnimatePresence>
                                {isActive && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                        animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                    >
                                        <div className="pt-4 border-t border-slate-700/50 text-sm text-indigo-100 bg-indigo-900/10 -mx-6 -mb-6 p-6">
                                            {phase.details}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Decorative background element */}
                            {!isActive && (
                                <div className={cn("absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-5 filter blur-xl", phase.color.replace('text-', 'bg-'))} />
                            )}
                        </motion.div>
                    );
                })}
            </div>
            <p className="text-center text-xs text-slate-500 italic mt-6">
                El sistema de gestión de calidad es cíclico y nunca termina. Haz clic para ver detalles.
            </p>
        </div>
    );
}
