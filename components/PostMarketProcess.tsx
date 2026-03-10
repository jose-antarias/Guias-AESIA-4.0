"use client";

import { motion } from "framer-motion";
import { Search, BarChart2, ShieldCheck, RefreshCw } from "lucide-react";

const cycle = [
    {
        id: 1,
        title: "Recopilación",
        icon: Search,
        desc: "Datos de uso real y feedback de usuarios.",
        color: "bg-blue-500"
    },
    {
        id: 2,
        title: "Análisis",
        icon: BarChart2,
        desc: "Detección de patrones de error o sesgos emergentes.",
        color: "bg-purple-500"
    },
    {
        id: 3,
        title: "Acción",
        icon: ShieldCheck,
        desc: "Corrección de fallos y actualización de seguridad.",
        color: "bg-emerald-500"
    },
    {
        id: 4,
        title: "Mejora",
        icon: RefreshCw,
        desc: "Actualización del sistema de gestión de riesgos.",
        color: "bg-orange-500"
    }
];

export function PostMarketProcess() {
    return (
        <div className="w-full py-12 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
                {/* Center Content */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center">
                        <h4 className="font-bold text-white text-lg">Vigilancia<br />Continua</h4>
                        <span className="text-xs text-slate-400">Ciclo Infinito</span>
                    </div>
                </div>

                {/* Orbiting Items */}
                {cycle.map((item, index) => {
                    const angle = (index * 360) / cycle.length;
                    const radius = 140; // distance from center

                    return (
                        <motion.div
                            key={item.id}
                            className="absolute top-1/2 left-1/2 w-48 -ml-24 -mt-16" // Center the item container
                            style={{
                                transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`
                            }}
                        >
                            <div className="flex flex-col items-center text-center bg-slate-900 border border-slate-700 p-3 rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer">
                                <div className={`p-2 rounded-full mb-2 ${item.color} bg-opacity-20`}>
                                    <item.icon className={`w-5 h-5 ${item.color.replace('bg-', 'text-')}`} />
                                </div>
                                <h5 className="font-bold text-white text-xs mb-1">{item.title}</h5>
                                <p className="text-[10px] text-slate-400 leading-tight">{item.desc}</p>
                            </div>
                        </motion.div>
                    );
                })}

                {/* Connecting Circle - Decorative */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1" className="text-indigo-500" />
                </svg>
            </div>
        </div>
    );
}
