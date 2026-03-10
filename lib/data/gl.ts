import { guides as guidesEs } from './es';
import { Guide } from './es';

const guidesGlOverrides: Partial<Guide>[] = [
    {
        "id": "00",
        "title": "Recursos para o uso de IA (Explicación Guías)",
        "summary": "Estas guías foron desenvolvidas no marco do piloto español de sandbox regulatorio de IA para apoiar a implementación da normativa europea de Intelixencia Artificial. Aínda que non teñen carácter vinculante, proporcionan recomendacións prácticas aliñadas cos requisitos regulatorios á espera de normas harmonizadas. Os documentos organízanse en guías introdutorias, guías técnicas e un manual de uso de checklist, e están suxeitos a revisión continua conforme ao desenvolvemento de estándares e directrices europeas.",
        "flashcards": [
            {
                "front": "Obxectivo das guías",
                "back": "Servir de apoio para a implementación e cumprimento da normativa europea de Intelixencia Artificial e as súas obrigas aplicables."
            },
            {
                "front": "Carácter vinculante",
                "back": "As guías non son vinculantes nin substitúen a normativa, pero ofrecen recomendacións prácticas aliñadas cos requisitos."
            },
            {
                "front": "Organización das guías",
                "back": "Divídense en tres bloques: Guías introdutorias (1 e 2), Guías técnicas (3 a 15) e Manual de checklist (16)."
            }
        ],
        "quiz": [
            {
                "question": "Cal é o propósito principal destas guías?",
                "options": [
                    "Substituír a normativa europea de IA",
                    "Establecer leis vinculantes para todos os estados membros",
                    "Servir de apoio para a implementación da normativa europea de IA",
                    "Definir o orzamento da Unión Europea para IA"
                ],
                "correctAnswer": 2
            },
            {
                "question": "Que validez legal teñen estas guías?",
                "options": [
                    "Son de obrigado cumprimento",
                    "Non teñen carácter vinculante",
                    "Substitúen as leis nacionais",
                    "Son directivas oficiais da Comisión Europea"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Cando serán actualizados estes documentos?",
                "options": [
                    "Nunca, son versións finais",
                    "Só cando o solicite unha empresa",
                    "Unha vez ao ano",
                    "Conforme ao desenvolvemento de estándares e tras a aprobación do Ómnibus dixital"
                ],
                "correctAnswer": 3
            }
        ]
    },
    {
        "id": "01",
        "title": "Guía introdutoria ao regulamento de IA",
        "summary": "Esta guía ofrece unha visión xeral do Regulamento Europeo de IA, definindo o seu alcance e obrigas principais. Explica os niveis de risco (inaceptable, alto, transparencia, mínimo) e os roles dos operadores, como provedores e responsables do despregamento. Detalla as obrigas específicas para sistemas de alto risco, incluíndo xestión de riscos, calidade de datos e documentación técnica, así como os requisitos de transparencia para sistemas como chatbots e deepfakes. Tamén aborda a gobernanza de supervisión e os prazos de cumprimento.",
        "contentIndex": [
            {
                "title": "1. Preámbulo",
                "content": "Este apartado establece o **propósito fundamental** do documento: servir como guía introdutoria para comprender o Regulamento Europeo de Intelixencia Artificial.\n\n### Obxectivos Principais\n*   **Facilitar a comprensión:** Ofrecer unha visión clara do alcance normativo, especialmente para quen se inician na materia.\n*   **Definir o alcance:** Clarificar o ámbito de aplicación e as principais obrigas.\n*   **Contextualizar:** Situar ao lector no marco normativo europeo e as implicacións para os distintos actores.\n\n> **Nota Importante:** Esta guía **non ten carácter vinculante** nin substitúe a normativa legal. Ofrece recomendacións prácticas aliñadas cos requisitos regulatorios á espera das normas harmonizadas definitivas.\n\nCompleméntase con guías técnicas especializadas para profundar en requisitos específicos como a xestión de riscos ou a calidade de datos."
            },
            {
                "title": "2. Introdución",
                "content": "O Regulamento baséase na estratexia europea de dous alicerces: **Excelencia** (fomento de investimento e innovación) e **Confianza** (garantía de seguridade e dereitos fundamentais). Busca crear un mercado único de IA seguro e fiable.\n\n### Exclusións do Ámbito de Aplicación\nNon se aplica a sistemas utilizados exclusivamente para:\n1.  **Fins militares, de defensa ou seguridade nacional.**\n2.  **Investigación e desenvolvemento (I+D) científica** antes da súa comercialización.\n3.  **Software de código aberto (Open Source)**, salvo que sexan sistemas de alto risco, prohibidos, ou teñan obrigas de transparencia.\n4.  **Uso persoal** por persoas físicas en actividades non profesionais.\n\n### Niveis de Risco\nO Regulamento segue un enfoque baseado no risco:\n\n*   🔴 **Risco Inaceptable (Prohibidos):** Sistemas que vulneran dereitos fundamentais. Exemplos:\n    *   Manipulación do comportamento cognitivo.\n    *   Puntuación social (*social scoring*).\n    *   Categorización biométrica sensible.\n    *   Identificación biométrica remota en tempo real en espazos públicos (salvo excepcións policiais estritas).\n*   🟠 **Alto Risco:** Permitidos pero suxeitos a **estritos requisitos** antes de entrar ao mercado. Inclúe:\n    *   Compoñentes de seguridade en produtos regulados (xoguetes, ascensores, dispositivos médicos).\n    *   Sistemas en áreas sensibles: Biometría, infraestruturas críticas, educación, emprego, servizos esenciais, control fronteirizo e xustiza.\n*   🟡 **Risco Limitado (Transparencia):** Sistemas con risco de manipulación ou engano. **Obriga principal:** Informar ao usuario.\n    *   *Chatbots* (saber que falas cunha IA).\n    *   *Deepfakes* (etiquetar contido sintético).\n    *   Recoñecemento de emocións.\n*   🟢 **Risco Mínimo:** A inmensa maioría de sistemas (filtros de spam, videoxogos). Permítese o seu uso libre, fomentando códigos de conduta voluntarios.\n\n### Actores Clave\n*   **Provedor (*Provider*):** Quen desenvolve un sistema de IA ou o pon no mercado baixo o seu nome ou marca.\n*   **Responsable do despregamento (*Deployer*):** Quen utiliza o sistema baixo a súa propia autoridade no exercicio dunha actividade profesional."
            },
            {
                "title": "2.1 Niveis de Risco",
                "content": "O Regulamento clasifica os sistemas en 4 niveis de risco:\\n\\n🔴 **Prohibidos**: Manipulación cognitiva, social scoring, biometría sensible, vixilancia masiva.\\n\\n🟠 **Alto Risco**: Sistemas en sectores críticos (emprego, educación, xustiza, saúde). Requiren xestión de riscos, datos de calidade, documentación técnica, vixilancia humana e avaliación de conformidade.\\n\\n🟡 **Transparencia**: Chatbots e deepfakes deben informar ao usuario.\\n\\n🟢 **Mínimo**: Sen obrigas específicas (filtros spam, videoxogos)."
            },
            {
                "title": "3. Principais Obrigas",
                "content": "As obrigas varían segundo o rol e o nivel de risco do sistema.\n\n### Obrigas Xerais\n*   **Alfabetización en IA:** Provedores e responsables do despregamento deben asegurar que o seu persoal teña a formación necesaria para operar e supervisar os sistemas de IA correctamente.\n\n### Obrigas de Transparencia (Art. 50)\nAplicables a sistemas de risco limitado (chatbots, deepfakes, etc.):\n1.  **Interacción:** Informar ao usuario de que está interactuando cunha IA.\n2.  **Contido Sintético:** Marcar en formato lexible dixitalmente o contido de audio, imaxe ou vídeo xerado ou manipulado artificialmente (*deepfakes*).\n3.  **Recoñecemento de Emocións/Biométrico:** Informar ás persoas expostas ao sistema.\n\n### Obrigas para Sistemas de Alto Risco (Provedores)\nPara comercializar un sistema de alto risco, o provedor debe cumprir cun ciclo de vida estrito:\n\n1.  **Sistema de Xestión de Riscos (Art. 9):** Identificar, avaliar e mitigar riscos durante toda a vida do sistema.\n2.  **Gobernanza de Datos (Art. 10):** Usar datos de adestramento, validación e proba de calidade, pertinentes e libres de nesgos.\n3.  **Documentación Técnica (Art. 11):** Elaborar documentación detallada que demostre a conformidade co regulamento.\n4.  **Rexistro Automático (Logs) (Art. 12):** Capacidade de rexistrar eventos para trazabilidade e detección de erros.\n5.  **Transparencia e Información (Art. 13):** Instrucións de uso claras e deseño interpretable para o usuario.\n6.  **Vixilancia Humana (Art. 14):** Ferramentas para que unha persoa física poida supervisar e intervir no sistema.\n7.  **Precisión, Solidez e Ciberseguridade (Art. 15):** Resistencia a erros, fallos e ataques malintencionados.\n8.  **Avaliación de Conformidade (Art. 43):** Verificar o cumprimento antes da posta en mercado (pode requirir un organismo notificado).\n\n### Calendario de Aplicación\n*   **6 meses:** Prohibicións (Risco Inaceptable).\n*   **12 meses:** IA de Uso Xeral (GPAI) e Autoridades de Notificación.\n*   **24 meses:** Aplicación xeral (Sistemas de Alto Risco do Anexo III).\n*   **36 meses:** Sistemas de Alto Risco integrados en produtos (Anexo I)."
            },
            {
                "title": "4. ANEXO I. Avaliación da conformidade e Autoridades",
                "content": "Este anexo clarifica quen supervisa e como se avalían os sistemas de alto risco.\n\n### Tipos de Sistemas e Avaliación\n\n| Tipo de Sistema | Exemplos | Autoridade de Vixilancia (España) | Avaliación de Conformidade |\n| :--- | :--- | :--- | :--- |\n| **Anexo I (Produtos)** | Xoguetes, ascensores, produtos sanitarios, maquinaria agrícola. | **Sectorial** (ex. AEMPS, Ministerio de Industria). | **Integrada** na lexislación do produto (Marcado CE actual). |\n| **Anexo III (Finalidade)** | Educación, Emprego, Xustiza, Servizos Públicos. | **AESIA** (xeralmente), Banco de España, AEPD, etc. | Principalmente **Control Interno** (Autoavaliación). |\n| **Biometría (Anexo III)** | Identificación biométrica remota. | **AEPD / AESIA** | Requirir **Organismo Notificado** (terceiro independente). |\n\n> **AESIA:** A Axencia Española de Supervisión da Intelixencia Artificial actuará como punto de contacto único e autoridade para sistemas de alto risco que non teñan unha autoridade sectorial específica previa."
            }
        ],
        "flashcards": [
            {
                "front": "Sistemas de Alto Risco",
                "back": "Sistemas de IA permitidos pero suxeitos a requisitos estritos, como xestión de riscos e calidade de datos, antes da súa comercialización."
            },
            {
                "front": "Obrigas de transparencia",
                "back": "Requisito de informar ás persoas cando interactúan cun sistema de IA ou cando se xera contido sintético (deepfakes)."
            },
            {
                "front": "Alfabetización en IA",
                "back": "Obriga de que o persoal encargado do funcionamento dos sistemas teña un coñecemento suficiente en materia de Intelixencia Artificial."
            },
            {
                "front": "Sandbox Regulatorio",
                "back": "Entorno controlado de probas supervisado por autoridades competentes que fomenta a innovación e facilita o desenvolvemento, validación e proba de sistemas de IA antes da súa posta en mercado."
            },
            {
                "front": "AESIA",
                "back": "Axencia Española de Supervisión da Intelixencia Artificial. Actúa como autoridade de vixilancia do mercado en España e supervisa o cumprimento do Regulamento."
            },
            {
                "front": "Risco Limitado (Transparencia)",
                "back": "Categoría de sistemas de IA (como chatbots ou deepfakes) suxeitos a obrigas específicas de transparencia, como informar ao usuario de que interactúa cunha máquina."
            },
            {
                "front": "Risco Mínimo",
                "back": "Categoría que engloba a maioría de sistemas de IA (ex. videoxogos, filtros de spam). Non teñen obrigas adicionais máis aló da normativa xeral."
            },
            {
                "front": "Provedor (Provider)",
                "back": "Persoa ou entidade que desenvolve un sistema de IA e o introduce no mercado ou o pon en servizo baixo o seu propio nome ou marca."
            },
            {
                "front": "Responsable do Despregamento (Deployer)",
                "back": "Entidade ou persoa que utiliza un sistema de IA baixo a súa propia autoridade no exercicio dunha actividade profesional (non aplica ao usuario persoal)."
            },
            {
                "front": "Marcado CE",
                "back": "Distintivo que certifica que un sistema de IA cumpre cos requisitos de seguridade e conformidade do Regulamento Europeo."
            },
            {
                "front": "Avaliación de Conformidade",
                "back": "Proceso obrigatorio para sistemas de alto risco que verifica se cumpren os requisitos do Regulamento antes da súa comercialización."
            },
            {
                "front": "Incidente Grave",
                "back": "Fallo dun sistema de IA que causa morte, danos graves á saúde, interrupción de infraestruturas críticas ou violación de dereitos fundamentais."
            }
        ],
        "quiz": [
            {
                "question": "Que sistemas de IA están prohibidos segundo o Regulamento?",
                "options": [
                    "Os chatbots de atención ao cliente",
                    "Os sistemas que manipulan o comportamento humano para eludir o seu libre albedrío",
                    "Os sistemas de recomendación de películas",
                    "Os filtros de spam"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Que obriga teñen os sistemas que xeran 'deepfakes'?",
                "options": [
                    "Non teñen ningunha obriga",
                    "Deben obter unha licenza especial",
                    "Deben facer público que o contido foi xerado ou manipulado artificialmente",
                    "Deben ser aprobados por un xuíz"
                ],
                "correctAnswer": 2
            },
            {
                "question": "A que categoría pertencen os sistemas de identificación biométrica remota en tempo real en espazos públicos?",
                "options": [
                    "Risco mínimo",
                    "Alto risco",
                    "Risco limitado",
                    "Prácticas prohibidas (salvo excepcións)"
                ],
                "correctAnswer": 3
            },
            {
                "question": "Segundo o Regulamento, quen se considera 'Provedor'?",
                "options": [
                    "Quen usa a IA para fins profesionais.",
                    "Quen desenvolve ou introduce o sistema no mercado baixo a súa marca.",
                    "O distribuidor que vende o software.",
                    "O usuario final."
                ],
                "correctAnswer": 1
            },
            {
                "question": "Cal é unha práctica prohibida por risco inaceptable?",
                "options": [
                    "Chatbots sen supervisión.",
                    "Sistemas de priorización de emerxencias.",
                    "Manipulación subliminal do comportamento con risco de dano.",
                    "Xestión de tráfico con IA."
                ],
                "correctAnswer": 2
            },
            {
                "question": "Cando asume o Responsable do despregamento as obrigas do Provedor?",
                "options": [
                    "Ao usar o sistema en varios países.",
                    "Se realiza unha modificación substancial do sistema.",
                    "Se o usa para fins militares.",
                    "Se non actualiza o software."
                ],
                "correctAnswer": 1
            },
            {
                "question": "Que é un 'Sandbox regulatorio'?",
                "options": [
                    "Un entorno controlado para probas e innovación supervisado por autoridades.",
                    "Un mecanismo de sanción.",
                    "Unha base de datos de sistemas de alto risco.",
                    "Un software de código aberto."
                ],
                "correctAnswer": 0
            },
            {
                "question": "Cando comezan a aplicarse as prohibicións de prácticas de risco inaceptable?",
                "options": [
                    "Agosto 2026",
                    "Febreiro 2025 (6 meses despois de entrada en vigor)",
                    "Agosto 2030",
                    "Inmediatamente"
                ],
                "correctAnswer": 1
            },
            {
                "question": "Que obriga teñen os chatbots (Risco Limitado)?",
                "options": [
                    "Revelar o seu código fonte.",
                    "Informar ao usuario de que está interactuando cunha IA.",
                    "Ningunha se son gratuítos.",
                    "Obter consentimento biométrico."
                ],
                "correctAnswer": 1
            },
            {
                "question": "Cal é o obxectivo da xestión de riscos en IA de Alto Risco?",
                "options": [
                    "Eliminar a intervención humana.",
                    "Garantir rendibilidade.",
                    "Identificar e mitigar riscos para saúde, seguridade e dereitos fundamentais.",
                    "Asegurar compatibilidade con calquera SO."
                ],
                "correctAnswer": 2
            }
        ],
        "glossary": [
            { "term": "Afectado", "definition": "Toda persoa física ou xurídica que se atopa baixo a influencia ou é destinataria dun sistema de IA. É un concepto distinto ao de 'usuario final' ou 'responsable do despregamento'." },
            { "term": "Autoridade nacional competente", "definition": "Organismo encargado de supervisar a aplicación e execución do Regulamento en cada Estado membro. En España, esta función desempéñaa a Axencia Española de Supervisión da IA (AESIA)." },
            { "term": "Ciclo de vida da IA", "definition": "Período completo de existencia do sistema, que abarca desde a fase de deseño inicial e recompilación de datos, ata a súa retirada definitiva do mercado ou posta fóra de servizo." },
            { "term": "Datos de adestramento", "definition": "Conxunto de datos utilizados para axustar os parámetros internos dun modelo de IA mediante técnicas de aprendizaxe automática, permitindo que o sistema aprenda patróns." },
            { "term": "Datos de validación", "definition": "Conxunto de datos distinto ao de adestramento, utilizado para proporcionar unha avaliación imparcial do modelo durante o seu desenvolvemento e axustar hiperparámetros, evitando o sobreaxuste." }
        ]
    }
];

export const guides: Guide[] = guidesEs.map(g => {
    const override = guidesGlOverrides.find(o => o.id === g.id);
    // Shallow merge is not enough for nested arrays, we want to replace arrays if provided
    if (override) {
        return {
            ...g,
            ...override,
            // Ensure nested properties are replaced completely if they exist in override
            flashcards: override.flashcards || g.flashcards,
            quiz: override.quiz || g.quiz,
            contentIndex: override.contentIndex || g.contentIndex,
            glossary: override.glossary || g.glossary,
        };
    }
    return g;
});
