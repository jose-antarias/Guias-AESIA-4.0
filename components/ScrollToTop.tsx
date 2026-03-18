"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Volver arriba"
            className={cn(
                "fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-slate-900/10 dark:bg-white/10 text-slate-800 dark:text-slate-200 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-slate-900/20 dark:hover:bg-white/20 transition-all duration-300 focus:outline-none flex items-center justify-center",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
            )}
        >
            <ArrowUp className="w-5 h-5" />
        </button>
    );
}
