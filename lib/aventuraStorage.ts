import { worlds } from "./aventuraData";

// Tipos
export interface MissionProgress {
    completedMissions: number; // Número de misiones completadas (0 a 10)
    isCompleted: boolean; // Si el mundo ha sido "conquistado" (todas las misiones)
}

export interface Achievement {
    id: string;
    title: string;
    description: string;
    icon: string;
    condition: (progress: Record<string, MissionProgress>) => boolean;
}

const STORAGE_KEY_PROGRESS = "aesia-aventura-progress";
const STORAGE_KEY_ACHIEVEMENTS = "aesia-aventura-achievements";

// Lista de Logros
export const ACHIEVEMENTS: Achievement[] = [
    {
        id: "initiate",
        title: "Iniciado",
        description: "Completa tu primera misión.",
        icon: "🌱",
        condition: (progress) => Object.values(progress).some((p) => p.completedMissions >= 1),
    },
    {
        id: "explorer",
        title: "Explorador",
        description: "Completa al menos una misión en 3 mundos diferentes.",
        icon: "🔭",
        condition: (progress) => Object.values(progress).filter((p) => p.completedMissions >= 1).length >= 3,
    },
    {
        id: "first-step",
        title: "Conquistador",
        description: "Completa tu primer mundo al 100%.",
        icon: "🚩",
        condition: (progress) => Object.values(progress).some((p) => p.isCompleted),
    },
    {
        id: "half-way",
        title: "Estratega regulatorio",
        description: "Completa 5 mundos.",
        icon: "🗺️",
        condition: (progress) => Object.values(progress).filter((p) => p.isCompleted).length >= 5,
    },
    {
        id: "master",
        title: "Supremacía AESIA",
        description: "Conquista todos los mundos del sistema.",
        icon: "👑",
        condition: (progress) => Object.values(progress).filter((p) => p.isCompleted).length === worlds.length,
    },
    {
        id: "risk-manager",
        title: "Gestor de riesgos",
        description: "Completa 'Las tierras del riesgo' y 'La fortaleza inquebrantable'.",
        icon: "🛡️",
        condition: (progress) =>
            (progress["world-05"]?.isCompleted && progress["world-10"]?.isCompleted) || false,
    },
    {
        id: "compliance-officer",
        title: "Oficial de cumplimiento",
        description: "Completa 'El tribunal de conformidad' y 'El laberinto de checklists'.",
        icon: "⚖️",
        condition: (progress) =>
            (progress["world-03"]?.isCompleted && progress["world-16"]?.isCompleted) || false,
    }
];

// Funciones de utilidad
export function getStoredProgress(): Record<string, MissionProgress> {
    if (typeof window === "undefined") return {};
    try {
        const item = localStorage.getItem(STORAGE_KEY_PROGRESS);
        return item ? JSON.parse(item) : {};
    } catch (error) {
        console.error("Error leyendo progreso de aventura:", error);
        return {};
    }
}

export function saveWorldProgress(worldId: string, completedMissions: number) {
    if (typeof window === "undefined") return;
    const current = getStoredProgress();
    const isCompleted = completedMissions >= 10; // Asumiendo 10 misiones por mundo

    // Solo actualizar si el nuevo progreso es mayor
    const previous = current[worldId]?.completedMissions || 0;
    if (completedMissions > previous) {
        const updated = {
            ...current,
            [worldId]: {
                completedMissions,
                isCompleted
            }
        };
        localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(updated));
        checkAchievements(updated);
    }
}

export function getStoredAchievements(): string[] {
    if (typeof window === "undefined") return [];
    try {
        const item = localStorage.getItem(STORAGE_KEY_ACHIEVEMENTS);
        return item ? JSON.parse(item) : [];
    } catch (error) {
        return [];
    }
}

function checkAchievements(progress: Record<string, MissionProgress>) {
    const currentAchievements = getStoredAchievements();
    const newAchievements = [...currentAchievements];
    let added = false;

    ACHIEVEMENTS.forEach(ach => {
        if (!currentAchievements.includes(ach.id) && ach.condition(progress)) {
            newAchievements.push(ach.id);
            added = true;
            // Aquí se podría disparar un evento o toast de "Logro Desbloqueado"
            // Por simplicidad, solo guardamos.
        }
    });

    if (added) {
        localStorage.setItem(STORAGE_KEY_ACHIEVEMENTS, JSON.stringify(newAchievements));
        // Disparar evento personalizado para que la UI se actualice
        window.dispatchEvent(new Event("achievement-unlocked"));
    }
}
