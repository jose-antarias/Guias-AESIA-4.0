"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info, X, MessageCircle, AlertCircle } from "lucide-react";

export function TransparencyInfo() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full py-10 relative">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Ejemplo: Chatbot de Atención al Cliente</h3>

            <div className="relative max-w-sm mx-auto bg-slate-100 rounded-3xl shadow-xl overflow-hidden border-8 border-slate-900 aspect-[9/16]">

                {/* Header */}
                <div className="bg-indigo-600 p-4 text-white flex items-center justify-between">
                    <span className="font-bold text-sm">Soporte Virtual</span>
                    <button onClick={() => setIsOpen(!isOpen)} className="p-1 hover:bg-white/20 rounded-full transition-colors">
                        <Info className="w-5 h-5" />
                    </button>
                </div>

                {/* Chat Area */}
                <div className="p-4 space-y-4 h-full bg-slate-50">
                    <div className="flex gap-2">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">🤖</div>
                        <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-slate-600 max-w-[80%]">
                            Hola! Soy un asistente virtual automatizado. ¿En qué puedo ayudarte hoy?
                        </div>
                    </div>

                    <div className="flex gap-2 flex-row-reverse">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">User</div>
                        <div className="bg-emerald-500 text-white p-3 rounded-2xl rounded-tr-none shadow-sm text-sm max-w-[80%]">
                            Quiero reclamar una factura.
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">🤖</div>
                        <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-slate-600 max-w-[80%]">
                            Entendido. Para procesar tu reclamación necesitaré tu número de contrato. Recuerda que estás hablando con una IA, no con un humano.
                        </div>
                    </div>
                </div>

                {/* Transparency Modal Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm p-6 flex flex-col justify-center items-center text-center z-20"
                        >
                            <div className="bg-white w-full rounded-xl p-6 shadow-2xl relative">
                                <button onClick={() => setIsOpen(false)} className="absolute top-2 right-2 p-1 hover:bg-slate-100 rounded-full text-slate-400">
                                    <X className="w-5 h-5" />
                                </button>

                                <div className="flex justify-center mb-4">
                                    <div className="p-3 bg-indigo-100 rounded-full text-indigo-600">
                                        <AlertCircle className="w-8 h-8" />
                                    </div>
                                </div>

                                <h4 className="font-bold text-slate-900 mb-2">Información de Transparencia</h4>
                                <p className="text-xs text-slate-500 mb-4">Conforme al Artículo 50 del Reglamento de IA</p>

                                <ul className="text-left text-sm space-y-2 text-slate-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-indigo-500 font-bold">•</span>
                                        <span>Estás interactuando con un sistema de Inteligencia Artificial.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-indigo-500 font-bold">•</span>
                                        <span>Este sistema no tiene capacidad de decisión final sobre tu contrato.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-indigo-500 font-bold">•</span>
                                        <span>Tienes derecho a solicitar intervención humana en cualquier momento.</span>
                                    </li>
                                </ul>

                                <button onClick={() => setIsOpen(false)} className="mt-6 w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium text-sm transition-colors">
                                    Entendido
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <p className="text-center text-slate-400 text-sm mt-6 max-w-md mx-auto">
                Haz clic en el icono de información "i" del chat para ver cómo se cumple la obligación de transparencia.
            </p>
        </div>
    );
}
