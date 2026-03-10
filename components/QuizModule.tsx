"use client";

import { useState } from "react";
import { type QuizQuestion } from "@/lib/data/index"; // Explicit path
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, XCircle, RefreshCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useLanguage } from "@/components/LanguageProvider";

const CompletionToken = dynamic(
    () => import("@/components/CompletionToken").then((m) => m.CompletionToken),
    { ssr: false }
);

interface QuizModuleProps {
    questions: QuizQuestion[];
}

export function QuizModule({ questions }: QuizModuleProps) {
    const { t } = useLanguage();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);

    const currentQuestion = questions[currentQuestionIndex];

    const handleOptionSelect = (index: number) => {
        if (isAnswered) return;
        setSelectedOption(index);
    };

    const handleSubmit = () => {
        if (selectedOption === null) return;

        setIsAnswered(true);
        if (selectedOption === currentQuestion.correctAnswer) {
            setScore(score + 1);
        }
    };

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(null);
            setIsAnswered(false);
        } else {
            setShowResults(true);
        }
    };

    const handleRetry = () => {
        setCurrentQuestionIndex(0);
        setSelectedOption(null);
        setIsAnswered(false);
        setScore(0);
        setShowResults(false);
    };

    if (showResults) {
        const percentage = Math.round((score / questions.length) * 100);
        const passed = percentage >= 70; // Pass threshold

        return (
            <div className="w-full max-w-2xl mx-auto">
                <Card className="text-center p-8 bg-slate-900/80 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border-indigo-500/20 relative overflow-hidden">
                    {passed && <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 shadow-[0_0_20px_#10b981]" />}
                    {!passed && <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 shadow-[0_0_20px_#ef4444]" />}

                    <CardHeader>
                        <CardTitle className="text-4xl font-black mb-4 text-white uppercase tracking-tighter">
                            {passed ? t.quiz.congrats : t.quiz.tryAgain}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className={cn("text-7xl font-black mb-2 font-mono tracking-tighter drop-shadow-lg", passed ? "text-emerald-400" : "text-red-400")}>
                            {percentage}%
                        </div>
                        <p className="text-xl text-slate-300 mb-10 font-light">
                            {t.quiz.correct} <span className="font-bold text-white">{score}</span> {t.quiz.of} <span className="font-bold text-white">{questions.length}</span> {t.quiz.questions}
                        </p>

                        {passed && (
                            <div className="mb-8 p-8 bg-slate-800/50 rounded-2xl border border-emerald-500/30 shadow-inner relative group">
                                <div className="absolute inset-0 bg-emerald-500/5 blur-xl group-hover:bg-emerald-500/10 transition-colors" />
                                <p className="text-sm font-bold text-emerald-400 mb-6 uppercase tracking-[0.2em] relative z-10 border-b border-emerald-500/20 pb-2 inline-block">
                                    {t.quiz.tokenUnlocked}
                                </p>
                                <div className="h-64 w-full relative z-10 hover:scale-105 transition-transform duration-500">
                                    <CompletionToken guideId="AESIA" />
                                </div>
                                <p className="text-xs text-emerald-500/50 mt-4 font-mono relative z-10 animate-pulse">
                                    {t.quiz.flipToken}
                                </p>
                            </div>
                        )}
                    </CardContent>
                    <CardFooter className="justify-center gap-4">
                        <Button onClick={handleRetry} size="lg" variant="outline" className="border-slate-700 hover:bg-slate-800 text-slate-300 hover:text-white">
                            <RefreshCcw className="w-4 h-4 mr-2" />
                            {t.quiz.retry}
                        </Button>
                        <Button size="lg" asChild className="bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)] border-0 px-8">
                            <a href="/">{t.quiz.back}</a>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        );
    }

    return (
        <div className="w-full max-w-2xl mx-auto">
            <div className="mb-6 flex justify-between items-center text-sm font-medium text-slate-400 uppercase tracking-wider">
                <span>{t.quiz.question} {currentQuestionIndex + 1} / {questions.length}</span>
                <span className="text-indigo-400">{t.quiz.points}: {score}</span>
            </div>

            <Card className="bg-slate-900/80 backdrop-blur-xl border-slate-800 shadow-2xl">
                <CardHeader className="border-b border-slate-800 pb-6">
                    <CardTitle className="text-xl md:text-2xl leading-relaxed text-white font-medium">
                        {currentQuestion.question}
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                    {currentQuestion.options.map((option, index) => {
                        let stateStyle = "border-slate-700 bg-slate-800/50 hover:bg-slate-800 hover:border-indigo-500/50 text-slate-300";

                        if (isAnswered) {
                            if (index === currentQuestion.correctAnswer) {
                                stateStyle = "border-emerald-500 bg-emerald-950/30 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]";
                            } else if (index === selectedOption) {
                                stateStyle = "border-red-500 bg-red-950/30 text-red-400";
                            } else {
                                stateStyle = "opacity-40 border-slate-800";
                            }
                        } else if (selectedOption === index) {
                            stateStyle = "border-indigo-500 bg-indigo-950/30 text-indigo-300 ring-1 ring-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.2)]";
                        }

                        return (
                            <div
                                key={index}
                                onClick={() => handleOptionSelect(index)}
                                className={cn(
                                    "p-5 rounded-xl border transition-all duration-200 flex items-center justify-between cursor-pointer relative overflow-hidden",
                                    stateStyle
                                )}
                            >
                                <span className="relative z-10 text-lg">{option}</span>
                                {isAnswered && index === currentQuestion.correctAnswer && (
                                    <CheckCircle2 className="w-6 h-6 text-emerald-500 relative z-10" />
                                )}
                                {isAnswered && index === selectedOption && index !== currentQuestion.correctAnswer && (
                                    <XCircle className="w-6 h-6 text-red-500 relative z-10" />
                                )}
                            </div>
                        );
                    })}
                </CardContent>
                <CardFooter className="justify-end pt-4">
                    {!isAnswered ? (
                        <Button onClick={handleSubmit} disabled={selectedOption === null}>
                            {t.quiz.check}
                        </Button>
                    ) : (
                        <Button onClick={handleNext}>
                            {currentQuestionIndex < questions.length - 1 ? t.quiz.next : t.quiz.results}
                        </Button>
                    )}
                </CardFooter>
            </Card>
        </div>
    );
}
