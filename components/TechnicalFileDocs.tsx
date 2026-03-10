"use client";

import { useState } from "react";
import { Folder, FileText, CheckSquare, Layers, Database } from "lucide-react";
import { motion } from "framer-motion";

const folders = [
    {
        id: "general",
        title: "Descripción General",
        icon: FileText,
        items: ["Finalidad prevista del sistema", "Versión del software", "Hardware necesario", "Instrucciones de uso"]
    },
    {
        id: "design",
        title: "Diseño y Desarrollo",
        icon: Layers,
        items: ["Arquitectura del sistema", "Lógica algorítmica", "Diagramas de flujo", "Librerías utilizadas"]
    },
    {
        id: "data",
        title: "Datos (Entrenamiento)",
        icon: Database,
        items: ["Origen de los datos", "Técnicas de limpieza", "Medidas contra sesgos", "Datos de validación/prueba"]
    },
    {
        id: "risk",
        title: "Gestión de Riesgos",
        icon: CheckSquare,
        items: ["Lista de riesgos identificados", "Medidas de mitigación", "Pruebas de robustez", "Métricas de precisión"]
    }
];

export function TechnicalFileDocs() {
    const [openFolder, setOpenFolder] = useState<string | null>(null);

    return (
        <div className="w-full py-10 grid md:grid-cols-2 gap-6">
            <h3 className="text-xl font-bold text-white col-span-full mb-4 flex items-center gap-2">
                <Folder className="w-6 h-6 text-indigo-400" />
                Expediente Técnico (Anexo IV)
            </h3>

            {folders.map((folder) => {
                const isOpen = openFolder === folder.id;

                return (
                    <motion.div
                        key={folder.id}
                        layout
                        onClick={() => setOpenFolder(isOpen ? null : folder.id)}
                        className={`p-4 rounded-xl border cursor-pointer overflow-hidden transition-all ${isOpen ? "bg-slate-800 border-indigo-500 shadow-lg col-span-full md:col-span-1 row-span-2" : "bg-slate-900 border-slate-700 hover:border-slate-500"
                            }`}
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <folder.icon className={`w-5 h-5 ${isOpen ? "text-indigo-400" : "text-slate-500"}`} />
                            <h4 className={`font-bold ${isOpen ? "text-white" : "text-slate-300"}`}>{folder.title}</h4>
                        </div>

                        {isOpen && (
                            <motion.ul
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="mt-4 space-y-2 pl-8 list-disc text-sm text-slate-300 marker:text-indigo-500"
                            >
                                {folder.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </motion.ul>
                        )}

                        {!isOpen && <p className="text-xs text-slate-500 mt-1 pl-8">Click para ver contenido...</p>}
                    </motion.div>
                );
            })}
        </div>
    );
}
