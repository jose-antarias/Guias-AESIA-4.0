import { guides as guidesEs } from './es';
import { guides as guidesGl } from './gl';
import { guides as guidesCa } from './ca';
import { guides as guidesEu } from './eu';
import { Guide, Flashcard, QuizQuestion, ContentSection, GlossaryTerm } from './es';

export type { Guide, Flashcard, QuizQuestion, ContentSection, GlossaryTerm };

export const getGuides = (lang: string = 'es'): Guide[] => {
    switch (lang) {
        case 'gl':
            return guidesGl;
        case 'ca':
            return guidesCa;
        case 'eu':
            return guidesEu;
        case 'es':
        default:
            return guidesEs;
    }
};

export const getGuide = (id: string, lang: string = 'es'): Guide | undefined => {
    const guides = getGuides(lang);
    return guides.find(g => g.id === id);
};
