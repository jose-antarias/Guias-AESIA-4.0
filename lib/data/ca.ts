import { guides as guidesEs } from './es';
import { Guide } from './es';

const guidesCaOverrides: Partial<Guide>[] = [
    {
        "id": "00",
        "title": "Recursos per a l'ús d'IA (Explicació Guies)",
        "summary": "Aquestes guies han estat desenvolupades en el marc del pilot espanyol de sandbox regulatori d'IA per donar suport a la implementació de la normativa europea d'Intel·ligència Artificial. Tot i que no tenen caràcter vinculant, proporcionen recomanacions pràctiques alineades amb els requisits regulatoris a l'espera de normes harmonitzades."
    },
    {
        "id": "01",
        "title": "Guia introductòria al reglament d'IA",
        "summary": "Aquesta guia ofereix una visió general del Reglament Europeu d'IA, definint el seu abast i obligacions principals. Explica els nivells de risc (inacceptable, alt, transparència, mínim) i els rols dels operadors, com proveïdors i responsables del desplegament."
    }
];

export const guides: Guide[] = guidesEs.map(g => {
    const override = guidesCaOverrides.find(o => o.id === g.id);
    if (override) {
        return {
            ...g,
            ...override,
            // If override properties are missing, they fall back to 'g' (Spanish) automatically via spread
            // But specific nested arrays might need explicit handling if we wanted to replace them entirely.
            // Since we only provide title/summary here, the rest remains in Spanish.
        };
    }
    return g;
});
