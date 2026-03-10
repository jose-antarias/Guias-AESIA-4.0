"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScanFace, Briefcase, Activity, AlertTriangle, ShieldCheck, Database, Eye } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const cases = [
    {
        id: "biometric",
        title: "Identificación Biométrica",
        icon: ScanFace,
        color: "text-indigo-400",
        bgColor: "bg-indigo-500/10",
        borderColor: "border-indigo-500/30",
        description: "Uso de datos biométricos para reconocer a individuos de manera automatizada en entornos laborales o públicos.",
        riskLevel: "Alto Riesgo",
        impact: "Puede afectar gravemente a los derechos fundamentales, la privacidad y la no discriminación.",
        obligations: [
            { icon: Database, text: "Calidad de datos y gobernanza" },
            { icon: Eye, text: "Supervisión humana estricta" },
            { icon: AlertTriangle, text: "Evaluación de impacto en derechos" }
        ]
    },
    {
        id: "employment",
        title: "Gestión de Empleo",
        icon: Briefcase,
        color: "text-emerald-400",
        bgColor: "bg-emerald-500/10",
        borderColor: "border-emerald-500/30",
        description: "Algoritmos utilizados para la selección de personal, promoción de empleados o terminación de contratos.",
        riskLevel: "Alto Riesgo",
        impact: "Impacto directo en los medios de subsistencia y la carrera profesional. Riesgo de sesgo histórico.",
        obligations: [
            { icon: ShieldCheck, text: "Transparencia con el candidato" },
            { icon: Database, text: "Evitar sesgos en datos históricos" },
            { icon: Activity, text: "Monitorización de equidad" }
        ]
    },
    {
        id: "health",
        title: "Dispositivos Médicos (Insulina)",
        icon: Activity,
        color: "text-rose-400",
        bgColor: "bg-rose-500/10",
        borderColor: "border-rose-500/30",
        description: "Bombas de insulina inteligentes que dosifican medicación automáticamente basándose en lecturas en tiempo real.",
        riskLevel: "Alto Riesgo",
        impact: "Riesgo crítico para la salud y la vida (seguridad del producto). Un fallo puede ser fatal.",
        obligations: [
            { icon: ShieldCheck, text: "Precisión y robustez extremas" },
            { icon: AlertTriangle, text: "Gestión de riesgos clínicos" },
            { icon: Database, text: "Logs exhaustivos de decisiones" }
        ]
    }
];

export function HighRiskExplorer() {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    return (
        <div className="w-full space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {cases.map((example) => {
                    const isSelected = selectedId === example.id;
                    return (
                        <motion.div
                            key={example.id}
                            layoutId={`card-${example.id}`}
                            onClick={() => setSelectedId(isSelected ? null : example.id)}
                            className={`
                                relative p-6 rounded-xl border cursor-pointer transition-all duration-300
                                ${isSelected ? "bg-slate-800 border-indigo-500 shadow-lg shadow-indigo-500/20" : "bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-800/60"}
                            `}
                        >
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className={`p-4 rounded-full ${example.bgColor} ${example.borderColor} border`}>
                                    <example.icon className={`w-8 h-8 ${example.color}`} />
                                </div>
                                <h3 className="font-bold text-white text-lg">{example.title}</h3>
                                <p className="text-sm text-slate-400">{example.description}</p>
                            </div>

                            {isSelected && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    className="mt-6 pt-6 border-t border-slate-700/50 space-y-4"
                                >
                                    <div className="flex items-center justify-center">
                                        <Badge variant="outline" className="bg-red-500/10 text-red-400 border-red-500/20 uppercase tracking-widest text-[10px] font-bold py-1">
                                            {example.riskLevel}
                                        </Badge>
                                    </div>

                                    <div className="text-sm text-slate-300 bg-slate-950/30 p-3 rounded-lg border border-slate-800">
                                        <span className="text-yellow-400 font-bold block mb-1">Impacto Potencial:</span>
                                        {example.impact}
                                    </div>

                                    <div>
                                        <span className="text-indigo-300 text-xs font-bold uppercase tracking-wider block mb-3">Obligaciones Clave</span>
                                        <div className="space-y-2">
                                            {example.obligations.map((obs, i) => (
                                                <div key={i} className="flex items-center text-xs text-slate-300">
                                                    <obs.icon className="w-3 h-3 mr-2 text-indigo-400" />
                                                    {obs.text}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    );
                })}
            </div>

            <p className="text-center text-xs text-slate-500 italic mt-4">
                Selecciona una tarjeta para ver el análisis de riesgo y obligaciones.
            </p>
        </div>
    );
}
