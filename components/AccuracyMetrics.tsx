"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BarChart, Activity, Target } from "lucide-react";

const metrics = [
    {
        id: "accuracy",
        label: "Exactitud (Accuracy)",
        value: 95,
        desc: "Porcentaje total de aciertos. '¿Cuántas veces acertó el modelo en general?'",
        color: "bg-blue-500",
        warn: "Engañoso si las clases están desbalanceadas (ej. 99% transacciones son legales)."
    },
    {
        id: "recall",
        label: "Sensibilidad (Recall)",
        value: 88,
        desc: "Capacidad de encontrar todos los positivos. 'De todos los fraudes reales, ¿cuántos detectó?'",
        color: "bg-emerald-500",
        warn: "Importante en medicina o seguridad, donde un falso negativo es grave."
    },
    {
        id: "precision",
        label: "Precisión",
        value: 92,
        desc: "Fiabilidad de los positivos predichos. 'De todas las alarmas que sonó, ¿cuántas eran reales?'",
        color: "bg-purple-500",
        warn: "Clave cuando los falsos positivos son costosos (ej. bloquear cuentas legítimas)."
    },
    {
        id: "f1",
        label: "F1-Score",
        value: 90,
        desc: "Media armónica entre Recall y Precisión. Balance ideal.",
        color: "bg-orange-500",
        warn: "La mejor métrica general cuando buscas equilibrio."
    }
];

export function AccuracyMetrics() {
    const [selected, setSelected] = useState<string>("accuracy");

    return (
        <div className="w-full py-10 bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <BarChart className="w-6 h-6 text-indigo-400" />
                Métricas de Evaluación de IA
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Selector / List */}
                <div className="space-y-4">
                    {metrics.map((m) => (
                        <button
                            key={m.id}
                            onClick={() => setSelected(m.id)}
                            className={`w-full text-left p-4 rounded-lg border transition-all flex items-center justify-between group ${selected === m.id
                                    ? "bg-slate-800 border-indigo-500 ring-1 ring-indigo-500"
                                    : "bg-slate-900 border-slate-700 hover:border-slate-600"
                                }`}
                        >
                            <span className={`font-semibold ${selected === m.id ? "text-white" : "text-slate-400 group-hover:text-slate-200"}`}>
                                {m.label}
                            </span>
                            {selected === m.id && <Activity className="w-4 h-4 text-indigo-400 animate-pulse" />}
                        </button>
                    ))}
                </div>

                {/* Meter & Details */}
                <div className="bg-slate-950 rounded-xl p-6 border border-slate-800 relative overflow-hidden">
                    {metrics.map((m) => {
                        if (m.id !== selected) return null;
                        return (
                            <motion.div
                                key={m.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-6"
                            >
                                <div className="flex justify-between items-end mb-2">
                                    <h4 className={`text-3xl font-bold ${m.color.replace('bg-', 'text-')}`}>
                                        {m.value}%
                                    </h4>
                                    <Target className={`w-8 h-8 ${m.color.replace('bg-', 'text-')} opacity-20`} />
                                </div>

                                {/* Bar */}
                                <div className="h-4 w-full bg-slate-800 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${m.value}%` }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                        className={`h-full ${m.color}`}
                                    />
                                </div>

                                <div className="space-y-4 pt-4">
                                    <p className="text-slate-300 text-sm leading-relaxed border-l-2 border-slate-700 pl-4">
                                        {m.desc}
                                    </p>

                                    <div className="bg-yellow-500/10 p-3 rounded border border-yellow-500/20 text-xs text-yellow-200">
                                        <strong>⚠️ Cuándo usarlo:</strong> {m.warn}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
