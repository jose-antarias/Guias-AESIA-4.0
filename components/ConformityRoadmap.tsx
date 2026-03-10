"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileCheck, Scale, ShieldCheck, ClipboardList, PenTool, Database } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
    {
        id: "step1",
        title: "1. Clasificación",
        icon: Scale,
        description: "Determinar si el sistema de IA es de Alto Riesgo según el Anexo III o está prohibido.",
        details: "El primer paso crítico es consultar los anexos del Reglamento para clasificar correctamente el sistema. Si no es de alto riesgo, la mayoría de estas obligaciones no aplican."
    },
    {
        id: "step2",
        title: "2. Procedimiento",
        icon: FileCheck,
        description: "Elegir el procedimiento de evaluación: Control Interno vs. Organismo Notificado.",
        details: "Si existen y se aplican Normas Armonizadas, el proveedor puede optar por el Control Interno (autoevaluación). Si no, o para biometría, se requiere un tercero (Organismo Notificado)."
    },
    {
        id: "step3",
        title: "3. Documentación",
        icon: ClipboardList,
        description: "Elaborar la Documentación Técnica y establecer el Sistema de Gestión de Calidad.",
        details: "Se debe compilar toda la evidencia técnica que demuestre la conformidad y mantener un sistema de gestión de calidad robusto para garantizar el cumplimiento continuo."
    },
    {
        id: "step4",
        title: "4. Declaración UE",
        icon: PenTool,
        description: "Redactar y firmar la Declaración UE de Conformidad.",
        details: "Documento legal donde el proveedor asume la plena responsabilidad de que el sistema cumple con todos los requisitos del Reglamento Europeo de IA."
    },
    {
        id: "step5",
        title: "5. Marcado CE",
        icon: ShieldCheck,
        description: "Colocar el marcado CE de forma visible, legible e indeleble.",
        details: "El marcado CE indica visualmente que el sistema es conforme y permite su libre circulación en el mercado europeo."
    },
    {
        id: "step6",
        title: "6. Registro",
        icon: Database,
        description: "Inscribir el sistema en la base de datos de la UE.",
        details: "Antes de la puesta en el mercado, el sistema de alto riesgo debe registrarse en la base de datos pública gestionada por la Comisión Europea."
    }
];

export function ConformityRoadmap() {
    const [activeStep, setActiveStep] = useState<number | null>(null);

    return (
        <div className="w-full relative py-10">
            {/* Connecting Line */}
            <div className="absolute left-[19px] md:left-1/2 top-10 bottom-10 w-0.5 bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-emerald-500/50 md:-translate-x-1/2" />

            <div className="space-y-12">
                {steps.map((step, index) => {
                    const isActive = activeStep === index;
                    const isEven = index % 2 === 0;

                    return (
                        <div
                            key={step.id}
                            className={cn(
                                "relative flex items-center md:justify-center group",
                                // On mobile, content is always right of the line. On desktop, alternates.
                            )}
                        >
                            {/* Dot on the line */}
                            <button
                                onClick={() => setActiveStep(isActive ? null : index)}
                                className={cn(
                                    "absolute left-0 md:left-1/2 w-10 h-10 rounded-full border-4 z-10 flex items-center justify-center transition-all duration-300 md:-translate-x-1/2",
                                    isActive
                                        ? "bg-slate-900 border-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.5)] scale-110"
                                        : "bg-slate-900 border-slate-700 group-hover:border-indigo-400"
                                )}
                            >
                                <step.icon className={cn(
                                    "w-4 h-4 transition-colors",
                                    isActive ? "text-indigo-400" : "text-slate-500 group-hover:text-indigo-300"
                                )} />
                            </button>

                            {/* Content Card */}
                            <div className={cn(
                                "ml-16 md:ml-0 w-full md:w-[45%]",
                                // Desktop positioning: Even steps left, Odd steps right
                                isEven ? "md:mr-auto md:pr-12 md:text-right" : "md:ml-auto md:pl-12 md:text-left"
                            )}>
                                <motion.div
                                    layout
                                    onClick={() => setActiveStep(isActive ? null : index)}
                                    className={cn(
                                        "p-6 rounded-xl border backdrop-blur-sm cursor-pointer transition-all duration-300",
                                        isActive
                                            ? "bg-slate-800/80 border-indigo-500/50 shadow-xl"
                                            : "bg-slate-900/40 border-slate-800 hover:bg-slate-800/60 hover:border-slate-700"
                                    )}
                                >
                                    <h3 className={cn(
                                        "text-lg font-bold mb-2 transition-colors",
                                        isActive ? "text-white" : "text-indigo-200"
                                    )}>
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-slate-400 leading-relaxed">
                                        {step.description}
                                    </p>

                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                                animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                                                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className={cn(
                                                    "pt-4 border-t border-slate-700/50 text-sm",
                                                    isEven ? "md:text-right" : "md:text-left" // Keep text aligned with container on desktop
                                                )}>
                                                    <p className="text-indigo-100">{step.details}</p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
