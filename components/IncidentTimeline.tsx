"use client";

import { motion } from "framer-motion";
import { AlertCircle, Clock, CheckCircle, FileText } from "lucide-react";

const steps = [
    {
        time: "T+0",
        label: "Detección",
        desc: "Se identifica un fallo grave (ej. accidente con daños personales).",
        icon: AlertCircle,
        color: "bg-red-500"
    },
    {
        time: "T+2h",
        label: "Análisis Inicial",
        desc: "El equipo determina si hay nexo causal con la IA.",
        icon: FileText,
        color: "bg-orange-500"
    },
    {
        time: "T+15d",
        label: "Notificación Límite",
        desc: "Plazo máximo legal para informar a la autoridad (15 días). Si hay muerte: 10 días.",
        icon: Clock,
        color: "bg-yellow-500"
    },
    {
        time: "Futuro",
        label: "Corrección",
        desc: "Implementación de parches y actualización de gestión de riesgos.",
        icon: CheckCircle,
        color: "bg-indigo-500"
    }
];

export function IncidentTimeline() {
    return (
        <div className="w-full py-10 relative overflow-hidden">
            {/* Background Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-800 -translate-y-1/2 z-0 hidden md:block" />

            <div className="grid md:grid-cols-4 gap-8 relative z-10">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="flex flex-col items-center text-center group"
                    >
                        {/* Circle */}
                        <div className={`
                            w-16 h-16 rounded-full flex items-center justify-center mb-4 relative
                            ${step.color} shadow-lg ring-4 ring-slate-900 group-hover:scale-110 transition-transform
                        `}>
                            <step.icon className="text-white w-8 h-8" />
                            <div className="absolute -top-10 text-xs font-mono font-bold text-slate-500 bg-slate-900 px-2 py-1 rounded">
                                {step.time}
                            </div>
                        </div>

                        {/* Card */}
                        <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 w-full hover:border-indigo-500/50 transition-colors">
                            <h4 className="font-bold text-white mb-2 text-sm uppercase tracking-wide">
                                {step.label}
                            </h4>
                            <p className="text-xs text-slate-400 leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-8 text-center bg-slate-900/50 p-4 rounded-lg border border-slate-800 text-xs text-slate-500">
                <span className="text-yellow-500 font-bold">Nota:</span> Los plazos se reducen drásticamente (a 2 días) si existe una "Amenaza Inminente".
            </div>
        </div>
    );
}
