"use client";

import React, { useState } from "react";
import { type ContentSection } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, BookOpen, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import { RiskTrafficLight } from "./RiskTrafficLight";
import { RiskClassifier } from "./RiskClassifier";
import { HighRiskExplorer } from "./HighRiskExplorer";
import { ConformityRoadmap } from "./ConformityRoadmap";
import { QualityCycle } from "./QualityCycle";
import { RiskMatrix } from "./RiskMatrix";
import { HumanOversightLevels } from "./HumanOversightLevels";

import { RiskLevels } from "./RiskLevels";
import { DataGovernance } from "./DataGovernance";
import { TransparencyInfo } from "./TransparencyInfo";
import { AccuracyMetrics } from "./AccuracyMetrics";
import { RobustnessShield } from "./RobustnessShield";
import { CyberDefense } from "./CyberDefense";
import { LogChain } from "./LogChain";
import { PostMarketProcess } from "./PostMarketProcess";
import { IncidentTimeline } from "./IncidentTimeline";
import { TechnicalFileDocs } from "./TechnicalFileDocs";
import { MaturityScale } from "./MaturityScale";

interface GuideContentProps {
    content: ContentSection[];
}

const WidgetMap: Record<string, React.FC<any>> = {
    'RiskTrafficLight': RiskTrafficLight,
    'RiskLevels': RiskLevels,
    'RiskClassifier': RiskClassifier,
    'HighRiskExplorer': HighRiskExplorer,
    'ConformityRoadmap': ConformityRoadmap,
    'QualityCycle': QualityCycle,
    'RiskMatrix': RiskMatrix,
    'HumanOversightLevels': HumanOversightLevels,
    'DataGovernance': DataGovernance,
    'TransparencyInfo': TransparencyInfo,
    'AccuracyMetrics': AccuracyMetrics,
    'RobustnessShield': RobustnessShield,
    'CyberDefense': CyberDefense,
    'LogChain': LogChain,
    'PostMarketProcess': PostMarketProcess,
    'IncidentTimeline': IncidentTimeline,
    'TechnicalFileDocs': TechnicalFileDocs,
    'MaturityScale': MaturityScale,
};

export function GuideContent({ content }: GuideContentProps) {
    const [openSectionIndex, setOpenSectionIndex] = useState<number | null>(null);

    const toggleSection = (index: number) => {
        setOpenSectionIndex(openSectionIndex === index ? null : index);
    };

    if (!content || content.length === 0) return null;

    return (
        <div className="space-y-4 w-full max-w-4xl mx-auto mt-8">
            <div className="flex items-center space-x-2 mb-6">
                <Layers className="w-5 h-5 text-indigo-400" />
                <h2 className="text-xl font-bold text-white">Índice de Contenidos</h2>
            </div>

            <div className="grid gap-3">
                {content.map((section, index) => (
                    <div
                        key={index}
                        className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 rounded-xl overflow-hidden hover:border-indigo-500/30 transition-colors"
                    >
                        <button
                            onClick={() => toggleSection(index)}
                            className="w-full px-6 py-4 flex items-center justify-between text-left group"
                        >
                            <div className="flex items-center space-x-4">
                                <span className={cn(
                                    "flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold transition-colors",
                                    openSectionIndex === index
                                        ? "bg-indigo-500/20 text-indigo-400 ring-1 ring-indigo-500/50"
                                        : "bg-slate-800 text-slate-500 group-hover:bg-slate-800/80 group-hover:text-slate-300"
                                )}>
                                    {index + 1}
                                </span>
                                <span className={cn(
                                    "font-medium transition-colors",
                                    openSectionIndex === index ? "text-white" : "text-slate-300 group-hover:text-white"
                                )}>
                                    {section.title}
                                </span>
                            </div>
                            {openSectionIndex === index ? (
                                <ChevronUp className="w-5 h-5 text-indigo-400" />
                            ) : (
                                <ChevronDown className="w-5 h-5 text-slate-500 group-hover:text-slate-300" />
                            )}
                        </button>

                        <AnimatePresence>
                            {openSectionIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <div className="bg-slate-900/50 border-t border-slate-800/60">
                                        <div className="px-6 py-8 md:px-12 md:py-12 lg:px-16 lg:py-16">
                                            <div className="prose prose-invert prose-slate prose-sm md:prose-base max-w-3xl mx-auto text-slate-300 leading-relaxed font-light tracking-wide">
                                                <ReactMarkdown>
                                                    {section.content}
                                                </ReactMarkdown>

                                                {/* Dynamic Widget Integration */}
                                                {section.componentId && WidgetMap[section.componentId] && (
                                                    <div className="mt-8 not-prose">
                                                        {section.componentId === 'RiskClassifier' && (
                                                            <h4 className="text-center text-slate-400 text-sm font-semibold uppercase tracking-widest mb-4">
                                                                Ponte a prueba
                                                            </h4>
                                                        )}
                                                        {React.createElement(WidgetMap[section.componentId], section.componentProps || {})}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
}
