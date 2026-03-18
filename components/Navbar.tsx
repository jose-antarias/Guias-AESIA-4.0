"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTheme } from "@/components/ThemeProvider";
import { useEffect, useState } from "react";

export function Navbar() {
    const pathname = usePathname();
    const { t } = useLanguage();
    const { theme } = useTheme();
    const isHome = pathname === "/";

    // Compact when scrolled past 60px
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className={cn(
                "fixed left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "top-0 shadow-md" : "top-4 px-4 md:px-8"
            )}
        >
            <div className={cn(
                "flex items-center justify-between w-full transition-all duration-300",
                scrolled
                    ? "h-12 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-700/60 px-4 md:px-8"
                    : "h-14 md:h-16 gap-2"
            )}>

                {/* ── LEFT: Logo ── */}
                <div className="flex shrink-0 items-center">
                    <div className={cn(
                        "relative transition-all duration-300 hover:scale-105",
                        scrolled ? "h-7 w-20" : "h-8 w-24 md:h-10 md:w-32 lg:h-12 lg:w-40"
                    )}>
                        <Link href="/" className="block w-full h-full relative">
                            <Image
                                src="/images/mencia.png"
                                alt="MencIA"
                                fill
                                className={cn(
                                    "object-contain object-left transition-all duration-300",
                                    theme === "dark"
                                        ? "brightness-0 invert drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                                        : "opacity-90"
                                )}
                                priority
                            />
                        </Link>
                    </div>
                </div>

                {/* ── CENTER: Desktop nav pill (md+) ── */}
                <div className="hidden md:flex flex-1 justify-center items-center overflow-hidden">
                    <Link
                        href="/"
                        aria-label={t.navbar.home}
                        className={cn(
                            "pointer-events-auto flex items-center justify-center px-4 h-9 rounded-full border backdrop-blur-xl shadow-sm transition-colors font-medium text-sm",
                            isHome
                                ? "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-700"
                                : "bg-white/80 dark:bg-slate-900/80 border-slate-200/60 dark:border-slate-700/50 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800"
                        )}
                    >
                        <Home className="w-4 h-4 shrink-0" />
                        <span className="ml-2">{t.navbar.home}</span>
                    </Link>
                </div>

                {/* ── RIGHT: Theme · Language · Home (mobile) ── */}
                {/*
                    Order rationale (left → right):
                    1. ThemeToggle  — least-used utility, leftmost
                    2. LanguageSwitcher — content preference, middle
                    3. Home button  — primary navigation, rightmost & thumb-friendly on mobile
                */}
                <div className="flex shrink-0 items-center gap-1.5">
                    {/* Theme toggle — always visible */}
                    <div className="pointer-events-auto">
                        <ThemeToggle />
                    </div>

                    {/* Language — always visible */}
                    <div className="pointer-events-auto">
                        <LanguageSwitcher />
                    </div>

                    {/* Home icon-button — MOBILE ONLY (hidden on md+) */}
                    <Link
                        href="/"
                        aria-label={t.navbar.home}
                        className="md:hidden shrink-0 flex items-center justify-center w-9 h-9 rounded-full border backdrop-blur-xl shadow-sm transition-colors bg-white/90 dark:bg-slate-800/90 border-slate-200/80 dark:border-slate-700/60 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white pointer-events-auto"
                    >
                        <Home className="w-4 h-4" />
                    </Link>
                </div>

            </div>
        </motion.header>
    );
}

