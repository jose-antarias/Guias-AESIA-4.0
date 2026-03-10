"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";

const examples = [
    { text: "Un filtro de spam (correo electrónico)", category: "Mínimo" },
    { text: "Un chatbot de atención al cliente", category: "Limitado" },
    { text: "Un sistema de puntuación social (social scoring)", category: "Inaceptable (Prohibido)" },
    { text: "Un software para selección de CV en una empresa", category: "Alto" },
    { text: "Generador de deepfakes", category: "Limitado" },
    { text: "Categorización biométrica sensible", category: "Inaceptable (Prohibido)" },
];

const levels = [
    { name: "Prohibido", color: "bg-red-100 hover:bg-red-200 text-red-700 font-bold", border: "border-red-400" },
    { name: "Alto", color: "bg-orange-100 hover:bg-orange-200 text-orange-700 font-bold", border: "border-orange-400" },
    { name: "Limitado", color: "bg-yellow-100 hover:bg-yellow-200 text-yellow-700 font-bold", border: "border-yellow-400" },
    { name: "Mínimo", color: "bg-emerald-100 hover:bg-emerald-200 text-emerald-700 font-bold", border: "border-emerald-400" },
];

export function RiskClassifier() {
    const [currentExample, setCurrentExample] = useState(0);
    const [status, setStatus] = useState<"pending" | "correct" | "incorrect">("pending");
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);

    const handleAnswer = (level: string) => {
        if (finished) return;

        const correctCategory = examples[currentExample].category;

        let isCorrect = false;
        if (level === "Prohibido" && correctCategory === "Inaceptable (Prohibido)") isCorrect = true;
        if (level === "Alto" && correctCategory === "Alto") isCorrect = true;
        if (level === "Limitado" && correctCategory === "Limitado") isCorrect = true;
        if (level === "Mínimo" && correctCategory === "Mínimo") isCorrect = true;

        if (isCorrect) {
            setStatus("correct");
            setScore(prev => prev + 1);
        } else {
            setStatus("incorrect");
        }

        setTimeout(() => {
            if (currentExample < examples.length - 1) {
                setCurrentExample(prev => prev + 1);
                setStatus("pending");
            } else {
                setFinished(true);
            }
        }, 1200);
    };

    if (finished) {
        return (
            <div className="my-8 max-w-lg mx-auto p-8 bg-blue-50 text-center rounded-xl border border-blue-200 shadow-md">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">🏆 ¡Actividad Completada!</h3>
                <p className="text-lg text-blue-700 mb-2 font-medium">
                    Has conseguido identificar:
                </p>
                <div className="text-5xl font-black text-blue-600 mb-4">{score} / {examples.length}</div>
                <p className="text-sm text-blue-500 italic">"¡Dominas los niveles de riesgo!"</p>
                <button
                    onClick={() => {
                        setScore(0);
                        setCurrentExample(0);
                        setFinished(false);
                    }}
                    className="mt-6 px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                >
                    Reiniciar
                </button>
            </div>
        );
    }

    return (
        <div className="my-8 max-w-lg mx-auto bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-slate-100">
                <motion.div
                    className="h-full bg-blue-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentExample) / examples.length) * 100}%` }}
                />
            </div>

            <div className="p-8 pb-4">
                <h3 className="text-sm uppercase tracking-wider text-slate-400 font-bold mb-2 text-center">
                    Clasificador de Riesgos
                </h3>
                <div className="h-24 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.h4
                            key={currentExample}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-xl font-bold text-slate-800 text-center leading-snug"
                        >
                            "{examples[currentExample].text}"
                        </motion.h4>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center mt-2 mb-6 h-6">
                    {status === "correct" && (
                        <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center text-emerald-600 font-bold bg-emerald-50 px-3 py-1 rounded-full text-sm">
                            <Check className="w-4 h-4 mr-1" /> ¡Correcto!
                        </motion.span>
                    )}
                    {status === "incorrect" && (
                        <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center text-red-600 font-bold bg-red-50 px-3 py-1 rounded-full text-sm">
                            <X className="w-4 h-4 mr-1" /> Incorrecto ({examples[currentExample].category})
                        </motion.span>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3 p-6 bg-slate-50 border-t border-slate-100">
                {levels.map((level) => (
                    <button
                        key={level.name}
                        onClick={() => handleAnswer(level.name)}
                        disabled={status !== "pending"}
                        className={`py-3 px-4 rounded-lg border-2 ${level.border} ${level.color} transition-transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:pointer-events-none shadow-sm`}
                    >
                        {level.name}
                    </button>
                ))}
            </div>
        </div>
    );
}
