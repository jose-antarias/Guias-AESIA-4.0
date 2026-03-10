"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function RiskMatrix() {
    const [selectedCell, setSelectedCell] = useState<number | null>(null);

    return (
        <div className="w-full py-8 space-y-6">

            {/* Let's rebuild grid logic simpler: 2x2 Matrix for demo purposes based on User request context */}
            <div className="relative border-l border-b border-slate-600 ml-8 pb-8">
                <div className="absolute -left-8 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap origin-center">
                    Probabilidad de Ocurrencia
                </div>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
                    Gravedad del Daño
                </div>

                <div className="grid grid-cols-2 grid-rows-2 gap-2 p-2">
                    {/* High Prob, Low Sev */}
                    <RiskCell
                        label="Riesgo Alto"
                        sub="Prob. Alta / Grav. Baja"
                        color="bg-orange-500"
                        textColor="text-orange-950"
                        detail="Requiere medidas de mitigación técnica y organizativa."
                    />

                    {/* High Prob, High Sev */}
                    <RiskCell
                        label="Riesgo Inaceptable"
                        sub="Prob. Alta / Grav. Alta"
                        color="bg-red-500"
                        textColor="text-red-950"
                        detail="El sistema no puede operar en estas condiciones (Prohibido?)"
                    />

                    {/* Low Prob, Low Sev */}
                    <RiskCell
                        label="Riesgo Bajo"
                        sub="Prob. Baja / Grav. Baja"
                        color="bg-emerald-500"
                        textColor="text-emerald-950"
                        detail="No requiere acción inmediata, solo monitorización."
                    />

                    {/* Low Prob, High Sev */}
                    <RiskCell
                        label="Riesgo Moderado"
                        sub="Prob. Baja / Grav. Alta"
                        color="bg-yellow-500"
                        textColor="text-yellow-950"
                        detail="Requiere planes de contingencia y supervisión humana."
                    />
                </div>
            </div>
        </div>
    );
}

function RiskCell({ label, sub, color, textColor, detail }: any) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            layout
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
                "relative rounded-lg p-4 cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]",
                color,
                isOpen ? "col-span-2 row-span-2 z-10 shadow-2xl ring-4 ring-white/20" : ""
            )}
        >
            <div className={cn("font-bold text-sm", textColor)}>{label}</div>
            <div className={cn("text-[10px] opacity-80 uppercase tracking-wider", textColor)}>{sub}</div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="mt-4 pt-4 border-t border-black/10"
                    >
                        <div className={cn("text-xs leading-relaxed font-medium", textColor)}>
                            {detail}
                        </div>
                        <div className="mt-2 text-[10px] italic opacity-75">
                            *Click para cerrar
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}
