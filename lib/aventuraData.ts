import { type Guide } from "./data";

export interface World {
    id: string;
    guideId: string;
    name: string;
    description: string;
    icon: string; // Emoji for now
    color: string;
    locked: boolean;
}

export interface Mission {
    id: string;
    worldId: string;
    title: string;
    description: string;
    type: "quiz" | "puzzle" | "boss" | "simulation";
    difficulty: "Fácil" | "Medio" | "Difícil" | "Extremo";
    isLocked: boolean;
}

export const worlds: World[] = [
    {
        id: "world-00",
        guideId: "00",
        name: "El nexo",
        description: "El punto de partida de tu viaje. Comprende los fundamentos antes de adentrarte en la red.",
        icon: "🌌",
        color: "from-blue-500 to-indigo-600",
        locked: false,
    },
    {
        id: "world-01",
        guideId: "01",
        name: "La frontera legal",
        description: "Cruza al territorio regulado. Identifica aliados y amenazas en el nuevo orden.",
        icon: "⚖️",
        color: "from-slate-600 to-slate-800",
        locked: false,
    },
    {
        id: "world-02",
        guideId: "02",
        name: "La arena de pruebas",
        description: "Entrena con simulaciones reales. Aquí la teoría se convierte en supervivencia.",
        icon: "🏟️",
        color: "from-orange-500 to-red-600",
        locked: false,
    },
    {
        id: "world-03",
        guideId: "03",
        name: "El tribunal de conformidad",
        description: "Demuestra tu valía. Solo los sistemas dignos obtienen el sello de aprobación.",
        icon: "🏛️",
        color: "from-amber-500 to-yellow-600",
        locked: false,
    },
    {
        id: "world-04",
        guideId: "04",
        name: "La torre de control",
        description: "Establece los protocolos. La calidad no es una opción, es tu defensa.",
        icon: "🗼",
        color: "from-emerald-500 to-green-600",
        locked: false,
    },
    {
        id: "world-05",
        guideId: "05",
        name: "Las tierras del riesgo",
        description: "Un terreno peligroso. Identifica amenazas y neutralízalas antes de que sea tarde.",
        icon: "🌋",
        color: "from-red-500 to-rose-700",
        locked: false,
    },
    {
        id: "world-06",
        guideId: "06",
        name: "El ojo del guardián",
        description: "La máquina no decide sola. Mantén la vigilancia humana o pierde el control.",
        icon: "👁️",
        color: "from-cyan-500 to-blue-600",
        locked: false,
    },
    {
        id: "world-07",
        guideId: "07",
        name: "El archivo de cristal",
        description: "Datos puros, decisiones justas. Limpia el flujo de información de impurezas.",
        icon: "💎",
        color: "from-sky-400 to-cyan-500",
        locked: false,
    },
    {
        id: "world-08",
        guideId: "08",
        name: "El espejo de la verdad",
        description: "Nada se oculta. Haz que la caja negra sea transparente para todos.",
        icon: "🪞",
        color: "from-zinc-400 to-slate-500",
        locked: false,
    },
    {
        id: "world-09",
        guideId: "09",
        name: "El blanco perfecto",
        description: "Afina tu puntería. La precisión es la diferencia entre el éxito y el error fatal.",
        icon: "🎯",
        color: "from-rose-500 to-pink-600",
        locked: false,
    },
    {
        id: "world-10",
        guideId: "10",
        name: "La fortaleza inquebrantable",
        description: "Resiste el caos. Construye sistemas que no caigan ante lo imprevisto.",
        icon: "🏰",
        color: "from-stone-500 to-stone-700",
        locked: false,
    },
    {
        id: "world-11",
        guideId: "11",
        name: "El cortafuegos sombrío",
        description: "Enemigos invisibles acechan. Protege el núcleo de ataques adversarios.",
        icon: "🛡️",
        color: "from-violet-600 to-purple-800",
        locked: false,
    },
    {
        id: "world-12",
        guideId: "12",
        name: "El registro eterno",
        description: "Todo queda grabado. La trazabilidad es tu mejor coartada.",
        icon: "📜",
        color: "from-amber-700 to-orange-800",
        locked: false,
    },
    {
        id: "world-13",
        guideId: "13",
        name: "El observatorio",
        description: "El lanzamiento es solo el inicio. Vigila el horizonte perpetuamente.",
        icon: "🔭",
        color: "from-indigo-400 to-blue-500",
        locked: false,
    },
    {
        id: "world-14",
        guideId: "14",
        name: "La sala de crisis",
        description: "Alerta roja. Gestiona incidentes críticos antes de que colapse el sistema.",
        icon: "🚨",
        color: "from-red-600 to-red-800",
        locked: false,
    },
    {
        id: "world-15",
        guideId: "15",
        name: "La biblioteca maestra",
        description: "El conocimiento es poder. Documenta cada engranaje de la máquina.",
        icon: "📚",
        color: "from-blue-700 to-slate-800",
        locked: false,
    },
    {
        id: "world-16",
        guideId: "16",
        name: "El laberinto de checklists",
        description: "La prueba final. Verifica cada paso para asegurar la conformidad total.",
        icon: "✅",
        color: "from-emerald-600 to-teal-700",
        locked: false,
    },
];

const MISSION_TEMPLATES: Omit<Mission, "id" | "worldId" | "isLocked">[] = [
    { title: "Primer contacto", description: "Infíltrate y obtén los datos clave de la misión.", type: "puzzle", difficulty: "Fácil" },
    { title: "Decodificación", description: "Analiza la información encriptada del reglamento.", type: "quiz", difficulty: "Fácil" },
    { title: "Entrenamiento básico", description: "Pon a prueba tus reflejos mentales con conceptos rápidos.", type: "simulation", difficulty: "Fácil" },
    { title: "Simulación de campo", description: "Aplica lo aprendido en un entorno controlado.", type: "puzzle", difficulty: "Medio" },
    { title: "Protocolo de seguridad", description: "Identifica fallos en el sistema lógico.", type: "quiz", difficulty: "Medio" },
    { title: "La prueba del fuego", description: "Toma decisiones críticas bajo presión.", type: "simulation", difficulty: "Medio" },
    { title: "Análisis forense", description: "Reconstruye los hechos a partir de datos fragmentados.", type: "puzzle", difficulty: "Difícil" },
    { title: "Defensa de la torre", description: "Protege tus argumentos frente a una auditoría hostil.", type: "quiz", difficulty: "Difícil" },
    { title: "Operación especial", description: "Una misión de alto riesgo que requiere precisión absoluta.", type: "simulation", difficulty: "Extremo" },
    { title: "Jefe final", description: "Demuestra tu maestría para conquistar este mundo.", type: "boss", difficulty: "Extremo" },
];

export function getMissionsForWorld(worldId: string): Mission[] {
    return MISSION_TEMPLATES.map((template, index) => ({
        id: `${worldId}-mission-${index}`,
        worldId,
        ...template,
        isLocked: index > 0, // Unlock sequentially in a real app, strict mode
    }));
}

export function getWorldById(worldId: string): World | undefined {
    return worlds.find((w) => w.id === worldId);
}
