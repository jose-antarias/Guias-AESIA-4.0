"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldAlert, AlertTriangle, FileText, CheckCircle } from "lucide-react";

const levels = [
    {
        id: "unacceptable",
        label: "Riesgo Inaceptable",
        description: "Prohibidos por vulnerar derechos fundamentales (ej. scoring social, manipulación cognitiva).",
        color: "bg-red-500",
        icon: ShieldAlert
    },
    {
        id: "high",
        label: "Alto Riesgo",
        description: "Permitidos bajo estrictos requisitos (ej. cirugía robótica, selección de personal).",
        color: "bg-orange-500",
        icon: AlertTriangle
    },
    {
        id: "limited",
        label: "Riesgo Limitado",
        description: "Obligaciones específicas de transparencia (ej. chatbots, deepfakes).",
        color: "bg-yellow-500",
        icon: FileText
    },
    {
        id: "minimal",
        label: "Riesgo Mínimo",
        description: "Sin restricciones adicionales (ej. filtros de spam, videojuegos).",
        color: "bg-emerald-500",
        icon: CheckCircle
    }
];

export function RiskLevels() {
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <div className="w-full py-10 flex flex-col items-center space-y-2">
            {levels.map((level, index) => {
                const widthClass = ["w-32", "w-48", "w-64", "w-80"][index]; // Pyramid shape

                return (
                    <motion.div
                        key={level.id}
                        onMouseEnter={() => setHovered(level.id)}
                        onMouseLeave={() => setHovered(null)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`
                            relative flex items-center justify-center p-4 rounded-xl cursor-pointer
                            ${widthClass} ${level.color} shadow-lg hover:brightness-110 transition-all
                        `}
                    >
                        <level.icon className="w-6 h-6 text-white absolute left-4" />
                        <span className="font-bold text-white text-sm uppercase tracking-wide">{level.label}</span>

                        {/* Tooltip-like expansion */}
                        {hovered === level.id && (
                            <motion.div
                                layoutId="tooltip"
                                className="absolute left-full ml-4 w-64 p-4 bg-slate-800 rounded-lg border border-slate-700 shadow-xl z-10"
                            >
                                <h4 className={`font-bold ${level.color.replace('bg-', 'text-')} mb-1`}>{level.label}</h4>
                                <p className="text-sm text-slate-300">{level.description}</p>
                            </motion.div>
                        )}
                    </motion.div>
                );
            })}
        </div>
    );
}
