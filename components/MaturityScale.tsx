"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Gauge, CheckCircle2 } from "lucide-react";

const levels = [
    { value: 0, label: "No documentada", color: "text-slate-500", bg: "bg-slate-500", desc: "No existe ninguna evidencia." },
    { value: 1, label: "Documentada", color: "text-red-500", bg: "bg-red-500", desc: "Existe documentación pero no implantación sistemática." },
    { value: 2, label: "Implantada", color: "text-orange-500", bg: "bg-orange-500", desc: "Se aplica en la práctica diaria." },
    { value: 3, label: "Monitorizada", color: "text-yellow-500", bg: "bg-yellow-500", desc: "Se revisa periódicamente su cumplimiento." },
    { value: 4, label: "Auditada", color: "text-emerald-500", bg: "bg-emerald-500", desc: "Un tercero independiente verifica la conformidad." }
];

export function MaturityScale() {
    const [currentLevel, setCurrentLevel] = useState(0);

    return (
        <div className="w-full py-10 flex flex-col items-center">
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
                <Gauge className="w-6 h-6 text-indigo-400" />
                Niveles de Madurez (Checklist)
            </h3>

            {/* Scale Visual */}
            <div className="relative w-full max-w-lg h-12 bg-slate-800 rounded-full mb-8 flex items-center px-2 shadow-inner">
                {/* Background Track */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-emerald-500 opacity-20"
                        initial={{ width: 0 }}
                        animate={{ width: `${(currentLevel / 4) * 100}%` }}
                    />
                </div>

                {/* Nodes */}
                <div className="w-full flex justify-between relative z-10 px-2">
                    {levels.map((lvl) => (
                        <button
                            key={lvl.value}
                            onClick={() => setCurrentLevel(lvl.value)}
                            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all border-2 ${currentLevel >= lvl.value
                                    ? "bg-white border-white scale-110 shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                                    : "bg-slate-700 border-slate-600 hover:border-slate-400"
                                }`}
                        >
                            {currentLevel >= lvl.value && <CheckCircle2 className={`w-5 h-5 ${levels[currentLevel].color}`} />}
                        </button>
                    ))}
                </div>
            </div>

            {/* Description Card */}
            <motion.div
                key={currentLevel}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-900 border border-slate-700 p-6 rounded-xl text-center max-w-md w-full"
            >
                <div className={`text-4xl font-bold mb-2 ${levels[currentLevel].color}`}>
                    Nivel {currentLevel}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{levels[currentLevel].label}</h4>
                <p className="text-slate-400">{levels[currentLevel].desc}</p>
            </motion.div>
        </div>
    );
}
