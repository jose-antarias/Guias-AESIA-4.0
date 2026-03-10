"use client";

import { motion } from "framer-motion";
import { Database, Filter, Sliders, CheckSquare, Layers } from "lucide-react";

const steps = [
    {
        id: "collection",
        icon: Database,
        title: "Recopilación",
        desc: "Identificación de fuentes y requisitos de datos. Debe haber un propósito claro."
    },
    {
        id: "prep",
        icon: Filter,
        title: "Preparación",
        desc: "Etiquetado, limpieza, agregación y anonimización de datos."
    },
    {
        id: "training",
        icon: Sliders,
        title: "Entrenamiento",
        desc: "Ajuste de parámetros del modelo usando datos de entrenamiento limpios."
    },
    {
        id: "validation",
        icon: CheckSquare,
        title: "Validación y Prueba",
        desc: "Uso de conjuntos de datos *disjuntos* para evaluar y evitar el sobreajuste."
    }
];

export function DataGovernance() {
    return (
        <div className="w-full py-10 relative">
            <div className="absolute left-[39px] top-10 bottom-10 w-0.5 bg-slate-700 md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-12">
                {steps.map((step, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={`flex items-center ${isEven ? 'md:flex-row-reverse' : ''} group`}
                        >
                            {/* Card Content */}
                            <div className="flex-1 md:w-1/2">
                                <div className={`p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-indigo-500/50 transition-colors ${isEven ? 'md:mr-12 ml-20 md:ml-0' : 'md:ml-12 ml-20'}`}>
                                    <h3 className="font-bold text-lg text-white mb-2 flex items-center gap-2">
                                        <step.icon className="w-5 h-5 text-indigo-400" />
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-slate-400 leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>

                            {/* Timeline Node */}
                            <div className="absolute left-[30px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-slate-900 border-2 border-indigo-500 z-10 shadow-[0_0_10px_rgba(99,102,241,0.5)] group-hover:scale-125 transition-transform" />

                            {/* Spacer for other side */}
                            <div className="hidden md:block flex-1 md:w-1/2" />
                        </motion.div>
                    );
                })}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-12 text-center p-4 bg-indigo-500/10 rounded-lg border border-indigo-500/20 text-indigo-200 text-sm italic"
            >
                <Layers className="w-4 h-4 inline-block mr-2" />
                La calidad de los datos determina la calidad de la IA. "Basura entra, basura sale."
            </motion.div>
        </div>
    );
}
