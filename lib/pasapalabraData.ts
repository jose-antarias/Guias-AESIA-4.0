import { getGuides, type GlossaryTerm } from "./data";

export interface RoscoQuestion {
    letter: string;
    question: string;
    answer: string;
    type: "Empieza por" | "Contiene";
}

const ALPHABET = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

// Helper to normalize strings for comparison (remove accents, lowercase)
export function normalizeAnswer(answer: string): string {
    return (answer || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Remove accents
        .trim();
}

export function getRoscoGame(language: string = 'es'): RoscoQuestion[] {
    // 1. Collect all terms from all guides
    const guides = getGuides(language);
    const allTerms = guides.flatMap(g => g.glossary || []);

    // 2. Remove exact duplicate terms to avoid confusion if same term appears in multiple guides
    // Key by normalized term
    const uniqueTermsMap = new Map<string, GlossaryTerm>();
    allTerms.forEach(item => {
        const norm = normalizeAnswer(item.term);
        if (!uniqueTermsMap.has(norm)) {
            uniqueTermsMap.set(norm, item);
        }
    });

    const uniqueTerms = Array.from(uniqueTermsMap.values());
    const rosco: RoscoQuestion[] = [];
    const alphabetArray = ALPHABET.split("");

    // Letters that are almost always "Contains" in Spanish game shows or hard to find
    const forceContains = ["Ñ", "K", "W", "X"];

    for (const letter of alphabetArray) {
        let type: "Empieza por" | "Contiene" = "Empieza por";
        let candidates: GlossaryTerm[] = [];

        // Check if forced to "Contains"
        if (forceContains.includes(letter)) {
            type = "Contiene";
            candidates = uniqueTerms.filter(t =>
                normalizeAnswer(t.term).toUpperCase().includes(letter)
            );
        } else {
            // Try "Starts with" first
            candidates = uniqueTerms.filter(t =>
                normalizeAnswer(t.term).toUpperCase().startsWith(letter)
            );

            // If no candidates starting with letter, fallback to "Contains"
            if (candidates.length === 0) {
                type = "Contiene";
                candidates = uniqueTerms.filter(t =>
                    normalizeAnswer(t.term).toUpperCase().includes(letter)
                );
            }
        }

        if (candidates.length > 0) {
            // Pick a random one
            const termObj = candidates[Math.floor(Math.random() * candidates.length)];

            // Clean up definition if it starts with term name (sometimes happens in wikis)
            // But here definitions are clean usually.

            rosco.push({
                letter,
                question: termObj.definition,
                answer: termObj.term,
                type: type === "Contiene" && !normalizeAnswer(termObj.term).toUpperCase().startsWith(letter) ? "Contiene" : "Empieza por"
            });
        } else {
            // If absolutely no word found for a letter (rare but possible with small dataset),
            // We can either skip it or add a placeholder.
            // Skipping is better for game integrity.
        }
    }

    return rosco;
}
