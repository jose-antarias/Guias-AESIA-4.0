"use client";

import { motion } from "framer-motion";
import { List, Lock, Clock, Database, ArrowRight } from "lucide-react";

export function LogChain() {
    return (
        <div className="w-full py-10 flex flex-col items-center space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">Cadena de Trazabilidad (Logs)</h3>

            <div className="flex flex-col md:flex-row gap-4 w-full justify-center items-center">
                {/* Log Entry 1: Input */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col bg-slate-800 p-4 rounded-xl border border-slate-700 w-64 shadow-lg hover:border-indigo-500 transition-colors"
                >
                    <div className="flex justify-between items-center mb-2 border-b border-slate-700 pb-2">
                        <span className="text-xs text-slate-400 font-mono">ID: x892-IN</span>
                        <Clock className="w-3 h-3 text-slate-500" />
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="bg-blue-500/10 p-2 rounded text-blue-400">
                            <Database className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-white">Entrada de Datos</h4>
                            <p className="text-xs text-slate-400">Biometría recibida</p>
                        </div>
                    </div>
                </motion.div>

                <ArrowRight className="text-slate-600 w-6 h-6 hidden md:block" />

                {/* Log Entry 2: Process */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col bg-slate-800 p-4 rounded-xl border border-slate-700 w-64 shadow-lg hover:border-indigo-500 transition-colors"
                >
                    <div className="flex justify-between items-center mb-2 border-b border-slate-700 pb-2">
                        <span className="text-xs text-slate-400 font-mono">ID: x892-PR</span>
                        <Clock className="w-3 h-3 text-slate-500" />
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="bg-purple-500/10 p-2 rounded text-purple-400">
                            <List className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-white">Procesamiento</h4>
                            <p className="text-xs text-slate-400">Comparación 98%</p>
                        </div>
                    </div>
                </motion.div>

                <ArrowRight className="text-slate-600 w-6 h-6 hidden md:block" />

                {/* Log Entry 3: Decision */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col bg-slate-800 p-4 rounded-xl border border-emerald-500/30 w-64 shadow-lg hover:border-emerald-500 transition-colors"
                >
                    <div className="flex justify-between items-center mb-2 border-b border-slate-700 pb-2">
                        <span className="text-xs text-slate-400 font-mono">ID: x892-OUT</span>
                        <Lock className="w-3 h-3 text-emerald-500" />
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="bg-emerald-500/10 p-2 rounded text-emerald-400">
                            <Lock className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-emerald-300">Decisión Final</h4>
                            <p className="text-xs text-slate-400">Acceso Concedido</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <p className="text-xs text-slate-500 text-center max-w-md">
                Cada paso se registra de forma inmutable, permitiendo reconstruir el evento en caso de incidente ('Caja Negra').
            </p>
        </div>
    );
}
