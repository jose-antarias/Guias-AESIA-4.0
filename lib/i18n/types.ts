export type Language = 'es' | 'gl' | 'ca' | 'eu';

export interface Dictionary {
    common: {
        guide: string;
        guides: string;
        playNow: string;
        enter: string;
        startGuide: string;
        loading: string;
        summary: string;
        resources: string;
        downloadPdf: string;
        flashcardsBtn: string;
        quizBtn: string;
        glossaryBtn: string;
    };
    navbar: {
        home: string;
        about: string;
        activeGuide: string;
    };
    hero: {
        badge: string;
        title: string;
        subtitle: string;
        description: string;
        highlight: string;
        menciaLegend: string;
    };
    gamification: {
        title: string;
        badge: string;
        simulators: string;
        systemStatus: string;
        progressSaved: string;
        bestTime: string;
        accessControlled: string;
        adventureTitle: string;
        adventureDesc: string;
        pasapalabraTitle: string;
        pasapalabraDesc: string;
        escapeRoomTitle: string;
        escapeRoomDesc: string;
    };
    guides: {
        title: string;
        count: string;
        description: string;
        viewAll: string;
        viewLess: string;
    };
    quiz: {
        check: string;
        next: string;
        results: string;
        retry: string;
        back: string;
        question: string;
        points: string;
        congrats: string;
        tryAgain: string;
        correct: string;
        of: string;
        questions: string;
        tokenUnlocked: string;
        flipToken: string;
    };
    glossary: {
        title: string;
        subtitle: string;
        searchPlaceholder: string;
        noResults: string;
        officialGlossary: string;
        backToGuide: string;
    };
    flashcards: {
        concept: string;
        explanation: string;
        previous: string;
        next: string;
    };
    footer: {
        rights: string;
    };
}
