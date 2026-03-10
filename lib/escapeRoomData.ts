export interface EscapeRoomStage {
    id: string;
    storySegment: string;
    question: string;
    options: string[];
    correctAnswer: number;
    clue?: string; // Pista opcional
}

export interface EscapeRoomLevel {
    id: "easy" | "medium" | "hard";
    name: string;
    title: string;
    description: string;
    storyIntro: string;
    storyOutro: string; // Mensaje al ganar
    timeLimit: number; // Segundos
    penalty: number; // Segundos restados por error
    stages: EscapeRoomStage[];
}

export const ESCAPE_ROOM_LEVELS: EscapeRoomLevel[] = [
    {
        id: "easy",
        name: "Nivel 1: Fácil",
        title: "La auditoría sorpresa",
        description: "Una inspección inesperada pone a prueba tus conocimientos básicos. ¿Podrás validar el sistema a tiempo?",
        storyIntro: "Acabas de llegar a tu puesto como Oficial de cumplimiento junior en NeoTech. De repente, las compuertas se cierran y las luces se vuelven rojas.\n\nUna auditoría sorpresa de la AESIA ha comenzado. Los inspectores están subiendo por el ascensor.\n\nTienes 5 minutos para validar que el sistema 'Nexus-1' cumple con los requisitos fundamentales antes de que entren en la sala de servidores.",
        storyOutro: "¡Lo lograste! Los inspectores revisan los logs y asienten con aprobación. 'Nexus-1' es seguro y legal. Has salvado a la compañía de una multa millonaria.",
        timeLimit: 300,
        penalty: 30,
        stages: [
            {
                id: "e1",
                storySegment: "Accedes a la terminal principal. El sistema te pide clasificar 'Nexus-1', utilizado para el filtrado automático de currículums en procesos de selección.",
                question: "¿Cuál es la clasificación de riesgo de este sistema según el Reglamento de IA?",
                options: [
                    "Riesgo Mínimo (filtro de spam)",
                    "Alto Riesgo (empleo y gestión de trabajadores)",
                    "Riesgo Inaceptable (manipulación subliminal)",
                    "Riesgo de Transparencia Limitada (chatbot)"
                ],
                correctAnswer: 1,
                clue: "Revisa el Anexo III sobre sistemas de alto riesgo relacionados con el empleo."
            },
            {
                id: "e2",
                storySegment: "Clasificación aceptada. Ahora el sistema solicita verificar el protocolo de control humano. Los inspectores están en el pasillo.",
                question: "¿Qué medida es esencial para garantizar la supervisión humana efectiva?",
                options: [
                    "Que la IA tome decisiones sin intervención para ser más rápida.",
                    "Que exista un botón de apagado, pero nadie sepa dónde está.",
                    "Que una persona física pueda comprender, intervenir e interrumpir el sistema.",
                    "Que la IA se supervise a sí misma mediante otra IA."
                ],
                correctAnswer: 2
            },
            {
                id: "e3",
                storySegment: "Último paso. Debes presentar la certificación de los datos de entrenamiento antes de que se abra la puerta.",
                question: "¿Qué características de calidad deben cumplir los datos de entrenamiento, validación y prueba?",
                options: [
                    "Ser masivos, aunque sean antiguos.",
                    "Ser pertinentes, representativos, y estar libres de errores y completos.",
                    "Estar encriptados con doble factor.",
                    "Ser generados sintéticamente al 100%."
                ],
                correctAnswer: 1
            }
        ]
    },
    {
        id: "medium",
        name: "Nivel 2: Medio",
        title: "Protocolo de emergencia",
        description: "Un sistema médico está fallando. Debes diagnosticar y mitigar el riesgo antes de que sea tarde.",
        storyIntro: "Son las 3:00 AM. Tu comunicador parpadea con una alerta crítica.\n\nEl sistema de IA médica 'Hygeia', instalado en el Hospital Central, ha empezado a emitir diagnósticos erráticos.\n\nTienes 7 minutos para aislar el fallo, diagnosticar el problema de gobernanza y ejecutar el protocolo de seguridad antes de que el sistema afecte a pacientes reales.",
        storyOutro: "¡Sistema estabilizado! Has identificado el sesgo y activado el 'Fallo seguro' a tiempo. Los pacientes están a salvo y el equipo de ingeniería ya está trabajando en el reentrenamiento.",
        timeLimit: 420,
        penalty: 45,
        stages: [
            {
                id: "m1",
                storySegment: "Analizas los primeros logs de error. El sistema falla sistemáticamente más con un grupo demográfico específico.",
                question: "¿Qué principio de gobernanza de datos ha sido vulnerado y debe corregirse?",
                options: [
                    "La confidencialidad de los datos.",
                    "La completitud (faltan datos).",
                    "La representatividad y ausencia de sesgos.",
                    "La portabilidad de los datos."
                ],
                correctAnswer: 2
            },
            {
                id: "m2",
                storySegment: "Confirmado: es un sesgo de entrenamiento. Debes reportar esto inmediatamente como un incidente grave, ya que podría afectar a la salud.",
                question: "¿Cuál es el plazo máximo general para notificar un incidente grave a la autoridad tras establecer el vínculo causal?",
                options: [
                    "48 horas.",
                    "15 días.",
                    "10 días.",
                    "3 meses."
                ],
                correctAnswer: 1,
                clue: "Guía de Gestión de Incidentes (Art 73)."
            },
            {
                id: "m3",
                storySegment: "El reporte está enviado. Pero 'Hygeia' sigue operando inestablemente. Necesitas detenerlo sin apagar el soporte vital conectado.",
                question: "¿Qué mecanismo de robustez debes activar?",
                options: [
                    "El reinicio forzado (Hard Reset).",
                    "La redundancia ciega.",
                    "El modo 'Fallo Seguro' (Fail-safe).",
                    "La actualización de firmware OTA."
                ],
                correctAnswer: 2
            }
        ]
    },
    {
        id: "hard",
        name: "Nivel 3: Difícil",
        title: "La caja negra",
        description: "Una IA autónoma fuera de control. El código es opaco. El tiempo se agota.",
        storyIntro: "Has sido contratado para una misión de alto secreto. 'Onyx', una IA de seguridad autónoma experimental, ha dejado de responder a los comandos y está bloqueando el acceso a las instalaciones.\n\nEl código se está reescribiendo y volviéndose opaco ('Caja negra').\n\nTienes 10 minutos para descifrar sus protocolos de transparencia, evadir sus defensas lógicas y encontrar el artículo del reglamento que fuerza su apagado.",
        storyOutro: "¡Acceso concedido! Introdujiste el comando de anulación legal correcto. 'Onyx' se apaga pacíficamente. Has demostrado un dominio total de la regulación y la técnica.",
        timeLimit: 600,
        penalty: 60,
        stages: [
            {
                id: "h1",
                storySegment: "Intentas acceder al núcleo, pero 'Onyx' te bloquea exigiendo una justificación de por qué sus decisiones son inválidas.",
                question: "¿Qué técnica de explicabilidad usarías para mostrarle qué cambio en los datos habría llevado a una decisión diferente?",
                options: [
                    "Explicación post-hoc global.",
                    "Análisis de sensibilidad.",
                    "Explicación contrafactual.",
                    "Descomposición de red neuronal."
                ],
                correctAnswer: 2
            },
            {
                id: "h2",
                storySegment: "'Onyx' analiza tu respuesta... Aceptada. Pero detectas que alguien intentó manipularla antes que tú insertando ruido en sus sensores.",
                question: "¿Cómo se llama este tipo de ciberataque específico contra IAs?",
                options: [
                    "Ataque de fuerza bruta.",
                    "Ataque adversario (evasión).",
                    "Phishing de modelo.",
                    "Inyección SQL."
                ],
                correctAnswer: 1
            },
            {
                id: "h3",
                storySegment: "Has superado el firewall lógico. Ahora estás en el archivo central. Necesitas encontrar el expediente original del diseño de 'Onyx' para hallar la puerta trasera.",
                question: "¿Durante cuánto tiempo es obligatorio conservar la Documentación técnica a disposición de las autoridades?",
                options: [
                    "5 años desde el diseño.",
                    "10 años desde la puesta en el mercado.",
                    "Indefinidamente.",
                    "Hasta que salga una nueva versión."
                ],
                correctAnswer: 1
            },
            {
                id: "h4",
                storySegment: "Tienes el expediente. Encuentras la rutina de apagado, pero está protegida por una última clave: el artículo legal sobre vigilancia continua.",
                question: "¿Qué artículo del Reglamento establece la obligación de un sistema de vigilancia poscomercialización?",
                options: [
                    "Artículo 15.",
                    "Artículo 52.",
                    "Artículo 72.",
                    "Artículo 10."
                ],
                correctAnswer: 2
            }
        ]
    }
];
