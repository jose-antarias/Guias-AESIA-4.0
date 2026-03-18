"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Check } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { Language } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";

const languages: { code: Language; label: string }[] = [
    { code: "es", label: "Español" },
    { code: "gl", label: "Galego" },
    { code: "ca", label: "Català" },
    { code: "eu", label: "Euskera" },
];

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Close when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative z-50" ref={containerRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1.5 px-3 h-9 rounded-full border backdrop-blur-xl shadow-sm transition-colors text-xs font-medium bg-white/90 dark:bg-slate-800/90 border-slate-200/80 dark:border-slate-700/60 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white"
            >
                <Globe className="w-3.5 h-3.5" />
                <span className="uppercase">{language}</span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="absolute top-full right-0 mt-2 w-32 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden py-1"
                    >
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    setLanguage(lang.code);
                                    setIsOpen(false);
                                }}
                                className={cn(
                                    "flex items-center justify-between w-full px-4 py-2 text-xs text-left transition-colors hover:bg-slate-100 dark:hover:bg-slate-800",
                                    language === lang.code ? "text-indigo-600 dark:text-indigo-400 font-medium" : "text-slate-600 dark:text-slate-400"
                                )}
                            >
                                {lang.label}
                                {language === lang.code && <Check className="w-3 h-3" />}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
