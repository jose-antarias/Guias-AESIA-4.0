"use client";

import { useState, use, useEffect } from "react";
import { notFound, useSearchParams } from "next/navigation";
import { getGuides, type Guide } from "@/lib/data";
import { worlds, getMissionsForWorld } from "@/lib/aventuraData";
import { saveWorldProgress } from "@/lib/aventuraStorage";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Shield, Zap, Skull, CheckCircle2, AlertTriangle, ArrowLeft, Target, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Types for Game State
type GameState = "intro" | "block1" | "block2" | "block3" | "boss" | "victory" | "defeat";

export default function GamePage({ params }: { params: Promise<{ worldId: string, missionId: string }> }) {
    const { worldId, missionId } = use(params);
    const searchParams = useSearchParams();
    const guideId = searchParams.get("guide");

    if (!guideId || !worldId || !missionId) return <div className="p-10 text-white">Cargando misión...</div>;

    const guide = getGuides('es').find((g) => g.id === guideId);
    const world = worlds.find((w) => w.id === worldId);

    if (!guide || !world) return <div className="p-10 text-white">Error de datos de misión.</div>;

    return <GameEngine guide={guide} world={world} missionId={missionId} />;
}

function GameEngine({ guide, world, missionId }: { guide: Guide, world: any, missionId: string }) {
    const [gameState, setGameState] = useState<GameState>("intro");
    const [health, setHealth] = useState(100);
    const [progress, setProgress] = useState(0);
    const [currentBlock, setCurrentBlock] = useState(0); // 0 = Intro, 1 = Intel, 2 = Training, 3 = Boss

    // Parse mission index from ID (e.g., "world-00-mission-5")
    const missionIndex = parseInt(missionId.split("-").pop() || "0", 10);

    // Save progress on victory
    useEffect(() => {
        if (gameState === "victory") {
            // Save completed mission count (index + 1)
            saveWorldProgress(world.id, missionIndex + 1);
        }
    }, [gameState, world.id, missionIndex]);

    // Game Logic
    const nextStage = () => {
        if (gameState === "intro") {
            setGameState("block1");
            setCurrentBlock(1);
        } else if (gameState === "block1") {
            setGameState("block2");
            setCurrentBlock(2);
            setProgress(33);
        } else if (gameState === "block2") {
            setGameState("boss");
            setCurrentBlock(3);
            setProgress(66);
        } else if (gameState === "boss") {
            setGameState("victory");
            setProgress(100);
        }
    };

    const takeDamage = (amount: number) => {
        setHealth((prev) => Math.max(0, prev - amount));
        if (health - amount <= 0) {
            setGameState("defeat");
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-emerald-50 font-mono overflow-hidden flex flex-col relative">
            {/* HUD */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 border-b border-indigo-500/30 backdrop-blur-md p-4 flex justify-between items-center shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-4">
                    <Link href={`/aventura/${world.id}`} className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div className="flex flex-col">
                        <span className="text-xs text-indigo-400 uppercase tracking-widest font-bold">Misión activa</span>
                        <span className="text-sm font-bold text-white max-w-[150px] md:max-w-xs truncate">{guide.title}</span>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex flex-col items-end">
                        <span className="text-xs text-emerald-400 font-bold mb-1 flex items-center gap-1">
                            <Shield className="w-3 h-3" /> INTEGRIDAD DEL SISTEMA
                        </span>
                        <div className="w-32 h-2 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                            <div
                                className={cn("h-full transition-all duration-500", health > 50 ? "bg-emerald-500 shadow-[0_0_8px_#10b981]" : "bg-red-500 shadow-[0_0_8px_#ef4444]")}
                                style={{ width: `${health}%` }}
                            />
                        </div>
                    </div>
                    <div className="hidden md:flex flex-col items-end">
                        <span className="text-xs text-indigo-400 font-bold mb-1 flex items-center gap-1">
                            <Zap className="w-3 h-3" /> PROGRESO
                        </span>
                        <Progress value={progress} className="w-32 h-2" />
                    </div>
                </div>
            </div>

            {/* Main Game Area */}
            <main className="flex-1 pt-24 pb-10 px-4 container mx-auto max-w-4xl relative z-10 flex flex-col justify-center min-h-[80vh]">
                <AnimatePresence mode="wait">
                    {gameState === "intro" && (
                        <IntroScreen key="intro" guide={guide} onStart={nextStage} />
                    )}
                    {gameState === "block1" && (
                        <IntelBlock key="block1" guide={guide} onComplete={nextStage} />
                    )}
                    {gameState === "block2" && (
                        <TrainingBlock key="block2" guide={guide} onComplete={nextStage} />
                    )}
                    {gameState === "boss" && (
                        <BossBlock key="boss" guide={guide} onComplete={nextStage} onDamage={() => takeDamage(20)} />
                    )}
                    {gameState === "victory" && (
                        <VictoryScreen key="victory" worldId={world.id} />
                    )}
                    {gameState === "defeat" && (
                        <DefeatScreen key="defeat" onRetry={() => window.location.reload()} />
                    )}
                </AnimatePresence>
            </main>

            {/* Visual Noise Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[60] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
    );
}

// --- Subcomponents for Game Stages ---

function IntroScreen({ guide, onStart }: { guide: Guide, onStart: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, x: -50 }}
            className="flex flex-col items-center text-center space-y-8"
        >
            <div className="w-24 h-24 rounded-full bg-indigo-500/10 border-2 border-indigo-500 flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.3)] animate-pulse">
                <Target className="w-10 h-10 text-indigo-400" />
            </div>

            <div className="space-y-4 max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-indigo-300 to-white tracking-tighter uppercase">
                    Misión iniciada
                </h1>
                <p className="text-xl text-indigo-200">
                    Objetivo: Asimilar la normativa del sector {guide.id}
                </p>
                <div className="bg-slate-900/80 border border-indigo-500/30 p-6 rounded-lg text-left font-mono text-sm text-indigo-100 shadow-inner">
                    <p className="mb-2 text-indigo-400">$ SYSTEM_MSG: INCOMING_BRIEFING</p>
                    <p>{guide.summary.substring(0, 200)}...</p>
                </div>
            </div>

            <Button onClick={onStart} size="lg" className="bg-indigo-600 hover:bg-indigo-500 text-white border border-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.5)] px-12 py-6 text-xl tracking-widest">
                INICIAR SECUENCIA
            </Button>
        </motion.div>
    );
}

function IntelBlock({ guide, onComplete }: { guide: Guide, onComplete: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="bg-slate-900/80 border border-slate-700/50 backdrop-blur-xl p-8 rounded-2xl shadow-2xl"
        >
            <div className="flex items-center gap-4 mb-6 border-b border-slate-700 pb-4">
                <div className="bg-emerald-500/20 p-2 rounded-lg">
                    <Shield className="w-6 h-6 text-emerald-400" />
                </div>
                <h2 className="text-2xl font-bold text-white uppercase">Datos de inteligencia</h2>
            </div>

            <div className="prose prose-invert prose-lg max-w-none text-slate-300 leading-relaxed">
                <p>{guide.summary}</p>
            </div>

            <div className="mt-8 flex justify-end">
                <Button onClick={onComplete} className="bg-emerald-600 hover:bg-emerald-500 text-white">
                    Datos asimilados <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
            </div>
        </motion.div>
    );
}

function TrainingBlock({ guide, onComplete }: { guide: Guide, onComplete: () => void }) {
    const [index, setIndex] = useState(0);
    const card = guide.flashcards[index];

    const nextCard = () => {
        if (index < guide.flashcards.length - 1) {
            setIndex(index + 1);
        } else {
            onComplete();
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="flex flex-col items-center"
        >
            <h2 className="text-3xl font-bold text-amber-400 mb-8 uppercase tracking-widest flex items-center gap-3">
                <Zap className="w-8 h-8" /> Entrenamiento táctico
            </h2>

            <div className="w-full max-w-md perspective-1000">
                <div className="relative w-full h-80 bg-slate-800 rounded-xl border-2 border-amber-500/50 shadow-[0_0_30px_rgba(245,158,11,0.2)] flex flex-col items-center justify-center p-8 text-center cursor-pointer group hover:border-amber-400 transition-all">
                    <h3 className="text-xl font-bold text-white mb-4 uppercase text-amber-500">Concepto {index + 1}/{guide.flashcards.length}</h3>
                    <p className="text-2xl font-bold text-white mb-4">{card.front}</p>
                    <div className="w-full h-[1px] bg-slate-700 my-4" />
                    <p className="text-lg text-slate-300 mt-2">{card.back}</p>
                </div>
            </div>

            <Button onClick={nextCard} className="mt-12 bg-amber-600 hover:bg-amber-500 text-white px-10 py-6 text-lg">
                {index < guide.flashcards.length - 1 ? "Siguiente concepto" : "Completar entrenamiento"}
            </Button>
        </motion.div>
    );
}

function BossBlock({ guide, onComplete, onDamage }: { guide: Guide, onComplete: () => void, onDamage: () => void }) {
    const [qIndex, setQIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [feedbackStatus, setFeedbackStatus] = useState<"correct" | "incorrect" | null>(null);
    const [isLocked, setIsLocked] = useState(false);

    const question = guide.quiz[qIndex];

    const handleAnswer = (optionIndex: number) => {
        if (isLocked) return;

        setSelectedOption(optionIndex);
        setIsLocked(true);

        const isCorrect = optionIndex === question.correctAnswer;
        setFeedbackStatus(isCorrect ? "correct" : "incorrect");

        // Wait for animation for feedback (1.5 seconds)
        setTimeout(() => {
            if (isCorrect) {
                // Correct: move to next question or complete
                if (qIndex < guide.quiz.length - 1) {
                    setQIndex(qIndex + 1);
                    setSelectedOption(null);
                    setFeedbackStatus(null);
                    setIsLocked(false);
                } else {
                    onComplete();
                }
            } else {
                // Incorrect: damage and probably allow retry or just show damage
                onDamage();
                // For this game, we allow them to select again? Or maybe we move on but take damage?
                // The original code just took damage. Let's reset the selection so they can try again (or if damage kills them, GameEngine handles it)
                setSelectedOption(null);
                setFeedbackStatus(null);
                setIsLocked(false);
            }
        }, 1500);
    };

    return (
        <motion.div className="w-full max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-10">
                <Skull className="w-10 h-10 text-red-500 animate-pulse" />
                <h2 className="text-4xl font-black text-red-500 uppercase tracking-tighter">
                    Jefe final: Evaluación
                </h2>
            </div>

            <div className="bg-slate-900 border-2 border-red-500/30 p-8 rounded-2xl shadow-[0_0_50px_rgba(239,68,68,0.15)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-red-500/50" />

                <h3 className="text-2xl font-bold text-white mb-8 leading-relaxed">
                    {question.question}
                </h3>

                <div className="grid gap-4">
                    {question.options.map((opt, i) => {
                        let buttonClass = "bg-slate-800 border-slate-700 hover:bg-slate-700";
                        let Icon = <div className="w-4 h-4 rounded-full border border-slate-600" />;

                        if (selectedOption === i) {
                            if (feedbackStatus === "correct") {
                                buttonClass = "bg-emerald-900/50 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]";
                                Icon = <CheckCircle2 className="w-5 h-5 text-emerald-500" />;
                            } else if (feedbackStatus === "incorrect") {
                                buttonClass = "bg-red-900/50 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.3)]";
                                Icon = <XCircle className="w-5 h-5 text-red-500" />;
                            } else {
                                buttonClass = "bg-slate-700 border-indigo-400";
                            }
                        }

                        return (
                            <button
                                key={i}
                                onClick={() => handleAnswer(i)}
                                disabled={isLocked}
                                className={cn(
                                    "p-6 text-left border rounded-xl transition-all duration-300 group flex items-center justify-between",
                                    buttonClass
                                )}
                            >
                                <span className={cn(
                                    "text-lg font-medium transition-colors",
                                    selectedOption === i ? "text-white" : "text-slate-300 group-hover:text-white"
                                )}>{opt}</span>
                                {Icon}
                            </button>
                        );
                    })}
                </div>

                <div className="mt-6 flex justify-between text-xs text-red-400 font-mono">
                    <span>SECUENCIA {qIndex + 1} / {guide.quiz.length}</span>
                    <span>ERROR = DAÑO CRÍTICO</span>
                </div>
            </div>
        </motion.div>
    );
}

function VictoryScreen({ worldId }: { worldId: string }) {
    return (
        <motion.div className="text-center flex flex-col items-center">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-32 h-32 bg-emerald-500 rounded-full flex items-center justify-center mb-8 shadow-[0_0_50px_#10b981]"
            >
                <CheckCircle2 className="w-16 h-16 text-white" />
            </motion.div>

            <h1 className="text-5xl font-black text-white mb-4 uppercase tracking-tighter">
                ¡Misión cumplida!
            </h1>
            <p className="text-xl text-emerald-300 mb-12">
                Has dominado los conceptos de este sector.
            </p>

            <div className="flex gap-4">
                <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-200">
                    <Link href={`/aventura`}>Volver al mapa</Link>
                </Button>
            </div>
        </motion.div>
    );
}

function DefeatScreen({ onRetry }: { onRetry: () => void }) {
    return (
        <motion.div className="text-center flex flex-col items-center">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-32 h-32 bg-red-600 rounded-full flex items-center justify-center mb-8 shadow-[0_0_50px_#ef4444]"
            >
                <AlertTriangle className="w-16 h-16 text-white" />
            </motion.div>

            <h1 className="text-5xl font-black text-red-500 mb-4 uppercase tracking-tighter">
                Fallo del sistema
            </h1>
            <p className="text-xl text-red-300 mb-12">
                La integridad de tu conocimiento ha caído por debajo del umbral crítico.
            </p>

            <Button onClick={onRetry} size="lg" className="bg-red-600 hover:bg-red-500 text-white border-0">
                Reiniciar simulación
            </Button>
        </motion.div>
    );
}
