"use client";

import React, { useState } from "react";
import { type ContentSection } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, BookOpen, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
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

// Convierte a sentence case en español: solo mayúscula la primera palabra real,
// preservando siglas (ALL_CAPS) y capitalizando tras numeración de sección.
function toSpanishSentenceCase(text: string): string {
    if (!text) return text;
    return text
        .split(' ')
        .map((word, i, arr) => {
            const clean = word.replace(/[.,;:()[\]]/g, '');
            // Sigla: palabra ALL_CAPS con letras (IA, RGPD, AESIA, GPAI, AEPD…) → preservar
            if (clean.length >= 1 && /^[A-ZÁÉÍÓÚÑ0-9]+$/.test(clean) && /[A-ZÁÉÍÓÚÑ]/.test(clean)) {
                return word;
            }
            // Primera palabra siempre capitalizada
            if (i === 0) {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }
            const prev = arr[i - 1];
            // Si la palabra anterior termina en punto ("1.", "I.") o es decimal ("2.1") → capitalizar
            if (prev.endsWith('.') || /^\d+(\.\d+)*$/.test(prev)) {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }
            // Resto → minúscula
            return word.toLowerCase();
        })
        .join(' ');
}

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
                <h2 className="text-xl font-bold text-white">Índice de contenidos</h2>
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
                                    {toSpanishSentenceCase(section.title)}
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
                                    <div className="bg-slate-800/60 border-t border-slate-700/40">
                                        <div className="px-5 py-6 md:px-8 md:py-8">
                                            <div className="max-w-3xl mx-auto space-y-1">
                                                <ReactMarkdown
                                                    remarkPlugins={[remarkGfm]}
                                                    components={{
                                                        // Párrafos con espaciado generoso
                                                        p: ({ children }) => (
                                                            <p className="text-[0.97rem] leading-[1.85] text-slate-300 font-light tracking-wide mb-4 last:mb-0">{children}</p>
                                                        ),
                                                        // Headings diferenciados
                                                        h2: ({ children }) => (
                                                            <h2 className="text-indigo-300 text-lg font-bold mt-7 mb-3 pb-1 border-b border-indigo-500/20">{toSpanishSentenceCase(String(children))}</h2>
                                                        ),
                                                        h3: ({ children }) => (
                                                            <h3 className="text-slate-200 text-base font-semibold mt-5 mb-2">{toSpanishSentenceCase(String(children))}</h3>
                                                        ),
                                                        h4: ({ children }) => (
                                                            <h4 className="text-slate-300 text-sm font-semibold uppercase tracking-wider mt-4 mb-2 text-indigo-400/80">{toSpanishSentenceCase(String(children))}</h4>
                                                        ),
                                                        // Blockquote estilizado
                                                        blockquote: ({ children }) => (
                                                            <blockquote className="border-l-4 border-indigo-500/60 bg-indigo-950/30 pl-4 pr-3 py-3 my-4 rounded-r-lg text-slate-300 italic text-sm leading-relaxed">
                                                                {children}
                                                            </blockquote>
                                                        ),
                                                        // Listas con puntos personalizados
                                                        ul: ({ children }) => (
                                                            <ul className="space-y-2 my-3 pl-1">{children}</ul>
                                                        ),
                                                        ol: ({ children }) => (
                                                            <ol className="space-y-2 my-3 pl-1 list-decimal list-inside">{children}</ol>
                                                        ),
                                                        li: ({ children }) => (
                                                            <li className="flex items-start gap-2 text-[0.95rem] text-slate-300 leading-relaxed">
                                                                <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-indigo-400/70 flex-shrink-0" />
                                                                <span>{children}</span>
                                                            </li>
                                                        ),
                                                        // Texto en negrita y cursiva
                                                        strong: ({ children }) => (
                                                            <strong className="text-indigo-200 font-medium">{children}</strong>
                                                        ),
                                                        em: ({ children }) => (
                                                            <em className="text-indigo-300/90 not-italic font-medium">{children}</em>
                                                        ),
                                                        // Código inline
                                                        code: ({ children }) => (
                                                            <code className="bg-slate-700/60 text-emerald-300 text-xs px-1.5 py-0.5 rounded font-mono">{children}</code>
                                                        ),
                                                        // Tablas GFM elegantes
                                                        table: ({ children }) => (
                                                            <div className="w-full overflow-x-auto my-6 rounded-xl border border-slate-700/60 shadow-lg">
                                                                <table className="w-full text-sm">{children}</table>
                                                            </div>
                                                        ),
                                                        thead: ({ children }) => (
                                                            <thead className="bg-indigo-950/80 border-b border-indigo-500/30">{children}</thead>
                                                        ),
                                                        th: ({ children }) => (
                                                            <th className="px-4 py-3 text-left text-xs font-semibold text-indigo-300 uppercase tracking-wider whitespace-nowrap">{children}</th>
                                                        ),
                                                        tbody: ({ children }) => (
                                                            <tbody className="divide-y divide-slate-700/40">{children}</tbody>
                                                        ),
                                                        tr: ({ children }) => (
                                                            <tr className="hover:bg-indigo-500/5 transition-colors">{children}</tr>
                                                        ),
                                                        td: ({ children }) => (
                                                            <td className="px-4 py-3 text-slate-300 text-sm leading-snug align-top">{children}</td>
                                                        ),
                                                    }}
                                                >
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
