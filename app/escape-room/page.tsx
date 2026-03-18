import EscapeRoomGame from "@/components/EscapeRoomGame";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function EscapeRoomPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white pb-20 pt-24 relative overflow-hidden transition-colors">
            {/* Background Ambience - Matrix/Cyber style */}
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-100/50 via-slate-50 to-slate-50 dark:from-emerald-900/10 dark:via-slate-950 dark:to-slate-950 pointer-events-none" />
            <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-10 dark:opacity-5 pointer-events-none hidden dark:block" />


            <div className="container mx-auto px-4 relative z-10">
                <header className="mb-8 text-center">
                    <div className="flex items-start justify-start mb-8">
                        <Link
                            href="/#gamificacion"
                            className="inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4 mr-1" />
                            Volver al inicio
                        </Link>
                    </div>
                    <span className="px-4 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-widest backdrop-blur-md mb-4 inline-block animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]">
                        Acceso de emergencia
                    </span>
                </header>

                <EscapeRoomGame />
            </div>
        </div>
    );
}
