"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, Zap, Layers, RefreshCw } from "lucide-react";

const measures = [
    {
        id: "redundancy",
        label: "Redundancia",
        icon: Layers,
        desc: "Duplicar componentes críticos (ej. sensores, procesadores) para que si uno falla, otro tome el relevo.",
        color: "bg-blue-500",
        active: false
    },
    {
        id: "failsafe",
        label: "Fallo Seguro (Fail-Safe)",
        icon: ShieldAlert,
        desc: "El sistema detecta su propia incapacidad y se detiene en un estado seguro, evitando daños.",
        color: "bg-emerald-500",
        active: false
    },
    {
        id: "stress",
        label: "Pruebas de Estrés",
        icon: Zap,
        desc: "Someter al sistema a condiciones extremas para identificar puntos de ruptura antes de la operación real.",
        color: "bg-orange-500",
        active: false
    }
];

export function RobustnessShield() {
    const [activeMeasure, setActiveMeasure] = useState<string | null>(null);

    return (
        <div className="w-full py-10 flex flex-col items-center space-y-8">
            <h3 className="text-xl font-bold text-white text-center">Defensas de Robustez</h3>

            {/* Central Animated Shield */}
            <div className="relative w-48 h-48 flex items-center justify-center">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-4 border-dashed border-slate-700 opacity-50"
                />

                <AnimatePresence mode="wait">
                    {activeMeasure ? (
                        <motion.div
                            key={activeMeasure}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            className={`w-32 h-32 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.5)] ${measures.find(m => m.id === activeMeasure)?.color}`}
                        >
                            {(() => {
                                const MeasureIcon = measures.find(m => m.id === activeMeasure)?.icon;
                                return MeasureIcon ? <MeasureIcon className="w-12 h-12 text-white" /> : null;
                            })()}
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0.5 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="w-32 h-32 rounded-full bg-slate-800 flex items-center justify-center border-4 border-slate-700"
                        >
                            <span className="text-xs text-slate-400 text-center px-2">Selecciona una medida</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Measures Grid */}
            <div className="grid md:grid-cols-3 gap-4 w-full max-w-4xl">
                {measures.map((measure) => (
                    <button
                        key={measure.id}
                        onClick={() => setActiveMeasure(activeMeasure === measure.id ? null : measure.id)}
                        className={`p-6 rounded-xl border flex flex-col items-center text-center transition-all hover:-translate-y-1 ${activeMeasure === measure.id
                                ? `bg-slate-800 border-white/20 ring-2 ring-${measure.color.split('-')[1]}-500`
                                : "bg-slate-900 border-slate-800 hover:border-slate-600"
                            }`}
                    >
                        <div className={`p-3 rounded-full mb-4 ${measure.color} bg-opacity-20`}>
                            <measure.icon className={`w-6 h-6 ${measure.color.replace('bg-', 'text-')}`} />
                        </div>
                        <h4 className="font-bold text-white mb-2">{measure.label}</h4>
                        <p className="text-xs text-slate-400 leading-relaxed">{measure.desc}</p>
                    </button>
                ))}
            </div>

            <button
                onClick={() => setActiveMeasure(null)}
                className="flex items-center gap-2 text-xs text-slate-500 hover:text-white transition-colors"
            >
                <RefreshCw className="w-3 h-3" /> Resetear simulación
            </button>
        </div>
    );
}
