"use client";

import { motion } from "framer-motion";
import { AlertTriangle, ShieldAlert, Eye, CheckCircle } from "lucide-react";

export function RiskTrafficLight() {
    const levels = [
        {
            color: "bg-red-500",
            icon: <AlertTriangle className="w-5 h-5 text-white" />,
            title: "Riesgo Inaceptable",
            desc: "Prohibido (manipulación, social scoring)",
            borderColor: "border-red-600"
        },
        {
            color: "bg-orange-500",
            icon: <ShieldAlert className="w-5 h-5 text-white" />,
            title: "Alto Riesgo",
            desc: "Regulado estrictamente (biometría, infraestructuras)",
            borderColor: "border-orange-600"
        },
        {
            color: "bg-yellow-400",
            icon: <Eye className="w-5 h-5 text-yellow-900" />,
            title: "Riesgo Limitado",
            desc: "Obligación de transparencia (chatbots, deepfakes)",
            borderColor: "border-yellow-500"
        },
        {
            color: "bg-emerald-500",
            icon: <CheckCircle className="w-5 h-5 text-white" />,
            title: "Riesgo Mínimo",
            desc: "Sin restricciones adicionales (spam filters, juegos)",
            borderColor: "border-emerald-600"
        }
    ];

    return (
        <div className="my-8 max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-800 mb-4 text-center">Pirámide de Riesgos de la IA</h3>
            <div className="flex flex-col space-y-3">
                {levels.map((level, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex items-center p-4 rounded-lg border-l-4 ${level.borderColor} bg-slate-50 hover:bg-slate-100 transition-colors`}
                    >
                        <div className={`p-2 rounded-full ${level.color} shadow-sm mr-4`}>
                            {level.icon}
                        </div>
                        <div>
                            <span className="block font-bold text-slate-700">{level.title}</span>
                            <span className="text-sm text-slate-500">{level.desc}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
