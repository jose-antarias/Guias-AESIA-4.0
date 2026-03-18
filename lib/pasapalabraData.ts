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
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Remove accents
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, "") // Remove any non-alphanumeric char
        .replace(/\s+/g, " ") // Normalize multiple spaces into single space
        .trim();
}

export function getRoscoGame(language: string = 'es'): RoscoQuestion[] {
    // 1. Collect all terms from all guides
    const guides = getGuides(language);
    const allTerms = guides.flatMap(g => g.glossary || []);

    // 2. Remove exact duplicate terms
    const uniqueTermsMap = new Map<string, GlossaryTerm>();
    allTerms.forEach(item => {
        const norm = normalizeAnswer(item.term);
        if (!uniqueTermsMap.has(norm)) {
            uniqueTermsMap.set(norm, item);
        }
    });

    const allUniqueTerms = Array.from(uniqueTermsMap.values());
    
    // 3. IMPORTANT: Filter to only single-word terms for the Rosco game philosophy
    // The game is about guessing ONE word, not a phrase
    const uniqueTerms = allUniqueTerms.filter(t => !t.term.trim().includes(" "));

    const rosco: RoscoQuestion[] = [];
    const alphabetArray = ALPHABET.split("");

    // Letters that are almost always "Contains" in Spanish game shows or hard to find
    const forceContains = ["\u00d1", "K", "W", "X"];

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

            // If no single-word starting with this letter, fallback to "Contains"
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

            rosco.push({
                letter,
                question: termObj.definition,
                answer: termObj.term,
                type: type === "Contiene" && !normalizeAnswer(termObj.term).toUpperCase().startsWith(letter) ? "Contiene" : "Empieza por"
            });
        }
        // If no word found for a letter, skip it (better for game integrity)
    }

    return rosco;
}
