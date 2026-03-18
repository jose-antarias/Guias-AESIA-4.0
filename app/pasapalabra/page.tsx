import PasapalabraGame from "@/components/PasapalabraGame";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PasapalabraPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white pb-20 pt-24 transition-colors">
            {/* Background Ambience */}
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/50 via-slate-50 to-slate-50 dark:from-indigo-900/20 dark:via-slate-950 dark:to-slate-950 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <header className="mb-8 text-center">
                    <div className="flex items-start justify-start mb-8">
                        <Link
                            href="/#gamificacion"
                            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4 mr-1" />
                            Volver al inicio
                        </Link>
                    </div>
                    <span className="px-4 py-1.5 rounded-full border border-blue-200 dark:border-blue-500/30 bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-widest backdrop-blur-md mb-4 inline-block">
                        Desafío final
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-2">
                        El rosco regulador
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400">Completa el círculo de definiciones de la A a la Z.</p>
                </header>

                <PasapalabraGame />
            </div>
        </div>
    );
}
