"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Home, BookOpen } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Navbar() {
    const pathname = usePathname();
    const { t } = useLanguage();

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8 pointer-events-none"
        >
            <div className="flex items-center justify-between w-full h-14 md:h-16 gap-2">

                {/* LEFT COLUMN: Logo */}
                <div className="flex shrink-0 justify-start items-center">
                    <div className="pointer-events-auto relative h-8 w-24 md:h-10 md:w-32 lg:h-12 lg:w-40 transition-transform hover:scale-105">
                        <Link href="/" className="block w-full h-full relative">
                            <Image
                                src="/images/mencia.png"
                                alt="MencIA Plan de Alfabetización"
                                fill
                                className="object-contain brightness-0 invert drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] object-left"
                                priority
                            />
                        </Link>
                    </div>
                </div>

                {/* CENTER COLUMN: Navigation */}
                <div className="flex flex-1 justify-center items-center pointer-events-auto overflow-hidden">
                    <nav className="inline-flex items-center gap-1 p-1 md:p-1.5 rounded-full bg-slate-900/90 border border-slate-700/50 backdrop-blur-xl shadow-lg ring-1 ring-white/5 whitespace-nowrap overflow-x-auto scrollbar-hide">
                        <NavItem href="/" isActive={pathname === "/"}>
                            <Home className="w-4 h-4 shrink-0" />
                            <span className="ml-2 hidden lg:inline">{t.navbar.home}</span>
                        </NavItem>

                        {pathname.startsWith("/guides/") && (
                            <div className="flex items-center text-[10px] md:text-xs font-medium text-slate-400 px-1 md:px-2 transition-opacity animate-in fade-in shrink-0">
                                <span className="mx-1 md:mx-2 h-3 w-[1px] bg-slate-700 block"></span>
                                <BookOpen className="w-3.5 h-3.5 mr-1 hidden sm:block" />
                                <span className="hidden lg:inline">{t.navbar.activeGuide}</span>
                                <span className="lg:hidden">Guía</span>
                            </div>
                        )}
                    </nav>
                </div>

                {/* RIGHT COLUMN: Language Switcher */}
                <div className="flex shrink-0 justify-end items-center">
                    <div className="pointer-events-auto">
                        <LanguageSwitcher />
                    </div>
                </div>

            </div>
        </motion.header>
    );
}

function NavItem({
    href,
    isActive,
    children,
    disabled = false
}: {
    href: string;
    isActive: boolean;
    children: React.ReactNode;
    disabled?: boolean;
}) {
    if (disabled) {
        return (
            <span className="px-3 py-2 lg:px-4 text-sm font-medium text-slate-400 cursor-not-allowed">
                {children}
            </span>
        );
    }

    return (
        <Link
            href={href}
            className={cn(
                "relative px-3 py-2 lg:px-4 text-sm font-medium transition-colors rounded-full flex items-center justify-center",
                isActive
                    ? "text-slate-900 dark:text-slate-100"
                    : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
            )}
        >
            {isActive && (
                <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-slate-800 rounded-full shadow-inner border border-slate-700"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    style={{ zIndex: -1 }}
                />
            )}
            <span className={cn("relative z-10 flex items-center", isActive ? "text-white" : "text-slate-400 group-hover:text-slate-200")}>{children}</span>
        </Link>
    );
}
