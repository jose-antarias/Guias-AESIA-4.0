import { guides as guidesEs } from './es';
import { Guide } from './es';

const guidesEuOverrides: Partial<Guide>[] = [
    {
        "id": "00",
        "title": "IA erabiltzeko baliabideak (Giden azalpena)",
        "summary": "Gida hauek IAko Espainiako araugintza-sandbox pilotuaren esparruan garatu dira, Adimen Artifizialeko Europako araudia inplementatzen laguntzeko. Loturarik ez badute ere, gomendio praktikoak ematen dituzte, arau arautzaileekin bat datozenak, estandar harmonizatuen zain dauden bitartean."
    },
    {
        "id": "01",
        "title": "IAren araudiari buruzko sarrera gida",
        "summary": "Gida honek Europako IA Erregelamenduaren ikuspegi orokorra eskaintzen du, bere irismena eta betebehar nagusiak zehaztuz. Arrisku mailak (onartezina, altua, gardentasuna, gutxienekoa) eta operadoreen rolak azaltzen ditu, hala nola hornitzaileak eta hedatzaileak."
    }
];

export const guides: Guide[] = guidesEs.map(g => {
    const override = guidesEuOverrides.find(o => o.id === g.id);
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
