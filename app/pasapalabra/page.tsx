import PasapalabraGame from "@/components/PasapalabraGame";

export default function PasapalabraPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-white pb-20 pt-24">
            {/* Background Ambience */}
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <header className="mb-8 text-center">
                    <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-bold uppercase tracking-widest backdrop-blur-md mb-4 inline-block">
                        Desafío final
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-2">
                        El rosco regulador
                    </h1>
                    <p className="text-slate-400">Completa el círculo de definiciones de la A a la Z.</p>
                </header>

                <PasapalabraGame />
            </div>
        </div>
    );
}
