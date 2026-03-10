"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Shield, Lock, Unlock, AlertTriangle, Play, BrainCircuit, Terminal, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ESCAPE_ROOM_LEVELS, type EscapeRoomLevel, type EscapeRoomStage } from "@/lib/escapeRoomData";

export default function EscapeRoomGame() {
    const [gameState, setGameState] = useState<"menu" | "intro" | "playing" | "won" | "lost">("menu");
    const [selectedLevelId, setSelectedLevelId] = useState<string | null>(null);
    const [currentStageIndex, setCurrentStageIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(0);
    const [feedback, setFeedback] = useState<"none" | "correct" | "incorrect">("none");

    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const currentLevel = ESCAPE_ROOM_LEVELS.find(l => l.id === selectedLevelId);
    const currentStage = currentLevel?.stages[currentStageIndex];

    const startGame = (levelId: string) => {
        const level = ESCAPE_ROOM_LEVELS.find(l => l.id === levelId);
        if (!level) return;

        setSelectedLevelId(levelId);
        setGameState("intro");
    };

    const confirmStart = () => {
        if (!currentLevel) return;
        setTimeLeft(currentLevel.timeLimit);
        setCurrentStageIndex(0);
        setFeedback("none");
        setGameState("playing");

        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    endGame("lost");
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    const endGame = (result: "won" | "lost") => {
        if (timerRef.current) clearInterval(timerRef.current);
        setGameState(result);
    };

    const handleAnswer = (optionIndex: number) => {
        if (!currentStage || feedback !== "none") return;

        if (optionIndex === currentStage.correctAnswer) {
            setFeedback("correct");
            setTimeout(() => {
                setFeedback("none");
                if (currentStageIndex < (currentLevel?.stages.length || 0) - 1) {
                    setCurrentStageIndex(prev => prev + 1);
                } else {
                    endGame("won");
                }
            }, 1000);
        } else {
            setFeedback("incorrect");
            // Penalty
            setTimeLeft(prev => Math.max(0, prev - (currentLevel?.penalty || 0)));
            setTimeout(() => {
                setFeedback("none");
            }, 1000);
        }
    };

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    return (
        <div className="w-full max-w-5xl mx-auto min-h-[600px] flex flex-col items-center justify-center p-4">

            {/* MENU SCANNER */}
            {gameState === "menu" && (
                <div className="w-full space-y-8">
                    <div className="text-center space-y-4">
                        <Terminal className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
                            Sala de escape <span className="text-emerald-500">digital</span>
                        </h1>
                        <p className="text-slate-400 max-w-xl mx-auto text-lg">
                            Selecciona tu nivel de acreditación. Resuelve los incidentes críticos antes de que el tiempo expire.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {ESCAPE_ROOM_LEVELS.map(level => (
                            <motion.div
                                key={level.id}
                                whileHover={{ scale: 1.05 }}
                                className="relative group cursor-pointer"
                                onClick={() => startGame(level.id)}
                            >
                                <div className={cn(
                                    "absolute inset-0 bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-lg",
                                    level.id === "easy" ? "from-emerald-500/20 to-teal-500/20" :
                                        level.id === "medium" ? "from-amber-500/20 to-orange-500/20" :
                                            "from-red-600/20 to-rose-600/20"
                                )} />
                                <Card className="relative bg-slate-900 border-slate-700 h-full p-6 flex flex-col gap-4 hover:border-slate-500 transition-colors">
                                    <div className="flex justify-between items-start">
                                        <div className={cn(
                                            "w-10 h-10 rounded-lg flex items-center justify-center",
                                            level.id === "easy" ? "bg-emerald-500/10 text-emerald-500" :
                                                level.id === "medium" ? "bg-amber-500/10 text-amber-500" :
                                                    "bg-red-500/10 text-red-500"
                                        )}>
                                            {level.id === "easy" ? <Shield className="w-6 h-6" /> :
                                                level.id === "medium" ? <AlertTriangle className="w-6 h-6" /> :
                                                    <BrainCircuit className="w-6 h-6" />}
                                        </div>
                                        <div className="px-3 py-1 rounded-full bg-slate-800 text-xs font-mono text-slate-300">
                                            {formatTime(level.timeLimit)}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className={cn("text-xl font-bold mb-2",
                                            level.id === "easy" ? "text-emerald-400" :
                                                level.id === "medium" ? "text-amber-400" :
                                                    "text-red-400"
                                        )}>{level.title}</h3>
                                        <p className="text-sm text-slate-400 leading-relaxed">
                                            {level.description}
                                        </p>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}

            {/* INTRO SCREEN */}
            {gameState === "intro" && currentLevel && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-2xl w-full bg-slate-900/80 backdrop-blur-xl border border-slate-700 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50" />

                    <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-wide">
                        Informe de misión: <span className="text-emerald-400">{currentLevel.title}</span>
                    </h2>

                    <div className="prose prose-invert max-w-none mb-8">
                        <p className="text-lg text-slate-200 leading-relaxed whitespace-pre-line border-l-4 border-emerald-500/50 pl-6 py-2 bg-emerald-900/10 rounded-r-lg">
                            {currentLevel.storyIntro}
                        </p>
                    </div>

                    <div className="flex justify-between items-center text-sm font-mono text-slate-400 mb-8 bg-slate-800/50 p-4 rounded-xl">
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-emerald-500" />
                            <span>Tiempo límite: {formatTime(currentLevel.timeLimit)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-red-500" />
                            <span>Penalización: -{currentLevel.penalty}s</span>
                        </div>
                    </div>

                    <Button onClick={confirmStart} size="lg" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold h-14 text-lg rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all">
                        Iniciar misión <Play className="w-5 h-5 ml-2 fill-current" />
                    </Button>
                </motion.div>
            )}

            {/* GAMEPLAY SCREEN */}
            {gameState === "playing" && currentLevel && currentStage && (
                <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Sidebar / HUD */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-slate-900 border border-slate-700 p-6 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden">
                            <div className={cn(
                                "absolute inset-0 opacity-10 pointer-events-none transition-colors duration-500",
                                timeLeft < 60 ? "bg-red-500 animate-pulse" : "bg-emerald-500"
                            )} />
                            <span className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">Tiempo restante</span>
                            <div className={cn(
                                "text-5xl font-mono font-black tabular-nums tracking-tighter",
                                timeLeft < 60 ? "text-red-500" : "text-white"
                            )}>
                                {formatTime(timeLeft)}
                            </div>
                        </div>

                        <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-xs font-bold text-slate-500 uppercase">Progreso de la misión</span>
                                <span className="text-xs font-mono text-emerald-400">{currentStageIndex + 1} / {currentLevel.stages.length}</span>
                            </div>
                            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${((currentStageIndex) / currentLevel.stages.length) * 100}%` }}
                                    className="h-full bg-emerald-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-2 space-y-6">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentStage.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="bg-slate-900 border border-slate-700 p-8 rounded-3xl shadow-xl relative overflow-hidden"
                            >
                                {/* Feedback Overlay */}
                                {feedback !== "none" && (
                                    <div className={cn(
                                        "absolute inset-0 z-20 flex items-center justify-center backdrop-blur-sm transition-colors duration-300",
                                        feedback === "correct" ? "bg-emerald-500/20" : "bg-red-500/20"
                                    )}>
                                        <motion.div
                                            initial={{ scale: 0.5, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            className={cn(
                                                "p-6 rounded-2xl border-2 shadow-2xl flex items-center gap-4 bg-slate-900",
                                                feedback === "correct" ? "border-emerald-500 text-emerald-400" : "border-red-500 text-red-500"
                                            )}
                                        >
                                            {feedback === "correct" ? (
                                                <>
                                                    <CheckCircle2 className="w-12 h-12" />
                                                    <div className="text-2xl font-black uppercase">¡Acceso concedido!</div>
                                                </>
                                            ) : (
                                                <>
                                                    <XCircle className="w-12 h-12" />
                                                    <div className="text-2xl font-black uppercase">¡Error de sistema!</div>
                                                </>
                                            )}
                                        </motion.div>
                                    </div>
                                )}

                                <div className="mb-6">
                                    <div className="text-emerald-500 font-mono text-xs mb-2">LOG: ENTRY_{currentStage.id.toUpperCase()}</div>
                                    <h3 className="text-xl font-bold text-slate-200 mb-4 font-mono leading-relaxed border-l-2 border-slate-700 pl-4 py-1">
                                        "{currentStage.storySegment}"
                                    </h3>
                                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                                        <h4 className="text-lg font-semibold text-white mb-4">
                                            {currentStage.question}
                                        </h4>
                                        <div className="space-y-3">
                                            {currentStage.options.map((opt, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => handleAnswer(idx)}
                                                    disabled={feedback !== "none"}
                                                    className="w-full p-4 text-left rounded-lg bg-slate-800 border border-slate-600 hover:border-emerald-500 hover:bg-slate-750 transition-all text-slate-300 hover:text-white text-sm md:text-base group flex items-center justify-between"
                                                >
                                                    <span>{opt}</span>
                                                    <div className="w-3 h-3 rounded-full border border-slate-500 group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-colors" />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            )}

            {/* END SCREENS */}
            {(gameState === "won" || gameState === "lost") && currentLevel && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-2xl w-full bg-slate-900 border border-slate-700 p-12 rounded-3xl shadow-2xl text-center space-y-8"
                >
                    {gameState === "won" ? (
                        <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 ring-4 ring-emerald-500/10">
                            <Unlock className="w-12 h-12 text-emerald-500" />
                        </div>
                    ) : (
                        <div className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6 ring-4 ring-red-500/10">
                            <Lock className="w-12 h-12 text-red-500" />
                        </div>
                    )}

                    <div>
                        <h2 className={cn("text-4xl font-black mb-4 uppercase", gameState === "won" ? "text-emerald-400" : "text-red-400")}>
                            {gameState === "won" ? "Misión cumplida" : "Fallo crítico"}
                        </h2>
                        <p className="text-lg text-slate-300 leading-relaxed max-w-lg mx-auto">
                            {gameState === "won" ? currentLevel.storyOutro : "El tiempo se ha agotado. El sistema ha colapsado y los daños son irreversibles."}
                        </p>
                    </div>

                    <div className="flex gap-4 justify-center pt-4">
                        <Button variant="outline" onClick={() => setGameState("menu")} className="h-12 border-slate-600 text-slate-300 hover:bg-slate-800">
                            Volver al menú
                        </Button>
                        {gameState === "lost" && (
                            <Button onClick={confirmStart} className="h-12 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8">
                                Reintentar misión
                            </Button>
                        )}
                    </div>
                </motion.div>
            )}

        </div>
    );
}
