"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, RotateCcw, Play, Clock, CheckCircle2, XCircle, AlertTriangle, Trophy, Lightbulb, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { getRoscoGame, normalizeAnswer, type RoscoQuestion } from "@/lib/pasapalabraData";

type LetterStatus = "base" | "current" | "correct" | "incorrect" | "pasapalabra";

export default function PasapalabraGame() {
    const [gameState, setGameState] = useState<"intro" | "playing" | "finished">("intro");
    const [questions, setQuestions] = useState<RoscoQuestion[]>([]);
    const [currentIdx, setCurrentIdx] = useState(0);
    const [timeLeft, setTimeLeft] = useState(150); // 150 seconds
    const [answers, setAnswers] = useState<Record<string, LetterStatus>>({});
    const [score, setScore] = useState(0);
    const [input, setInput] = useState("");
    
    // New Features States
    const [feedback, setFeedback] = useState<{ type: "correct" | "incorrect", answer?: string } | null>(null);
    const [showHints, setShowHints] = useState(false);
    const [showAllAnswers, setShowAllAnswers] = useState(false);

    // Timer Ref
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Initialize Game
    const startGame = () => {
        const newQuestions = getRoscoGame();
        setQuestions(newQuestions);
        setAnswers({});
        setScore(0);
        setCurrentIdx(0);
        setTimeLeft(150);
        setGameState("playing");
        setInput("");
        setFeedback(null);
        setShowHints(false);
        setShowAllAnswers(false);

        // Start Timer
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    endGame();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    const endGame = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        setGameState("finished");
    };

    // Derived States
    // Reduce needs explicit type or generic
    const activeQuestion = questions[currentIdx];
    const letterStatuses = questions.reduce<Record<string, LetterStatus>>((acc, q, idx) => {
        if (idx === currentIdx && gameState === "playing") return { ...acc, [q.letter]: "current" };
        return { ...acc, [q.letter]: answers[q.letter] || "base" };
    }, {});

    // Hints Logic
    const getHints = () => {
        if (!activeQuestion) return [];
        const ans = activeQuestion.answer.trim();
        const hints = [];
        hints.push(`Tiene ${ans.length} letra${ans.length !== 1 ? 's' : ''}.`);
        hints.push(`Empieza por "${ans.charAt(0).toUpperCase()}" y termina en "${ans.charAt(ans.length - 1).toUpperCase()}".`);
        // A subtle 3rd hint: first two letters
        hints.push(ans.length > 2 ? `Las dos primeras letras son "${ans.substring(0, 2).toUpperCase()}".` : `La primera letra es "${ans.charAt(0).toUpperCase()}".`);
        return hints;
    };

    // Navigation Logic
    const nextStep = (status: "correct" | "incorrect" | "pasapalabra") => {
        // Update status immediately for current letter
        const currentLetter = questions[currentIdx].letter;
        // We use functional update to ensure we have latest state if needed, but here we just append
        const newAnswers = { ...answers, [currentLetter]: status };
        setAnswers(newAnswers);

        if (status === "correct") setScore(s => s + 1);

        // Find next index
        let nextIdx = -1;

        // Loop through all questions starting from next one to find pending ones
        for (let i = 1; i <= questions.length; i++) {
            const idx = (currentIdx + i) % questions.length;
            const letter = questions[idx].letter;

            // Check status in *new* answers
            const s = newAnswers[letter];

            // "pasapalabra" means we skipped it before, so it's still pending for next round.
            // "base" means not visited yet.
            // "correct"/"incorrect" are done.
            if (!s || s === "pasapalabra") { // undefined is base
                nextIdx = idx;
                break;
            }
        }

        if (nextIdx !== -1) {
            setCurrentIdx(nextIdx);
            setInput("");
        } else {
            // No pending questions found -> Game Over
            endGame();
        }
    };

    // Handle Input
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!activeQuestion || feedback) return;

        const normalizedInput = normalizeAnswer(input);
        const normalizedCorrect = normalizeAnswer(activeQuestion.answer);

        // Check for multiple valid ways: e.g. input is contained in actual answer or they perfectly match
        // Or at least allow completely matching if ignoring non-alphanumeric chars (done in normalizeAnswer)
        const isCorrect = normalizedInput === normalizedCorrect ||
                          (normalizedCorrect.includes(" ") && normalizedCorrect.replace(/\s+/g,"") === normalizedInput) ||
                          (normalizedInput.length > 2 && normalizedCorrect.startsWith(normalizedInput) && normalizedInput.length >= normalizedCorrect.length - 1); 
        // We do basic exact matching since `normalizeAnswer` simplifies string to alphanumeric only
        
        if (normalizedInput === normalizedCorrect) {
            setFeedback({ type: "correct" });
            setTimeout(() => {
                setFeedback(null);
                setShowHints(false);
                nextStep("correct");
            }, 1000);
        } else {
            setFeedback({ type: "incorrect", answer: activeQuestion.answer });
            setTimeout(() => {
                setFeedback(null);
                setShowHints(false);
                nextStep("incorrect");
            }, 3000);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[600px] w-full max-w-4xl mx-auto relative p-4">
            {gameState === "intro" && (
                <div className="text-center space-y-8 z-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-12 rounded-3xl border border-blue-100 dark:border-indigo-500/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-2xl">
                    <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-lg animate-pulse">
                        <Play className="w-10 h-10 text-white fill-current ml-1" />
                    </div>
                    <div>
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter uppercase">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Rosco</span> RIA
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
                            Demuestra tu dominio del Reglamento de IA. <br />
                            Responde a las definiciones de la A a la Z.
                        </p>
                    </div>
                    <Button onClick={startGame} size="lg" className="text-lg px-10 py-6 rounded-full bg-indigo-600 hover:bg-indigo-700 dark:hover:bg-indigo-500 text-white shadow-[0_4px_14px_0_rgb(67,56,202,0.39)] dark:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-transform hover:scale-105">
                        Comenzar Reto
                    </Button>
                </div>
            )}

            {gameState === "playing" && activeQuestion && (
                <div className="relative w-full max-w-3xl aspect-square flex items-center justify-center">
                    {/* The Rosco Circle */}
                    <div className="absolute inset-0 rounded-full border border-slate-200/60 dark:border-slate-700/30 pointer-events-none" />

                    {questions.map((q, i) => {
                        const total = questions.length;
                        const angle = (i * (360 / total)) - 90; // -90 to start at top
                        const radius = 280; // Distance from center (pixels)
                        // Calculate position
                        const x = radius * Math.cos((angle * Math.PI) / 180);
                        const y = radius * Math.sin((angle * Math.PI) / 180);

                        // Determine visual status
                        let status = answers[q.letter] || "base";
                        if (i === currentIdx) status = "current";

                        return (
                            <motion.div
                                key={q.letter}
                                className={cn(
                                    "absolute w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold border-2 transition-all duration-300 shadow-sm dark:shadow-lg",
                                    status === "base" && "bg-slate-100 border-slate-300 text-slate-600 dark:bg-slate-800 dark:border-slate-600 dark:text-white",
                                    status === "current" && "bg-blue-600 border-blue-500 text-white dark:bg-blue-500 dark:border-blue-400 scale-125 z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)] dark:shadow-[0_0_15px_#3b82f6]",
                                    status === "correct" && "bg-emerald-500 border-emerald-400 text-white",
                                    status === "incorrect" && "bg-red-500 border-red-400 text-white",
                                    status === "pasapalabra" && "bg-amber-500 border-amber-400 text-white",
                                )}
                                style={{
                                    left: "50%",
                                    top: "50%",
                                    x,
                                    y,
                                }}
                            >
                                {q.letter}
                            </motion.div>
                        );
                    })}

                    {/* Center HUD */}
                    <div className="z-20 flex flex-col items-center justify-center text-center max-w-md bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-2xl relative">
                        <div className="flex items-center gap-4 mb-6 w-full justify-between">
                            <div className="flex flex-col items-center">
                                <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Tiempo</span>
                                <div className={cn("text-2xl font-mono font-bold flex items-center gap-2", timeLeft < 30 ? "text-red-500 animate-pulse" : "text-slate-800 dark:text-white")}>
                                    <Clock className="w-5 h-5" /> {timeLeft}s
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Aciertos</span>
                                <div className="text-2xl font-mono font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                                    <Trophy className="w-5 h-5" /> {score}
                                </div>
                            </div>
                        </div>

                        <div className="mb-4 space-y-2 relative">
                            {feedback && (
                                <div className={cn(
                                    "absolute inset-0 z-30 flex flex-col items-center justify-center p-4 rounded-xl text-white font-bold animate-in fade-in zoom-in duration-300",
                                    feedback.type === "correct" ? "bg-emerald-500 shadow-[0_0_20px_#10b981]" : "bg-red-500 shadow-[0_0_20px_#ef4444]"
                                )}>
                                    {feedback.type === "correct" ? (
                                        <><CheckCircle2 className="w-12 h-12 mb-2" /><span className="text-xl uppercase tracking-widest">¡Correcto!</span></>
                                    ) : (
                                        <><XCircle className="w-12 h-12 mb-2" /><span className="text-xl uppercase tracking-widest mb-1">¡Incorrecto!</span><span className="text-sm font-medium opacity-90">Era: {feedback.answer}</span></>
                                    )}
                                </div>
                            )}

                            <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider transition-opacity", feedback && "opacity-0")}>
                                {activeQuestion.type === "Empieza por" ? "Empieza por" : "Contiene la"}
                                <span className="text-blue-600 dark:text-blue-400 font-black text-sm">{activeQuestion.letter}</span>
                            </div>
                            <div className={cn("min-h-[120px] flex items-center justify-center transition-opacity", feedback && "opacity-0")}>
                                <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-relaxed">
                                    {activeQuestion.question}
                                </h2>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="w-full space-y-4">
                            <AnimatePresence>
                                {showHints && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-500/30 p-3 rounded-xl text-left text-sm text-indigo-800 dark:text-indigo-200"
                                    >
                                        <p className="font-bold mb-1 flex items-center gap-1 text-indigo-600 dark:text-indigo-400"><Lightbulb className="w-4 h-4"/> Pistas disponibles:</p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            {getHints().map((hint, idx) => (
                                                <li key={idx}>{hint}</li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            
                            <div className="flex gap-2 relative">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => setShowHints(!showHints)}
                                    className="px-3 rounded-full border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700"
                                    title="Pistas"
                                >
                                    <Lightbulb className={cn("w-5 h-5", showHints ? "text-amber-500 fill-amber-500" : "text-slate-400")} />
                                </Button>
                                <Input
                                    autoFocus={true}
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Escribe tu respuesta..."
                                    disabled={!!feedback}
                                    className="flex-1 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white text-center text-lg h-12 rounded-full focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div className="flex gap-4">
                                <Button
                                    type="button"
                                    onClick={() => nextStep("pasapalabra")}
                                    disabled={!!feedback}
                                    className="flex-1 bg-amber-600 hover:bg-amber-500 text-white rounded-full font-bold uppercase tracking-wide"
                                >
                                    Pasapalabra
                                </Button>
                                <Button
                                    type="submit"
                                    disabled={!input.trim() || !!feedback}
                                    className="flex-1 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold uppercase tracking-wide"
                                >
                                    Enviar <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {gameState === "finished" && (
                <div className="text-center space-y-8 z-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-12 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-2xl">
                    <Trophy className="w-24 h-24 text-yellow-500 dark:text-yellow-400 mx-auto drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />

                    <div>
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-2 uppercase">Juego Terminado</h2>
                        <p className="text-slate-600 dark:text-slate-400">Has completado el rosco.</p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 max-w-xs mx-auto mb-6">
                        <div className="bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 p-4 rounded-2xl flex flex-col items-center">
                            <span className="text-3xl font-black text-emerald-600 dark:text-emerald-400">{score}</span>
                            <span className="text-xs uppercase font-bold text-emerald-700 dark:text-emerald-600">Aciertos</span>
                        </div>
                        <div className="bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 p-4 rounded-2xl flex flex-col items-center">
                            <span className="text-3xl font-black text-red-600 dark:text-red-400">
                                {Object.values(answers).filter(s => s === "incorrect" || s === "pasapalabra").length}
                            </span>
                            <span className="text-xs uppercase font-bold text-red-700 dark:text-red-600">Omitidas/Fallos</span>
                        </div>
                    </div>

                    <div className="w-full max-w-lg mx-auto mb-6">
                        <Button
                            variant="outline"
                            onClick={() => setShowAllAnswers(!showAllAnswers)}
                            className="w-full flex justify-between items-center text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                        >
                            Ver listado de respuestas correctas {showAllAnswers ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </Button>
                        <AnimatePresence>
                            {showAllAnswers && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="mt-2 overflow-y-auto max-h-60 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 shadow-inner text-left p-2 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-600"
                                >
                                    <ul className="divide-y divide-slate-100 dark:divide-slate-800">
                                        {questions.map((q) => {
                                            const st = answers[q.letter] || "incorrect";
                                            return (
                                                <li key={q.letter} className="p-3 text-sm flex gap-3">
                                                    <span className={cn(
                                                        "font-black uppercase w-6 text-center shrink-0",
                                                        st === "correct" ? "text-emerald-500" :
                                                        st === "incorrect" ? "text-red-500" : "text-amber-500"
                                                    )}>
                                                        {q.letter}
                                                    </span>
                                                    <div className="flex flex-col gap-1">
                                                        <span className="text-slate-900 dark:text-white font-bold">{q.answer}</span>
                                                        <span className="text-slate-500 dark:text-slate-400 text-xs italic">{q.question}</span>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Button onClick={startGame} size="lg" className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 font-bold rounded-full h-14 text-lg shadow-md transition-transform hover:scale-105">
                        <RotateCcw className="w-5 h-5 mr-2" /> Jugar de nuevo
                    </Button>
                </div>
            )}
        </div>
    );
}
