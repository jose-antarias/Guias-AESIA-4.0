"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Language, Dictionary } from "@/lib/i18n/types";
import { dictionaries } from "@/lib/i18n/dictionaries";

interface LanguageContextProps {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Dictionary;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>("es");

    useEffect(() => {
        const storedLanguage = localStorage.getItem("language") as Language;
        if (storedLanguage && ["es", "gl", "ca", "eu"].includes(storedLanguage)) {
            setLanguageState(storedLanguage);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("language", lang);
    };

    const t = dictionaries[language];

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
