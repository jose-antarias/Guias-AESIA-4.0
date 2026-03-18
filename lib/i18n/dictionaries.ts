import { Dictionary, Language } from './types';

export const dictionaries: Record<Language, Dictionary> = {
    es: {
        common: {
            guide: "guía",
            guides: "guías",
            playNow: "Jugar ahora",
            enter: "Entrar",
            loading: "Cargando...",
            startGuide: "Comenzar guía",
            summary: "Resumen ejecutivo",
            resources: "Materiales y recursos",
            downloadPdf: "Descargar guía completa",
            flashcardsBtn: "Flashcards",
            quizBtn: "Cuestionario",
            glossaryBtn: "Glosario"
        },
        navbar: {
            home: "Inicio",
            about: "Acerca de",
            activeGuide: "Guía activa"
        },
        hero: {
            badge: "Diputación de Lugo",
            title: "Guías AESIA 4.0",
            subtitle: "Regulación y uso de la IA",
            menciaLegend: "Plan de alfabetización MencIA: impulsa tu IA local",
            description: "Domina la normativa europea de Inteligencia Artificial con nuestra plataforma interactiva.",
            highlight: "16 guías oficiales transformadas en una experiencia de aprendizaje moderna."
        },
        gamification: {
            title: "Zona de gamificación",
            badge: "Aprende jugando",
            simulators: "Simuladores activos",
            systemStatus: "ESTADO DEL SISTEMA",
            progressSaved: "PROGRESO GUARDADO",
            bestTime: "MEJOR TIEMPO",
            accessControlled: "ACCESO CONTROLADO",
            adventureTitle: "Modo aventura",
            adventureDesc: "Explora 16 mundos temáticos, completa misiones y conquista la regulación.",
            pasapalabraTitle: "El rosco regulador",
            pasapalabraDesc: "Pon a prueba tu vocabulario. 27 conceptos clave contrarreloj.",
            escapeRoomTitle: "Sala de escape digital",
            escapeRoomDesc: "Resuelve incidentes críticos de IA antes de que se agote el tiempo."
        },
        guides: {
            title: "Guías técnicas",
            count: "guías",
            description: "Biblioteca oficial de recursos. Domina el RGPD y la Ley de IA desde los fundamentos hasta la implementación técnica.",
            viewAll: "Ver todas las guías",
            viewLess: "Mostrar menos",
            introTitle: "Sobre estas guías",
            introText: "La Agencia Española de Supervisión de la Inteligencia Artificial (AESIA) ha elaborado 16 guías técnicas en el marco del piloto español de sandbox regulatorio de IA. Estas guías apoyan la implementación práctica del Reglamento Europeo de IA y el RGPD, con especial atención a los sistemas de alto riesgo. Aunque no son vinculantes, constituyen la referencia de buenas prácticas más completa disponible en España.",
            introOrg: "Se organizan en: Guías introductorias (01-02), Guías técnicas (03-15) y Manual de checklist (16).",
            introMore: "Más información",
            introLess: "Ocultar",
            introSource: "Fuente oficial:",
            introLinkLabel: "Portal AESIA — Guías técnicas",
            sectionIntro: "Guías introductorias",
            sectionTech: "Guías técnicas",
            sectionChecklist: "Aplicación práctica"
        },
        footer: {
            rights: "© 2026 Diputación de Lugo - MencIA. Todos los derechos reservados."
        },
        quiz: {
            check: "Comprobar respuesta",
            next: "Siguiente pregunta",
            results: "Ver resultados",
            retry: "Repetir test",
            back: "Volver al inicio",
            question: "Pregunta",
            points: "Puntos",
            congrats: "¡Enhorabuena!",
            tryAgain: "Buen intento",
            correct: "Has acertado",
            of: "de",
            questions: "preguntas",
            tokenUnlocked: "Token de certificación desbloqueado",
            flipToken: "Gira el token para inspeccionarlo"
        },
        glossary: {
            title: "Diccionario de términos",
            subtitle: "Conceptos técnicos y definiciones clave para consulta rápida.",
            searchPlaceholder: "Buscar término (ej. Afectado, Sandbox...)",
            noResults: "No se encontraron términos",
            officialGlossary: "Glosario oficial",
            backToGuide: "Volver a la guía"
        },
        flashcards: {
            concept: "Concepto",
            explanation: "Explicación",
            previous: "Anterior",
            next: "Siguiente"
        }
    },
    gl: {
        common: {
            guide: "guía",
            guides: "guías",
            playNow: "Xogar agora",
            enter: "Entrar",
            loading: "Cargando...",
            startGuide: "Comezar guía",
            summary: "Resumo executivo",
            resources: "Materiais e recursos",
            downloadPdf: "Descargar guía completa",
            flashcardsBtn: "Flashcards",
            quizBtn: "Cuestionario",
            glossaryBtn: "Glosario"
        },
        navbar: {
            home: "Inicio",
            about: "Sobre nós",
            activeGuide: "Guía activa"
        },
        hero: {
            badge: "Deputación de Lugo",
            title: "Guías AESIA 4.0",
            subtitle: "Regulación e uso da IA",
            menciaLegend: "Plan de alfabetización MencIA: impulsa a túa IA local",
            description: "Domina a normativa europea de Intelixencia Artificial coa nosa plataforma interactiva.",
            highlight: "16 guías oficiais transformadas nunha experiencia de aprendizaxe moderna."
        },
        gamification: {
            title: "Zona de gamificación",
            badge: "Aprende xogando",
            simulators: "Simuladores activos",
            systemStatus: "ESTADO DO SISTEMA",
            progressSaved: "PROGRESO GARDADO",
            bestTime: "MELLOR TEMPO",
            accessControlled: "ACCESO CONTROLADO",
            adventureTitle: "Modo aventura",
            adventureDesc: "Explora 16 mundos temáticos, completa misións e conquista a regulación.",
            pasapalabraTitle: "O rosco regulador",
            pasapalabraDesc: "Pon a proba o teu vocabulario. 27 conceptos clave contrarreloxo.",
            escapeRoomTitle: "Sala de escape dixital",
            escapeRoomDesc: "Resolve incidentes críticos de IA antes de que se esgote o tempo."
        },
        guides: {
            title: "Guías técnicas",
            count: "guías",
            description: "Biblioteca oficial de recursos. Domina o RXPD e a Lei de IA dende os fundamentos ata a implementación técnica.",
            viewAll: "Ver todas as guías",
            viewLess: "Mostrar menos",
            introTitle: "Sobre estas guías",
            introText: "Estas guías foron desenvolvidas no marco do piloto español de sandbox regulatorio de IA para apoiar a implementación da normativa europea de Intelixencia Artificial. Non teñen carácter vinculante, pero proporcionan recomendacións prácticas aliñadas cos requisitos regulatorios.",
            introOrg: "Organízanse en: Guías introdutorias (01-02), Guías técnicas (03-15) e Manual de checklist (16).",
            introMore: "Máis información",
            introLess: "Ocultar",
            introSource: "Fonte oficial:",
            introLinkLabel: "Portal AESIA — Guías técnicas",
            sectionIntro: "Guías introdutorias",
            sectionTech: "Guías técnicas",
            sectionChecklist: "Aplicación práctica"
        },
        footer: {
            rights: "© 2026 Deputación de Lugo - MencIA. Todos os dereitos reservados."
        },
        quiz: {
            check: "Comprobar resposta",
            next: "Seguinte pregunta",
            results: "Ver resultados",
            retry: "Repetir test",
            back: "Volver ao inicio",
            question: "Pregunta",
            points: "Puntos",
            congrats: "Parabéns!",
            tryAgain: "Bo intento",
            correct: "Acertaches",
            of: "de",
            questions: "preguntas",
            tokenUnlocked: "Token de certificación desbloqueado",
            flipToken: "Xira o token para inspeccionalo"
        },
        glossary: {
            title: "Dicionario de termos",
            subtitle: "Conceptos técnicos e definicións clave para consulta rápida.",
            searchPlaceholder: "Buscar termo (ex. Afectado, Sandbox...)",
            noResults: "Non se atoparon termos",
            officialGlossary: "Glosario oficial",
            backToGuide: "Volver á guía"
        },
        flashcards: {
            concept: "Concepto",
            explanation: "Explicación",
            previous: "Anterior",
            next: "Seguinte"
        }
    },
    ca: {
        common: {
            guide: "guia",
            guides: "guies",
            playNow: "Jugar ara",
            enter: "Entrar",
            loading: "Carregant...",
            startGuide: "Començar guia",
            summary: "Resum executiu",
            resources: "Materials i recursos",
            downloadPdf: "Descarregar guia completa",
            flashcardsBtn: "Targetes",
            quizBtn: "Qüestionari",
            glossaryBtn: "Glosari"
        },
        navbar: {
            home: "Inici",
            about: "Sobre nosaltres",
            activeGuide: "Guia activa"
        },
        hero: {
            badge: "Diputació de Lugo",
            title: "Guies AESIA 4.0",
            subtitle: "Regulació i ús de la IA",
            menciaLegend: "Pla d'alfabetització MencIA: impulsa la teva IA local",
            description: "Domina la normativa europea d'Intel·ligència Artificial amb la nostra plataforma interactiva.",
            highlight: "16 guies oficials transformades en una experiència d'aprenentatge moderna."
        },
        gamification: {
            title: "Zona de gamificació",
            badge: "Aprèn jugant",
            simulators: "Simuladors actius",
            systemStatus: "ESTAT DEL SISTEMA",
            progressSaved: "PROGRÉS GUARDAT",
            bestTime: "MILLOR TEMPS",
            accessControlled: "ACCÉS CONTROLAT",
            adventureTitle: "Mode aventura",
            adventureDesc: "Explora 16 mons temàtics, completa missions i conquista la regulació.",
            pasapalabraTitle: "El rosco regulador",
            pasapalabraDesc: "Posa a prova el teu vocabulari. 27 conceptes clau contrarellotge.",
            escapeRoomTitle: "Sala d'escape digital",
            escapeRoomDesc: "Resol incidents crítics d'IA abans que s'esgoti el temps."
        },
        guides: {
            title: "Guies tècniques",
            count: "guies",
            description: "Biblioteca oficial de recursos. Domina el RGPD i la Llei d'IA des dels fonaments fins a la implementació tècnica.",
            viewAll: "Veure totes les guies",
            viewLess: "Mostrar menys",
            introTitle: "Sobre aquestes guies",
            introText: "Aquestes guies han estat desenvolupades en el marc del pilot espanyol de sandbox regulatori d'IA per donar suport a la implementació de la normativa europea d'Intel·ligència Artificial. No tenen caràcter vinculant, però proporcionen recomanacions pràctiques.",
            introOrg: "S'organitzen en: Guies introductòries (01-02), Guies tècniques (03-15) i Manual de checklist (16).",
            introMore: "Més informació",
            introLess: "Amagar",
            introSource: "Font oficial:",
            introLinkLabel: "Portal AESIA — Guies tècniques",
            sectionIntro: "Guies introductòries",
            sectionTech: "Guies tècniques",
            sectionChecklist: "Aplicació pràctica"
        },
        footer: {
            rights: "© 2026 Diputació de Lugo - MencIA. Tots els drets reservats."
        },
        quiz: {
            check: "Comprovar resposta",
            next: "Següent pregunta",
            results: "Veure resultats",
            retry: "Repetir test",
            back: "Tornar a l'inici",
            question: "Pregunta",
            points: "Punts",
            congrats: "Enhorabona!",
            tryAgain: "Bon intent",
            correct: "Has encertat",
            of: "de",
            questions: "preguntes",
            tokenUnlocked: "Token de certificació desbloquejat",
            flipToken: "Gira el token per inspeccionar-lo"
        },
        glossary: {
            title: "Diccionari de termes",
            subtitle: "Conceptes tècnics i definicions clau per a consulta ràpida.",
            searchPlaceholder: "Cercar terme (ex. Afectat, Sandbox...)",
            noResults: "No s'han trobat termes",
            officialGlossary: "Glosari oficial",
            backToGuide: "Tornar a la guia"
        },
        flashcards: {
            concept: "Concepte",
            explanation: "Explicació",
            previous: "Anterior",
            next: "Següent"
        }
    },
    eu: {
        common: {
            guide: "gida",
            guides: "gidak",
            playNow: "Jokatu orain",
            enter: "Sartu",
            loading: "Kargatzen...",
            startGuide: "Hasi gida",
            summary: "Laburpen exekutiboa",
            resources: "Materialak eta baliabideak",
            downloadPdf: "Gidaliburua deskargatu",
            flashcardsBtn: "Flashcards",
            quizBtn: "Galdetegia",
            glossaryBtn: "Glosarioa"
        },
        navbar: {
            home: "Hasiera",
            about: "Guri buruz",
            activeGuide: "Gida aktiboa"
        },
        hero: {
            badge: "Lugoko Aldundia",
            title: "AESIA Gidak",
            subtitle: "IAren araudia eta erabilera",
            menciaLegend: "MencIA alfabetatze plana: bultzatu zure tokiko IA",
            description: "Menperatu Adimen Artifizialaren Europako araudia gure plataforma interaktiboarekin.",
            highlight: "16 gida ofizial, ikaskuntza-esperientzia moderno bihurtuta."
        },
        gamification: {
            title: "Gamifikazio gunea",
            badge: "Ikasi jolastuz",
            simulators: "Simulatzaile aktiboak",
            systemStatus: "SISTEMAREN EGOERA",
            progressSaved: "AURRERAPENA GORDE DA",
            bestTime: "DENBORA ONENA",
            accessControlled: "SARBIDE KONTROLATUA",
            adventureTitle: "Abentura modua",
            adventureDesc: "Arakatu 16 mundu tematiko, osatu misioak eta konkistatu araudia.",
            pasapalabraTitle: "Errosko erregulatzailea",
            pasapalabraDesc: "Probatu zure hiztegia. 27 funtsezko kontzeptu erlojuaren aurka.",
            escapeRoomTitle: "Ihes-gela digitala",
            escapeRoomDesc: "Ebatzi IA intzidente kritikoak denbora agortu baino lehen."
        },
        guides: {
            title: "Gida teknikoak",
            count: "gidak",
            description: "Baliabideen liburutegi ofiziala. Menderatu DBEO eta IA Legea oinarrietatik inplementazio teknikoaraino.",
            viewAll: "Ikusi gida guztiak",
            viewLess: "Erakutsi gutxiago",
            introTitle: "Gida hauen inguruan",
            introText: "Gida hauek IAko Espainiako araugintza-sandbox pilotuaren esparruan garatu dira, Adimen Artifizialeko Europako araudia inplementatzen laguntzeko. Loturarik gabeak dira, baina gomendio praktikoak ematen dituzte.",
            introOrg: "Honela antolatzen dira: Sarrera-gidak (01-02), Gida teknikoak (03-15) eta Checklist eskuliburua (16).",
            introMore: "Informazio gehiago",
            introLess: "Ezkutatu",
            introSource: "Iturri ofiziala:",
            introLinkLabel: "AESIA Ataria — Gida teknikoak",
            sectionIntro: "Sarrera-gidak",
            sectionTech: "Gida teknikoak",
            sectionChecklist: "Aplikazio praktikoa"
        },
        footer: {
            rights: "© 2026 Lugoko Aldundia - MencIA. Eskubide guztiak erreserbatuta."
        },
        quiz: {
            check: "Egiaztatu erantzuna",
            next: "Hurrengo galdera",
            results: "Ikusi emaitzak",
            retry: "Errepikatu testa",
            back: "Itzuli hasierara",
            question: "Galdera",
            points: "Puntuak",
            congrats: "Zorionak!",
            tryAgain: "Saialdi ona",
            correct: "Asmatu duzu",
            of: "/",
            questions: "galdera",
            tokenUnlocked: "Ziurtagiri-token desblokeatuta",
            flipToken: "Biratu tokena ikuskatzeko"
        },
        glossary: {
            title: "Terminoen hiztegia",
            subtitle: "Kontzeptu teknikoak eta funtsezko definizioak kontsulta azkar baterako.",
            searchPlaceholder: "Bilatu terminoa (adib. Afectado, Sandbox...)",
            noResults: "Ez da terminorik aurkitu",
            officialGlossary: "Glosario ofiziala",
            backToGuide: "Gidaliburura itzuli"
        },
        flashcards: {
            concept: "Kontzeptua",
            explanation: "Azalpena",
            previous: "Aurrekoa",
            next: "Hurrengoa"
        }
    }
};
