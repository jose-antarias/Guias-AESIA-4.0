"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="py-8 bg-slate-950 border-t border-slate-900 mt-auto">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm text-slate-500">
                    {t.footer.rights}
                </p>
            </div>
        </footer>
    );
}
