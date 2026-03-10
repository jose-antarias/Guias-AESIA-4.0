export interface Flashcard {
  front: string;
  back: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface ContentSection {
  title: string;
  content: string;
  componentId?: string;
  componentProps?: Record<string, any>;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
}

export interface Guide {
  id: string;
  title: string;
  summary: string;
  flashcards: Flashcard[];
  quiz: QuizQuestion[];
  contentIndex?: ContentSection[];
  pdfUrl?: string; // URL to the official PDF guide
  glossary?: GlossaryTerm[];
}

export const guides: Guide[] = [
  {
    "id": "00",
    "title": "Recursos para el uso de IA (Explicación Guías)",
    "summary": "Estas guías han sido desarrolladas en el marco del piloto español de sandbox regulatorio de IA para apoyar la implementación de la normativa europea de Inteligencia Artificial. Aunque no tienen carácter vinculante, proporcionan recomendaciones prácticas alineadas con los requisitos regulatorios a la espera de normas armonizadas. Los documentos se organizan en guías introductorias, guías técnicas y un manual de uso de checklist, y están sujetos a revisión continua conforme al desarrollo de estándares y directrices europeas.",
    "flashcards": [
      {
        "front": "Objetivo de las guías",
        "back": "Servir de apoyo para la implementación y cumplimiento de la normativa europea de Inteligencia Artificial y sus obligaciones aplicables."
      },
      {
        "front": "Carácter vinculante",
        "back": "Las guías no son vinculantes ni sustituyen la normativa, pero ofrecen recomendaciones prácticas alineadas con los requisitos."
      },
      {
        "front": "Organización de las guías",
        "back": "Se dividen en tres bloques: Guías introductorias (1 y 2), Guías técnicas (3 a 15) y Manual de checklist (16)."
      }
    ],
    "quiz": [
      {
        "question": "¿Cuál es el propósito principal de estas guías?",
        "options": [
          "Sustituir la normativa europea de IA",
          "Establecer leyes vinculantes para todos los estados miembros",
          "Servir de apoyo para la implementación de la normativa europea de IA",
          "Definir el presupuesto de la Unión Europea para IA"
        ],
        "correctAnswer": 2
      },
      {
        "question": "¿Qué validez legal tienen estas guías?",
        "options": [
          "Son de obligado cumplimiento",
          "No tienen carácter vinculante",
          "Sustituyen a las leyes nacionales",
          "Son directivas oficiales de la Comisión Europea"
        ],
        "correctAnswer": 1
      },
      {
        "question": "¿Cuándo serán actualizados estos documentos?",
        "options": [
          "Nunca, son versiones finales",
          "Solo cuando lo solicite una empresa",
          "Una vez al año",
          "Conforme al desarrollo de estándares y tras la aprobación del Ómnibus digital"
        ],
        "correctAnswer": 3
      }
    ]
  },
  {
    "id": "01",
    "title": "Guía introductoria al reglamento de IA",
    "summary": "Esta guía ofrece una visión general del Reglamento Europeo de IA, definiendo su alcance y obligaciones principales. Explica los niveles de riesgo (inaceptable, alto, transparencia, mínimo) y los roles de los operadores, como proveedores y responsables del despliegue. Detalla las obligaciones específicas para sistemas de alto riesgo, incluyendo gestión de riesgos, calidad de datos y documentación técnica, así como los requisitos de transparencia para sistemas como chatbots y deepfakes. También aborda la gobernanza de supervisión y los plazos de cumplimiento.",
    "contentIndex": [
      {
        "title": "1. Preámbulo",
        "content": "Este apartado establece el **propósito fundamental** del documento: servir como guía introductoria para comprender el Reglamento Europeo de Inteligencia Artificial.\n\n### Objetivos Principales\n*   **Facilitar la comprensión:** Ofrecer una visión clara del alcance normativo, especialmente para quienes se inician en la materia.\n*   **Definir el alcance:** Clarificar el ámbito de aplicación y las principales obligaciones.\n*   **Contextualizar:** Situar al lector en el marco normativo europeo y las implicaciones para los distintos actores.\n\n> **Nota Importante:** Esta guía **no tiene carácter vinculante** ni sustituye a la normativa legal. Ofrece recomendaciones prácticas alineadas con los requisitos regulatorios a la espera de las normas armonizadas definitivas.\n\nSe complementa con guías técnicas especializadas para profundizar en requisitos específicos como la gestión de riesgos o la calidad de datos."
      },
      {
        "title": "2. Introducción",
        "content": "El Reglamento se basa en la estrategia europea de dos pilares: **Excelencia** (fomento de inversión e innovación) y **Confianza** (garantía de seguridad y derechos fundamentales). Busca crear un mercado único de IA seguro y confiable.\n\n### Exclusiones del Ámbito de Aplicación\nNo se aplica a sistemas utilizados exclusivamente para:\n1.  **Fines militares, de defensa o seguridad nacional.**\n2.  **Investigación y desarrollo (I+D) científica** antes de su comercialización.\n3.  **Software de código abierto (Open Source)**, salvo que sean sistemas de alto riesgo, prohibidos, o tengan obligaciones de transparencia.\n4.  **Uso personal** por personas físicas en actividades no profesionales.\n\n### Niveles de Riesgo\nEl Reglamento sigue un enfoque basado en el riesgo:\n\n*   🔴 **Riesgo Inaceptable (Prohibidos):** Sistemas que vulneran derechos fundamentales. Ejemplos:\n    *   Manipulación del comportamiento cognitivo.\n    *   Puntuación social (*social scoring*).\n    *   Categorización biométrica sensible.\n    *   Identificación biométrica remota en tiempo real en espacios públicos (salvo excepciones policiales estrictas).\n*   🟠 **Alto Riesgo:** Permitidos pero sujetos a **estrictos requisitos** antes de entrar al mercado. Incluye:\n    *   Componentes de seguridad en productos regulados (juguetes, ascensores, dispositivos médicos).\n    *   Sistemas en áreas sensibles: Biometría, infraestructuras críticas, educación, empleo, servicios esenciales, control fronterizo y justicia.\n*   🟡 **Riesgo Limitado (Transparencia):** Sistemas con riesgo de manipulación o engaño. **Obligación principal:** Informar al usuario.\n    *   *Chatbots* (saber que hablas con una IA).\n    *   *Deepfakes* (etiquetar contenido sintético).\n    *   Reconocimiento de emociones.\n*   🟢 **Riesgo Mínimo:** La inmensa mayoría de sistemas (filtros de spam, videojuegos). Se permite su uso libre, fomentando códigos de conducta voluntarios.\n\n### Actores Clave\n*   **Proveedor (*Provider*):** Quien desarrolla un sistema de IA o lo pone en el mercado bajo su nombre o marca.\n*   **Responsable del despliegue (*Deployer*):** Quien utiliza el sistema bajo su propia autoridad en el ejercicio de una actividad profesional."
      },
      {
        "title": "2.1 Niveles de Riesgo",
        "content": "El Reglamento clasifica los sistemas en 4 niveles de riesgo:\\n\\n🔴 **Prohibidos**: Manipulación cognitiva, social scoring, biometría sensible, vigilancia masiva.\\n\\n🟠 **Alto Riesgo**: Sistemas en sectores críticos (empleo, educación, justicia, salud). Requieren gestión de riesgos, datos de calidad, documentación técnica, vigilancia humana y evaluación de conformidad.\\n\\n🟡 **Transparencia**: Chatbots y deepfakes deben informar al usuario.\\n\\n🟢 **Mínimo**: Sin obligaciones específicas (spam filters, videojuegos)."
      },
      {
        "title": "3. Principales Obligaciones",
        "content": "Las obligaciones varían según el rol y el nivel de riesgo del sistema.\n\n### Obligaciones Generales\n*   **Alfabetización en IA:** Proveedores y responsables del despliegue deben asegurar que su personal tenga la formación necesaria para operar y supervisar los sistemas de IA correctamente.\n\n### Obligaciones de Transparencia (Art. 50)\nAplicables a sistemas de riesgo limitado (chatbots, deepfakes, etc.):\n1.  **Interacción:** Informar al usuario de que está interactuando con una IA.\n2.  **Contenido Sintético:** Marcar en formato legible digitalmente el contenido de audio, imagen o vídeo generado o manipulado artificialmente (*deepfakes*).\n3.  **Reconocimiento de Emociones/Biométrico:** Informar a las personas expuestas al sistema.\n\n### Obligaciones para Sistemas de Alto Riesgo (Proveedores)\nPara comercializar un sistema de alto riesgo, el proveedor debe cumplir con un ciclo de vida estricto:\n\n1.  **Sistema de Gestión de Riesgos (Art. 9):** Identificar, evaluar y mitigar riesgos durante toda la vida del sistema.\n2.  **Gobernanza de Datos (Art. 10):** Usar datos de entrenamiento, validación y prueba de calidad, pertinentes y libres de sesgos.\n3.  **Documentación Técnica (Art. 11):** Elaborar documentación detallada que demuestre la conformidad con el reglamento.\n4.  **Registro Automático (Logs) (Art. 12):** Capacidad de registrar eventos para trazabilidad y detección de errores.\n5.  **Transparencia e Información (Art. 13):** Instrucciones de uso claras y diseño interpretable para el usuario.\n6.  **Vigilancia Humana (Art. 14):** Herramientas para que una persona física pueda supervisar e intervenir en el sistema.\n7.  **Precisión, Solidez y Ciberseguridad (Art. 15):** Resistencia a errores, fallos y ataques malintencionados.\n8.  **Evaluación de Conformidad (Art. 43):** Verificar el cumplimiento antes de la puesta en mercado (puede requerir un organismo notificado).\n\n### Calendario de Aplicación\n*   **6 meses:** Prohibiciones (Riesgo Inaceptable).\n*   **12 meses:** IA de Uso General (GPAI) y Autoridades de Notificación.\n*   **24 meses:** Aplicación general (Sistemas de Alto Riesgo del Anexo III).\n*   **36 meses:** Sistemas de Alto Riesgo integrados en productos (Anexo I)."
      },
      {
        "title": "4. ANEXO I. Evaluación de la conformidad y Autoridades",
        "content": "Este anexo clarifica quién supervisa y cómo se evalúan los sistemas de alto riesgo.\n\n### Tipos de Sistemas y Evaluación\n\n| Tipo de Sistema | Ejemplos | Autoridad de Vigilancia (España) | Evaluación de Conformidad |\n| :--- | :--- | :--- | :--- |\n| **Anexo I (Productos)** | Juguetes, ascensores, productos sanitarios, maquinaria agrícola. | **Sectorial** (ej. AEMPS, Ministerio de Industria). | **Integrada** en la legislación del producto (Marcado CE actual). |\n| **Anexo III (Finalidad)** | Educación, Empleo, Justicia, Servicios Públicos. | **AESIA** (generalmente), Banco de España, AEPD, etc. | Principalmente **Control Interno** (Autoevaluación). |\n| **Biometría (Anexo III)** | Identificación biométrica remota. | **AEPD / AESIA** | Requiere **Organismo Notificado** (tercero independiente). |\n\n> **AESIA:** La Agencia Española de Supervisión de la Inteligencia Artificial actuará como punto de contacto único y autoridad para sistemas de alto riesgo que no tengan una autoridad sectorial específica previa."
      }
    ],
    "flashcards": [
      {
        "front": "Sistemas de Alto Riesgo",
        "back": "Sistemas de IA permitidos pero sujetos a requisitos estrictos, como gestión de riesgos y calidad de datos, antes de su comercialización."
      },
      {
        "front": "Obligaciones de transparencia",
        "back": "Requisito de informar a las personas cuando interactúan con un sistema de IA o cuando se genera contenido sintético (deepfakes)."
      },
      {
        "front": "Alfabetización en IA",
        "back": "Obligación de que el personal encargado del funcionamiento de los sistemas tenga un conocimiento suficiente en materia de Inteligencia Artificial."
      },
      {
        "front": "Sandbox Regulatorio",
        "back": "Entorno controlado de pruebas supervisado por autoridades competentes que fomenta la innovación y facilita el desarrollo, validación y prueba de sistemas de IA antes de su puesta en mercado."
      },
      {
        "front": "AESIA",
        "back": "Agencia Española de Supervisión de la Inteligencia Artificial. Actúa como autoridad de vigilancia del mercado en España y supervisa el cumplimiento del Reglamento."
      },
      {
        "front": "Riesgo Limitado (Transparencia)",
        "back": "Categoría de sistemas de IA (como chatbots o deepfakes) sujetos a obligaciones específicas de transparencia, como informar al usuario de que interactúa con una máquina."
      },
      {
        "front": "Riesgo Mínimo",
        "back": "Categoría que engloba la mayoría de sistemas de IA (ej. videojuegos, filtros de spam). No tienen obligaciones adicionales más allá de la normativa general."
      },
      {
        "front": "Proveedor (Provider)",
        "back": "Persona o entidad que desarrolla un sistema de IA y lo introduce en el mercado o lo pone en servicio bajo su propio nombre o marca."
      },
      {
        "front": "Responsable del Despliegue (Deployer)",
        "back": "Entidad o persona que utiliza un sistema de IA bajo su propia autoridad en el ejercicio de una actividad profesional (no aplica al usuario personal)."
      },
      {
        "front": "Marcado CE",
        "back": "Distintivo que certifica que un sistema de IA cumple con los requisitos de seguridad y conformidad del Reglamento Europeo."
      },
      {
        "front": "Evaluación de Conformidad",
        "back": "Proceso obligatorio para sistemas de alto riesgo que verifica si cumplen los requisitos del Reglamento antes de su comercialización."
      },
      {
        "front": "Incidente Grave",
        "back": "Fallo de un sistema de IA que causa muerte, daños graves a la salud, interrupción de infraestructuras críticas o violación de derechos fundamentales."
      }
    ],
    "quiz": [
      {
        "question": "¿Qué sistemas de IA están prohibidos según el Reglamento?",
        "options": [
          "Los chatbots de atención al cliente",
          "Los sistemas que manipulan el comportamiento humano para eludir su libre albedrío",
          "Los sistemas de recomendación de películas",
          "Los filtros de spam"
        ],
        "correctAnswer": 1
      },
      {
        "question": "¿Qué obligación tienen los sistemas que generan 'deepfakes'?",
        "options": [
          "No tienen ninguna obligación",
          "Deben obtener una licencia especial",
          "Deben hacer público que el contenido ha sido generado o manipulado artificialmente",
          "Deben ser aprobados por un juez"
        ],
        "correctAnswer": 2
      },
      {
        "question": "¿A qué categoría pertenecen los sistemas de identificación biométrica remota en tiempo real en espacios públicos?",
        "options": [
          "Riesgo mínimo",
          "Alto riesgo",
          "Riesgo limitado",
          "Prácticas prohibidas (salvo excepciones)"
        ],
        "correctAnswer": 3
      },
      {
        "question": "Según el Reglamento, ¿quién se considera 'Proveedor'?",
        "options": [
          "Quien usa la IA para fines profesionales.",
          "Quien desarrolla o introduce el sistema en el mercado bajo su marca.",
          "El distribuidor que vende el software.",
          "El usuario final."
        ],
        "correctAnswer": 1
      },
      {
        "question": "¿Cuál es una práctica prohibida por riesgo inaceptable?",
        "options": [
          "Chatbots sin supervisión.",
          "Sistemas de priorización de emergencias.",
          "Manipulación subliminal del comportamiento con riesgo de daño.",
          "Gestión de tráfico con IA."
        ],
        "correctAnswer": 2
      },
      {
        "question": "¿Cuándo asume el Responsable del despliegue las obligaciones del Proveedor?",
        "options": [
          "Al usar el sistema en varios países.",
          "Si realiza una modificación sustancial del sistema.",
          "Si lo usa para fines militares.",
          "Si no actualiza el software."
        ],
        "correctAnswer": 1
      },
      {
        "question": "¿Qué es un 'Sandbox regulatorio'?",
        "options": [
          "Un entorno controlado para pruebas e innovación supervisado por autoridades.",
          "Un mecanismo de sanción.",
          "Una base de datos de sistemas de alto riesgo.",
          "Un software de código abierto."
        ],
        "correctAnswer": 0
      },
      {
        "question": "¿Cuándo comienzan a aplicarse las prohibiciones de prácticas de riesgo inaceptable?",
        "options": [
          "Agosto 2026",
          "Febrero 2025 (6 meses después de entrada en vigor)",
          "Agosto 2030",
          "Inmediatamente"
        ],
        "correctAnswer": 1
      },
      {
        "question": "¿Qué obligación tienen los chatbots (Riesgo Limitado)?",
        "options": [
          "Revelar su código fuente.",
          "Informar al usuario de que está interactuando con una IA.",
          "Ninguna si son gratuitos.",
          "Obtener consentimiento biométrico."
        ],
        "correctAnswer": 1
      },
      {
        "question": "¿Cuál es el objetivo de la gestión de riesgos en IA de Alto Riesgo?",
        "options": [
          "Eliminar la intervención humana.",
          "Garantizar rentabilidad.",
          "Identificar y mitigar riesgos para salud, seguridad y derechos fundamentales.",
          "Asegurar compatibilidad con cualquier SO."
        ],
        "correctAnswer": 2
      }
    ],
    "glossary": [
      {
        "term": "Afectado",
        "definition": "Toda persona física o jurídica que se encuentra bajo la influencia o es destinataria de un sistema de IA. Es un concepto distinto al de 'usuario final' o 'responsable del despliegue'."
      },
      {
        "term": "Autoridad nacional competente",
        "definition": "Organismo encargado de supervisar la aplicación y ejecución del Reglamento en cada Estado miembro. En España, esta función la desempeña la Agencia Española de Supervisión de la IA (AESIA)."
      },
      {
        "term": "Ciclo de vida de la IA",
        "definition": "Período completo de existencia del sistema, que abarca desde la fase de diseño inicial y recopilación de datos, hasta su retirada definitiva del mercado o puesta fuera de servicio."
      },
      {
        "term": "Datos de entrenamiento",
        "definition": "Conjunto de datos utilizados para ajustar los parámetros internos de un modelo de IA mediante técnicas de aprendizaje automático, permitiendo que el sistema aprenda patrones."
      },
      {
        "term": "Datos de validación",
        "definition": "Conjunto de datos distinto al de entrenamiento, utilizado para proporcionar una evaluación imparcial del modelo durante su desarrollo y ajustar hiperparámetros, evitando el sobreajuste."
      },
      {
        "term": "Distribuidor",
        "definition": "Cualquier persona física o jurídica de la cadena de suministro, distinta del proveedor o el importador, que comercializa un sistema de IA en el mercado de la Unión."
      },
      {
        "term": "Entorno real",
        "definition": "Contexto de uso cotidiano del sistema de IA fuera de las condiciones controladas de laboratorio o pruebas (sandbox), donde interactúa con usuarios y datos reales."
      },
      {
        "term": "Exactitud (Accuracy)",
        "definition": "Métrica que mide la capacidad del sistema para proporcionar resultados correctos o predecibles. Es un requisito clave en la documentación técnica de sistemas de alto riesgo."
      },
      {
        "term": "Fabricante del producto",
        "definition": "Entidad que integra un sistema de IA en un producto físico o software bajo su propio nombre o marca (ej. en juguetes, maquinaria o dispositivos médicos)."
      },
      {
        "term": "IA de uso general (GPAI)",
        "definition": "Modelo de IA (como los modelos de lenguaje grandes) capaz de realizar de manera competente una gran variedad de tareas distintas, no limitado a una finalidad específica predefinida."
      },
      {
        "term": "Identificación biométrica",
        "definition": "Tratamiento automatizado de características físicas, fisiológicas o conductuales de una persona física para permitir su identificación única o autenticación."
      },
      {
        "term": "Importador",
        "definition": "Persona física o jurídica establecida en la UE que introduce en el mercado de la Unión un sistema de IA que lleva el nombre o marca de una persona física o jurídica de un tercer país."
      },
      {
        "term": "Instrucciones de uso",
        "definition": "Información obligatoria que acompaña al sistema de IA para informar al responsable del despliegue sobre su finalidad prevista, capacidades, limitaciones de rendimiento y medidas de supervisión humana."
      },
      {
        "term": "Logs (Registros automáticos)",
        "definition": "Capacidad técnica del sistema para grabar eventos durante su funcionamiento. Son esenciales para garantizar la trazabilidad de las decisiones y el funcionamiento del sistema post-comercialización."
      },
      {
        "term": "Norma armonizada",
        "definition": "Especificación técnica europea adoptada por organismos de normalización cuyo cumplimiento voluntario presupone la conformidad con los requisitos esenciales del Reglamento de IA."
      },
      {
        "term": "Plan de vigilancia poscomercialización",
        "definition": "Sistema documentado que detalla cómo el proveedor recopilará y analizará activamente datos sobre el rendimiento del sistema de IA una vez este se encuentre en el mercado."
      },
      {
        "term": "Representante autorizado",
        "definition": "Persona física o jurídica establecida en la UE que ha sido designada por escrito por un proveedor de fuera de la UE para cumplir en su nombre las obligaciones establecidas en el Reglamento."
      },
      {
        "term": "Robustez",
        "definition": "Capacidad de un sistema de IA para mantener su nivel de rendimiento en condiciones difíciles, resistiendo errores, fallos o ataques adversarios sin alterar su funcionamiento seguro."
      },
      {
        "term": "Sesgo algorítmico",
        "definition": "Desviación sistemática y repetible en los resultados de un sistema de IA que crea resultados injustos, como privilegiar a un grupo de usuarios sobre otros de manera arbitraria."
      },
      {
        "term": "Sistema de IA",
        "definition": "Definición legal: Sistema basado en máquinas diseñado para funcionar con autonomía y que puede, para objetivos explícitos o implícitos, generar salidas como predicciones, recomendaciones o decisiones que influyan en entornos físicos o virtuales."
      }
    ],
    "pdfUrl": "https://aesia.digital.gob.es/storage/media/01-guia-introductoria-al-reglamento-de-ia-1770802981.pdf"
  },
  {
      "id": "02",
      "title": "Guía práctica y ejemplos para entender el Reglamento de IA",
      "summary": "La Guía 02 destaca la importancia de comprender el Reglamento Europeo de IA desde un enfoque práctico. Proporciona a pymes y startups un soporte para aclarar exigencias normativas, usando 'casos de uso' transversales como hilo conductor.",
      "contentIndex": [
          {
              "title": "1. Introducción y Objetivos de la Guía Práctica",
              "content": "El Preámbulo y la Introducción a las Guías Técnicas de la Guía 02 destacan la importancia de comprender el Reglamento Europeo de Inteligencia Artificial (RIA) desde un enfoque eminentemente práctico y didáctico [1, 2]. Esta guía ha sido concebida en el marco del desarrollo del piloto español de \"sandbox\" regulatorio de IA, un entorno de pruebas controlado impulsado por la Secretaría de Estado de Digitalización e Inteligencia Artificial (SEDIA), con el respaldo continuo de la Comisión Europea [3, 4]. Su principal objetivo es proporcionar a las organizaciones, con especial énfasis en las pequeñas y medianas empresas (pymes) y startups, un soporte tangible e instructivo que aclare las numerosas exigencias normativas antes de la entrada en vigor definitiva y obligatoria del Reglamento [3, 4]. Para lograr este propósito, la guía no se limita a explicar la teoría legal en el vacío, sino que establece un puente estructural y conceptual entre las guías introductorias y el amplio catálogo de guías técnicas (que abarcan desde la evaluación de la conformidad hasta requerimientos complejos de ciberseguridad, precisión y solidez) [5, 6]. La utilidad principal de este documento radica en la presentación de \"casos de uso\" transversales que actúan como hilo conductor [7]. De esta manera, conceptos regulatorios abstractos y complejos, como la evaluación de riesgos, la transparencia técnica, o la gobernanza integral de los datos, pueden entenderse de una manera muchísimo más accesible cuando se aplican sistemáticamente a escenarios reales o hipotéticos que resultan ser muy representativos de la industria [7]. Así, se busca lograr que el tejido empresarial español adquiera la madurez necesaria para desarrollar y comercializar sistemas de IA que sean intrínsecamente seguros y fiables, aumentando la confianza ciudadana en la tecnología [3, 4]."
          },
          {
              "title": "2. Ejemplos Representativos de Sistemas de IA de Alto Riesgo",
              "content": "La Guía 02 selecciona cinco ejemplos representativos de sistemas de Inteligencia Artificial de alto riesgo que ilustran de forma transversal la aplicación del Reglamento a lo largo de las distintas guías técnicas elaboradas en el entorno del Sandbox [7]. El primer caso destacado es un **Sistema de IA de identificación biométrica en el trabajo**, clasificado directamente en el Anexo III (Apartado 1), cuyo fin operativo es controlar y registrar la asistencia de los empleados en su lugar de trabajo mediante herramientas de reconocimiento biométrico, lo que lógicamente conlleva altos riesgos para la privacidad y la protección de los derechos fundamentales de los trabajadores [8, 9]. El segundo es un **Sistema de IA en la gestión de personal (Promoción)**, también enmarcado en el Anexo III (Apartado 4), que está diseñado para evaluar el rendimiento histórico y actual de los trabajadores y recomendar posibles ascensos, influyendo de manera directa y sustancial en las retribuciones y perspectivas de carrera [10, 11]. El tercer ejemplo aborda un **Sistema de predicción de riesgo de exclusión social y valoración de acceso a ayudas económicas**, (Anexo III, Apartado 5), utilizado habitualmente por las administraciones públicas para determinar la admisibilidad de las personas físicas para asistencia social, lo cual tiene un impacto profundo y transformador en las poblaciones más vulnerables [11, 12]. El cuarto caso pertenece al Anexo I (relativo a productos sanitarios): una **Bomba de insulina inteligente**, que analiza constantemente niveles de glucosa en sangre y administra las dosis de insulina necesarias de forma automática, donde cualquier fallo técnico puede resultar crítico para el paciente [13, 14]. Por último, se presenta de forma detallada un **Sistema de detección de denuncias falsas**, (Anexo III, Apartado 6), que ayuda a las fuerzas y cuerpos de seguridad a evaluar matemáticamente la fiabilidad de las pruebas y las transcripciones de las denuncias ciudadanas [15, 16]."
          },
          {
              "title": "3. Conceptos Clave y Definiciones Prácticas (I)",
              "content": "Para interpretar y aplicar correctamente todas y cada una de las obligaciones del Reglamento Europeo de IA, es absolutamente imprescindible dominar sus definiciones legales y técnicas, que han sido extraídas cuidadosamente del Artículo 3 de la normativa [16]. El concepto tecnológico más básico y transversal es el de **Sistema de Inteligencia Artificial**, definido jurídicamente como un sistema basado en una máquina que ha sido diseñado específicamente para funcionar con distintos niveles de autonomía, y que infiere a partir de la información de entrada que recibe cómo generar resultados de salida concretos (tales como predicciones, contenidos, recomendaciones o decisiones) que pueden influir directa o indirectamente en los entornos físicos o virtuales [17]. La guía además distingue con mucha precisión dos momentos críticos en la cadena comercial de cualquier software u objeto físico: la **Introducción en el mercado**, que se refiere a la primera comercialización que el sistema de IA tiene dentro del mercado de la Unión Europea, y la **Comercialización**, que es un término más amplio y abarca cualquier tipo de suministro posterior, sea este a título oneroso o totalmente gratuito [18, 19]. Otro término central para todo el articulado es la **Finalidad prevista**, que dictamina el uso específico para el cual el proveedor diseñó y concibió inicialmente el sistema, definiendo así su clasificación de nivel de riesgo y el contexto permitido de utilización [19]. En el caso de los sistemas integrados físicamente, un **Componente de seguridad** es aquel cuyo fallo de funcionamiento pone inmediatamente en peligro la salud, la integridad física o los bienes materiales de las personas (como ocurriría, por ejemplo, con el sensor de detección de fallos de la mencionada bomba de insulina) [20]. Todas estas definiciones asientan la base para comprender cuándo y cómo aplican las obligaciones normativas [16]."
          },
          {
              "title": "4. Conceptos Clave y Definiciones Prácticas (II) - Datos, Biometría y Modelos",
              "content": "En el desarrollo y validación técnica de los diversos sistemas de inteligencia artificial, la gestión documental de los datos y los aspectos de generación sintética y reconocimiento biométrico requieren una atención sumamente especial. El Reglamento Europeo de IA categoriza estrictamente los datos utilizados en tres fases operativas distintas: **Datos de entrenamiento** (que son los datos iniciales usados para ajustar y afinar los parámetros entrenables del modelo algorítmico) [21, 22], **Datos de validación** (utilizados para evaluar el rendimiento del modelo ya entrenado y poder ajustar de manera iterativa sus hiperparámetros) y **Datos de prueba** (que se emplean al final del ciclo para proporcionar una evaluación de rendimiento totalmente independiente) [23]. A nivel tecnológico y social, un concepto que ha cobrado un protagonismo fundamental en la actualidad es la **Ultrasuplantación (Deepfake)**, definida como un contenido de imagen, audio o vídeo generado o manipulado sintéticamente por una IA que se asemeja con extrema fidelidad a personas o sucesos reales, induciendo al engaño, lo que obliga a los proveedores a aplicar obligaciones de transparencia muy estrictas [24]. Asimismo, el Reglamento introduce un conjunto de reglas muy específicas para los **Modelos de IA de propósito general (GPAI)**, que son aquellos sistemas fundacionales entrenados con cantidades masivas de datos mediante autosupervisión a gran escala y que son capaces de realizar de manera competente una enorme variedad de tareas distintas (como es el caso de la familia de modelos LLaMA o GPT-4) [25, 26]. Cuando estos modelos tan avanzados superan un umbral extraordinariamente alto de coste computacional en su entrenamiento (concretamente, cuando su entrenamiento sea superior al orden de > 10^25 FLOPs), se considera legalmente que presentan un **Riesgo sistémico** elevado, requiriendo en consecuencia la implementación de medidas de seguridad y protocolos de evaluación muchísimo más rigurosos [26, 27]."
          },
          {
              "title": "5. Contexto de las Guías Técnicas y Roles del Piloto Sandbox",
              "content": "Las guías técnicas especializadas que acompañan a esta Guía 02 nacen orgánicamente en el contexto del Piloto Español de Sandbox de IA, cuya gran meta fundacional es lograr aclarar y aterrizar las complejas obligaciones dictadas por el Reglamento Europeo, validar empíricamente la utilidad práctica de la documentación de apoyo, y facilitar de forma eficaz la transferencia de conocimiento regulatorio a las pymes y entidades desarrolladoras de nuestro país [3, 4]. Este programa piloto se estructura metódicamente en diversas fases operativas, abarcando desde la preparación inicial de acuerdos legales y el diagnóstico pormenorizado del estado actual de los sistemas de IA presentados por los 12 participantes seleccionados, hasta la implementación de un detallado plan de medidas de adaptación y la posterior elaboración de informes y conclusiones finales [28, 29]. En este entorno de cumplimiento normativo, los distintos operadores de la cadena de valor de la Inteligencia Artificial asumen diferentes roles y responsabilidades que las guías técnicas buscan resolver. El **Proveedor** (definido como la persona o entidad que desarrolla el sistema y lo introduce en el mercado bajo su propio nombre) es quien tiene que asumir las cargas regulatorias más exigentes de la Sección 2 del Reglamento [30]. Debe diseñar exhaustivamente toda la documentación técnica, establecer la gobernanza de datos y la gestión de riesgos, garantizar medidas tecnológicas de ciberseguridad, solidez y precisión, y, por supuesto, realizar íntegramente la evaluación de conformidad [30, 31]. Por otro lado, el **Responsable del despliegue** (que es la persona u organización que utiliza activamente el sistema de IA en su propio entorno profesional) tiene la obligación ineludible de asegurar una correcta supervisión humana, conservar de manera diligente los archivos de registros generados de forma automática e informar inmediatamente de la existencia de posibles incidentes graves o fallos que pongan en riesgo la salud o los derechos fundamentales [32, 33]."
          }
      ],
      "flashcards": [
          {
              "front": "Sistema de Inteligencia Artificial",
              "back": "Sistema basado en una máquina diseñado para funcionar con distintos niveles de autonomía, que infiere de la información de entrada cómo generar resultados de salida que influyen en entornos físicos o virtuales."
          },
          {
              "front": "Introducción en el mercado",
              "back": "La primera comercialización en el mercado de la Unión Europea de un sistema de IA o de un modelo de IA de uso general."
          },
          {
              "front": "Comercialización",
              "back": "Todo suministro de un sistema de IA o un modelo de IA de uso general para su distribución o utilización en el mercado de la Unión en el transcurso de una actividad comercial, a título oneroso o gratuito."
          },
          {
              "front": "Finalidad prevista",
              "back": "El uso para el que un proveedor concibe un sistema de IA, incluidos el contexto y las condiciones de uso concretos, según la información facilitada por dicho proveedor."
          },
          {
              "front": "Componente de seguridad",
              "back": "Un componente de un producto o sistema de IA que cumple una función de seguridad o cuyo fallo pone en peligro la salud y la seguridad de las personas o los bienes."
          },
          {
              "front": "Datos de entrenamiento",
              "back": "Los datos usados para entrenar un sistema de Inteligencia Artificial mediante el ajuste de sus parámetros entrenables."
          },
          {
              "front": "Ultrasuplantación (Deepfake)",
              "back": "Contenido de imagen, audio o vídeo generado o manipulado por una IA que se asemeja a personas, objetos o sucesos reales induciendo a pensar erróneamente que son auténticos."
          },
          {
              "front": "Modelo de IA de propósito general (GPAI)",
              "back": "Modelo de IA entrenado con un gran volumen de datos utilizando autosupervisión a gran escala, que presenta un grado considerable de generalidad y es capaz de realizar múltiples tareas distintas."
          },
          {
              "front": "Riesgo sistémico",
              "back": "Riesgo específico de los modelos GPAI derivado de sus capacidades de alto impacto, típicamente asociados a modelos cuyo coste computacional de entrenamiento es mayor a 10^25 FLOPs."
          },
          {
              "front": "Ciclo de vida de un sistema IA",
              "back": "Secuencia estructurada de las etapas por las que pasa el software, desde la definición de los requisitos iniciales hasta su retirada, incluyendo diseño, validación, despliegue y operación."
          },
          {
              "front": "Datos de entrada",
              "back": "Información proporcionada a un sistema de IA, sobre la base de la cual este infiere y produce su resultado o salida correspondiente."
          },
          {
              "front": "Incidente grave",
              "back": "Evento en el que el uso de un sistema de IA de alto riesgo resulta en la muerte o daños graves a la salud, alteraciones graves en infraestructuras críticas, o vulneraciones de derechos fundamentales."
          }
      ],
      "quiz": [
          {
              "question": "¿Qué diferencia existe normativamente entre 'Introducción en el mercado' y 'Comercialización' según el Reglamento de IA?",
              "options": [
                  "La comercialización es solo para software libre, y la introducción en el mercado para software de pago.",
                  "La introducción en el mercado es la primera vez que se ofrece en la UE, mientras que la comercialización abarca cualquier suministro posterior.",
                  "La comercialización solo aplica a los responsables de despliegue, y la introducción a los distribuidores.",
                  "No existe diferencia, ambos términos son sinónimos exactos en el Reglamento."
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Cuál de los siguientes sistemas es un ejemplo de sistema de IA de alto riesgo contemplado en la legislación de armonización (Anexo I)?",
              "options": [
                  "Filtro de spam para correo electrónico.",
                  "Chatbot de atención al cliente de una tienda de ropa.",
                  "Bomba de insulina inteligente (producto sanitario).",
                  "Videojuego con inteligencia artificial generativa."
              ],
              "correctAnswer": 2
          },
          {
              "question": "De acuerdo a la Guía 02, ¿cuál es el objetivo primordial del piloto español de Sandbox IA?",
              "options": [
                  "Multar a las empresas que desarrollen IA sin autorización previa.",
                  "Crear un entorno controlado de pruebas para validar la adecuación de sistemas de alto riesgo a los requisitos del Reglamento y clarificar obligaciones.",
                  "Sustituir la legislación europea de Inteligencia Artificial por normas puramente nacionales.",
                  "Prohibir el uso de modelos de Inteligencia Artificial de propósito general (GPAI) en España."
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué umbral de coste computacional define, como presunción general, que un modelo GPAI tiene 'Riesgo sistémico'?",
              "options": [
                  "Superior a 10^12 FLOPs.",
                  "Superior a 10^21 FLOPs.",
                  "Superior a 10^23 FLOPs.",
                  "Superior a 10^25 FLOPs."
              ],
              "correctAnswer": 3
          },
          {
              "question": "En el contexto de la gestión de personal, ¿por qué un sistema de IA que recomiende promociones se considera de Alto Riesgo (Anexo III)?",
              "options": [
                  "Porque puede predecir el futuro financiero de la empresa y quebrar el mercado bursátil.",
                  "Porque influye de forma determinante en las relaciones laborales, afectando la asignación de tareas y las retribuciones de los empleados.",
                  "Porque es un componente de seguridad física de un ascensor corporativo.",
                  "Porque utiliza tecnología de código abierto."
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Para qué se utilizan específicamente los 'Datos de entrenamiento' en un sistema de Inteligencia Artificial?",
              "options": [
                  "Para realizar la evaluación final independiente del modelo antes de su salida al mercado.",
                  "Para ajustar las métricas de negocio del responsable del despliegue.",
                  "Para ajustar los parámetros entrenables del sistema durante su fase de desarrollo y aprendizaje.",
                  "Exclusivamente para generar los logs automáticos en caso de un incidente grave."
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Cuál es la obligación directa de un 'Responsable del despliegue' frente a un riesgo detectado que afecte la salud o los derechos fundamentales?",
              "options": [
                  "Redactar las normas armonizadas del sector tecnológico.",
                  "Informar al proveedor o distribuidor, y suspender el uso del sistema si corresponde.",
                  "Crear el sistema de gestión de calidad desde cero.",
                  "Introducir el sistema por primera vez en el mercado bajo su propio nombre."
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué término describe el contenido audiovisual manipulado por IA que induce erróneamente a pensar que es auténtico (p. ej. un video falso de un político)?",
              "options": [
                  "Verificación biométrica.",
                  "Datos de entrada anómalos.",
                  "Ultrasuplantación (Deepfake).",
                  "Redundancia algorítmica."
              ],
              "correctAnswer": 2
          },
          {
              "question": "A partir del concepto de 'Finalidad prevista', ¿quién es el principal responsable de definirla y concebirla?",
              "options": [
                  "El proveedor del sistema de IA.",
                  "El responsable del despliegue (usuario final).",
                  "El organismo notificado que realiza la auditoría.",
                  "El comité de expertos de la Comisión Europea."
              ],
              "correctAnswer": 0
          },
          {
              "question": "En el caso de uso sobre la 'Predicción de riesgo de exclusión social y acceso a ayudas', ¿a qué categoría de riesgo y anexo pertenece?",
              "options": [
                  "Riesgo mínimo (sistemas con obligaciones de transparencia ligeras).",
                  "Sistemas Prohibidos (Art. 5).",
                  "Alto Riesgo, Anexo III (Acceso y disfrute de servicios públicos y privados esenciales).",
                  "Alto Riesgo, Anexo I (Componentes de seguridad de vehículos)."
              ],
              "correctAnswer": 2
          }
      ],
      "pdfUrl": "https://aesia.digital.gob.es/storage/media/02-guia-practica-y-ejemplos-para-entender-el-reglamento-de-ia.pdf",
      "glossary": [
          {
              "term": "Sistema de Inteligencia Artificial (IA)",
              "definition": "Sistema basado en una máquina, diseñado para funcionar con autonomía, que infiere de la información de entrada cómo generar predicciones, decisiones o contenidos que influyen en el entorno."
          },
          {
              "term": "Introducción en el mercado",
              "definition": "La primera comercialización en el mercado de la Unión de un sistema de IA o de un modelo de IA de uso general."
          },
          {
              "term": "Comercialización",
              "definition": "Todo suministro de un sistema de IA para su distribución o utilización en el mercado de la Unión, a título oneroso o gratuito."
          },
          {
              "term": "Finalidad prevista",
              "definition": "Uso para el que el proveedor concibe un sistema de IA, según la información facilitada en las instrucciones o material técnico."
          },
          {
              "term": "Componente de seguridad",
              "definition": "Elemento de un producto o sistema de IA que cumple una función de prevención de riesgos; su fallo comprometería la salud y seguridad humana."
          },
          {
              "term": "Datos de entrenamiento",
              "definition": "Conjunto de datos utilizados en la fase de desarrollo para entrenar un sistema de IA mediante el ajuste iterativo de sus parámetros entrenables."
          },
          {
              "term": "Datos de validación",
              "definition": "Datos usados durante el entrenamiento para evaluar el desempeño temporal del modelo y ajustar sus hiperparámetros no entrenables."
          },
          {
              "term": "Datos de prueba",
              "definition": "Conjunto de datos independientes utilizados para proporcionar una evaluación final y objetiva del rendimiento del sistema entrenado."
          },
          {
              "term": "Ultrasuplantación (Deepfake)",
              "definition": "Contenido de imagen, audio o vídeo generado o manipulado que asemeja eventos reales con gran fidelidad, induciendo a engaño sobre su autenticidad."
          },
          {
              "term": "Modelo de IA de propósito general (GPAI)",
              "definition": "Modelo de gran escala entrenado con enormes cantidades de datos que es capaz de realizar de manera competente una enorme diversidad de tareas abstractas."
          },
          {
              "term": "Riesgo sistémico",
              "definition": "Clasificación asignada a modelos GPAI cuyas altas capacidades, medidas a menudo por un coste de entrenamiento mayor a 10^25 FLOPs, pueden generar impactos graves a gran escala en la sociedad."
          },
          {
              "term": "Ciclo de vida de un sistema IA",
              "definition": "Secuencia temporal desde la definición de los requisitos de diseño iniciales del software hasta su retirada o desmantelamiento definitivo."
          },
          {
              "term": "Identificación biométrica",
              "definition": "Reconocimiento automatizado de características físicas, fisiológicas o conductuales para establecer la identidad comparando contra una base de datos (1 a muchos)."
          },
          {
              "term": "Verificación biométrica",
              "definition": "Proceso de comprobación automatizada que asegura que una persona física es realmente la persona que afirma ser (comparación 1 a 1)."
          },
          {
              "term": "Proveedor",
              "definition": "Persona o entidad que desarrolla o manda desarrollar un sistema de IA para introducirlo en el mercado bajo su propia marca o nombre."
          }
      ]
  },
  {
      "id": "03",
      "title": "Guía Evaluación de conformidad",
      "summary": "Esta guía orienta sobre el proceso para demostrar que un sistema de IA de alto riesgo cumple los requisitos del Reglamento (Art. 43). Explica los procedimientos de evaluación basados en el control interno frente a los que requieren la participación de un organismo notificado, dependiendo del tipo de sistema (ej. biometría) y el uso de normas armonizadas. Detalla los pasos para la declaración UE de conformidad, el marcado CE y la integración con la legislación de armonización de productos existente.",
      "contentIndex": [
          {
              "title": "1. Introducción a la Evaluación de la Conformidad",
              "content": "## 1. Introducción a la Evaluación de la Conformidad\n\nEl Reglamento Europeo de Inteligencia Artificial (RIA) establece que la puesta en servicio o la utilización de sistemas de IA de alto riesgo debe supeditarse al cumplimiento de estrictos requisitos obligatorios [1]. Entre estos, destaca la **evaluación de la conformidad**, definida como el proceso por el que se demuestra si se han cumplido los requisitos establecidos en el Título III, Capítulo 2 del Reglamento relativos a los sistemas de IA de alto riesgo [2]. Este proceso es fundamental para asegurar que los sistemas de IA disponibles en la Unión no representen riesgos inaceptables para intereses públicos importantes y los derechos fundamentales de las personas [1].\n\nDentro del marco de la legislación de armonización de la Unión Europea, la evaluación de la conformidad es un paso previo e indispensable para la comercialización [3]. Al igual que ocurre con productos físicos regulados, el llamado Nuevo Marco Legislativo exige que el proveedor demuestre que el sistema de IA cumple con los requisitos jurídicos vigentes antes de colocar el marcado CE o introducir el sistema en el mercado [3]. En el contexto del RIA, existen dos formas principales para llevar a cabo esta evaluación, cuya elección depende del tipo de sistema de IA y de si se han aplicado normas armonizadas: la evaluación basada en un **control interno** (realizada por el propio proveedor) y la evaluación de la documentación técnica y sistema de calidad con intervención de un **organismo notificado** (un tercero independiente) [4]."
          },
          {
              "title": "2. Procedimiento fundamentado en el Control Interno (Anexo VI)",
              "content": "## 2. Procedimiento fundamentado en el Control Interno (Anexo VI)\n\nEl procedimiento de evaluación de la conformidad fundamentado en un control interno, detallado en el Anexo VI del RIA, permite al propio proveedor realizar la evaluación de su sistema de IA sin la intervención de un tercero notificado [5, 6]. Este mecanismo aplica, por ejemplo, a los sistemas de alto riesgo mencionados en el anexo III, puntos 2 a 8, o a sistemas de identificación biométrica cuando se han aplicado íntegramente las normas armonizadas [6, 7]. Este proceso de control interno se estructura en tres actuaciones técnicas y documentales fundamentales que el proveedor debe ejecutar [8].\n\nEn primer lugar, el proveedor debe llevar a cabo la **verificación del sistema de gestión de la calidad (SGC)**, comprobando que se cumplen exhaustivamente los requisitos delineados en el artículo 17 [9, 10]. En segundo lugar, procede la **comprobación de la documentación técnica** [11]. El proveedor examinará toda la información para evaluar y evidenciar la conformidad del sistema con los requisitos esenciales de los artículos 8 a 15 del Reglamento [12]. En tercer lugar, se exige la **verificación del proceso de diseño y desarrollo**, asegurando que este y el sistema de vigilancia poscomercialización (descrito en el artículo 72) sean totalmente coherentes con la documentación técnica del sistema [13, 14].\n\nFinalmente, el RIA introduce facilidades para las **pymes y empresas emergentes**. El Reglamento estipula que la Comisión Europea elaborará un formulario simplificado para que estas organizaciones puedan presentar la documentación técnica de manera más ágil, el cual será considerado suficiente a efectos de evaluar la conformidad documental del sistema de IA [15, 16]."
          },
          {
              "title": "3. Conformidad con participación de un Organismo Notificado (Anexo VII)",
              "content": "## 3. Conformidad con participación de un Organismo Notificado (Anexo VII)\n\nLa conformidad fundamentada en la evaluación del sistema de gestión de la calidad y de la documentación técnica, especificada en el Anexo VII, requiere ineludiblemente la intervención de un **organismo notificado** [17]. Este procedimiento más riguroso es obligatorio para sistemas altamente sensibles, como los de identificación biométrica remota (Anexo III, punto 1), cuando el proveedor opta por ello o cuando no ha aplicado normas armonizadas o especificaciones comunes [7, 17].\n\nEl proceso comprende dos fases evaluativas clave. Primero, la **evaluación del sistema de gestión de la calidad**: el proveedor presenta una solicitud que incluye sus datos, la lista de sistemas de IA amparados, la documentación del SGC y los procedimientos de eficacia [18, 19]. El organismo notificado evalúa este sistema y realiza auditorías periódicas (incluyendo auditorías sin previo aviso) para asegurar que el proveedor lo aplica y mantiene adecuadamente [19, 20]. Segundo, se realiza el **control de la documentación técnica** [21]. El organismo examina la documentación y, para verificar la conformidad, puede exigir pruebas adicionales o pleno acceso a los conjuntos de datos de entrenamiento, validación y prueba a través de herramientas de acceso a distancia como APIs [22, 23]. Agotadas otras vías, el organismo puede incluso solicitar acceso al modelo entrenado y sus parámetros [24].\n\nSi tras este exhaustivo examen se comprueba que el sistema de IA cumple de manera rigurosa con la sección 2 del capítulo III, el organismo notificado expedirá un **certificado de la Unión de evaluación de la documentación técnica**, documento legal indispensable que tiene una validez temporal y que acredita la legalidad y seguridad del producto [25]."
          },
          {
              "title": "4. Instrumentos de Conformidad: Normas Armonizadas, Especificaciones, Declaración UE y Marcado CE",
              "content": "## 4. Instrumentos de Conformidad: Normas Armonizadas, Especificaciones, Declaración UE y Marcado CE\n\nEl Reglamento Europeo de Inteligencia Artificial dispone de varios instrumentos legales y técnicos que facilitan a los proveedores certificar y evidenciar la evaluación de la conformidad. El principal instrumento son las **Normas Armonizadas (Artículo 40)**. Cuando un sistema de IA se diseña cumpliendo con las normas armonizadas cuyas referencias han sido publicadas en el Diario Oficial de la Unión Europea, el proveedor se beneficia de una *presunción de conformidad* con los requisitos obligatorios correspondientes [26, 27]. En ausencia de estas normas, o si son insuficientes, la Comisión Europea puede dictar **Especificaciones Comunes (Artículo 41)**; el cumplimiento de estas otorga igualmente la citada presunción de conformidad [28, 29].\n\nUna vez completada de forma exitosa la evaluación de conformidad pertinente (por control interno o externo), el proveedor debe redactar la **Declaración UE de conformidad (Artículo 47)** [30]. Este es un documento redactado por escrito (o con firma electrónica) mediante el cual el proveedor asume plena responsabilidad del cumplimiento normativo del sistema. Esta declaración contendrá la información estipulada en el Anexo V, se traducirá a los idiomas requeridos, y debe conservarse a disposición de las autoridades durante diez años [30].\n\nEl hito final del proceso es el **Marcado CE (Artículo 48)** [31]. Este símbolo oficial debe fijarse de manera visible, legible e indeleble en el propio sistema de IA de alto riesgo [31]. Solo si la naturaleza digital del sistema no lo permite, se colocará en el envase o en los documentos que lo acompañan. Este distintivo certifica públicamente que el sistema de IA cumple integralmente con la legislación de armonización de la Unión, garantizando así su legalidad, seguridad y libre circulación [4, 31]."
          }
      ],
      "flashcards": [
          {
              "front": "Evaluación de la conformidad",
              "back": "Proceso por el que se demuestra si se han cumplido los requisitos establecidos en el Título III, Capítulo 2 del Reglamento para sistemas de IA de alto riesgo."
          },
          {
              "front": "Control Interno",
              "back": "Procedimiento de evaluación (Anexo VI) donde el propio proveedor verifica la conformidad de su SGC, documentación técnica y diseño sin intervención de terceros."
          },
          {
              "front": "Organismo Notificado",
              "back": "Tercero independiente que realiza la evaluación de la conformidad del sistema de gestión de la calidad y de la documentación técnica (Anexo VII)."
          },
          {
              "front": "Normas Armonizadas",
              "back": "Especificaciones técnicas europeas cuya aplicación voluntaria otorga la presunción de conformidad con los requisitos esenciales del Reglamento."
          },
          {
              "front": "Especificaciones Comunes",
              "back": "Requisitos técnicos elaborados por la Comisión Europea que proporcionan medios de cumplimiento cuando las normas armonizadas no existen o son insuficientes."
          },
          {
              "front": "Marcado CE",
              "back": "Distintivo visible, legible e indeleble que certifica formalmente que el sistema de IA cumple con toda la legislación de armonización de la Unión Europea."
          },
          {
              "front": "Declaración UE de conformidad",
              "back": "Documento escrito mediante el cual el proveedor asume la responsabilidad y certifica que el sistema de IA de alto riesgo cumple los requisitos del Reglamento."
          },
          {
              "front": "Modificación sustancial",
              "back": "Cambio relevante en el sistema de IA que afecta a su conformidad con el Reglamento, requiriendo un nuevo procedimiento de evaluación de la conformidad."
          },
          {
              "front": "Autoridad de Vigilancia del Mercado (AVM)",
              "back": "Entidad nacional responsable de supervisar la conformidad de los sistemas de IA comercializados y su cumplimiento con el Reglamento."
          },
          {
              "front": "Sistema de Gestión de la Calidad (SGC)",
              "back": "Conjunto documentado de políticas y procesos (Art. 17) que el proveedor debe implementar para garantizar el cumplimiento normativo continuo del sistema de IA."
          },
          {
              "front": "Documentación Técnica",
              "back": "Información requerida (Anexo IV) que el proveedor debe elaborar para demostrar de forma clara y completa que el sistema cumple los requisitos normativos."
          },
          {
              "front": "Certificado UE de evaluación",
              "back": "Documento expedido por un organismo notificado que avala que la documentación técnica de un sistema de IA cumple con los requisitos del Reglamento."
          }
      ],
      "quiz": [
          {
              "question": "¿Qué anexo del Reglamento de IA detalla el procedimiento de evaluación de la conformidad fundamentado en un control interno?",
              "options": [
                  "Anexo IV",
                  "Anexo V",
                  "Anexo VI",
                  "Anexo VII"
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Durante cuánto tiempo debe el proveedor mantener la Declaración UE de conformidad a disposición de las autoridades tras introducir el sistema en el mercado?",
              "options": [
                  "5 años",
                  "10 años",
                  "15 años",
                  "De forma indefinida"
              ],
              "correctAnswer": 1
          },
          {
              "question": "Según el Anexo VII, ¿qué dos elementos fundamentales son evaluados por el organismo notificado?",
              "options": [
                  "El código fuente abierto y los algoritmos heurísticos",
                  "El sistema de gestión de la calidad y la documentación técnica",
                  "Los sesgos en los datos y la alfabetización del usuario",
                  "La ciberseguridad perimetral y el modelo de negocio"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué beneficio normativo otorga la aplicación de normas armonizadas publicadas en el Diario Oficial de la Unión Europea?",
              "options": [
                  "Presunción de conformidad con los requisitos del Reglamento de IA",
                  "Exención total de realizar evaluaciones de conformidad",
                  "Aprobación automática del marcado CE sin necesidad de documentación",
                  "Subvenciones directas para las pymes desarrolladoras"
              ],
              "correctAnswer": 0
          },
          {
              "question": "¿Quién es responsable de elaborar las especificaciones técnicas comunes cuando no existen normas armonizadas?",
              "options": [
                  "Los proveedores de modelos fundacionales",
                  "Los Organismos Notificados",
                  "La Comisión Europea",
                  "La Autoridad de Vigilancia del Mercado Nacional"
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Para qué tipo de sistemas del Anexo III es obligatoria la intervención de un organismo notificado si el proveedor no ha aplicado normas armonizadas?",
              "options": [
                  "Sistemas de IA para videojuegos",
                  "Sistemas de identificación biométrica remota",
                  "Sistemas de filtrado de spam de correo electrónico",
                  "Sistemas de predicción meteorológica"
              ],
              "correctAnswer": 1
          },
          {
              "question": "En el procedimiento de control interno, el proveedor debe realizar tres verificaciones principales. ¿Cuáles son?",
              "options": [
                  "Permisos de copyright, auditoría contable y revisión de hardware",
                  "Verificación del SGC, comprobación de la documentación técnica y verificación del proceso de diseño/desarrollo",
                  "Análisis de competidores, encuestas de mercado y pruebas beta abiertas",
                  "Marcado CE, etiquetado ecológico y registro de marca"
              ],
              "correctAnswer": 1
          },
          {
              "question": "Si un sistema de IA de alto riesgo sufre una \"modificación sustancial\", ¿qué exige el Reglamento?",
              "options": [
                  "Únicamente actualizar el manual de instrucciones del usuario",
                  "Avisar a los usuarios finales mediante un correo electrónico masivo",
                  "Someterse a un nuevo procedimiento de evaluación de la conformidad",
                  "Pagar una tasa de renovación en el registro de la Unión Europea"
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Qué facilidad contempla el Reglamento para que las PYMEs y empresas emergentes presenten la documentación técnica?",
              "options": [
                  "Están exentas de redactar cualquier tipo de documentación técnica",
                  "Pueden presentarla de manera simplificada mediante un formulario elaborado por la Comisión Europea",
                  "El Organismo Notificado redacta la documentación de forma gratuita",
                  "Tienen un plazo de gracia de 5 años tras la comercialización para entregarla"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué debe hacer el proveedor con el marcado CE una vez demostrada la conformidad del sistema de IA?",
              "options": [
                  "Ocultarlo en el código fuente para evitar copias",
                  "Fijarlo de manera visible, legible e indeleble en el sistema o en la documentación adjunta",
                  "Registrarlo en una notaría local pero no publicarlo en el producto",
                  "Enviarlo por carta a las autoridades pero no mostrarlo a los usuarios"
              ],
              "correctAnswer": 1
          }
      ],
      "pdfUrl": "https://aesia.digital.gob.es/storage/media/03-guia-evaluacion-de-conformidad.pdf",
      "glossary": [
          {
              "term": "Evaluación de la conformidad",
              "definition": "Proceso técnico y documental mediante el cual se demuestra fehacientemente si un sistema de IA de alto riesgo ha cumplido los requisitos obligatorios del Título III, Capítulo 2 del Reglamento."
          },
          {
              "term": "Control Interno",
              "definition": "Procedimiento de evaluación de la conformidad previsto en el Anexo VI, en el que el propio proveedor verifica la idoneidad de su SGC, su documentación técnica y el diseño del sistema."
          },
          {
              "term": "Organismo Notificado",
              "definition": "Entidad independiente de evaluación de la conformidad, designada y acreditada por un Estado miembro, encargada de certificar los sistemas de IA de alto riesgo según lo estipulado en el Anexo VII."
          },
          {
              "term": "Norma Armonizada",
              "definition": "Especificación técnica adoptada por una organización europea de normalización cuya aplicación dota a los sistemas de IA de una presunción legal de conformidad con los requisitos del Reglamento."
          },
          {
              "term": "Especificación Común",
              "definition": "Conjunto de directrices y soluciones técnicas elaboradas por la Comisión Europea que los proveedores pueden aplicar para obtener presunción de conformidad en ausencia de normas armonizadas."
          },
          {
              "term": "Declaración UE de conformidad",
              "definition": "Documento oficial redactado y firmado por el proveedor donde certifica bajo su estricta responsabilidad que el sistema de IA cumple todas las exigencias legales del Reglamento Europeo."
          },
          {
              "term": "Marcado CE",
              "definition": "Distintivo gráfico oficial que debe fijarse al sistema de IA de manera visible e indeleble, indicando que este cumple la legislación de armonización aplicable en la Unión Europea."
          },
          {
              "term": "Modificación Sustancial",
              "definition": "Cualquier alteración significativa en el sistema de IA que pueda afectar su conformidad con los requisitos de seguridad y precisión, requiriendo iniciar un nuevo proceso de evaluación de la conformidad."
          },
          {
              "term": "Sistema de Gestión de la Calidad (SGC)",
              "definition": "Conjunto estructurado de políticas, procesos e instrucciones exigido por el artículo 17 para asegurar sistemáticamente la calidad, la gestión de riesgos y el cumplimiento normativo en todo el ciclo de vida de la IA."
          },
          {
              "term": "Documentación Técnica",
              "definition": "Conjunto de información técnica, descrita en el Anexo IV, que el proveedor debe elaborar y mantener para evidenciar cómo su sistema de IA cumple los requisitos de seguridad y transparencia del Reglamento."
          }
      ]
  },
  {
      "id": "04",
      "title": "Guía del sistema de gestión de la calidad",
      "summary": "Establece las pautas para implementar el sistema de gestión de calidad (SGC) requerido por el Artículo 17 para proveedores de sistemas de IA de alto riesgo. El SGC debe documentar políticas y procedimientos para garantizar el cumplimiento normativo, gestión de riesgos, control del diseño y desarrollo, gestión de datos y vigilancia poscomercialización. La guía destaca la necesidad de proporcionalidad según el tamaño de la organización (pymes) y permite integrar el SGC con sistemas existentes exigidos por legislación sectorial.",
      "contentIndex": [
          {
              "title": "Introducción y Obligaciones Generales del Sistema de Gestión de la Calidad (SGC)",
              "content": "### Introducción al Sistema de Gestión de la Calidad en IA\n\nEl Sistema de Gestión de la Calidad (SGC) en términos generales, referenciado frecuentemente en normativas como la ISO 9001, consiste en un conjunto de procesos diseñados para que una organización pueda mejorar continuamente su desempeño global y proporcionar una base sólida para un desarrollo tecnológico sostenible. En el contexto del Reglamento Europeo de Inteligencia Artificial (Reglamento de IA), el propósito fundamental de un SGC trasciende la mera eficiencia operativa; su meta principal es garantizar de forma inquebrantable la salud, la seguridad y los derechos fundamentales de las personas que interactúan directa o indirectamente con los sistemas de IA [1, 2].\n\nEl Artículo 17 del Reglamento de IA establece como obligación imperativa que todos los proveedores de sistemas de IA de alto riesgo deben implementar un SGC robusto y documentado. Este sistema no es un elemento opcional ni un marco meramente conceptual, sino que debe consignarse de manera sistemática y ordenada en documentación escrita que recoja detalladamente las políticas, los procedimientos y las instrucciones aplicables a lo largo del ciclo de vida del producto [3, 4]. \n\nEntre los primeros aspectos críticos que debe abordar este SGC se encuentra la definición de una estrategia integral para el cumplimiento de la normativa. Esto incluye la ejecución rigurosa de los procedimientos de evaluación de la conformidad, que aseguran que el sistema cumple con todas las exigencias legales antes de su introducción en el mercado. Asimismo, es vital establecer procedimientos exhaustivos de gestión de las modificaciones de los sistemas de IA de alto riesgo [5]. \n\nCualquier cambio, ya sea en el software, en el firmware o en los datos, debe distinguirse entre cambios sustanciales, no sustanciales y predefinidos. Cada modificación debe someterse a los mismos controles de calidad aplicables a todo el conjunto, garantizando que el sistema conserva los parámetros de precisión, solidez y ciberseguridad definidos inicialmente, y manteniendo un registro actualizado e histórico completo de dichas modificaciones [6, 7]."
          },
          {
              "title": "Diseño, Desarrollo y Control de Calidad del Sistema de IA",
              "content": "### Procedimientos de Diseño y Desarrollo\n\nEl proveedor es el principal responsable de establecer procedimientos y actuaciones sistemáticas durante las fases de diseño, desarrollo y control de calidad del sistema de IA de alto riesgo. El diseño debe fundamentarse tanto en los requisitos técnicos y funcionales del sistema como en las medidas de mitigación derivadas del plan de gestión de riesgos [8]. Para asegurar un diseño y desarrollo adecuados, el SGC debe articularse en torno a tres pilares fundamentales: Ciberseguridad, Precisión y Solidez.\n\nEn materia de **Ciberseguridad**, la calidad debe integrarse desde la concepción del sistema (seguridad por diseño). Es crucial implicar a perfiles como el Delegado de Protección de Datos (DPD), definir controles sobre los activos e implementar estrategias de desarrollo seguro. Durante el desarrollo, se recomiendan acciones como mecánicas de equipo rojo/azul (red/blue teaming), análisis SAST y DAST continuos, pruebas de penetración y evaluación de vulnerabilidades frente a ataques adversarios [9-11].\n\nRespecto a la **Precisión**, el SGC debe establecer durante el diseño las métricas pertinentes acordes a la finalidad prevista, verificando funciones objetivo y mecanismos de garantía. En el desarrollo, el control de calidad se basa en pruebas automatizadas o manuales para validar el preprocesamiento de datos, evitar el sobreaprendizaje (overfitting) y contrastar resultados con modelos base (baseline models) [12-14].\n\nEn relación a la **Solidez**, el diseño requiere identificar características como fiabilidad, estabilidad, sensibilidad, relevancia y alcanzabilidad. Su control durante el desarrollo implica un procedimiento iterativo de dos pasos: *Verificación* (comprobar que el software cumple las especificaciones sin necesidad de usar datos reales) y *Validación* (ejecutar el modelo con datos reales para confirmar su desempeño) [15-17]. Todo esto debe estar soportado por prácticas de ML-Ops que mantengan la trazabilidad entre el diseño original y su implementación final [18]."
          },
          {
              "title": "Gestión de Datos, Riesgos y Vigilancia Poscomercialización",
              "content": "### Datos, Riesgos e Incidentes en el SGC\n\nEl Reglamento de IA exige que el SGC incorpore políticas y procedimientos explícitos para la gestión de datos, la mitigación de riesgos y la supervisión del sistema una vez desplegado. Según el Artículo 10 (Datos y gobernanza de datos), el SGC debe detallar las operaciones de adquisición, recopilación, análisis, etiquetado, almacenamiento, depuración y agregación de datos. Es fundamental documentar cómo se detectan y corrigen lagunas, errores o sesgos que puedan derivar en discriminaciones prohibidas o riesgos de seguridad, aplicando siempre principios de minimización y cumplimiento del RGPD [19-22].\n\nParalelamente, el SGC debe integrar el **Sistema de Gestión de Riesgos** dictado por el Artículo 9. Este es un proceso continuo e iterativo orientado a identificar, analizar y evaluar riesgos con probabilidad e impacto sobre la salud, la seguridad y los derechos fundamentales, estableciendo medidas mitigadoras técnicas y organizativas durante todo el ciclo de vida del IA [23]. \n\nUna vez que el sistema se introduce en el mercado, el SGC debe dar soporte al **Sistema de Vigilancia Poscomercialización** (Artículo 72). Esto implica establecer herramientas y procesos para recolectar proactivamente datos sobre el rendimiento del sistema en entornos reales, permitiendo detectar desviaciones o problemas que no fueron evidentes durante la fase de prueba en laboratorio [24]. \n\nFinalmente, estrechamente ligado a la vigilancia, el SGC debe incluir los procedimientos asociados a la **Notificación de Incidentes Graves** (Artículo 73). La organización debe contar con vías rápidas y asignaciones de responsabilidad claras para investigar y comunicar a las Autoridades Nacionales Competentes (ANC) cualquier defecto o malfuncionamiento que haya causado o podido causar daños graves a la salud, seguridad, derechos fundamentales o infraestructuras críticas [25, 26]. Todo debe quedar registrado para auditorías futuras."
          },
          {
              "title": "Gobernanza, Recursos, Documentación y Rendición de Cuentas",
              "content": "### Estructura Organizativa y Gestión de Recursos\n\nEl SGC no solo abarca procesos técnicos, sino que se sustenta en un fuerte marco organizativo. La **Gestión de Recursos** (Art. 17.1l) se inspira en estándares como la ISO 9001 y exige a la organización proveer cuatro elementos clave: *Personas* (perfiles capacitados para abordar los requisitos del IA), *Infraestructura* (recursos técnicos y tecnológicos adecuados para las pruebas y despliegue), *Ambiente de operación* (factores físicos y psicológicos, además de entornos de prueba estables y aislados), y *Conocimientos de la organización* (mantener y actualizar el know-how necesario para el cumplimiento regulatorio) [27-30].\n\nEs fundamental establecer un **Marco de Rendición de Cuentas** (Art. 17.1m) que defina inequívocamente las responsabilidades del personal. Por ejemplo, un perfil legal puede encargarse de la estrategia normativa, el Chief Data Officer (CDO) de la gobernanza de datos, el equipo de QA de la validación, y el Chief Risk Officer (CRO) de la gestión de riesgos [31-33]. Todo esto debe estar soportado por un sólido sistema de registro de documentación (Art. 17.1k), preferiblemente mediante un gestor documental que garantice la conservación, el control de versiones y el acceso para evaluaciones de organismos notificados [34, 35].\n\nPor último, el Reglamento contempla el principio de **Proporcionalidad** (Art. 17.2). Las exigencias del SGC se adaptarán al tamaño del proveedor (prestando especial atención a PYMES y microempresas) para reducir cargas administrativas sin comprometer la protección de la IA ni los derechos fundamentales [36]. Asimismo, para evitar duplicidades, las **Entidades Financieras** sujetas a legislación sectorial de la UE podrán integrar estos nuevos requisitos del Reglamento de IA dentro de sus sistemas de gestión de calidad internos ya existentes [37]."
          }
      ],
      "flashcards": [
          {
              "front": "¿Qué es un Sistema de Gestión de la Calidad (SGC) en el contexto del Reglamento de IA?",
              "back": "Es un conjunto de políticas, procedimientos e instrucciones documentadas para garantizar el cumplimiento normativo y proteger la salud, seguridad y derechos fundamentales."
          },
          {
              "front": "¿Qué artículo del Reglamento Europeo de IA regula específicamente el Sistema de Gestión de la Calidad?",
              "back": "El Artículo 17."
          },
          {
              "front": "¿Cómo debe formalizarse el Sistema de Gestión de la Calidad según la normativa?",
              "back": "Deberá consignarse de manera sistemática y ordenada en documentación escrita que incluya políticas, procedimientos e instrucciones."
          },
          {
              "front": "¿Qué debe incluir la estrategia para el cumplimiento normativo dentro del SGC?",
              "back": "Debe incluir el cumplimiento de los procedimientos de evaluación de la conformidad y de la gestión de las modificaciones de los sistemas de IA."
          },
          {
              "front": "¿Qué tres dimensiones técnicas fundamentales se deben controlar durante el diseño y desarrollo del sistema?",
              "back": "La ciberseguridad, la precisión y la solidez."
          },
          {
              "front": "¿Qué aspectos abarca la gobernanza de datos exigida en el SGC?",
              "back": "Adquisición, recopilación, análisis, etiquetado, almacenamiento, filtrado, prospección, agregación y depuración de sesgos."
          },
          {
              "front": "¿A qué obliga el SGC en relación con la vigilancia del sistema una vez comercializado?",
              "back": "A establecer, aplicar y mantener un sistema de vigilancia poscomercialización de conformidad con el artículo 72."
          },
          {
              "front": "¿Qué procedimiento reactivo crítico debe estar definido en el SGC ante fallos graves?",
              "back": "Los procedimientos asociados a la investigación y notificación de un incidente grave con arreglo al artículo 73."
          },
          {
              "front": "¿En qué consiste la 'Gestión de Recursos' dentro del SGC?",
              "back": "En proporcionar las personas, infraestructura, ambiente de operación y conocimientos necesarios para la implementación eficaz del sistema de IA."
          },
          {
              "front": "¿Qué es el marco de rendición de cuentas (Accountability Framework) del SGC?",
              "back": "Es la definición clara de las responsabilidades y autorizaciones del personal directivo y técnico en todos los aspectos del ciclo de vida del IA."
          },
          {
              "front": "¿Cómo aplica el SGC a las pequeñas y medianas empresas (PYMES)?",
              "back": "Su implementación será proporcional al tamaño de la organización, reduciendo carga administrativa pero sin comprometer el nivel de protección requerido."
          },
          {
              "front": "¿Qué facilidad otorga el Reglamento de IA a las entidades financieras respecto al SGC?",
              "back": "Les permite integrar los requisitos de calidad del Reglamento de IA dentro de los sistemas de gestión o gobernanza interna que ya exigen las normativas sectoriales financieras."
          }
      ],
      "quiz": [
          {
              "question": "¿Qué artículo del Reglamento de IA detalla las obligaciones relativas al Sistema de Gestión de la Calidad?",
              "options": [
                  "Artículo 9",
                  "Artículo 10",
                  "Artículo 17",
                  "Artículo 72"
              ],
              "correctAnswer": 2
          },
          {
              "question": "Según el Reglamento, ¿cómo debe materializarse el Sistema de Gestión de la Calidad (SGC)?",
              "options": [
                  "A través de auditorías verbales anuales",
                  "De manera sistemática en documentación con políticas, procedimientos e instrucciones",
                  "Mediante un software de control financiero exclusivo",
                  "Exclusivamente mediante la contratación de una consultora externa"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Cuál de los siguientes elementos NO es un requisito obligatorio del SGC según el Artículo 17?",
              "options": [
                  "Estrategia de cumplimiento normativo",
                  "Estrategia de marketing y posicionamiento web",
                  "Procedimientos de gestión de datos",
                  "Marco de rendición de cuentas"
              ],
              "correctAnswer": 1
          },
          {
              "question": "Durante las fases de diseño y desarrollo, el SGC debe implementar controles técnicos para tres áreas críticas. ¿Cuáles son?",
              "options": [
                  "Privacidad, Rentabilidad y Velocidad",
                  "Ciberseguridad, Precisión y Solidez",
                  "Estética, Usabilidad y Accesibilidad",
                  "Costes, Beneficios y Tiempos de entrega"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué mecanismo se recomienda en la guía para asegurar el control de calidad durante el desarrollo del modelo de IA?",
              "options": [
                  "Prácticas de ML-Ops (Machine Learning Operations)",
                  "Outsourcing total del código fuente",
                  "Desarrollo sin control de versiones para ahorrar recursos",
                  "Eliminar la fase de testeo si los datos son públicos"
              ],
              "correctAnswer": 0
          },
          {
              "question": "El SGC debe integrar un sistema para monitorear el comportamiento del IA en entornos reales una vez lanzado. ¿Cómo se llama este sistema?",
              "options": [
                  "Sistema de gestión de riesgos",
                  "Sistema de auditoría contable",
                  "Sistema de vigilancia poscomercialización",
                  "Sistema de recolección de leads"
              ],
              "correctAnswer": 2
          },
          {
              "question": "En el marco de la gestión de recursos del SGC (inspirado en la ISO 9001), ¿qué elemento NO se incluye tradicionalmente?",
              "options": [
                  "Personas (competencias y roles)",
                  "Infraestructura (tecnológica y física)",
                  "Conocimientos de la organización",
                  "Inversiones en bolsa de valores"
              ],
              "correctAnswer": 3
          },
          {
              "question": "¿Qué debe definir el 'marco de rendición de cuentas' del SGC?",
              "options": [
                  "El pago de impuestos trimestrales de la empresa",
                  "Las responsabilidades del personal directivo y de otra índole en los procesos de IA",
                  "Las cuentas bancarias utilizadas para el desarrollo",
                  "El balance de pérdidas y ganancias del software"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué establece el Reglamento sobre la aplicación del SGC en las PYMES?",
              "options": [
                  "Están totalmente exentas de cumplir con el SGC",
                  "Deben cumplirlo de forma proporcional a su tamaño sin rebajar el nivel de protección",
                  "Deben implementar requisitos el doble de estrictos que las grandes empresas",
                  "Solo necesitan cumplir con la fase de diseño, ignorando el resto"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Cómo aplica el requisito del SGC a las entidades financieras ya reguladas por normativas sectoriales de la UE?",
              "options": [
                  "Deben crear un SGC paralelo y aislado exclusivamente para el Reglamento de IA",
                  "Están prohibidas de utilizar sistemas de IA de alto riesgo",
                  "Pueden integrar los requisitos del Reglamento de IA en sus sistemas de gestión sectoriales existentes",
                  "Se les exige subcontratar la gestión de calidad al Banco Central Europeo"
              ],
              "correctAnswer": 2
          }
      ],
      "pdfUrl": "https://aesia.digital.gob.es/storage/media/04-guia-del-sistema-de-gestion-de-la-calidad.pdf",
      "glossary": [
          {
              "term": "Sistema de Gestión de la Calidad (SGC)",
              "definition": "Conjunto documentado de políticas, procedimientos e instrucciones diseñado para garantizar que una organización y sus sistemas de IA cumplen con el Reglamento Europeo, asegurando la salud, seguridad y derechos fundamentales."
          },
          {
              "term": "Evaluación de la conformidad",
              "definition": "Procedimiento mediante el cual se demuestra y verifica que un sistema de IA cumple con los requisitos esenciales del Reglamento antes de su comercialización."
          },
          {
              "term": "Vigilancia poscomercialización",
              "definition": "Sistema continuo implementado por el proveedor para recabar y analizar datos sobre el rendimiento y uso del sistema de IA una vez que ya está en el mercado, con el fin de detectar riesgos ocultos."
          },
          {
              "term": "ML-Ops (Machine Learning Operations)",
              "definition": "Prácticas conjuntas de desarrollo y operaciones para el despliegue y mantenimiento de modelos de Machine Learning en producción de manera confiable y eficiente."
          },
          {
              "term": "Gobernanza de datos",
              "definition": "Conjunto de políticas y procesos que aseguran que los datos utilizados para entrenar, validar y probar los sistemas de IA son pertinentes, representativos, precisos y libres de sesgos dañinos."
          },
          {
              "term": "Gestión de riesgos",
              "definition": "Proceso sistemático e iterativo para identificar, analizar, evaluar y mitigar los peligros que el sistema de IA pueda representar para los usuarios o su entorno."
          },
          {
              "term": "Incidente grave",
              "definition": "Cualquier fallo o anomalía en un sistema de IA que cause o pueda causar lesiones, muerte, daños graves a la propiedad, al medio ambiente o vulneraciones de derechos fundamentales."
          },
          {
              "term": "Rendición de cuentas (Accountability)",
              "definition": "Marco organizativo que asigna de forma clara y documentada las responsabilidades y obligaciones de cada rol dentro del desarrollo y operación de la IA."
          },
          {
              "term": "Proporcionalidad",
              "definition": "Principio legal que permite adaptar la carga burocrática y documental del SGC al tamaño y capacidad de la empresa (ej. PYMES), manteniendo la rigurosidad técnica."
          },
          {
              "term": "Sobreaprendizaje (Overfitting)",
              "definition": "Problema de modelado donde la IA se ajusta demasiado a los datos de entrenamiento y pierde la capacidad de generalizar o mantener su precisión con datos nuevos y reales."
          }
      ]
  },
  {
      "id": "05",
      "title": "Guía de gestión de riesgos",
      "summary": "Proporciona el marco para el sistema de gestión de riesgos (Artículo 9), definido como un proceso iterativo continuo durante todo el ciclo de vida del sistema. Se centra en identificar y mitigar riesgos para la salud, la seguridad y los derechos fundamentales. Describe pasos como la definición del apetito al riesgo, análisis del contexto, identificación de amenazas (ej. envenenamiento de datos), evaluación de riesgos y adopción de medidas de tratamiento (eliminación, reducción, información), prestando atención a colectivos vulnerables como menores.",
      "contentIndex": [
          {
              "title": "Introducción y Obligaciones del Reglamento de IA (Artículo 9)",
              "content": "El artículo 9 del Reglamento Europeo de Inteligencia Artificial (RIA) establece la obligación principal para los proveedores de sistemas de inteligencia artificial de alto riesgo (HRAIS) de establecer, implantar, documentar y mantener un sistema de gestión de riesgos [1]. Este sistema de gestión no es una actividad puntual, sino que se entiende como un proceso iterativo continuo planificado y ejecutado durante todo el ciclo de vida del sistema de IA de alto riesgo, requiriendo revisiones periódicas y actualizaciones sistemáticas [1]. Las etapas de este proceso incluyen la determinación y el análisis pormenorizado de los riesgos conocidos y previsibles que el sistema pueda plantear para la salud, la seguridad o los derechos fundamentales de las personas, siempre que el sistema se utilice de conformidad con su finalidad prevista [1]. Además, la normativa obliga a estimar y evaluar los riesgos que podrían surgir del uso indebido razonablemente previsible del sistema por parte de los usuarios [1]. Otra de las obligaciones clave es la evaluación de nuevos riesgos emergentes que podrían surgir a partir del análisis de los datos recogidos con el sistema de vigilancia poscomercialización [1]. A partir de todas estas evaluaciones, el proveedor debe adoptar las medidas de gestión de riesgos más adecuadas y específicas, destinadas a hacer frente a los riesgos detectados de forma proporcionada [1]. El Reglamento señala que los riesgos referidos son únicamente aquellos que pueden mitigarse o eliminarse razonablemente mediante el desarrollo, el diseño del sistema o el suministro de información técnica adecuada [1]. Asimismo, establece un mandato claro de protección hacia las poblaciones más sensibles, obligando a los proveedores a prestar especial atención a si el sistema de IA puede afectar negativamente a personas menores de dieciocho años y a otros colectivos vulnerables [2, 3]."
          },
          {
              "title": "Determinación del Apetito al Riesgo y Contexto del Sistema",
              "content": "La determinación del apetito al riesgo y la comprensión del contexto del sistema de inteligencia artificial son los pilares iniciales sobre los que se asienta cualquier sistema de gestión de riesgos eficaz, tal como se establece en la Guía 05 [3, 4]. El apetito al riesgo se define en este contexto como el nivel de riesgo que una organización está dispuesta a asumir o aceptar en relación con las posibles afectaciones que su sistema de IA pueda ocasionar sobre la salud, la seguridad y los derechos fundamentales de las personas físicas [4]. Para cuantificarlo de manera objetiva, las organizaciones suelen emplear una escala o matriz de riesgos que cruza la probabilidad de que ocurra un evento adverso con el impacto o gravedad que dicho evento generaría, estableciendo un umbral máximo a partir del cual se deben determinar e implementar medidas de control obligatorias [4, 5]. Por otro lado, la definición del contexto del sistema de IA implica analizar exhaustivamente tanto el entorno externo como el interno en el que el sistema será diseñado, desarrollado y utilizado [6]. Esto incluye considerar factores sociales, culturales, regulatorios y tecnológicos que pueden afectar al sistema y a las personas que interactúan con él [7]. En el marco europeo, un elemento contextual indispensable es la Carta de los Derechos Fundamentales de la Unión Europea, ya que los sistemas de IA deben respetar derechos clave como la no discriminación y la protección de datos de carácter personal [8-10]. La comprensión profunda de este entorno y contexto es la base esencial para la correcta identificación de amenazas y riesgos; una evaluación inadecuada en esta fase inicial resultaría irremediablemente en una identificación incompleta de los riesgos que amenazan al sistema [11]."
          },
          {
              "title": "Identificación, Análisis y Evaluación de Riesgos",
              "content": "El núcleo operativo de la gestión de riesgos en los sistemas de IA de alto riesgo está compuesto por las fases consecutivas de identificación, análisis y evaluación de los mismos [12]. La identificación de riesgos se define como el proceso de descubrimiento, reconocimiento y documentación de los diferentes peligros que pueden afectar al sistema de IA y, consecuentemente, a la salud, seguridad y derechos fundamentales de las personas [13]. Para abordar esta fase de manera estructurada, la guía recomienda comenzar por identificar e inventariar los componentes del sistema de IA, los cuales suelen dividirse en actores principales (propietarios y científicos de datos), datos (datos sin procesar, de entrenamiento, de prueba), entornos o herramientas, y procesos [14-18]. A partir de estos componentes y basándose en el análisis del contexto previo, se identifican las amenazas asociadas que podrían explotar las vulnerabilidades del sistema para materializarse en riesgos reales, como la discriminación por sesgos algorítmicos o la filtración de información confidencial [19, 20]. Seguidamente, tiene lugar la fase de análisis y evaluación, donde se determina la criticidad asignando un valor numérico o cualitativo de probabilidad de ocurrencia y un nivel de impacto a cada riesgo identificado [20, 21]. Este cálculo arroja el denominado riesgo inherente, es decir, el riesgo que existe antes de aplicar medidas de mitigación, el cual se compara entonces con el apetito al riesgo previamente definido por la organización [20, 21]. Si el nivel de riesgo evaluado supera el umbral aceptable (apetito al riesgo), se concluye que el riesgo es inaceptable, lo que detona la necesidad imperativa de definir, seleccionar e implementar medidas de respuesta y control para mitigarlo [21]."
          },
          {
              "title": "Respuesta al Riesgo y Procedimientos de Prueba",
              "content": "Una vez que los riesgos han sido evaluados y se ha determinado que requieren mitigación, se entra en la fase de respuesta al riesgo, donde se seleccionan e implementan las opciones de tratamiento más adecuadas, tales como evitar, transferir, mitigar o aceptar el riesgo [21, 22]. El Reglamento de IA establece un orden de prioridad claro para la adopción de estas medidas: en primer lugar, se debe intentar eliminar o reducir los riesgos en la medida en que sea técnicamente viable mediante un diseño y desarrollo adecuados del sistema; en segundo lugar, se deben implantar medidas de mitigación y control apropiadas para los riesgos que no puedan eliminarse; y, en tercer lugar, se debe proporcionar la información requerida y la formación pertinente a los responsables del despliegue [2, 23]. El riesgo que subsiste después de aplicar todas estas medidas de control se denomina riesgo residual, el cual debe ser debidamente documentado, informado a los usuarios y considerado aceptable antes de proceder [24, 25]. Para verificar la eficacia real de estas medidas, el Reglamento exige que los sistemas de IA de alto riesgo sean sometidos a procedimientos de prueba rigurosos [2]. Estas pruebas, que pueden incluir evaluaciones en condiciones reales, están destinadas a comprobar que los sistemas funcionan de manera coherente con su finalidad prevista y que cumplen plenamente con los requisitos normativos de gestión de riesgos [2, 26]. Es un mandato legal que las pruebas se realicen en cualquier momento pertinente del proceso de desarrollo y, de manera obligatoria e indispensable, antes de la introducción del sistema en el mercado o de su puesta en servicio, garantizando así la seguridad del HRAIS [2]."
          }
      ],
      "flashcards": [
          {
              "front": "¿Qué es el apetito al riesgo en el contexto de un sistema de IA?",
              "back": "Es el nivel de riesgo que una organización está dispuesta a aceptar en relación con la salud, seguridad y derechos fundamentales de las personas [4]."
          },
          {
              "front": "Según el artículo 9 del Reglamento de IA, ¿qué tipo de proceso es el sistema de gestión de riesgos?",
              "back": "Es un proceso iterativo continuo planificado y ejecutado durante todo el ciclo de vida de un sistema de IA de alto riesgo [1]."
          },
          {
              "front": "¿Qué dos dimensiones se utilizan generalmente para analizar y evaluar un riesgo identificado?",
              "back": "La probabilidad de que ocurra la amenaza y el impacto que generaría si se materializa [4, 20]."
          },
          {
              "front": "¿A qué se le denomina \"riesgo residual\" en la gestión de sistemas de IA?",
              "back": "Es el riesgo que subsiste o permanece en el sistema después de haber implementado las medidas de tratamiento o controles de seguridad [25]."
          },
          {
              "front": "Nombra las tres categorías priorizadas de medidas de gestión de riesgos según el Reglamento de IA.",
              "back": "1) Eliminar o reducir riesgos por diseño, 2) Implantar medidas de mitigación/control, y 3) Proporcionar información y formación a los responsables [2, 23]."
          },
          {
              "front": "¿Qué documento es de obligada consideración en el análisis de contexto para evitar vulneraciones de derechos en la UE?",
              "back": "La Carta de los Derechos Fundamentales de la Unión Europea, que incluye derechos como la no discriminación y la protección de datos [8, 9]."
          },
          {
              "front": "¿Cuál es el propósito principal de los procedimientos de prueba del sistema de IA según el Reglamento?",
              "back": "Comprobar que el sistema funciona conforme a su finalidad prevista y determinar cuáles son las medidas de gestión de riesgos más adecuadas [2]."
          },
          {
              "front": "¿En qué momento deben realizarse obligatoriamente las pruebas de los sistemas de IA de alto riesgo?",
              "back": "En cualquier momento del desarrollo y, en todo caso, antes de su introducción en el mercado o puesta en servicio [2]."
          },
          {
              "front": "¿Qué es el riesgo inherente?",
              "back": "Es el riesgo intrínseco de cada actividad o componente, evaluado sin tener en cuenta las medidas de control que puedan implantarse [25]."
          },
          {
              "front": "Nombra las cuatro categorías principales de componentes de un sistema de IA útiles para identificar riesgos.",
              "back": "Actores principales, Datos, Entornos y herramientas, y Procesos [15-18]."
          },
          {
              "front": "¿A qué grupos demográficos deben prestar especial atención los proveedores al implantar el sistema de gestión de riesgos?",
              "back": "A las personas menores de dieciocho años y, en su caso, a otros colectivos vulnerables [3]."
          },
          {
              "front": "¿En qué consiste exactamente la fase de \"identificación de riesgos\"?",
              "back": "Es el proceso de descubrimiento, reconocimiento y documentación de los diferentes riesgos que pueden afectar al sistema de IA y a las personas [13]."
          }
      ],
      "quiz": [
          {
              "question": "Según el artículo 9 del Reglamento de IA, el sistema de gestión de riesgos debe entenderse como [1]:",
              "options": [
                  "Un proceso que finaliza tras lanzar el producto al mercado.",
                  "Un proceso iterativo continuo ejecutado durante todo el ciclo de vida.",
                  "Un trámite meramente administrativo de carácter anual.",
                  "Una revisión exclusiva correspondiente a la fase de diseño del sistema."
              ],
              "correctAnswer": 1
          },
          {
              "question": "En la evaluación de riesgos, si el riesgo inherente se calcula en 12 y el umbral de apetito al riesgo de la organización es 4, ¿qué acción se debe tomar [20, 21]?",
              "options": [
                  "Ignorar el riesgo ya que el sistema está en desarrollo.",
                  "Aceptar el riesgo residual tal como está.",
                  "Implementar medidas de control y mitigación para reducirlo.",
                  "Transferir automáticamente todo el riesgo a los usuarios finales."
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Cuál de las siguientes es una medida prioritaria (la primera en la jerarquía) para la gestión de riesgos según el Reglamento de IA [2, 23]?",
              "options": [
                  "Impartir formación a los usuarios y responsables del despliegue.",
                  "Proporcionar avisos legales y manuales técnicos.",
                  "Transferir la responsabilidad a terceros mediante contratos.",
                  "Eliminar o reducir los riesgos mediante un diseño y desarrollo adecuados."
              ],
              "correctAnswer": 3
          },
          {
              "question": "El nivel de riesgo que permanece en el sistema después de haber aplicado las medidas de control y mitigación se denomina [25]:",
              "options": [
                  "Riesgo inherente.",
                  "Riesgo residual.",
                  "Riesgo absoluto.",
                  "Riesgo catastrófico."
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué conjunto de derechos son fundamentales a considerar en el análisis de contexto de una IA de alto riesgo en Europa [8, 9]?",
              "options": [
                  "Los derechos de autor de bases de datos exclusivamente.",
                  "Los derechos comerciales y de propiedad intelectual de la empresa.",
                  "Los recogidos en la Carta de los Derechos Fundamentales de la Unión Europea.",
                  "Los derechos de exportación y libre comercio de software."
              ],
              "correctAnswer": 2
          },
          {
              "question": "Las pruebas obligatorias del sistema de IA de alto riesgo deben realizarse [2]:",
              "options": [
                  "Solo si el usuario o cliente lo solicita expresamente.",
                  "Tras 10 años de uso ininterrumpido del sistema.",
                  "Exclusivamente en la fase conceptual de ideación.",
                  "En el desarrollo y, en todo caso, antes de su introducción en el mercado o puesta en servicio."
              ],
              "correctAnswer": 3
          },
          {
              "question": "Identificar los componentes del sistema de IA, como los datos de entrenamiento y los científicos de datos, es el primer paso del proceso de [13, 14]:",
              "options": [
                  "Identificación de riesgos.",
                  "Marketing y venta del sistema.",
                  "Definición del apetito al riesgo de la empresa.",
                  "Vigilancia poscomercialización del sistema."
              ],
              "correctAnswer": 0
          },
          {
              "question": "Un evento adverso documentado como un ataque de 'fuzzing' o envenenamiento de datos se considera inicialmente una [27]:",
              "options": [
                  "Vulnerabilidad intrínseca del hardware.",
                  "Amenaza a la que está expuesto el sistema.",
                  "Medida de control preventivo.",
                  "Técnica de mitigación de sesgos."
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué acción es estrictamente necesaria tras haber implementado una medida de respuesta o tratamiento del riesgo en el sistema [21, 24]?",
              "options": [
                  "Eliminar el componente que causó el riesgo desde la raíz.",
                  "Evaluar la eficacia del tratamiento para confirmar que el riesgo residual sea aceptable.",
                  "Suspender permanentemente la comercialización del producto de IA.",
                  "Aumentar el límite de apetito al riesgo de la organización para que encaje."
              ],
              "correctAnswer": 1
          },
          {
              "question": "El Reglamento de IA exige que los proveedores presten especial atención a los probables impactos negativos del sistema en [3]:",
              "options": [
                  "La infraestructura física de la nube que lo aloja.",
                  "La disponibilidad de código fuente abierto en el mercado.",
                  "Las personas menores de dieciocho años y otros colectivos vulnerables.",
                  "Los beneficios de los accionistas de la empresa desarrolladora."
              ],
              "correctAnswer": 2
          }
      ],
      "pdfUrl": "https://aesia.digital.gob.es/storage/media/05-guia-de-gestion-de-riesgos.pdf",
      "glossary": [
          {
              "term": "Amenaza",
              "definition": "Peligros a los que está expuesto el sistema de IA que pueden terminar materializándose en un riesgo causando daños, provenientes de ataques externos, sucesos inesperados o incumplimientos de políticas [27]."
          },
          {
              "term": "Vulnerabilidad",
              "definition": "Debilidad propia de un sistema que permite ser atacado y recibir un daño, frecuentemente producida por una baja protección contra ataques externos [28]."
          },
          {
              "term": "Riesgo",
              "definition": "Posibilidad de que un sistema sufra un incidente y que una amenaza se materialice causando daños, aprovechando una vulnerabilidad existente [28]."
          },
          {
              "term": "Medidas de control",
              "definition": "En el contexto de la gestión de riesgos, son las acciones técnicas u organizativas que deben tomarse para proteger el sistema de las amenazas, reduciendo la probabilidad del riesgo o su impacto [28]."
          },
          {
              "term": "Apetito al riesgo",
              "definition": "Es el volumen de riesgo, cuantificable a través del impacto y la probabilidad, que una organización está dispuesta a aceptar en la búsqueda de lograr su misión [25]."
          },
          {
              "term": "Riesgo inherente",
              "definition": "Es el riesgo intrínseco de cada actividad o sistema, evaluado sin tener en cuenta las medidas de control y mitigación que puedan implantarse [25]."
          },
          {
              "term": "Riesgo residual",
              "definition": "Es aquel riesgo que subsiste y permanece en el sistema después de haber implementado de manera efectiva los controles y medidas de tratamiento [25]."
          },
          {
              "term": "HRAIS (Sistemas de IA de alto riesgo)",
              "definition": "Sistemas basados en Inteligencia Artificial regulados por la normativa que tienen un impacto significativo potencial en la vida de las personas, la salud, la seguridad y sus derechos fundamentales [29]."
          },
          {
              "term": "Ataque de fuzzing",
              "definition": "Técnica de testeo automatizado utilizada como vector de ataque mediante la cual se introducen datos inválidos, aleatorios o inesperados a un sistema informático [29]."
          },
          {
              "term": "Identificación de riesgos",
              "definition": "Proceso iterativo de descubrimiento, reconocimiento y documentación de los diferentes peligros y amenazas que pueden afectar al sistema de IA y a las personas [13]."
          }
      ]
  },
  {
      "id": "06",
      "title": "Guía Vigilancia humana",
      "summary": "Esta guía detalla las medidas necesarias para garantizar una supervisión humana efectiva en los sistemas de IA de alto riesgo, conforme al artículo 14 del Reglamento. Aborda el diseño de interfaces humano-máquina adecuadas, el establecimiento de modelos de gobernanza y la capacitación de las personas encargadas de la vigilancia. Su objetivo es asegurar que los supervisores puedan interpretar correctamente los resultados, detectar sesgos de automatización (como la confianza excesiva en el sistema) y tengan la capacidad técnica y autoridad para intervenir o detener el sistema si se detectan riesgos para la salud, seguridad o derechos fundamentales.",
      "contentIndex": [
          {
              "title": "1. Introducción y Concepto de Vigilancia Humana en la Inteligencia Artificial",
              "content": "La vigilancia humana en la Inteligencia Artificial (IA) se concibe como un conjunto fundamental de medidas y capacidades que deben integrarse obligatoriamente en los sistemas de IA de alto riesgo (HRAIS) [1]. El objetivo primordial de estas medidas es prevenir y minimizar los riesgos asociados a la tecnología, protegiendo así la salud, la seguridad y los derechos fundamentales de las personas físicas [1, 2]. El Reglamento Europeo de Inteligencia Artificial (AI Act) consagra el artículo 14 íntegramente a regular esta supervisión humana, estableciendo las bases para que los sistemas no operen de forma completamente autónoma sin control [3, 4]. La necesidad de esta vigilancia radica en que la inteligencia artificial no es infalible y sus decisiones pueden tener impactos drásticos; un sistema puede cometer errores que una persona podría identificar gracias a su comprensión del contexto y al sentido común [1]. Además, el ser humano tiende a confiar excesivamente en los sistemas automatizados, un fenómeno conocido como 'sesgo de automatización', asumiendo que la máquina siempre tiene la razón y perdiendo la capacidad crítica para detectar fallos [1]. Por ello, resulta vital que la vigilancia no sea una mera formalidad, sino una supervisión activa, informada y crítica que actúe como última barrera de defensa frente a comportamientos anómalos o discriminatorios generados por algoritmos [1, 2]. El Reglamento establece que la vigilancia humana debe ser capaz de gestionar y mitigar de manera efectiva cualquier amenaza en los dominios de salud, seguridad y derechos fundamentales, exigiendo una supervisión proporcional a los riesgos y al nivel de autonomía del sistema [2, 5]."
          },
          {
              "title": "2. Requisitos del Reglamento de Inteligencia Artificial (Artículo 14)",
              "content": "El artículo 14 del Reglamento Europeo de IA detalla de forma exhaustiva los requisitos que deben cumplir los sistemas de IA de alto riesgo para garantizar una supervisión humana efectiva [4]. En primer lugar, exige que estos sistemas sean diseñados y desarrollados de tal manera que, durante el período en el que estén en uso, puedan ser vigilados de manera eficaz por personas físicas [4, 6]. En segundo lugar, la vigilancia humana debe tener como objetivo principal prevenir o reducir al mínimo los riesgos para la salud, la seguridad y los derechos fundamentales [4]. El reglamento también clasifica las medidas de supervisión en dos tipos: aquellas que el proveedor debe integrar directamente en el sistema desde su concepción, y aquellas que el responsable del despliegue debe implementar en su entorno operativo [4, 5]. \n\nUn aspecto crucial es el entendimiento y la autonomía de las personas encargadas de la vigilancia. Estas deben ser capaces de entender plenamente las capacidades y limitaciones del sistema, así como de interpretar correctamente sus resultados de salida utilizando las herramientas de interpretación disponibles [7, 8]. Además, deben ser conscientes del riesgo del sesgo de automatización para no depender ciegamente de la máquina [4, 9]. Se les debe otorgar la autonomía necesaria para decidir no utilizar el sistema en una situación concreta, ignorar o revertir los resultados, y, de ser necesario, interrumpir el funcionamiento del sistema mediante un 'botón de parada' que lo detenga de forma segura [7, 10]. Por último, el reglamento impone un requisito muy estricto para los sistemas de identificación biométrica remota: su uso no puede dar lugar a acciones que afecten a las personas sin que al menos dos personas físicas competentes hayan verificado y confirmado la identificación por separado [6, 7]."
          },
          {
              "title": "3. Medidas Aplicables para la Vigilancia Efectiva: Gobernanza e Interfaz (HMI)",
              "content": "Para llevar a la práctica los requisitos normativos, la guía establece una serie de medidas operativas y de diseño. Una de las medidas más relevantes es el 'Modelo de gobernanza', el cual establece una estructura organizativa, procedimientos claros y un plan de formación continua para el uso adecuado del sistema [11]. Este modelo requiere disponer de un marco de gestión de riesgos asociado y realizar evaluaciones periódicas del impacto del sistema a lo largo de todo su ciclo de vida [11]. Tanto el proveedor como el responsable del despliegue tienen obligaciones aquí: el proveedor debe definir el modelo durante la construcción, y el responsable debe adaptarlo a su realidad corporativa durante el uso [12]. \n\nOtra medida esencial es habilitar una Interfaz Humano-Máquina (HMI) adecuada [13]. Dado que el sistema debe poder ser supervisado, la información debe reflejarse en interfaces comprensibles que permitan monitorear el comportamiento de la IA [13]. La HMI debe estar diseñada considerando los distintos niveles de interlocución de las personas que interactúan con el sistema, desde perfiles técnicos que monitorizan las métricas del modelo hasta usuarios de negocio o perfiles médicos que toman la decisión final [13, 14]. Por ejemplo, en un sistema de evaluación de ayudas, la HMI debe ofrecer a los gestores un lenguaje natural para asegurar el cumplimiento de las políticas, mientras que a los técnicos les debe ofrecer la misma información desde una perspectiva técnica y de rendimiento [15]. Asimismo, todas las medidas técnicas de vigilancia deben estar documentadas para facilitar su evaluación [16, 17]."
          },
          {
              "title": "4. Concienciación, Grados de Autonomía y Documentación Técnica",
              "content": "Para combatir el peligroso sesgo de automatización, la guía propone la medida de 'Concienciación mediante error forzado'. Esta técnica consiste en generar de manera controlada y deliberada salidas erróneas del sistema de IA durante fases de prueba o entrenamiento, con el objetivo de testar el criterio humano y mantener la alerta del supervisor, evitando que confíe ciegamente en las predicciones algorítmicas [18]. Esta medida es vital para validar si la persona a cargo de la vigilancia mantiene su capacidad crítica [18]. Además, el modelo de gobernanza debe definir de forma explícita el nivel de autonomía concedido al sistema, englobado en el concepto 'Human in/on the loop' [19]. Existen tres niveles principales: 'Human in Command' (HIC), donde el humano tiene la capacidad global de dirigir y supervisar el impacto del sistema; 'Human in the Loop' (HITL), donde el sistema sugiere pero el humano siempre interviene y toma la decisión final; y 'Human on the Loop' (HOTL), donde el sistema puede tomar decisiones automáticamente pero el humano supervisa en tiempo real y puede intervenir o detener la operación si detecta anomalías [19].\n\nFinalmente, todo este esfuerzo debe quedar reflejado en la Documentación Técnica del sistema, conforme al Artículo 11 del Reglamento [16]. Se deben generar manuales de uso y documentos técnicos que describan los mecanismos para interrumpir el sistema, el nivel de autonomía definido, y los procedimientos del modelo de gobernanza [16, 20]. La documentación debe demostrar de manera clara y completa ante las autoridades competentes cómo el sistema cumple con la exigencia de permitir una vigilancia humana eficaz [16]."
          }
      ],
      "flashcards": [
          {
              "front": "¿Cuál es el objetivo principal de la vigilancia humana en los sistemas de IA de alto riesgo?",
              "back": "Prevenir y minimizar los riesgos para la salud, la seguridad y los derechos fundamentales de las personas que puedan derivarse del uso de la IA."
          },
          {
              "front": "¿Qué artículo del Reglamento Europeo de IA (AI Act) regula específicamente la supervisión o vigilancia humana?",
              "back": "El artículo 14 del Reglamento Europeo de Inteligencia Artificial."
          },
          {
              "front": "¿Qué se entiende por 'sesgo de automatización' en el contexto de la IA?",
              "back": "Es la tendencia humana a confiar excesivamente en el sistema de IA, asumiendo que siempre tiene la razón, lo que disminuye la capacidad crítica del supervisor."
          },
          {
              "front": "¿Qué es la medida de 'error forzado' propuesta en la guía?",
              "back": "Consiste en generar de manera controlada salidas erróneas del sistema para testar el criterio del supervisor humano y evitar que sufra el sesgo de automatización."
          },
          {
              "front": "¿Qué requisito excepcional exige el Reglamento para los sistemas de identificación biométrica remota?",
              "back": "No se puede tomar ninguna acción basada en la IA sin que al menos dos personas físicas competentes hayan verificado y confirmado la identificación por separado."
          },
          {
              "front": "¿En qué consiste el nivel de autonomía 'Human in the Loop' (HITL)?",
              "back": "Es el nivel donde el sistema proporciona recomendaciones, pero la decisión final siempre es ejecutada e intervenida por un ser humano."
          },
          {
              "front": "¿Qué diferencia a 'Human on the Loop' (HOTL) del HITL?",
              "back": "En HOTL, el sistema puede tomar decisiones de forma automatizada, pero un humano supervisa el proceso en tiempo real y puede interrumpirlo si es necesario."
          },
          {
              "front": "¿Qué significa 'Human in Command' (HIC)?",
              "back": "Es el nivel más amplio de autonomía, donde las personas tienen la capacidad global de supervisar el impacto de la IA e incluso decidir si se utiliza o no para una tarea."
          },
          {
              "front": "¿Qué papel juega la Interfaz Humano-Máquina (HMI) en la vigilancia humana?",
              "back": "Permite que los usuarios (técnicos y no técnicos) puedan comprender, monitorizar y supervisar las métricas y decisiones del sistema de IA a través de un lenguaje adaptado."
          },
          {
              "front": "¿Qué capacidad crítica debe proporcionar obligatoriamente un sistema de IA de alto riesgo al supervisor humano?",
              "back": "La capacidad de intervenir en el sistema o interrumpir su funcionamiento de forma segura (por ejemplo, mediante un 'botón de parada')."
          },
          {
              "front": "¿De quién es la responsabilidad de diseñar el sistema de IA para que permita una vigilancia humana eficaz?",
              "back": "Es obligación del proveedor del sistema de IA desde su fase de diseño y desarrollo."
          },
          {
              "front": "¿Qué es el 'Modelo de Gobernanza' de un sistema de IA?",
              "back": "Una estructura organizativa que incluye procedimientos, responsabilidades, gestión de riesgos y planes formativos para las personas que interactúan con el sistema."
          }
      ],
      "quiz": [
          {
              "question": "¿A qué aspecto fundamental está dedicado el Artículo 14 del Reglamento de Inteligencia Artificial?",
              "options": [
                  "Ciberseguridad y encriptación de datos",
                  "Generación y conservación de registros",
                  "Supervisión y vigilancia humana",
                  "Creación de modelos de uso general"
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Cuál es uno de los principales motivos por los que la IA requiere vigilancia humana según la Guía 06?",
              "options": [
                  "Porque la IA no requiere bases de datos para funcionar",
                  "Porque la inteligencia artificial no es infalible y carece del sentido común humano",
                  "Para acelerar la velocidad de procesamiento de los algoritmos",
                  "Para reducir el coste energético de los servidores en la nube"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué nombre recibe el fenómeno por el cual una persona asume que la máquina siempre tiene la razón, perdiendo su capacidad crítica?",
              "options": [
                  "Sesgo de confirmación",
                  "Sesgo de datos",
                  "Sesgo algorítmico",
                  "Sesgo de automatización"
              ],
              "correctAnswer": 3
          },
          {
              "question": "¿Cuántas personas físicas deben verificar por separado un resultado de identificación biométrica remota antes de tomar una acción?",
              "options": [
                  "Al menos una persona",
                  "Al menos dos personas",
                  "Depende del comité de dirección",
                  "No requiere verificación humana, es automático"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué medida se utiliza para combatir el sesgo de automatización generando equivocaciones controladas durante las pruebas?",
              "options": [
                  "Modelo de gobernanza",
                  "Human in the loop",
                  "Error forzado",
                  "Auditoría técnica"
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Cómo se denomina el paradigma donde el sistema toma decisiones automáticamente, pero un humano vigila y puede interrumpir la operación?",
              "options": [
                  "Human on the Loop (HOTL)",
                  "Human in the Loop (HITL)",
                  "Human in Command (HIC)",
                  "Human Automation (HA)"
              ],
              "correctAnswer": 0
          },
          {
              "question": "¿Qué acción específica exige el Reglamento que el supervisor humano pueda llevar a cabo en caso de emergencia?",
              "options": [
                  "Desinstalar el software",
                  "Interrumpir el sistema pulsando un 'botón de parada' o procedimiento similar",
                  "Reescribir el código fuente del algoritmo",
                  "Borrar todos los datos de entrenamiento"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Cuál es el propósito del 'Modelo de gobernanza' relacionado con la vigilancia humana?",
              "options": [
                  "Definir el lenguaje de programación a utilizar",
                  "Establecer la estructura organizativa, procedimientos y formación para el uso del sistema",
                  "Comercializar el sistema de IA",
                  "Almacenar las bases de datos en servidores locales"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué debe hacer el humano encargado de la vigilancia ante cualquier situación concreta si detecta anomalías?",
              "options": [
                  "Ignorar la máquina y continuar",
                  "Decidir no utilizar el sistema, o descartar, invalidar o revertir los resultados",
                  "Notificar exclusivamente al fabricante sin detener la IA",
                  "Esperar a la siguiente actualización de software"
              ],
              "correctAnswer": 1
          },
          {
              "question": "Para asegurar que las personas sin perfil técnico puedan vigilar correctamente el sistema, ¿qué elemento debe habilitarse de forma adecuada?",
              "options": [
                  "Acceso directo a la base de datos SQL",
                  "Una Interfaz Humano-Máquina (HMI) adaptada a su nivel de interlocución",
                  "Permisos para editar los hiperparámetros del modelo",
                  "Acceso al código fuente abierto (Open Source)"
              ],
              "correctAnswer": 1
          }
      ],
      "pdfUrl": "https://aesia.digital.gob.es/storage/media/06-guia-vigilancia-humana.pdf",
      "glossary": [
          {
              "term": "Vigilancia humana",
              "definition": "Medidas y capacidades integradas en los sistemas de IA para que puedan ser supervisados por personas, previniendo riesgos para la salud, la seguridad y los derechos fundamentales."
          },
          {
              "term": "Sesgo de automatización",
              "definition": "Tendencia de los usuarios humanos a confiar ciegamente en las salidas de un sistema automatizado, perdiendo la capacidad de cuestionar o detectar errores en las decisiones de la IA."
          },
          {
              "term": "HRAIS",
              "definition": "Siglas en inglés de High-Risk Artificial Intelligence System (Sistema de Inteligencia Artificial de Alto Riesgo), sujetos a estrictos controles normativos."
          },
          {
              "term": "Human in the Loop (HITL)",
              "definition": "Nivel de autonomía donde el sistema de IA proporciona información o recomendaciones, pero el ser humano siempre debe intervenir para tomar y ejecutar la decisión final."
          },
          {
              "term": "Human on the Loop (HOTL)",
              "definition": "Nivel de autonomía donde la IA realiza tareas y toma decisiones por sí misma, mientras que un supervisor humano observa en tiempo real y puede intervenir o abortar el proceso."
          },
          {
              "term": "Human in Command (HIC)",
              "definition": "Nivel superior de autonomía y gobernanza, donde las personas determinan la finalidad, dirigen el impacto del sistema y tienen el poder de decidir cuándo y cómo se utiliza la IA."
          },
          {
              "term": "Error forzado",
              "definition": "Medida de concienciación consistente en provocar fallos deliberados y controlados en el sistema durante simulaciones para comprobar que el supervisor humano mantiene un criterio analítico."
          },
          {
              "term": "Interfaz Humano-Máquina (HMI)",
              "definition": "Punto de interacción entre el usuario y el sistema de IA, que debe estar diseñado con un lenguaje y visualización adecuados para permitir una supervisión transparente y eficaz."
          },
          {
              "term": "Identificación biométrica remota",
              "definition": "Sistemas de IA de alto riesgo que identifican a personas a distancia mediante biometría, los cuales requieren por ley verificación por separado de al menos dos personas físicas."
          },
          {
              "term": "Modelo de gobernanza",
              "definition": "Marco organizativo que incluye la estructura, procedimientos, roles, responsabilidades y capacitación necesarios para gestionar adecuadamente los riesgos y la supervisión de un sistema de IA."
          }
      ]
  },
  {
      "id": "07",
      "title": "Guía de datos y gobernanza de datos",
      "summary": "Esta guía establece las prácticas de gobernanza y gestión de datos requeridas por el artículo 10 del Reglamento para sistemas de IA de alto riesgo. Cubre todo el ciclo de vida de los datos: desde la identificación de requisitos y recopilación, hasta su preparación (etiquetado, limpieza, agregación) y análisis de sesgos. Se enfoca en asegurar que los conjuntos de datos de entrenamiento, validación y prueba sean pertinentes, representativos, completos y libres de errores, garantizando así la calidad del sistema y evitando discriminaciones prohibidas.",
      "contentIndex": [
          {
              "title": "1. Introducción y Concepto de Vigilancia Poscomercialización",
              "content": "El Reglamento Europeo de Inteligencia Artificial (AI Act) establece la necesidad de implementar un plan de vigilancia poscomercialización para los sistemas de inteligencia artificial (IA) considerados de alto riesgo. Aunque en el índice general de las guías AESIA la Guía 07 corresponde a 'Datos y gobernanza', la temática específica del 'plan de seguimiento y vigilancia poscomercialización' se desarrolla exhaustivamente en la Guía 13, que es la que se desglosa a continuación para responder de forma precisa a la solicitud [1, 2].\n\nUn sistema de vigilancia poscomercialización se define como un conjunto de procesos, actividades y herramientas diseñados y conducidos por el proveedor (y apoyados por el responsable del despliegue) para recabar y evaluar sistemáticamente la experiencia obtenida del uso de sistemas de IA de alto riesgo una vez que han sido introducidos en el mercado. El objetivo primordial es garantizar que estos sistemas sigan siendo seguros, funcionen correctamente a lo largo de todo su ciclo de vida y cumplan continuamente con los requisitos legales [3-5].\n\nEste mecanismo permite identificar tempranamente cualquier comportamiento anómalo o degradación del modelo, garantizando que el beneficio del sistema siga superando a sus posibles riesgos. Para lograrlo, el sistema se apoya en cuatro subsistemas fundamentales [6-8]:\n\n*   **Sistemas de captación de indicadores:** Procesos automatizados que recopilan datos sobre el rendimiento del modelo, la infraestructura subyacente, las interacciones de los usuarios y eventos de seguridad.\n*   **Sistemas de registro de indicadores:** Servicios dedicados al almacenamiento seguro de los logs y métricas generadas.\n*   **Sistemas de alertas automatizadas:** Mecanismos que monitorean los indicadores frente a umbrales preestablecidos para emitir avisos en tiempo real ante posibles riesgos o desviaciones.\n*   **Interfaces de análisis:** Herramientas (como paneles web o dashboards) que permiten a los supervisores humanos explorar, analizar y auditar los registros recabados para la toma de decisiones informadas."
          },
          {
              "title": "2. Requisitos del Reglamento de IA (Artículo 72)",
              "content": "El marco normativo de la vigilancia poscomercialización se fundamenta principalmente en el Artículo 72 del Reglamento Europeo de Inteligencia Artificial. Este artículo establece la obligación directa para los proveedores de establecer y documentar un sistema de vigilancia que sea estrictamente proporcional a la naturaleza de la tecnología de IA utilizada y a los riesgos inherentes del sistema de alto riesgo [9].\n\nSegún el apartado 2 del Artículo 72, este sistema debe recopilar, documentar y analizar de manera activa y sistemática todos los datos pertinentes. Estos datos pueden ser facilitados directamente por los responsables del despliegue o recopilados a través del propio funcionamiento del sistema. Esta recolección continua permite al proveedor evaluar si el sistema de IA mantiene su conformidad con los requisitos del Capítulo III, Sección 2 del Reglamento durante toda su vida útil. Una salvedad crítica que introduce la normativa es que esta obligación de recopilación no comprenderá los datos operativos sensibles cuando los responsables del despliegue sean autoridades garantes del cumplimiento del Derecho [10, 11].\n\nAdemás, el apartado 3 estipula que este sistema se basará en un 'plan de vigilancia poscomercialización' formal, el cual pasará a formar parte integral de la documentación técnica exigida en el Anexo IV del Reglamento [11]. Para aquellos proveedores que ya operan bajo legislaciones sectoriales específicas (como productos del Anexo I o entidades financieras sujetas a estrictas normativas de gobernanza interna de la UE), el Reglamento permite integrar el plan de vigilancia de la IA dentro de los sistemas de vigilancia y gestión que ya tengan implementados, siempre que se garantice un nivel de protección equivalente [12, 13]."
          },
          {
              "title": "3. Diseño e Implementación del Sistema y Plan de Vigilancia",
              "content": "Para implementar un sistema de vigilancia poscomercialización efectivo, el proveedor debe ejecutar una serie de pasos secuenciales y bien definidos. Todo comienza con la **Selección de indicadores**, los cuales deben basarse en el sistema de gestión de riesgos previamente desarrollado. Es fundamental establecer las escalas de normalidad para cada métrica seleccionada. Tras esto, se desarrollan los **Sistemas de captación y envío**, que extraen los datos de los logs temporales del sistema de IA, y se almacenan en un **Sistema de registro de indicadores** que garantice políticas de control de acceso y retención [14-17].\n\nSobre esta base técnica, se construye el Plan de Vigilancia Poscomercialización, el cual debe contemplar las siguientes áreas clave [18-25]:\n\n1.  **Vigilancia Continua:** Monitoreo en tiempo real del rendimiento en producción. Permite identificar de manera inmediata cuellos de botella, degradaciones de inferencia o fallos de seguridad.\n2.  **Vigilancia Periódica:** Evaluaciones regulares y retrospectivas (no en tiempo real). Incluye pruebas de precisión del modelo a largo plazo, análisis de falsos positivos/negativos (recall, precision) y detección de sesgos o derivas en los datos (data drift).\n3.  **Informes de Incidentes:** Procedimientos estandarizados para reportar comportamientos anómalos. Un informe debe contener la descripción del sistema, el comportamiento anómalo detectado, un extracto histórico de los registros y notas de los supervisores.\n4.  **Comunicación Transparente y Capacitación:** Se debe proveer información clara a los responsables del despliegue (paneles de control, informes). Asimismo, es vital capacitar a los usuarios, administradores y analistas sobre el uso de la herramienta y la gestión de riesgos.\n5.  **Flexibilidad:** El plan debe adaptarse ante cambios organizacionales, integraciones con nuevos sistemas o variaciones en la arquitectura, requiriendo revisiones periódicas de los procesos de vigilancia."
          },
          {
              "title": "4. Conexiones con Otras Áreas y Documentación Técnica",
              "content": "El sistema de vigilancia poscomercialización no opera en el vacío; su carácter transversal hace indispensable su integración con los requerimientos de otras áreas fundamentales del Reglamento de IA [26-34]:\n\n*   **Gestión de Riesgos:** El diseño de los indicadores de vigilancia nace directamente de la evaluación de riesgos inicial. A su vez, las métricas anómalas detectadas en poscomercialización retroalimentan el sistema de riesgos para actualizarlo.\n*   **Registros y Supervisión Humana:** La vigilancia dicta *qué* indicadores deben recabarse, mientras que la normativa de registros establece *cómo* guardarlos técnicamente. Todo esto sirve para que el supervisor humano tenga las herramientas e interfaces necesarias para interpretar el funcionamiento del modelo.\n*   **Precisión, Solidez y Ciberseguridad:** El sistema debe monitorizar la degradación de la precisión, los resultados de métodos de validación y la resistencia a ataques (indicadores de ciberseguridad) a lo largo del ciclo de vida.\n\nA nivel de **Documentación Técnica**, el Anexo IV y el Artículo 9 exigen que se documente minuciosamente tanto el sistema técnico de vigilancia como el plan estratégico [35-37]. La documentación técnica debe incluir:\n- El listado de indicadores seleccionados con sus escalas de normalidad y riesgos asociados (e.g., predicciones por minuto, uso de CPU, tasa de errores, accesos denegados) [36, 38-41].\n- Las tecnologías de captación, los formatos de registro y las alertas configuradas.\n- Las acciones de vigilancia continua y periódica, identificando a los responsables y la periodicidad.\n- Registros de actividades formativas y copias de los borradores o plantillas de los informes de incidentes [37, 42]."
          }
      ],
      "flashcards": [
          {
              "front": "¿Qué es un sistema de vigilancia poscomercialización de IA?",
              "back": "Es un conjunto de procesos y herramientas para recabar y evaluar datos de un sistema de IA de alto riesgo tras su lanzamiento, con el fin de asegurar su correcto funcionamiento continuo y detectar riesgos tempranamente."
          },
          {
              "front": "¿A quién va dirigida principalmente la obligación de establecer el sistema de vigilancia poscomercialización?",
              "back": "Principalmente al proveedor del sistema de IA, quien debe evaluarlo durante todo el ciclo de vida, aunque el responsable del despliegue debe notificar incidentes."
          },
          {
              "front": "¿Qué artículo del Reglamento de IA regula el plan y sistema de vigilancia poscomercialización?",
              "back": "El artículo 72 del Reglamento Europeo de Inteligencia Artificial."
          },
          {
              "front": "¿Cuáles son los cuatro subsistemas básicos de un sistema de vigilancia poscomercialización?",
              "back": "1. Sistemas de captación de indicadores. 2. Sistemas de registro de indicadores. 3. Sistema de alertas automatizadas. 4. Interfaces de análisis para supervisores."
          },
          {
              "front": "¿Qué es la vigilancia continua en el contexto de la IA?",
              "back": "Es el monitoreo en tiempo real del rendimiento y comportamiento del sistema de IA en un entorno de producción para detectar y corregir problemas de manera inmediata."
          },
          {
              "front": "¿En qué consiste la vigilancia periódica?",
              "back": "En realizar evaluaciones regulares a más largo plazo (no en tiempo real), como pruebas de precisión, análisis de errores acumulados y detección de desviaciones del modelo."
          },
          {
              "front": "¿Qué información clave debe incluir un informe de incidentes generado en la fase de vigilancia?",
              "back": "Características y objetivos del sistema, descripción del comportamiento anómalo detectado, un extracto del histórico de registros e indicadores, y notas contextuales de los supervisores."
          },
          {
              "front": "¿Cómo se relaciona la vigilancia poscomercialización con la gestión de riesgos?",
              "back": "Los indicadores a vigilar se diseñan basándose en la evaluación de riesgos previa. A su vez, los incidentes detectados en la vigilancia sirven para actualizar y retroalimentar el sistema de riesgos."
          },
          {
              "front": "¿Qué exención tienen las autoridades garantes del cumplimiento del Derecho respecto a la vigilancia poscomercialización?",
              "back": "La obligación de recopilación de datos para la vigilancia poscomercialización no comprenderá los datos operativos sensibles de estas autoridades."
          },
          {
              "front": "Menciona dos ejemplos de indicadores de vigilancia sobre el propio sistema inteligente.",
              "back": "Número de predicciones realizadas por unidad de tiempo, tasa de errores de predicción, o el tiempo de ejecución de las inferencias."
          },
          {
              "front": "Menciona dos ejemplos de indicadores de vigilancia enfocados en la infraestructura.",
              "back": "Porcentaje de uso de la CPU, consumo de memoria RAM, temperatura del sistema o tráfico de red."
          },
          {
              "front": "¿Dónde debe incluirse obligatoriamente el Plan de vigilancia poscomercialización?",
              "back": "Debe formar parte de la Documentación Técnica del sistema de IA, tal como se refiere en el Anexo IV del Reglamento."
          }
      ],
      "quiz": [
          {
              "question": "¿A qué actor le corresponde la obligación principal de establecer, documentar e implementar el sistema de vigilancia poscomercialización?",
              "options": [
                  "Al proveedor del sistema de IA",
                  "Al responsable del despliegue",
                  "A la autoridad nacional competente",
                  "A los usuarios finales del sistema"
              ],
              "correctAnswer": 0
          },
          {
              "question": "¿Qué artículo del Reglamento de Inteligencia Artificial exige la creación del plan de vigilancia poscomercialización?",
              "options": [
                  "Artículo 9",
                  "Artículo 15",
                  "Artículo 72",
                  "Artículo 11"
              ],
              "correctAnswer": 2
          },
          {
              "question": "En la evaluación de la vigilancia poscomercialización, ¿qué tipo de datos están exentos de ser recopilados si el responsable del despliegue es una autoridad judicial o policial?",
              "options": [
                  "Los datos sobre uso de memoria RAM",
                  "Los registros de temperatura del servidor",
                  "Los datos operativos sensibles",
                  "Las métricas de latencia de red"
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Qué evalúa principalmente el mecanismo de 'Vigilancia Periódica'?",
              "options": [
                  "Las alertas instantáneas por picos de CPU",
                  "El rendimiento a largo plazo, la precisión y posibles sesgos retrospectivos",
                  "La autenticación en tiempo real del administrador",
                  "La caída de tensión eléctrica en la sala de servidores"
              ],
              "correctAnswer": 1
          },
          {
              "question": "Dentro del informe de incidentes, ¿qué elemento es imprescindible para contextualizar la alerta?",
              "options": [
                  "El código fuente completo del algoritmo",
                  "Los nombres y apellidos de todos los usuarios de la herramienta",
                  "Extracto del histórico de registros (logs) e indicadores",
                  "Un contrato comercial firmado con el proveedor"
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Cómo se vincula el sistema de vigilancia con el Sistema de Gestión de Riesgos (Art. 9)?",
              "options": [
                  "Son incompatibles y deben gestionarse en sistemas separados",
                  "La vigilancia diseña el código y riesgos lo audita",
                  "Los indicadores de vigilancia se definen basándose en los riesgos evaluados previamente",
                  "El sistema de riesgos solo aplica antes de la comercialización y no interactúa con la vigilancia"
              ],
              "correctAnswer": 2
          },
          {
              "question": "Según los anexos de indicadores de vigilancia, el 'Uso de CPU' o 'Tráfico de red' corresponden a la categoría de indicadores de:",
              "options": [
                  "Seguridad informática",
                  "Infraestructura",
                  "Acciones de los usuarios",
                  "Precisión del sistema inteligente"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué debe hacer el sistema de alertas automatizadas dentro de la vigilancia poscomercialización?",
              "options": [
                  "Apagar el sistema de forma irreversible ante cualquier uso",
                  "Modificar automáticamente el código fuente en producción",
                  "Vigilar variaciones de indicadores frente a escalas preestablecidas para emitir avisos",
                  "Borrar los registros de datos tras 24 horas"
              ],
              "correctAnswer": 2
          },
          {
              "question": "Si el proveedor implementa una actualización crítica o hay cambios organizativos en su empresa, la característica del plan de vigilancia que le obliga a ajustar procesos y notificaciones se denomina:",
              "options": [
                  "Flexibilidad",
                  "Explicabilidad",
                  "Evaluación estática",
                  "Interrupción forzada"
              ],
              "correctAnswer": 0
          },
          {
              "question": "¿A qué documento más grande debe pertenecer obligatoriamente el Plan de Vigilancia Poscomercialización?",
              "options": [
                  "Al manual de marketing",
                  "A la Documentación Técnica (Anexo IV)",
                  "A los estatutos de la empresa proveedora",
                  "Al registro nacional de patentes"
              ],
              "correctAnswer": 1
          }
      ],
      "pdfUrl": "https://aesia.digital.gob.es/storage/media/07-guia-de-datos-y-gobernanza-de-datos.pdf",
      "glossary": [
          {
              "term": "Sistema de vigilancia poscomercialización",
              "definition": "Conjunto de procesos, herramientas y actividades orientados a recabar datos y evaluar el rendimiento y seguridad de un sistema de IA tras su lanzamiento al mercado, garantizando su cumplimiento legal continuo."
          },
          {
              "term": "Plan de vigilancia poscomercialización",
              "definition": "Documento estratégico que forma parte de la documentación técnica del sistema, en el cual se detallan las actividades, métricas y procedimientos a seguir para la recolección y análisis de la experiencia de uso del sistema de IA."
          },
          {
              "term": "Indicador de vigilancia",
              "definition": "Dato medible situado dentro de una escala o umbral predefinido, utilizado para evaluar un aspecto específico del rendimiento, infraestructura o seguridad del sistema de IA."
          },
          {
              "term": "Vigilancia continua",
              "definition": "Supervisión constante y en tiempo real del comportamiento operativo y de infraestructura del sistema de IA, diseñada para detectar y alertar sobre problemas críticos de forma inmediata."
          },
          {
              "term": "Vigilancia periódica",
              "definition": "Evaluaciones programadas y recurrentes que analizan métricas a largo plazo (como la precisión del modelo o la aparición de sesgos), no observables eficazmente en tiempo real."
          },
          {
              "term": "Informe de incidentes",
              "definition": "Documento estandarizado generado tras la detección de un comportamiento anómalo. Incluye contexto, extractos de logs de sistema, descripción del error y notas de los analistas."
          },
          {
              "term": "Sistema de alertas automatizadas",
              "definition": "Subsistema técnico que compara constantemente el flujo de datos y registros entrantes contra escalas de normalidad, emitiendo notificaciones cuando se superan ciertos umbrales de riesgo."
          },
          {
              "term": "Interfaz de análisis",
              "definition": "Panel de control, dashboard o herramienta visual que permite a los supervisores humanos explorar, auditar y comprender los registros e indicadores generados por el sistema de IA."
          },
          {
              "term": "Subsistema de captación",
              "definition": "Procesos informáticos integrados encargados de recolectar los registros (logs) brutos emitidos por el modelo de IA o la infraestructura para enviarlos al almacén de análisis."
          },
          {
              "term": "Escala de normalidad",
              "definition": "Rango de valores aceptables y esperados para un indicador específico (ej. uso de CPU entre 10% y 70%), cuya desviación indica una potencial anomalía de funcionamiento o riesgo."
          }
      ]
  },
  {
      "id": "08",
      "title": "Guía Transparencia",
      "summary": "Centrada en el artículo 13 del Reglamento, esta guía explica cómo diseñar sistemas de IA que sean interpretables y comprensibles. Detalla la necesidad de proporcionar instrucciones de uso claras, información sobre la identidad del proveedor, y descripciones de las capacidades y limitaciones del sistema. Promueve el uso de técnicas de explicabilidad (como la contrafactualidad) y la adaptación del lenguaje al perfil del usuario (desplegador) para asegurar que se entienda el funcionamiento del sistema y sus resultados.",
      "contentIndex": [
          {
              "title": "Introducción a la Transparencia en la Inteligencia Artificial",
              "content": "La presente \"Guía 08\" se centra en la Transparencia de los sistemas de Inteligencia Artificial (IA) de alto riesgo [1]. El objetivo fundamental de esta guía es proporcionar medidas de implementación y recomendaciones prácticas para entidades proveedoras y responsables del despliegue, facilitando así el cumplimiento de las obligaciones regulatorias del Reglamento Europeo de IA [1, 2]. La transparencia en la IA implica diseñar y desarrollar sistemas que informen sobre su funcionamiento de manera clara, de modo que los usuarios puedan comprender perfectamente la lógica subyacente y utilizar adecuadamente el sistema y sus resultados de salida [3]. En el contexto tecnológico actual, aplicar IA, especialmente mediante el uso de algoritmos complejos o modelos conocidos como \"caja negra\" (deep learning, redes neuronales, etc.), requiere garantizar que las decisiones automatizadas puedan ser interpretadas correctamente por un ser humano, evitando así riesgos inaceptables para la salud, la seguridad y los derechos fundamentales de las personas [4, 5]. Este enfoque regulatorio centrado en el ser humano pretende construir un entorno de confianza tecnológica, permitiendo a los operadores identificar claramente por qué el sistema toma una decisión concreta, qué datos utiliza de entrada para llegar a esa conclusión y cuáles son sus limitaciones inherentes [6, 7]. Además, la transparencia funcional y técnica es una pieza clave e indispensable para asegurar una correcta supervisión humana (tal y como exige el Artículo 14 del Reglamento), ya que un operador humano no puede vigilar, corregir ni interrumpir eficazmente un sistema cuyas decisiones no comprende [8]. Por lo tanto, la transparencia deja de ser una simple característica técnica opcional o un valor añadido del producto para convertirse en un requisito legal ineludible que debe integrarse transversalmente en todo el ciclo de vida de los sistemas de alto riesgo [5, 9]."
          },
          {
              "title": "Requisitos de Transparencia según el Reglamento de IA (Artículo 13)",
              "content": "El Artículo 13 del Reglamento Europeo de IA establece los pilares regulatorios obligatorios relativos a la transparencia y la comunicación de información a los responsables del despliegue [10]. Este artículo se divide estructuralmente en tres bloques principales que abordan diferentes niveles de exigencia [11]. En primer lugar, el apartado 1 exige que los sistemas de IA de alto riesgo se diseñen y desarrollen desde su concepción garantizando un nivel de transparencia suficiente para que los responsables del despliegue interpreten y usen correctamente los resultados de salida [3, 12]. En segundo lugar, el apartado 2 obliga a que los sistemas vayan acompañados de proporcionar instrucciones de uso exhaustivas, en formato digital o en otro soporte adecuado, que sean concisas, completas, correctas, claras, pertinentes, accesibles y comprensibles para cualquier usuario [9, 13]. En tercer lugar, el apartado 3 especifica con gran nivel de detalle el contenido mínimo obligatorio que deben incorporar estas instrucciones [14, 15]. Entre la información requerida y tasada se encuentran: la identidad completa y los datos de contacto del proveedor [14]; las características, las capacidades y las limitaciones operativas del sistema, lo que abarca su finalidad prevista, su nivel de precisión garantizado, su solidez, su ciberseguridad, y cualquier circunstancia previsible que pueda afectar negativamente a su funcionamiento o generar riesgos para la salud, la seguridad o los derechos fundamentales [14, 16, 17]. Asimismo, el articulado exige que se detalle el funcionamiento del sistema respecto a determinadas personas o colectivos vulnerables, las especificaciones técnicas de los datos de entrada utilizados para entrenar, validar y probar el algoritmo, y la información necesaria para interpretar los resultados de salida [18, 19]. Las instrucciones también deben documentar las medidas de supervisión humana aplicables y los recursos de hardware o software necesarios para el mantenimiento, las actualizaciones y la correcta interpretación de los archivos de registro de la actividad del sistema [20-22]."
          },
          {
              "title": "Medidas Prácticas para Alcanzar la Transparencia",
              "content": "Para lograr el cumplimiento efectivo del Artículo 13, la Guía 08 detalla un catálogo exhaustivo de medidas técnicas y organizativas aplicables durante el ciclo de vida del sistema [23]. Entre ellas destaca la necesidad de \"Atender al dominio de la funcionalidad\", asegurando que el sistema cubra todos los requisitos de su caso de uso específico y especifique explícitamente los posibles riesgos por usos indebidos o no previstos [24, 25]. Otra medida crucial es garantizar la \"Transparencia sobre los datos utilizados\", realizando un análisis exploratorio de datos (EDA) para que el responsable del despliegue entienda perfectamente la representatividad, distribución y los posibles sesgos de la muestra con la que operará el sistema [7, 26]. Asimismo, se requiere \"Detallar de lo más global a lo más particular\", explicando de manera escalonada desde el mecanismo de razonamiento general del algoritmo hasta la justificación de las predicciones y decisiones individuales [27]. Todo esto debe acompañarse de la obligación de \"Adaptar el lenguaje\", construyendo interfaces humano-máquina que traduzcan la salida técnica del sistema a un vocabulario comprensible tanto para perfiles técnicos de ingeniería como para gestores de negocio o personas ciudadanas afectadas por la decisión [28]. Si el sistema utiliza modelos excesivamente complejos o arquitecturas de caja negra, el proveedor debe \"Gestionar la complejidad\" utilizando herramientas avanzadas de interpretabilidad o sustituyéndolos por modelos equivalentes más sencillos [29]. También resulta clave \"Aplicar prudencia\" en el diseño, configurando mecanismos para no revelar información personal, privada o confidencial de terceros al justificar las decisiones automatizadas [30]. Además, el proveedor debe \"Utilizar contrafactualidad\", una técnica de transparencia que permite al usuario saber qué variables de entrada habrían tenido que cambiar exactamente para que el sistema tomara una decisión distinta a la actual [31, 32]. Finalmente, toda esta vasta cantidad de información debe agruparse y estructurarse al \"Habilitar un canal con la información de uso\", tal como un portal web, una wiki corporativa o documentación en línea, que sea permanentemente accesible e interactiva para todas las partes interesadas [33]."
          },
          {
              "title": "Documentación Técnica Vinculada a la Transparencia",
              "content": "El Artículo 11 del Reglamento de Inteligencia Artificial estipula imperativamente que todos los sistemas de IA de alto riesgo deben ir acompañados de una Documentación Técnica exhaustiva que demuestre formalmente su cumplimiento normativo ante las autoridades [34]. La transparencia, como requisito transversal, exige que todas las medidas y decisiones de diseño adoptadas queden fielmente reflejadas en esta documentación, siguiendo rigurosamente los puntos establecidos en el Anexo IV de la normativa [35]. En este contexto documental, el proveedor debe registrar y mantener actualizados los manuales de usuario y el canal oficial de contacto habilitado para la gestión fluida de incidencias y dudas operativas [36]. En relación al dominio funcional del modelo, se deben plasmar documentalmente las circunstancias previsibles de uso indebido del sistema y el procedimiento organizativo para supervisar que dichas desviaciones no ocurran en la práctica [37, 38]. Respecto a los datos, tanto el responsable del despliegue como el proveedor deben documentar detalladamente las fuentes de datos originales, su utilidad práctica y las herramientas estadísticas empleadas para su análisis exploratorio (EDA) [39]. Por otro lado, se debe justificar formalmente en la documentación la complejidad del modelo elegido, explicando si el uso de técnicas avanzadas de caja negra es técnica o funcionalmente indispensable, y describiendo las herramientas y algoritmos alternativos proporcionados para ganar interpretabilidad (como LIME o SHAP) [40, 41]. También se documentarán a nivel técnico las métricas de precisión y rendimiento utilizadas de manera continua durante todo el ciclo de vida de integración (MLOps), así como los umbrales mínimos aceptables que dictarán cuándo es estrictamente necesario un reentrenamiento del modelo por obsolescencia [42]. Asimismo, la documentación recogerá minuciosamente los mecanismos de \"prudencia\" (especificando qué información sensible o de negocio se oculta en las explicaciones), el análisis profundo de correlaciones estadísticas deseadas o no deseadas, y los requisitos lógicos de \"contrafactualidad\" necesarios para que el usuario logre interpretar con éxito las salidas y decisiones del sistema [43, 44]."
          }
      ],
      "flashcards": [
          {
              "front": "¿A qué artículo del Reglamento de IA hace referencia principal la Guía 08 sobre Transparencia?",
              "back": "Al Artículo 13 'Transparencia y comunicación de información a los responsables del despliegue'."
          },
          {
              "front": "¿Cuál es el objetivo primordial del diseño transparente en un sistema de IA de alto riesgo?",
              "back": "Garantizar que los responsables del despliegue puedan interpretar y usar correctamente los resultados de salida generados."
          },
          {
              "front": "¿Qué características deben cumplir las instrucciones de uso según el Artículo 13.2?",
              "back": "Deben contener información concisa, completa, correcta, clara, pertinente, accesible y comprensible para el responsable del despliegue."
          },
          {
              "front": "¿Qué es la 'contrafactualidad' aplicada a la transparencia de la IA?",
              "back": "Es la capacidad de explicar qué tendría que haber sido diferente en los datos de entrada para que el sistema tomara una decisión o resultado distinto."
          },
          {
              "front": "¿Por qué la guía recomienda 'adaptar el lenguaje' en la interfaz humano-máquina?",
              "back": "Para asegurar que las predicciones y decisiones se expliquen utilizando un vocabulario comprensible tanto para perfiles técnicos como para usuarios de negocio o personas afectadas."
          },
          {
              "front": "¿A quién aplica la obligación de dotar al sistema de mecanismos técnicos de información de lo global a lo particular?",
              "back": "Al proveedor del sistema de IA, quien debe diseñar las herramientas para que la entidad usuaria comprenda el razonamiento a distintos niveles de detalle."
          },
          {
              "front": "¿Qué información específica sobre el proveedor deben incluir las instrucciones de uso (Art. 13.3.a)?",
              "back": "La identidad y los datos de contacto del proveedor y, en su caso, de su representante autorizado."
          },
          {
              "front": "¿Qué significa 'aplicar prudencia' como medida técnica de transparencia?",
              "back": "Implementar mecanismos para que el sistema no revele información sensible, personal o confidencial al momento de explicar los argumentos de sus decisiones."
          },
          {
              "front": "¿Qué métricas se deben especificar obligatoriamente en la información sobre el sistema (Art. 13.3.b.ii)?",
              "back": "El nivel esperado de precisión (incluyendo sus parámetros de medición), solidez y ciberseguridad probados y validados."
          },
          {
              "front": "¿Qué debe documentarse sobre los datos de entrada según las normativas de transparencia?",
              "back": "Las especificaciones relativas a los datos de entrada y la información pertinente sobre los conjuntos de datos de entrenamiento, validación y prueba."
          },
          {
              "front": "¿Para qué sirve el Análisis Exploratorio de Datos (EDA) en el contexto de la transparencia?",
              "back": "Sirve para conocer la esencia, significado y metainformación de las fuentes de datos, detectar valores atípicos y asegurar que la muestra es justa y representativa."
          },
          {
              "front": "¿Qué relación tiene la transparencia (Art. 13) con la vigilancia humana (Art. 14)?",
              "back": "La transparencia es un pre-requisito; proporciona las medidas técnicas para facilitar la interpretación de resultados de salida, posibilitando así que los humanos supervisen el sistema adecuadamente."
          }
      ],
      "quiz": [
          {
              "question": "Según el Artículo 13 del Reglamento de IA, ¿quién es el principal responsable de redactar las instrucciones de uso del sistema?",
              "options": [
                  "El responsable del despliegue",
                  "El proveedor del sistema de IA",
                  "La autoridad de vigilancia del mercado (AVM)",
                  "El usuario final"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Cuál es el propósito central de la medida técnica 'Utilizar contrafactualidad'?",
              "options": [
                  "Proteger la información sensible del modelo evitando que sea revelada al público.",
                  "Explicar al usuario bajo qué valores diferentes se habría tomado una decisión distinta.",
                  "Automatizar completamente el proceso de reentrenamiento del modelo de IA.",
                  "Traducir automáticamente el código fuente a lenguaje natural comprensible."
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué información NO se menciona como obligatoria en las instrucciones de uso según el Artículo 13.3?",
              "options": [
                  "Datos de contacto y la identidad del proveedor.",
                  "Características, capacidades y limitaciones del sistema.",
                  "El código fuente íntegro del algoritmo utilizado.",
                  "Recursos de hardware y software necesarios para el mantenimiento."
              ],
              "correctAnswer": 2
          },
          {
              "question": "Para cumplir con la medida 'Adaptar el lenguaje', la Guía 08 requiere:",
              "options": [
                  "Usar únicamente lenguaje de programación para maximizar la exactitud técnica.",
                  "Traducir la interfaz del sistema a todos los idiomas oficiales de la Unión Europea.",
                  "Emplear exclusivamente un lenguaje estadístico para científicos de datos.",
                  "Adecuar el nivel de interlocución a diferentes perfiles (técnicos, gestores de negocio y personas afectadas)."
              ],
              "correctAnswer": 3
          },
          {
              "question": "¿Qué aconseja la guía sobre cómo 'Gestionar la complejidad' para favorecer la transparencia?",
              "options": [
                  "Añadir más capas ocultas de redes neuronales para aumentar la precisión.",
                  "Ocultar el funcionamiento del sistema para evitar confusiones al usuario inexperto.",
                  "Utilizar herramientas que expliquen modelos de caja negra o emplear modelos directamente interpretables.",
                  "Desactivar las funcionalidades más avanzadas del sistema en entornos de producción."
              ],
              "correctAnswer": 2
          },
          {
              "question": "La medida de transparencia 'Aplicar prudencia' busca principalmente:",
              "options": [
                  "Aumentar el número de parámetros medibles para optimizar el rendimiento y la precisión del modelo.",
                  "Evitar revelar información sensible, confidencial o que vulnere la privacidad al explicar las decisiones.",
                  "Reducir el consumo energético (Green AI) y el coste computacional del entrenamiento del sistema.",
                  "Restringir el uso del sistema a entornos de prueba cerrados (sandboxes)."
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿En qué etapa del ciclo de vida debe aplicarse principalmente el nivel de transparencia según el Art. 13.1?",
              "options": [
                  "Solamente en la fase de auditoría poscomercialización.",
                  "Exclusivamente durante la etapa de recopilación y limpieza de los datos iniciales.",
                  "Desde el diseño y desarrollo inicial del sistema para garantizar que su funcionamiento general sea interpretable.",
                  "Únicamente al redactar las instrucciones de uso justo antes de poner el sistema en el mercado."
              ],
              "correctAnswer": 2
          },
          {
              "question": "Para aplicar 'Transparencia sobre los datos utilizados', la Guía 08 recomienda específicamente realizar:",
              "options": [
                  "Un Análisis Exploratorio de Datos (EDA).",
                  "Una eliminación inmediata de los datos originales por motivos de GDPR.",
                  "Una ofuscación criptográfica total del conjunto de datos.",
                  "Un cambio aleatorio de hiperparámetros de entrenamiento."
              ],
              "correctAnswer": 0
          },
          {
              "question": "La transparencia de un sistema de IA de alto riesgo está directamente vinculada con la Supervisión Humana (Art. 14) porque:",
              "options": [
                  "Obliga a que todas las decisiones sean tomadas exclusivamente por humanos, sustituyendo a la IA.",
                  "Facilita las medidas técnicas que permiten a los responsables del despliegue interpretar las salidas del sistema.",
                  "Disminuye deliberadamente el nivel de precisión del modelo para dar más control al usuario.",
                  "Requiere la generación de un registro de auditoría encriptado inalterable."
              ],
              "correctAnswer": 1
          },
          {
              "question": "En la documentación técnica requerida para la transparencia, ¿qué se exige sobre las correlaciones detectadas en los datos?",
              "options": [
                  "No es necesario documentarlas, ya que son procesos internos de la red neuronal.",
                  "Documentar las correlaciones válidas y también las explícitamente no deseadas que dificulten la transparencia o precisión.",
                  "Se deben listar únicamente las correlaciones que tengan un efecto positivo sobre la equidad.",
                  "Debe justificarse económicamente el coste de calcular dichas correlaciones."
              ],
              "correctAnswer": 1
          }
      ],
      "pdfUrl": "https://aesia.digital.gob.es/storage/media/08-guia-transparencia.pdf",
      "glossary": [
          {
              "term": "Transparencia",
              "definition": "Capacidad de un sistema de IA para proporcionar información estructurada sobre su funcionamiento, características y limitaciones, de manera que los usuarios lo comprendan y utilicen adecuadamente."
          },
          {
              "term": "Contrafactualidad",
              "definition": "Capacidad del sistema de IA para explicar bajo qué valores, variables o circunstancias diferentes en los datos de entrada se habría tomado una decisión o generado una predicción distinta."
          },
          {
              "term": "Caja negra",
              "definition": "Modelo de inteligencia artificial (como ciertas redes neuronales profundas) cuyo funcionamiento o razonamiento interno es difícil o imposible de interpretar de forma directa por los humanos."
          },
          {
              "term": "Árbol de decisión",
              "definition": "Modelo de aprendizaje automático interpretable y estructurado donde la lógica de inferencia se codifica de manera transparente como caminos desde un nodo raíz hasta un nodo hoja que determina la decisión final."
          },
          {
              "term": "MLOps",
              "definition": "Conjunto de prácticas, procesos y herramientas que soportan la integración continua, validación y despliegue de modelos de IA en entornos de producción mediante flujos de trabajo automatizados."
          },
          {
              "term": "Análisis Exploratorio de Datos (EDA)",
              "definition": "Fase analítica y estadística inicial sobre las fuentes de datos para conocer su esencia, metainformación, representatividad y detectar valores atípicos que puedan sesgar el sistema de IA."
          },
          {
              "term": "Equidad (Fairness)",
              "definition": "Principio que persigue un trato igualitario, imparcial y no discriminatorio, garantizando que el sistema de IA no incurra en prejuicios indebidos hacia individuos o colectivos concretos."
          },
          {
              "term": "Instrucciones de uso",
              "definition": "Documentación en formato digital o físico que acompaña preceptivamente al sistema de IA de alto riesgo, brindando información concisa, pertinente y comprensible para operar el sistema correctamente."
          },
          {
              "term": "Responsable del despliegue",
              "definition": "Toda persona física o jurídica, autoridad pública u organismo que utilice un sistema de IA bajo su autoridad en un contexto profesional, distinguiéndose de los desarrolladores y de los usuarios finales afectados."
          },
          {
              "term": "Ciclo de vida",
              "definition": "Conjunto de fases sucesivas por las que atraviesa un sistema de IA desde su concepción, diseño, entrenamiento y despliegue, hasta su mantenimiento, monitorización y eventual desmantelamiento."
          }
      ]
  },
  {
      "id": "09",
      "title": "Guía de Precisión",
      "summary": "Esta guía aborda el artículo 15 en lo relativo a la precisión de los sistemas de IA. Define cómo seleccionar y documentar métricas de evaluación adecuadas (como exactitud, F1-score, matriz de confusión) según la finalidad prevista. Trata la importancia de evitar el sobreaprendizaje (overfitting), el uso de conjuntos de validación y prueba disjuntos, y la necesidad de mantener la precisión a lo largo del ciclo de vida del sistema mediante monitorización continua y benchmarks.",
      "contentIndex": [
          {
              "title": "Introducción a la Precisión en Sistemas de Inteligencia Artificial",
              "content": "La precisión es uno de los pilares fundamentales establecidos por el Reglamento Europeo de Inteligencia Artificial (AI Act) para los sistemas de IA de alto riesgo. En el contexto de este marco normativo, la precisión no es simplemente una métrica matemática aislada, sino un requisito esencial para la mitigación de los riesgos asociados a la salud, la seguridad y los derechos fundamentales de las personas que interactúan o se ven afectadas por el sistema [1, 2]. A través de la evaluación de la precisión, se obtiene una medida cuantitativa directa de la relación entre la finalidad prevista del sistema y su desempeño real, abarcando desde su fase inicial de diseño hasta su funcionamiento continuo tras la puesta en marcha [1].\n\nEl Reglamento exige que los sistemas de IA de alto riesgo alcancen un nivel adecuado de precisión y que dicho nivel se mantenga de manera consistente y uniforme a lo largo de todo su ciclo de vida [3, 4]. Esto implica que los sistemas no deben sufrir degradaciones imprevistas de rendimiento debido a cambios en los datos de entrada o incompatibilidades tecnológicas. Es importante hacer una aclaración terminológica: el Reglamento en inglés utiliza términos como 'accuracy' y 'performance'. En la Guía 09 de AESIA, 'accuracy' se ha traducido generalmente como exactitud, 'precision' como precisión y 'performance' como rendimiento o, de manera genérica en el contexto algorítmico, también como precisión [5, 6].\n\nLa precisión no opera en el vacío; tiene una relación transversal con otras exigencias del Reglamento, tales como la ciberseguridad, la solidez, la transparencia y la gobernanza de los datos [5]. Por ejemplo, si un sistema es víctima de un ciberataque de envenenamiento de datos, su precisión se verá directamente comprometida. Del mismo modo, el nivel de precisión alcanzado debe documentarse minuciosamente y comunicarse al responsable del despliegue a través de unas instrucciones claras, permitiéndole entender los umbrales de fallo y establecer una supervisión humana adecuada [7, 8]."
          },
          {
              "title": "La Precisión a lo Largo del Ciclo de Vida del Sistema",
              "content": "Establecer y medir la precisión de un sistema de IA es un proceso iterativo que abarca todo su ciclo de vida, existiendo puntos críticos donde las decisiones tomadas afectan directamente el rendimiento final [9]. Uno de estos puntos críticos iniciales es el **preprocesamiento de los datos**. Las decisiones de diseño adoptadas en la preparación de los datos (como el filtrado, escalado de magnitudes, transformaciones algebraicas o el manejo de valores faltantes y nulos) alteran la distribución del conjunto de entrenamiento. En consecuencia, estas operaciones impactan directamente en la función objetivo que debe aprender el algoritmo. Todo este proceso de preprocesamiento debe estar justificado funcionalmente y documentado en relación con las métricas de precisión esperadas [9].\n\nOtro desafío crítico durante el ciclo de vida es la mitigación del **sobreaprendizaje (overfitting)**. El sobreaprendizaje ocurre cuando el modelo se ajusta demasiado a las particularidades del conjunto de datos de entrenamiento, memorizando el ruido en lugar de aprender el patrón subyacente. Esto provoca una pérdida severa de capacidad de generalización, reduciendo drásticamente la precisión cuando el sistema se enfrenta a datos nuevos. Para evitarlo, los desarrolladores deben aplicar técnicas como la regularización y separar rigurosamente los datos en conjuntos disjuntos de entrenamiento, validación y prueba, garantizando que el modelo sea evaluado en escenarios no vistos previamente [10, 11].\n\nAdemás, durante el desarrollo es esencial utilizar **modelos apropiados y de referencia (baseline models)**. La precisión de un sistema solo tiene verdadero significado cuando se contextualiza frente al estado del arte o frente a modelos base simples (que suelen carecer de alta complejidad pero proporcionan un marco comparativo inicial). Esto permite demostrar de manera objetiva que el modelo complejo implementado aporta un valor real a la finalidad prevista [12, 13]. Por último, el ciclo de vida debe considerar la incertidumbre asociada a las predicciones, acompañando idealmente las salidas del modelo con métricas de confianza que ayuden a la supervisión humana [14]."
          },
          {
              "title": "Evaluación y Selección de Métricas y Funciones Objetivo",
              "content": "La correcta evaluación de un sistema de IA requiere la definición y selección meticulosa de las métricas de precisión, así como de la función objetivo. El proveedor debe decidir qué métricas, que funcionarán como Indicadores Clave de Rendimiento (KPIs) de calidad, son las más adecuadas para medir el éxito del sistema en relación con su finalidad prevista [15]. Por ejemplo, en modelos de regresión, se suelen emplear métricas de error como el MSE (Mean Squared Error), RMSE, MAE o R² [16]. Por el contrario, en modelos de clasificación, es fundamental apoyarse en la matriz de confusión, que permite desglosar el rendimiento en verdaderos/falsos positivos y negativos, de la cual se derivan métricas críticas como la Tasa de Aciertos (Accuracy), Precisión, Exhaustividad (Recall), Especificidad y el valor F1 [16, 17].\n\nJunto a la métrica de precisión, el proveedor debe seleccionar una **función objetivo** (loss function). La función objetivo es la fórmula matemática que el modelo buscará optimizar (minimizar o maximizar) durante la fase de entrenamiento [18, 19]. Es vital que la función objetivo escogida esté perfectamente alineada tanto con la métrica de precisión seleccionada como con la finalidad última del sistema para evitar que el modelo aprenda a resolver un problema incorrecto [18, 20].\n\nLa evaluación de la precisión también requiere considerar dimensiones complementarias como la imparcialidad (fairness) y los posibles sesgos. Una alta precisión global puede enmascarar un bajo rendimiento para subgrupos específicos o minorías, lo cual resulta inaceptable si afecta a los derechos fundamentales. Por tanto, las métricas deben desglosarse y someterse a herramientas de juicio equitativo para garantizar que el modelo no incurre en discriminación algorítmica. Asimismo, estas métricas deben monitorizarse continuamente a lo largo del tiempo para detectar cualquier degradación en el comportamiento [20-22]."
          },
          {
              "title": "Garantizando la Precisión: Medidas Técnicas y Benchmarks",
              "content": "Para garantizar que las métricas de precisión seleccionadas se mantienen de manera consistente, el proveedor del sistema de IA debe implementar una serie de medidas técnicas específicas. Entre ellas, la documentación debe incluir de manera clara los rangos operativos de los parámetros configurables, así como los umbrales de latencia y eficiencia [23]. El sistema debe incorporar mecanismos automáticos que registren las precisiones calculadas en un histórico continuo (logs), lo que permite establecer una trazabilidad del comportamiento del modelo en la fase de producción [14]. Además, se debe facilitar al responsable del despliegue una interfaz o panel de monitorización gráfica que refleje la evolución temporal de la precisión y active alarmas si el rendimiento cae por debajo de niveles seguros [14, 24].\n\nDesde el punto de vista estadístico, no basta con observar una métrica aislada; el proveedor debe justificar la validez de las mejoras del modelo a través de **evaluaciones de significancia estadística** [25]. Estas pruebas (tales como Wilcoxon para datos dependientes, Paired Student T-Test o análisis de varianzas ANOVA) demuestran de forma rigurosa matemática que la precisión observada y la superioridad frente a los modelos base no se deben simplemente al azar o a la varianza en el muestreo de datos [26, 27].\n\nAsimismo, para validar plenamente la precisión del sistema, es necesario recurrir a pruebas de rendimiento estandarizadas, conocidas como **benchmarks** [28]. Estos benchmarks comparan el modelo frente a bases de datos reconocidas por la comunidad científica (como ImageNet o CIFAR-10 para visión por computador, o conjuntos estándar para modelos de lenguaje natural). Establecer comparativas con el estado del arte (State of the Art - SOTA) dota al sistema de un contexto de rendimiento repetible y medible, proporcionando a los organismos de certificación y a los usuarios una garantía robusta de la calidad y exactitud esperada del sistema de IA [29, 30]."
          },
          {
              "title": "Documentación Técnica y Tarjetas de Modelo",
              "content": "El Anexo IV del Reglamento Europeo de IA establece requerimientos rigurosos sobre cómo debe documentarse la precisión de los sistemas de alto riesgo. La documentación técnica debe proporcionar evidencias exhaustivas sobre cómo se ha supervisado y probado el sistema [31]. El punto 2(g) del Anexo IV es el núcleo de esta obligación: exige detallar los procedimientos de validación y prueba, caracterizar los conjuntos de datos empleados, listar los parámetros matemáticos utilizados para medir la precisión y evaluar los efectos discriminatorios potenciales, adjuntando siempre los informes y registros firmados por los responsables [32, 33]. Además, el punto 3 exige declarar el nivel general de precisión esperado en relación con su finalidad, y muy importante, el nivel desglosado para personas o colectivos específicos [34].\n\nUna herramienta fundamental para transparentar esta información es la **Tarjeta del Modelo (Model Card)**. Esta tarjeta actúa como una ficha técnica resumida pero profunda que debe acompañar al sistema. Entre sus apartados, la tarjeta del modelo debe especificar: la fecha de publicación, el tamaño del modelo, si parte de un modelo fundacional (pre-entrenado), su finalidad prevista, y el impacto sobre colectivos vulnerables [35, 36]. En el apartado de precisión, debe contestar a preguntas críticas: qué métricas se usan y por qué, qué umbrales de decisión se han configurado, cómo se ha calculado la incertidumbre (intervalos de confianza, varianza) y las limitaciones de adaptabilidad del modelo a nuevos datos [37-39].\n\nDe forma análoga, el proveedor debe suministrar la **Tarjeta de Base de Datos (Datasheets for Datasets)**, que documenta el origen, la motivación, el proceso de limpieza y los posibles sesgos intrínsecos de los datos de entrenamiento y evaluación. Esta documentación estructurada favorece las auditorías técnicas, promueve el uso responsable de la IA, y proporciona al responsable del despliegue la información indispensable para ejercer una supervisión humana efectiva y segura en el entorno de producción [40, 41]."
          }
      ],
      "flashcards": [
          {
              "front": "¿Qué es la precisión en el contexto del Reglamento de IA y cómo se define en la Guía 09?",
              "back": "Es una medida cuantitativa que refleja la relación entre la finalidad prevista del sistema de IA y su desempeño, desde su fase de diseño hasta su funcionamiento en producción."
          },
          {
              "front": "¿Qué es el 'sobreaprendizaje' (overfitting) y por qué representa un riesgo crítico?",
              "back": "Ocurre cuando el modelo se ajusta excesivamente a los datos de entrenamiento, memorizando el ruido y perdiendo su capacidad de generalizar para realizar predicciones precisas sobre datos nuevos."
          },
          {
              "front": "¿Para qué sirve establecer un 'modelo base' (baseline model) durante el desarrollo?",
              "back": "Sirve como una referencia simple inicial, a menudo sin complejidad profunda, para establecer comparaciones sistemáticas y demostrar que el modelo avanzado aporta mejoras reales a la precisión."
          },
          {
              "front": "¿Qué es la función objetivo (loss function) en un modelo de IA?",
              "back": "Es la función matemática que el algoritmo busca optimizar (minimizar o maximizar) durante la fase de entrenamiento para ajustar sus parámetros internos y lograr la precisión deseada."
          },
          {
              "front": "Menciona tres métricas de precisión sugeridas comúnmente para modelos de regresión.",
              "back": "Error Cuadrático Medio (MSE), Raíz del Error Cuadrático Medio (RMSE), Error Absoluto Medio (MAE), y R² (Coeficiente de determinación)."
          },
          {
              "front": "¿En qué tipo de modelos se utiliza la 'matriz de confusión' y qué información proporciona?",
              "back": "Se utiliza en modelos de clasificación. Muestra un resumen de las predicciones del modelo frente a los valores reales (verdaderos/falsos positivos y negativos)."
          },
          {
              "front": "¿Por qué es fundamental realizar pruebas de 'significancia estadística' en la precisión?",
              "back": "Para demostrar matemáticamente que las mejoras de precisión observadas frente a un modelo base no son producto del azar o de variaciones aleatorias en los datos."
          },
          {
              "front": "¿Qué es un 'benchmark' en la evaluación de la precisión de un sistema de IA?",
              "back": "Es una prueba de rendimiento estandarizada utilizando bases de datos públicas (ej. ImageNet) para comparar el modelo con el estado del arte de forma repetible y medible."
          },
          {
              "front": "¿Qué debe incluir una 'Tarjeta del Modelo' (Model Card) respecto a la precisión?",
              "back": "Debe detallar las métricas de precisión elegidas, umbrales de decisión, estimaciones de incertidumbre, métodos de cálculo y consideraciones sobre limitaciones y sesgos."
          },
          {
              "front": "¿Qué requiere el Punto 3 del Anexo IV sobre los niveles de precisión frente a distintos usuarios?",
              "back": "Exige documentar no solo la precisión global esperada, sino también desglosar los niveles de precisión específicos para distintos grupos demográficos o colectivos vulnerables."
          },
          {
              "front": "¿Cómo impacta el preprocesamiento de datos en la precisión final del modelo?",
              "back": "Operaciones como escalado o manejo de nulos alteran la distribución de los datos, lo que modifica directamente la función que el algoritmo aprenderá y, por tanto, afecta el resultado de la precisión."
          },
          {
              "front": "¿Qué debe hacer el sistema si durante su uso en producción caen drásticamente sus métricas de precisión?",
              "back": "Debe contar con alarmas e interfaces que notifiquen al humano supervisor para detectar la anomalía, permitiendo intervenir e incluso interrumpir o detener el sistema de forma segura."
          }
      ],
      "quiz": [
          {
              "question": "¿Cuál de las siguientes métricas NO es apropiada para evaluar un problema de regresión según la Guía 09?",
              "options": [
                  "Mean Squared Error (MSE)",
                  "Mean Absolute Error (MAE)",
                  "Área bajo la curva ROC (AUROC)",
                  "Root Mean Squared Error (RMSE)"
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Qué documento estandarizado exige el diseño para reportar de forma transparente las características, la precisión y las limitaciones de un modelo de IA?",
              "options": [
                  "Tarjeta del Modelo (Model Card)",
                  "Certificado de Conformidad Cifrado",
                  "Manual de Envenenamiento de Datos",
                  "Contrato de Confidencialidad de Entrenamiento"
              ],
              "correctAnswer": 0
          },
          {
              "question": "¿Qué fenómeno negativo se produce cuando un modelo memoriza excesivamente los datos de entrenamiento y pierde la capacidad de generalizar sobre datos no vistos?",
              "options": [
                  "Desplazamiento del dominio (Domain Shift)",
                  "Sobreaprendizaje (Overfitting)",
                  "Sesgo cognitivo algorítmico",
                  "Subajuste (Underfitting)"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué técnica técnica/organizativa recomienda la Guía 09 para garantizar que no existan muestras solapadas entre los conjuntos de entrenamiento, validación y prueba?",
              "options": [
                  "Duplicar deliberadamente muestras para aumentar el volumen",
                  "Procesar los tres conjuntos en la misma carpeta física",
                  "El uso de identificadores únicos (hashes) y partición aleatoria estricta",
                  "Evaluarlos manualmente mediante supervisión visual"
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Qué prueba de significancia estadística no paramétrica se menciona para comparar evaluaciones de modelos cuando los datos son dependientes?",
              "options": [
                  "Test de Chi-Cuadrado",
                  "Análisis de Varianzas (ANOVA)",
                  "Prueba de los rangos con signo de Wilcoxon",
                  "Distribución Normal T-Student Independiente"
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Cómo define la Guía el concepto que mide cuantitativamente la relación entre la finalidad prevista del sistema de IA y su desempeño real?",
              "options": [
                  "Gobernanza de Datos",
                  "Precisión",
                  "Ciberseguridad",
                  "Solidez (Robustness)"
              ],
              "correctAnswer": 1
          },
          {
              "question": "En la evaluación de modelos de clasificación binaria, ¿qué herramienta visual tabular desglosa los verdaderos/falsos positivos y negativos?",
              "options": [
                  "Histograma de distribución de sesgos",
                  "Árbol de Decisión Gráfico",
                  "Matriz de Confusión",
                  "Diagrama de Pareto"
              ],
              "correctAnswer": 2
          },
          {
              "question": "De acuerdo con los requisitos del Anexo IV, ¿qué información fundamental debe declararse sobre la precisión operativa del modelo?",
              "options": [
                  "Solo la precisión lograda durante la fase inicial de prototipo",
                  "El nivel general de precisión, desglosado además para colectivos o grupos de personas específicos",
                  "El código fuente completo del cálculo matemático",
                  "La lista de identificadores personales usados en el cálculo"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué métrica es específicamente adecuada para evaluar la precisión en sistemas de ordenación (ranking), penalizando posiciones bajas?",
              "options": [
                  "Frechet Inception Distance (FID)",
                  "Mean Absolute Percentage Error (MAPE)",
                  "Discounted Cumulative Gain (DCG)",
                  "Inception Score (IS)"
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Por qué es importante documentar y vigilar los sesgos o imparcialidad al hablar de precisión global?",
              "options": [
                  "Para aumentar la velocidad de inferencia de la máquina",
                  "Para reducir el costo de procesamiento en la nube",
                  "Porque una métrica global alta puede ocultar impactos discriminatorios o baja precisión sobre minorías",
                  "Porque el Reglamento prohíbe el uso de métricas exactas en la Unión Europea"
              ],
              "correctAnswer": 2
          }
      ],
      "pdfUrl": "https://aesia.digital.gob.es/storage/media/09-guia-de-precision.pdf",
      "glossary": [
          {
              "term": "Precisión",
              "definition": "Medida cuantitativa que refleja el grado en que el desempeño y las salidas de un sistema de IA se ajustan a su finalidad prevista a lo largo de su ciclo de vida."
          },
          {
              "term": "Sobreaprendizaje (Overfitting)",
              "definition": "Fenómeno del aprendizaje automático que ocurre cuando un modelo se ajusta en exceso al conjunto de datos de entrenamiento, perdiendo su capacidad para generalizar correctamente sobre datos nuevos o no vistos."
          },
          {
              "term": "Baseline model (Modelo base)",
              "definition": "Modelo computacional sencillo y de baja complejidad que sirve como referencia inicial estandarizada para comparar y evaluar la mejora de precisión aportada por el sistema de IA más complejo."
          },
          {
              "term": "Matriz de Confusión",
              "definition": "Tabla utilizada en tareas de clasificación que visualiza el desempeño del modelo comparando las predicciones realizadas contra los valores reales, desglosando verdaderos y falsos positivos/negativos."
          },
          {
              "term": "Tarjeta del Modelo (Model Card)",
              "definition": "Documentación técnica resumida y estandarizada de un sistema de IA que detalla sus características operativas, las métricas de precisión elegidas, umbrales, incertidumbres y recomendaciones éticas de uso."
          },
          {
              "term": "Función objetivo",
              "definition": "Ecuación matemática que el algoritmo de entrenamiento de IA busca minimizar (o maximizar) durante la fase de aprendizaje para ajustar de forma óptima los parámetros y lograr la precisión deseada."
          },
          {
              "term": "Benchmark",
              "definition": "Prueba de evaluación de rendimiento estandarizada en la que se utiliza un conjunto de datos público reconocido para medir y comparar la precisión de un modelo frente al estado del arte."
          },
          {
              "term": "Significancia Estadística",
              "definition": "Evaluación analítica (mediante pruebas como Wilcoxon, ANOVA o T-Test) orientada a justificar que las diferencias de precisión obtenidas entre modelos no se deben al azar, sino a mejoras sistémicas reales."
          },
          {
              "term": "Curva ROC",
              "definition": "Representación gráfica utilizada en evaluación de precisión para modelos de clasificación binaria, que ilustra el rendimiento del modelo en todos los umbrales posibles (tasa de verdaderos positivos vs. falsos positivos)."
          },
          {
              "term": "Discounted Cumulative Gain (DCG)",
              "definition": "Métrica de precisión utilizada comúnmente en tareas de recomendación y ranking; valora la relevancia de las salidas y penaliza logarítmicamente aquellos aciertos que aparecen en rangos inferiores de la lista."
          }
      ]
  },
  {
      "id": "10",
      "title": "Guía Solidez",
      "summary": "Desarrolla los requisitos de solidez (robustez) técnica del artículo 15. Explica cómo asegurar que el sistema sea resistente a errores, fallos o inconsistencias en el entorno de operación. Incluye estrategias como la redundancia técnica, planes de respaldo (fail-safe), pruebas de estrés y validación en entornos que repliquen las condiciones reales. El objetivo es minimizar riesgos y garantizar que el funcionamiento no se degrade de forma peligrosa ante situaciones imprevistas.",
      "contentIndex": [
          {
              "title": "Introducción a la Solidez en Sistemas de IA de Alto Riesgo",
              "content": "La solidez en los sistemas de inteligencia artificial (IA) de alto riesgo es un requisito fundamental establecido en el Artículo 15 del Reglamento Europeo de IA. Este artículo exige que los sistemas se diseñen y desarrollen de modo que alcancen un nivel adecuado de solidez y funcionen de manera uniforme durante todo su ciclo de vida [1, 2]. La solidez implica que el sistema debe estar preparado para minimizar y prevenir comportamientos perjudiciales, detectando cuándo su funcionamiento sale del dominio establecido por su finalidad prevista para evitar decisiones perjudiciales [3, 4].\n\nPara comprender plenamente la solidez, la Guía 10 detalla cinco propiedades deseables que todo sistema debe contemplar en su diseño: 1) Fiabilidad, que se refiere a la consistencia entre los valores estimados inicialmente y los valores estimados subsecuentes; 2) Estabilidad, que representa la insensibilidad del sistema a cambios irrelevantes en las características de entrada; 3) Sensibilidad, que implica que el sistema reaccione adecuadamente a los cambios relevantes en los datos de entrada; 4) Relevancia, asegurando que las respuestas del sistema pertenezcan de manera efectiva al dominio del problema; y 5) Alcanzabilidad, que define y delimita las fronteras en las que el sistema puede operar de manera segura [5, 6].\n\nAdemás, la solidez puede evaluarse desde dos perspectivas esenciales: la solidez local y la solidez global. La solidez local se enfoca en verificar el comportamiento del modelo frente a pequeñas perturbaciones intencionadas (por ejemplo, cambios menores en el ruido de una imagen o ligeras alteraciones de palabras en un texto) cerca de una entrada específica, siendo un ejercicio mucho más sencillo y práctico durante la fase de prueba [7, 8]. Por otro lado, la solidez global ofrece garantías sobre el comportamiento del modelo de IA en absolutamente todos los rangos de entrada del dominio esperado. Ambas perspectivas son vitales para mitigar de forma eficaz los riesgos sobre la salud, la seguridad, los derechos fundamentales y las libertades de las personas físicas [7, 9]."
          },
          {
              "title": "Evaluación de la Solidez y Ciclo de Vida del Sistema",
              "content": "La evaluación de la solidez no es un evento aislado, sino un proceso continuo e iterativo que abarca todo el ciclo de vida del sistema de IA. Este ciclo incluye las fases de concepción, diseño, implementación, verificación, prueba, puesta en marcha, vigilancia poscomercialización y retirada [10, 11]. En el diseño y desarrollo, se deben establecer de antemano los requisitos técnicos que el modelo de IA debe cumplir frente a variables predefinidas, utilizando, por ejemplo, técnicas de aprendizaje por conjuntos (ensemble learning) para aumentar drásticamente la resistencia frente a variaciones y ataques de evasión [12, 13].\n\nUna distinción crítica que se aborda profundamente en la Guía 10 es la diferencia entre verificación y validación (V&V). La verificación consiste en comprobar de forma analítica o formal que el sistema de IA cumple estrictamente con las especificaciones de diseño sin la necesidad ineludible de ejecutarlo con datos reales, con el fin de encontrar errores tempranos de programación o modelado. La validación, en cambio, requiere obligatoriamente ejecutar el sistema con conjuntos de datos reales (datos de prueba y validación que no se usaron en el entrenamiento) para aportar evidencia objetiva de que el sistema cumple con su finalidad prevista [14, 15].\n\nPara medir la solidez de manera efectiva, es imperativo seleccionar métricas adecuadas al modelo (como el Área Bajo la Curva - AUC, matrices de confusión, o métricas de similitud) e interpretar sus resultados en función de umbrales de riesgo aceptables definidos previamente. Además, el rendimiento y la eficiencia computacional (medidos en FLOPS, latencia de inferencia, y uso de memoria RAM) son dimensiones absolutamente inseparables de la solidez. Un sistema que excede los recursos de hardware disponibles o presenta latencias excesivas ante una alta demanda puede causar fallos críticos de seguridad. Por ello, cuando existan limitaciones de hardware, se deben implementar técnicas de optimización como la destilación de modelos, el aprendizaje continuo o la poda de redes (pruning) para mantener tiempos de respuesta estrictos en entornos de producción [16, 17]."
          },
          {
              "title": "Resistencia a Errores, Redundancia y Protocolos de Fallo Seguro",
              "content": "El Artículo 15.4 del Reglamento Europeo de IA subraya de forma categórica que la solidez técnica debe garantizar la resistencia del sistema frente a errores, fallos o incoherencias que puedan surgir en su entorno operativo, ya sea por problemas internos o a causa de su interacción directa con personas físicas u otros sistemas informáticos [18, 19]. Para cumplir con esta normativa, la Guía 10 exige diseñar los sistemas de IA bajo el paradigma de \"fallo seguro\" (fail-safe). Esto significa que, si el sistema de IA detecta una alta incertidumbre o percibe que está operando fuera de los parámetros de solidez y precisión garantizados en su diseño, debe contar con mecanismos preprogramados para interrumpir su funcionamiento de forma segura [18, 19]. Esta acción evita la emisión de predicciones o decisiones erróneas que podrían perjudicar drásticamente a los usuarios.\n\nPara dotar al sistema de una alta resistencia a fallos, resulta indispensable la implementación de planes de redundancia técnica y respaldo (backups). El proveedor está obligado a desarrollar y mantener copias de seguridad automáticas de los datos, los modelos entrenados y los registros de ejecución (logs), asegurando la capacidad de restaurar rápidamente el sistema a un estado seguro anterior en caso de que ocurra un incidente crítico [20, 21]. \n\nUna de las estrategias de redundancia de mayor impacto es la integración de sistemas paralelos no basados en Inteligencia Artificial (por ejemplo, sistemas de reglas heurísticas tradicionales o árboles de decisión deterministas). Estos sistemas actúan como red de seguridad y pueden tomar el control de forma ininterrumpida si el modelo de machine learning principal falla o sufre una degradación súbita [19, 22]. Asimismo, el responsable del despliegue del sistema debe recibir capacitación técnica para saber interpretar las alertas del panel de control, ejecutar los planes de respaldo manuales descritos en el manual de instrucciones y cooperar fluidamente con el proveedor para reportar cualquier comportamiento anómalo [23, 24]."
          },
          {
              "title": "Solidez en Sistemas de Aprendizaje Continuo e Información Transparente",
              "content": "Los sistemas de inteligencia artificial que continúan aprendiendo tras ser introducidos en el mercado o puestos en servicio presentan desafíos excepcionales y complejos para mantener la solidez. Esto se debe a que su comportamiento y su nivel de precisión pueden degradarse dinámicamente con el tiempo al incorporar nueva información no curada. El Reglamento de IA requiere estrictamente que se adopten medidas técnicas de mitigación para garantizar que este aprendizaje continuo no provoque desviaciones inaceptables del modelo original ni acumule sesgos perjudiciales de forma paulatina [24, 25].\n\nSegún detalla la Guía 10, uno de los mayores peligros a evitar es el conocido \"olvido catastrófico\" (catastrophic forgetting), un fenómeno donde el modelo de IA pierde de manera irreversible la capacidad de realizar de forma correcta las tareas para las que fue entrenado inicialmente al absorber y ajustarse a los nuevos datos. Para combatir este problema de solidez, se deben implementar técnicas algorítmicas avanzadas como la Consolidación de Pesos Elásticos (Elastic Weight Consolidation - EWC), el uso de arquitecturas Piggyback, o estrategias de \"Experience Replay\" y memoria, que fuerzan al modelo a retener patrones pasados [26, 27]. \n\nAdicionalmente, los sistemas en producción pueden sufrir de deriva de datos (Data Drift) y deriva de conceptos (Concept Drift). Esto ocurre cuando la distribución estadística de los datos de entrada del mundo real cambia, o cuando la relación entre las entradas y las predicciones deseadas evoluciona con el tiempo. Para subsanar estos desplazamientos, la guía recomienda el uso de técnicas como la adaptación de dominio (Domain Adaptation) y la transferencia de conocimiento [28]. Para garantizar un control total, los proveedores deben documentar el nivel de solidez mediante Tarjetas de Modelo (Model Cards) y Tarjetas de Bases de Datos (Datasheets for Datasets). Estos documentos deben detallar los parámetros clave de rendimiento, los límites operativos, las métricas de incertidumbre y los compromisos éticos asumidos, facilitando la auditoría y previniendo la discriminación algorítmica [29-31]."
          }
      ],
      "flashcards": [
          {
              "front": "¿Qué exige el Artículo 15.1 del Reglamento de IA en relación con la solidez?",
              "back": "Exige que los sistemas de IA de alto riesgo mantengan un nivel adecuado y consistente de precisión, solidez y ciberseguridad durante todo su ciclo de vida."
          },
          {
              "front": "¿Cuál es la diferencia entre Solidez Local y Solidez Global?",
              "back": "La solidez local verifica el sistema frente a pequeñas perturbaciones cerca de una entrada específica. La solidez global garantiza el comportamiento seguro del modelo en todos los rangos de entrada del dominio esperado."
          },
          {
              "front": "¿A qué se refiere la propiedad de 'Estabilidad' en el contexto de la solidez?",
              "back": "Se refiere a la insensibilidad del sistema de IA frente a cambios irrelevantes en las características de entrada."
          },
          {
              "front": "¿Qué es el paradigma de 'Fallo Seguro' (Fail-safe) en los sistemas de IA?",
              "back": "Es la capacidad del sistema para detectar cuándo no puede funcionar de manera sólida y, en respuesta, detener su operación de forma segura o transferir el control a un sistema redundante."
          },
          {
              "front": "¿Cuál es la diferencia principal entre Verificación y Validación (V&V)?",
              "back": "La Verificación comprueba que el diseño cumple especificaciones sin usar datos reales. La Validación ejecuta el sistema con datos reales de prueba para demostrar que cumple su finalidad prevista."
          },
          {
              "front": "¿Qué es el 'Olvido Catastrófico' en modelos de aprendizaje continuo?",
              "back": "Es la degradación de un modelo de IA en la que pierde la capacidad de realizar tareas para las que fue entrenado inicialmente al aprender de información nueva."
          },
          {
              "front": "¿Qué técnica algorítmica ayuda a mitigar el Olvido Catastrófico?",
              "back": "Técnicas como Elastic Weight Consolidation (EWC), Piggyback y Experience Replay (repetición de experiencias pasadas)."
          },
          {
              "front": "¿Qué se entiende por 'Deriva de Datos' (Data Drift)?",
              "back": "Ocurre cuando la distribución estadística de los datos reales de entrada que recibe el modelo en producción cambia respecto a los datos con los que fue entrenado."
          },
          {
              "front": "¿Qué es una Tarjeta de Modelo (Model Card)?",
              "back": "Un documento estandarizado que detalla el rendimiento, métricas de precisión y solidez, limitaciones operativas y umbrales de decisión de un sistema de IA."
          },
          {
              "front": "¿Qué implica la 'Adaptación de Dominio' (Domain Adaptation)?",
              "back": "Es una técnica para mitigar la desviación de los datos y del concepto, ajustando un modelo entrenado en un dominio de origen para que funcione de manera sólida en un nuevo dominio de destino."
          },
          {
              "front": "¿Por qué es importante incluir sistemas paralelos no basados en IA como plan de respaldo?",
              "back": "Porque proporcionan redundancia técnica, permitiendo que un sistema heurístico o basado en reglas tome el control si el modelo de machine learning principal falla o sufre ataques."
          },
          {
              "front": "¿Qué propiedad de la solidez se asegura de que las respuestas del sistema de IA pertenezcan a las opciones del dominio del problema?",
              "back": "La propiedad de 'Relevancia'."
          }
      ],
      "quiz": [
          {
              "question": "De acuerdo con el Artículo 15.4, ¿cómo puede lograrse la solidez técnica frente a fallos y errores del entorno?",
              "options": [
                  "Aumentando indefinidamente el número de parámetros del modelo oculto.",
                  "Mediante la implementación de soluciones de redundancia técnica y planes de respaldo.",
                  "Reentrenando el sistema de inteligencia artificial cada 24 horas sin supervisión humana.",
                  "Delegando la responsabilidad legal de las pruebas únicamente en el usuario final."
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué propiedad de la solidez de un sistema de IA define las fronteras y límites dentro de los cuales el sistema puede operar de forma esperada?",
              "options": [
                  "Alcanzabilidad",
                  "Sensibilidad",
                  "Estabilidad",
                  "Fiabilidad"
              ],
              "correctAnswer": 0
          },
          {
              "question": "¿Qué ocurre en un sistema de aprendizaje continuo cuando experimenta 'Olvido catastrófico'?",
              "options": [
                  "El modelo memoriza contraseñas de los usuarios y las filtra externamente.",
                  "El modelo procesa los datos más lentamente debido al consumo excesivo de memoria RAM.",
                  "El modelo pierde la capacidad de realizar tareas pasadas al ser entrenado con nueva información.",
                  "El modelo se niega a aprender nuevos datos para proteger su arquitectura interna."
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Cuál es la principal diferencia entre la validación y la verificación en la evaluación de la solidez de un sistema IA?",
              "options": [
                  "La validación siempre usa métodos formales matemáticos, mientras que la verificación requiere despliegue en la nube.",
                  "La verificación se hace con datos reales, mientras que la validación usa modelos pre-entrenados sin datos.",
                  "La verificación comprueba especificaciones sin datos reales; la validación confirma el funcionamiento con conjuntos de datos reales.",
                  "No existe ninguna diferencia; el Reglamento de IA utiliza ambos términos de forma intercambiable."
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Qué técnica técnica es idónea para abordar situaciones en las que el sistema de IA presenta limitaciones de memoria en el dispositivo final (ej. Edge computing)?",
              "options": [
                  "El aumento indiscriminado de la dimensionalidad de entrada.",
                  "La destilación de modelos y las técnicas de poda de redes (pruning).",
                  "El entrenamiento exclusivo mediante redes neuronales no supervisadas masivas.",
                  "El almacenamiento de los datos en servidores públicos sin anonimizar."
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Cuál de las siguientes es una estrategia de mitigación recomendada contra el 'Data Drift' o desplazamiento de la distribución de los datos?",
              "options": [
                  "Desactivar las alertas en tiempo real para evitar falsos positivos.",
                  "Uso de técnicas de adaptación del dominio (domain adaptation).",
                  "Obligar al usuario a insertar los datos exclusivamente en formato binario puro.",
                  "Eliminar los protocolos de redundancia del sistema central."
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué debe documentarse en relación con la solidez según la sección sobre Tarjetas de Modelo (Model Cards)?",
              "options": [
                  "Las contraseñas de administrador y claves de encriptación del servidor del proveedor.",
                  "El código fuente completo de la interfaz gráfica desarrollada por el cliente final.",
                  "El tamaño del modelo, umbrales de decisión, enfoques hacia la incertidumbre e interpretabilidad.",
                  "Los datos de contacto personales de todos los usuarios que han evaluado el modelo."
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Qué significa diseñar un sistema bajo el principio de 'fallo seguro' (fail-safe)?",
              "options": [
                  "El sistema no tiene errores de código por lo que es inmune a ataques adversarios.",
                  "El sistema no necesita copias de seguridad de datos porque es redundante.",
                  "El sistema se reinicia solo borrando toda su memoria ante cualquier entrada nueva.",
                  "El sistema puede detectar incoherencias o falta de solidez y detenerse o delegar funciones de forma segura."
              ],
              "correctAnswer": 3
          },
          {
              "question": "¿A qué se refiere la propiedad de 'Sensibilidad' en el contexto de la medición de la solidez?",
              "options": [
                  "A la resistencia del sistema ante cualquier tipo de cambio en las entradas.",
                  "A que el sistema reaccione correctamente y de forma predecible a cambios relevantes en la entrada.",
                  "A la capacidad del modelo para predecir exclusivamente las emociones humanas del usuario.",
                  "A la protección de los datos personales sensibles en la base de datos."
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué técnica es un ejemplo de 'Experience Replay' utilizada para mantener la solidez en sistemas que continúan aprendiendo?",
              "options": [
                  "Almacenar y reutilizar ejemplos representativos del pasado para reentrenar el modelo junto con los nuevos datos.",
                  "Grabar la pantalla del usuario para auditar visualmente los fallos del sistema.",
                  "Eliminar todos los pesos de la red neuronal y entrenarla desde cero semanalmente.",
                  "Exportar el modelo antiguo y mantenerlo guardado en un disco duro desconectado de internet."
              ],
              "correctAnswer": 0
          }
      ],
      "pdfUrl": "https://aesia.digital.gob.es/storage/media/10-guia-solidez.pdf",
      "glossary": [
          {
              "term": "Solidez (Robustness)",
              "definition": "Capacidad de un sistema de IA para mantener un rendimiento confiable, preciso y seguro ante errores, fallos operativos o alteraciones de su entorno, minimizando riesgos para los derechos y la salud de las personas."
          },
          {
              "term": "Fiabilidad (Reliability)",
              "definition": "Propiedad del sistema que describe la consistencia y coherencia general entre los valores estimados inicialmente por el modelo y las estimaciones subsecuentes a lo largo del tiempo."
          },
          {
              "term": "Estabilidad",
              "definition": "Capacidad del sistema de IA para mantenerse invariable o insensible frente a alteraciones irrelevantes y ruido en las características de entrada."
          },
          {
              "term": "Fallo Seguro (Fail-safe)",
              "definition": "Mecanismo de diseño que permite al sistema interrumpir su funcionamiento o transferir el control a un método de respaldo seguro cuando opera fuera de los márgenes de solidez y certidumbre establecidos."
          },
          {
              "term": "Olvido Catastrófico (Catastrophic Forgetting)",
              "definition": "Degradación crítica en un modelo de aprendizaje continuo donde pierde o corrompe de manera abrupta la capacidad para realizar las tareas en las que fue entrenado previamente al incorporar nueva información."
          },
          {
              "term": "Data Drift (Deriva de Datos)",
              "definition": "Situación que ocurre en sistemas en producción cuando la distribución estadística de los datos del mundo real experimenta cambios significativos en comparación con los datos originales de entrenamiento."
          },
          {
              "term": "Concept Drift (Deriva de Concepto)",
              "definition": "Desviación del modelo producida cuando la relación subyacente entre las variables de entrada y el objetivo que se intenta predecir cambia con el paso del tiempo."
          },
          {
              "term": "Domain Adaptation (Adaptación de Dominio)",
              "definition": "Estrategia técnica para mitigar la deriva de datos mediante el ajuste de un modelo previamente entrenado en un entorno específico, para que mantenga su nivel de precisión y solidez en un nuevo entorno operativo."
          },
          {
              "term": "Tarjeta del Modelo (Model Card)",
              "definition": "Ficha documental estandarizada que recopila métricas operativas de precisión, solidez, limitaciones conocidas, detalles de entrenamiento y análisis de variabilidad e incertidumbre de un modelo de IA."
          },
          {
              "term": "Verificación y Validación (V&V)",
              "definition": "Fases de control de calidad conjuntas. La verificación comprueba el cumplimiento de las reglas formales de diseño del sistema, y la validación confirma con datos reales objetivos que el sistema cumple verdaderamente su finalidad prevista."
          }
      ]
  },
  {
      "id": "11",
      "title": "Guía Ciberseguridad",
      "summary": "Guía para cumplir los requisitos de ciberseguridad del artículo 15, protegiendo al sistema de IA contra ataques específicos (adversarios). Detalla vulnerabilidades como el envenenamiento de datos (data poisoning), la evasión del modelo o el robo del modelo. Propone medidas como el control de accesos, auditorías de seguridad, equipos de prueba (Red Teams) y la integración de la seguridad de la IA dentro de la estrategia general de ciberseguridad de la organización.",
      "contentIndex": [
          {
              "title": "Introducción a la Ciberseguridad en Sistemas de IA",
              "content": "La Guía 11 de las Guías AESIA está destinada a desarrollar el cumplimiento de las medidas necesarias en materia de ciberseguridad para los sistemas de Inteligencia Artificial (IA) de alto riesgo, asegurando que estos aspectos se integren en un esquema de seguridad de la información mucho más amplio [1]. La ciberseguridad en sistemas de IA de alto riesgo no es una opción, sino una obligación crítica, dado que todos los sistemas se encuentran expuestos a amenazas específicas que requieren medidas de protección rigurosas, avanzadas y adaptadas a su contexto de uso y despliegue [2]. Esta guía está especialmente dirigida a sistemas de IA en fases avanzadas de desarrollo (a partir del nivel de madurez tecnológica TRL 6) y a sistemas que ya se encuentran en operación o próximos a su puesta en servicio [3]. A diferencia de la ciberseguridad tradicional en tecnologías de la información (IT), la IA presenta una superficie de ataque expandida y vulnerabilidades únicas [2]. Las principales amenazas que afectan a la IA incluyen el envenenamiento de los datos de entrenamiento (data poisoning), los ataques adversarios que buscan engañar al modelo durante la inferencia, la explotación de defectos intrínsecos del propio modelo y los ataques dirigidos a la privacidad y confidencialidad de los datos, como la extracción o inversión de modelos [2]. Es fundamental que los proveedores y los responsables del despliegue identifiquen los activos y actores involucrados en el ciclo de vida del sistema, estableciendo sus relaciones e implementando controles de seguridad que se revisen periódicamente para garantizar su efectividad frente a ataques [4]."
          },
          {
              "title": "Requisitos del Reglamento de Inteligencia Artificial (Artículo 15)",
              "content": "El marco normativo que regula la ciberseguridad de los sistemas de IA de alto riesgo se articula principalmente en el Artículo 15 del Reglamento Europeo de Inteligencia Artificial (RIA), enfocado en la precisión, solidez y ciberseguridad [5]. El apartado 1 de dicho artículo establece que los sistemas de IA de alto riesgo deben diseñarse y desarrollarse de tal modo que alcancen un nivel adecuado de ciberseguridad y funcionen de manera uniforme y consistente en este sentido durante todo su ciclo de vida [6]. Por su parte, el apartado 5 del Artículo 15 incide en las medidas específicas de protección, exigiendo que los sistemas sean resistentes a los intentos de terceros no autorizados de alterar su uso, sus resultados de salida o su funcionamiento [6]. Esto implica la obligación legal de implementar soluciones técnicas para prevenir, detectar, combatir, resolver y controlar vulnerabilidades concretas de la IA [7]. Entre estas vulnerabilidades, el Reglamento menciona explícitamente el «envenenamiento de datos» (manipulación del conjunto de datos de entrenamiento), el «envenenamiento de modelos» (alteración de componentes preentrenados), la introducción de información diseñada para forzar errores («ejemplos adversarios» o «evasión de modelos»), así como los ataques a la confidencialidad y la explotación de defectos inherentes al modelo [7]. El cumplimiento de este artículo exige una aproximación integral que abarque desde la concepción y diseño del sistema hasta su retirada, pasando por la validación, puesta en marcha y vigilancia poscomercialización, asegurando en todo momento la integridad, confidencialidad y disponibilidad del sistema [8]."
          },
          {
              "title": "Gestión de Vulnerabilidades y Controles en los Datos (Envenenamiento)",
              "content": "El envenenamiento de datos (data poisoning) es una de las amenazas más críticas para la integridad de un sistema de IA, ya que busca manipular el comportamiento del modelo alterando los conjuntos de datos utilizados durante su entrenamiento, validación o prueba [9]. Esta amenaza suele originarse en las fases tempranas de diseño y entrenamiento, donde el impacto de la introducción de datos maliciosos o ruidosos es muy alto [10]. Las vulnerabilidades asociadas incluyen el uso de modelos que son inherentemente fáciles de envenenar, la falta de datos suficientes para diluir el impacto de muestras maliciosas, la gestión inadecuada de los derechos de acceso a los datos, y la utilización de fuentes de datos (o de etiquetado) no controladas o de poca confianza [9]. Para mitigar estos riesgos, la Guía 11 exige a los proveedores la implementación de controles de seguridad estrictos. Entre estos controles destaca la necesidad de utilizar herramientas de control de versiones de datos (como DVC) para mantener una traza inmutable de los cambios y de los actores que los realizan [11]. Además, se deben aplicar técnicas de higienización de datos (data sanitization) para tratar anomalías y valores atípicos (outliers) antes del entrenamiento, y monitorizar continuamente la distribución de los datos de entrada para detectar discrepancias estadísticas o firmas de envenenamiento [11]. Asimismo, se recomienda limitar de forma estricta los permisos de modificación en los repositorios de datos y utilizar modelos o arquitecturas que ofrezcan mayor resiliencia matemática frente a perturbaciones en los datos de entrenamiento [12]."
          },
          {
              "title": "Protección frente a Ataques Adversarios y Defectos del Modelo",
              "content": "Durante la fase de inferencia o producción, los sistemas de IA están altamente expuestos a ataques adversarios que manipulan los datos de entrada para forzar clasificaciones erróneas, así como a ataques de extracción, inversión y evasión [13]. Los ataques de evasión consisten en introducir perturbaciones, a menudo imperceptibles para el ser humano, que engañan al modelo [14]. Para combatirlos, se recomiendan controles como la detección de datos fuera de dominio y el entrenamiento adversario (adversarial training), que expone al modelo a ejemplos maliciosos durante su fase de aprendizaje para hacerlo más robusto [14]. Por otro lado, los ataques de inversión y extracción buscan deducir información sensible de los datos de entrenamiento o replicar la arquitectura del modelo basándose en las respuestas a múltiples consultas [13], [15]. Las medidas de protección incluyen la limitación estricta del número de peticiones (rate limiting) que un usuario puede realizar por minuto, la aplicación de técnicas de privacidad diferencial (differential privacy) y la reducción de la verbosidad en los mensajes de error del sistema [16], [17]. Adicionalmente, los sistemas de IA pueden sufrir ataques que explotan defectos intrínsecos del software o compromisos en los marcos de trabajo (frameworks) utilizados, como TensorFlow o PyTorch [18]. La mitigación de estos defectos requiere el uso de herramientas de análisis de seguridad estático (SAST) y dinámico (DAST) específicas para IA, la monitorización constante de vulnerabilidades y exposiciones comunes (CVE/CWE) en las librerías dependientes (dependency-check), y la planificación de la obsolescencia para actualizar o retirar componentes desactualizados y vulnerables [19], [20], [21]."
          },
          {
              "title": "Gobernanza, Políticas de Acceso y Formación en Ciberseguridad",
              "content": "La primera y más auténtica línea de defensa en la ciberseguridad de cualquier sistema de Inteligencia Artificial se basa en controlar de manera adecuada el acceso a todos los activos durante todo el ciclo de vida, lo cual se logra mediante una sólida gobernanza y políticas de acceso [22]. Es imperativo implementar un modelo de Control de Acceso Basado en Roles (RBAC, por sus siglas en inglés), aplicando rigurosamente el principio de mínimo privilegio [23], [24]. Esto significa que perfiles como científicos de datos, ingenieros de MLOps y administradores de sistemas deben tener acceso única y exclusivamente a los recursos estrictamente necesarios para su función [23], [25]. Complementariamente a estas políticas, la capacitación humana es esencial. Las organizaciones, tanto proveedoras como responsables del despliegue, deben establecer planes de formación continua en ciberseguridad aplicada a la IA, asegurando que todo el personal interactuante comprenda conceptos como el envenenamiento de datos, los ataques adversarios y la explotación de defectos del modelo [26], [27]. A nivel documental, el Reglamento y la Guía 11 exigen que todas estas políticas, controles técnicos y medidas de mitigación estén exhaustivamente recogidas en la Documentación Técnica y en el Manual de Instrucciones del sistema [28]. Esta documentación no solo debe detallar el modelo de amenazas (como las vulnerabilidades identificadas y los controles implementados frente a envenenamiento y ataques adversarios), sino que debe estar disponible para las autoridades competentes y ser una guía clara para que el responsable del despliegue configure y opere el sistema de forma segura [29], [30]."
          }
      ],
      "flashcards": [
          {
              "front": "¿Qué es el envenenamiento de datos (Data Poisoning) en IA?",
              "back": "Es una amenaza que busca manipular la integridad del sistema de IA alterando o introduciendo datos maliciosos durante la fase de entrenamiento, lo que provoca que el modelo aprenda comportamientos incorrectos o sesgados."
          },
          {
              "front": "¿Qué es un ataque de evasión en modelos de IA?",
              "back": "Es un ataque en el que se manipulan los datos de entrada en la fase de inferencia (producción) insertando perturbaciones casi imperceptibles para forzar al modelo a cometer un error de clasificación o predicción."
          },
          {
              "front": "¿En qué consiste un ataque de inversión de modelo (Model Inversion)?",
              "back": "Es un ataque donde un adversario utiliza la información de salida del modelo para inferir o reconstruir los datos sensibles que fueron utilizados originalmente para entrenar el sistema."
          },
          {
              "front": "¿Qué exige explícitamente el Artículo 15.5 del Reglamento de IA en materia de ciberseguridad?",
              "back": "Exige que los sistemas de IA de alto riesgo sean resistentes a intentos no autorizados de alterar su uso y prevengan ataques como el envenenamiento de datos, ejemplos adversarios y ataques a la confidencialidad."
          },
          {
              "front": "¿Qué es el principio de mínimo privilegio (Least Privilege) en las políticas de acceso?",
              "back": "Es una política de seguridad que dicta que a los usuarios (ej. científicos de datos, administradores) solo se les deben otorgar los permisos estrictamente necesarios y durante el tiempo indispensable para realizar su tarea."
          },
          {
              "front": "¿Qué significan las siglas SAST y DAST en el contexto del desarrollo seguro de IA?",
              "back": "SAST significa Static Application Security Testing (análisis de código sin ejecutarlo) y DAST significa Dynamic Application Security Testing (análisis del sistema en ejecución); ambos se usan para detectar vulnerabilidades."
          },
          {
              "front": "¿Qué es la técnica de Destilación Defensiva (Defensive Distillation)?",
              "back": "Es una técnica de entrenamiento adversarial donde un segundo modelo se entrena usando las probabilidades 'suaves' del primer modelo, haciéndolo más robusto y menos susceptible a ataques de evasión."
          },
          {
              "front": "¿Cuál es el objetivo principal de los ataques de extracción de modelos?",
              "back": "Su objetivo es 'clonar' o replicar la funcionalidad y arquitectura de un modelo de IA de caja negra interrogándolo masivamente y analizando sus respuestas."
          },
          {
              "front": "¿Qué rol juega el DVC (Data Version Control) en la ciberseguridad de la IA?",
              "back": "Permite mantener un control estricto y versionado de las fuentes de datos utilizadas, creando una traza de los cambios y los actores que los realizan para prevenir el envenenamiento silencioso de datos."
          },
          {
              "front": "¿A qué fases del ciclo de vida de la IA aplica la ciberseguridad según la Guía 11?",
              "back": "Aplica de manera uniforme a todo el ciclo de vida: concepción, diseño, implementación, verificación y prueba, puesta en marcha, vigilancia poscomercialización y retirada."
          },
          {
              "front": "¿Qué es la privacidad diferencial (Differential Privacy) en la IA?",
              "back": "Es una técnica matemática que añade ruido controlado a los datos o al modelo para minimizar el riesgo de ataques de inferencia de pertenencia y proteger la privacidad de los individuos del conjunto de entrenamiento."
          },
          {
              "front": "¿Qué riesgo crítico de ciberseguridad supone utilizar un framework de IA obsoleto?",
              "back": "El riesgo de compromiso del framework, ya que versiones antiguas de herramientas (como TensorFlow o PyTorch) pueden contener vulnerabilidades públicas (CVEs) que los atacantes pueden explotar para atacar el modelo."
          }
      ],
      "quiz": [
          {
              "question": "¿Qué artículo del Reglamento de Inteligencia Artificial aborda específicamente los requisitos de Precisión, Solidez y Ciberseguridad?",
              "options": [
                  "Artículo 9",
                  "Artículo 11",
                  "Artículo 15",
                  "Artículo 72"
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Cómo se denomina el ataque que busca manipular el conjunto de datos de entrenamiento para que la IA aprenda reglas incorrectas?",
              "options": [
                  "Ataque de Extracción",
                  "Envenenamiento de datos (Data Poisoning)",
                  "Ataque de Canal Lateral",
                  "Evasión de modelo"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué tipo de ataque se caracteriza por introducir perturbaciones diseñadas en los datos de entrada durante la fase de inferencia para engañar al modelo?",
              "options": [
                  "Ataques de Inversión",
                  "Ataques de Evasión (Ejemplos Adversarios)",
                  "Inferencia de Pertenencia",
                  "Jailbreak"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Cuál es un control técnico recomendado para mitigar los ataques de inversión o extracción de modelos a través de una API?",
              "options": [
                  "Aumentar el detalle de los mensajes de error mostrados al usuario.",
                  "Publicar los pesos del modelo en repositorios abiertos.",
                  "Limitar el número de consultas o peticiones permitidas por minuto (Rate Limiting).",
                  "Desactivar el cifrado de datos en reposo."
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Qué técnica de seguridad analiza el código fuente del sistema de IA en busca de vulnerabilidades sin llegar a ejecutar el programa?",
              "options": [
                  "DAST (Dynamic Application Security Testing)",
                  "DVC (Data Version Control)",
                  "SAST (Static Application Security Testing)",
                  "RBAC (Role-Based Access Control)"
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Qué modelo de control de acceso se recomienda encarecidamente implementar en el entorno de desarrollo y operación de la IA?",
              "options": [
                  "Acceso anónimo universal",
                  "RBAC (Control de Acceso Basado en Roles) con principio de mínimo privilegio",
                  "Concesión de privilegios de administrador a todos los científicos de datos",
                  "Mecanismos basados exclusivamente en contraseñas compartidas"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué significan las siglas CVE en el contexto del escaneo de vulnerabilidades de librerías de IA?",
              "options": [
                  "Common Vulnerabilities and Exposures",
                  "Cyber Verification Environment",
                  "Critical Vector Exploitation",
                  "Code Versioning Engine"
              ],
              "correctAnswer": 0
          },
          {
              "question": "¿Qué ataque busca averiguar si el dato de un individuo concreto fue utilizado dentro del conjunto de datos de entrenamiento del modelo?",
              "options": [
                  "Ataque de Inferencia de Pertenencia (Membership Inference)",
                  "Envenenamiento de modelos",
                  "Ataque de fuerza bruta",
                  "Ataque de denegación de servicio (DDoS)"
              ],
              "correctAnswer": 0
          },
          {
              "question": "¿Qué medida es efectiva para prevenir ataques basados en defectos intrínsecos de componentes de software de terceros?",
              "options": [
                  "Ignorar las actualizaciones para mantener la estabilidad del código.",
                  "Uso de herramientas como 'Dependency-check' para monitorizar componentes obsoletos y vulnerables.",
                  "Desactivar el registro de logs del sistema.",
                  "Permitir la descarga de librerías desde fuentes no verificadas."
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿A quién asigna principalmente el Reglamento de IA la responsabilidad de generar y conservar la Documentación Técnica de Ciberseguridad?",
              "options": [
                  "Al usuario final",
                  "A la autoridad de vigilancia del mercado",
                  "Al responsable del despliegue exclusivamente",
                  "Al proveedor del sistema de IA"
              ],
              "correctAnswer": 3
          }
      ],
      "pdfUrl": "https://aesia.digital.gob.es/storage/media/11-guia-ciberseguridad.pdf",
      "glossary": [
          {
              "term": "Ataque Adversario",
              "definition": "Ataque dirigido contra un sistema de inteligencia artificial, modificando las entradas o el entorno, que puede ejecutarse bajo condiciones de Caja Blanca, Caja Gris o Caja Negra dependiendo del conocimiento del atacante sobre el modelo."
          },
          {
              "term": "Envenenamiento de datos (Data Poisoning)",
              "definition": "Ataque que consiste en inyectar datos falsos, maliciosos o ruidosos en los conjuntos de datos de entrenamiento para alterar el aprendizaje del modelo de IA y causar un mal funcionamiento intencionado."
          },
          {
              "term": "Evasión (Ejemplos Adversarios)",
              "definition": "Técnica de ataque durante la fase de inferencia donde se introducen perturbaciones sutiles en los datos de entrada reales para engañar al sistema de IA, haciéndole producir un resultado o clasificación incorrecta."
          },
          {
              "term": "Extracción de modelos",
              "definition": "Ataque en el cual un actor malicioso realiza numerosas consultas a un sistema de IA de caja negra con el fin de replicar o clonar su comportamiento, parámetros y funcionalidad."
          },
          {
              "term": "SAST",
              "definition": "Pruebas Estáticas de Seguridad de Aplicaciones (Static Application Security Testing). Metodología que analiza el código fuente, los binarios o el bytecode de una aplicación en busca de vulnerabilidades de seguridad sin ejecutar el código."
          },
          {
              "term": "DAST",
              "definition": "Pruebas Dinámicas de Seguridad de Aplicaciones (Dynamic Application Security Testing). Proceso de análisis de seguridad en el que se interactúa con una aplicación en tiempo de ejecución para detectar vulnerabilidades, simulando ataques externos."
          },
          {
              "term": "RBAC",
              "definition": "Control de Acceso Basado en Roles (Role Based Access Control). Enfoque de seguridad que restringe el acceso a los sistemas y datos basándose en los roles que los usuarios individuales tienen dentro de la organización."
          },
          {
              "term": "CVE",
              "definition": "Common Vulnerabilities and Exposures. Lista pública y estandarizada de vulnerabilidades y exposiciones de seguridad de la información conocidas en componentes de software y hardware."
          },
          {
              "term": "Destilación defensiva",
              "definition": "Técnica de entrenamiento adversarial que añade flexibilidad al modelo entrenando un segundo modelo con las probabilidades 'blandas' generadas por el primero, haciendo que el sistema final sea menos susceptible a intentos de explotación."
          },
          {
              "term": "Inversión de modelos",
              "definition": "Ataque que abusa del acceso a las inferencias (salidas) de un modelo de IA para deducir o recuperar características sensibles de los datos originales que se utilizaron durante el proceso de entrenamiento."
          }
      ]
  },
  {
      "id": "12",
      "title": "Guía de registros",
      "summary": "Esta guía detalla las obligaciones establecidas en el artículo 12 del Reglamento de IA respecto a la capacidad de los sistemas de alto riesgo para generar registros (logs) automáticos. Explica cómo estos registros garantizan la trazabilidad del funcionamiento del sistema durante su ciclo de vida, permitiendo detectar situaciones de riesgo y facilitar la vigilancia poscomercialización. Se definen los elementos mínimos que deben registrarse, como la fecha y hora de uso, bases de datos de referencia y datos de entrada, así como las responsabilidades de conservación compartidas entre proveedores y responsables del despliegue.",
      "contentIndex": [
          {
              "title": "Introducción a la Conservación de Registros en Sistemas de IA",
              "content": "En el contexto del Reglamento Europeo de Inteligencia Artificial (AI Act), la gestión de registros (logging) es un pilar fundamental para garantizar la trazabilidad, la transparencia y la rendición de cuentas de los sistemas de Inteligencia Artificial de alto riesgo (HRAIS). Un registro es, esencialmente, un archivo o log que almacena información crítica sobre el comportamiento, las decisiones y el desempeño del sistema durante sus fases de entrenamiento, validación y, sobre todo, durante su uso en el entorno de producción. Un sistema de gestión de registros se define como el conjunto estructurado de procesos diseñados para recopilar, almacenar, analizar, proteger y gestionar estos archivos generados automáticamente.\n\nPara que un sistema de gestión de registros sea efectivo, debe sustentarse en cuatro principios fundamentales. En primer lugar, la Autenticidad: el sistema debe asegurar que un registro es exactamente lo que afirma ser y que ha sido generado por el proceso o usuario autorizado. En segundo lugar, la Fiabilidad: el contenido del registro debe ser una representación exacta y completa de las operaciones o transacciones que documenta. En tercer lugar, la Integridad: los registros deben estar protegidos de forma robusta contra cualquier modificación, eliminación o alteración no autorizada. Y, por último, la Usabilidad: los registros deben ser fácilmente localizables, recuperables y comprensibles para los procesos de auditoría.\n\nLa adecuada gestión de registros no solo es una obligación legal, sino que aporta innumerables beneficios. Permite la detección temprana de errores y anomalías en el funcionamiento de la IA, mejora la supervisión humana al proveer datos objetivos sobre las predicciones y el comportamiento del modelo, y facilita la labor de vigilancia poscomercialización. Asimismo, resulta esencial para investigar y notificar incidentes graves a las autoridades de vigilancia del mercado (AVM), protegiendo la salud, la seguridad y los derechos fundamentales de los usuarios afectados. En resumen, los registros son la prueba o evidencia objetiva de que el sistema opera dentro de los umbrales de seguridad y legalidad previstos en su diseño."
          },
          {
              "title": "Marco Regulatorio de los Registros (Artículos 12 y 19)",
              "content": "El marco normativo aplicable a la conservación de registros en sistemas de IA de alto riesgo se asienta principalmente en los artículos 12 y 19 del Reglamento de Inteligencia Artificial (AI Act). El Artículo 12 establece la obligación de que los sistemas de IA de alto riesgo estén diseñados, desarrollados e implementados con capacidades técnicas que permitan la generación automática de archivos de registro (logs) de los eventos y las interacciones que se produzcan durante todo su ciclo de vida. El objetivo primordial de esta trazabilidad es doble: por un lado, permitir la detección de riesgos que puedan materializarse a escala nacional o europea y, por otro, facilitar la supervisión humana eficaz y la vigilancia poscomercialización del sistema.\n\nEn el caso específico de los sistemas de identificación biométrica remota (mencionados en el Anexo III), el artículo 12 establece exigencias aún más estrictas respecto al contenido del registro. Para estos sistemas de altísimo impacto en la privacidad y en los derechos fundamentales, las capacidades de registro deben incluir ineludiblemente: un registro temporal exacto de cada uso del sistema (fecha y hora de inicio y de finalización de la consulta), la base de datos de referencia concreta con la cual el sistema ha cotejado los datos biométricos, los datos de entrada específicos que han arrojado una correspondencia o coincidencia (match), y la identificación clara e inequívoca de las personas físicas implicadas en la validación y verificación humana de dichos resultados.\n\nPor su parte, el Artículo 19 complementa estas obligaciones estipulando que los proveedores y, de acuerdo con el artículo 26.6, los responsables del despliegue, deben conservar los archivos de registro generados automáticamente por sus sistemas de IA cuando dichos archivos se encuentren bajo su control operativo. El reglamento especifica que, con carácter general, el período mínimo de conservación de estos registros será de al menos seis meses, a menos que otras normativas sectoriales o el derecho aplicable de la Unión o de los Estados Miembros exijan un periodo distinto. Esto es especialmente relevante para entidades financieras o infraestructuras críticas, que pueden tener normativas previas sobre gobernanza interna de datos y registros."
          },
          {
              "title": "Evaluación, Captura, Almacenamiento y Control de Acceso",
              "content": "El desarrollo de un adecuado sistema de gestión de registros comienza con la fase de evaluación y diseño. Esta etapa exige a los proveedores y responsables del despliegue llevar a cabo un análisis pormenorizado para determinar exactamente qué información debe ser monitorizada y recabada para cumplir con la ley y garantizar el funcionamiento seguro del sistema. En este contexto, se debe evaluar la necesidad de crear registros para detectar situaciones de riesgo que afecten a la salud, la seguridad o los derechos fundamentales. También hay que definir registros para nutrir el plan de vigilancia poscomercialización y aquellos destinados a nutrir la interfaz de supervisión humana (como alertas cuando el sistema emita predicciones de baja confianza o cuando presente un comportamiento sesgado).\n\nUna vez definido qué se debe registrar (como el identificador del usuario, la hora, el tipo de dato de entrada, las métricas de precisión, y los errores de sistema), se pasa a la fase de captura, almacenamiento y control de acceso. En este paso, las organizaciones deben asegurarse de que el sistema técnico es capaz de capturar ininterrumpidamente los registros sin afectar al rendimiento del modelo principal. Los medios de almacenamiento elegidos pueden ser repositorios on-premise, bases de datos en la nube o infraestructuras distribuidas. En cualquiera de los casos, la arquitectura de almacenamiento debe disponer de copias de seguridad (backups), redundancia y cifrado en reposo para prevenir pérdidas catastróficas de información.\n\nEl control de acceso es otro elemento fundamental de esta fase. De acuerdo con las guías de ciberseguridad, se deben implementar medidas como la gestión de identidades y accesos (IAM) con control basado en roles (RBAC) y el principio de mínimo privilegio. Los registros de auditoría del sistema de IA no deben ser accesibles ni manipulables por cualquier usuario de la organización, sino únicamente por personal autorizado y debidamente capacitado. De esta forma, se protege la autenticidad e integridad del registro como evidencia legal y se previene que actores malintencionados (o personal con errores de configuración) borren las huellas de un funcionamiento negligente o discriminatorio de la IA."
          },
          {
              "title": "Retención, Disposición, Documentación y Mejora Continua",
              "content": "La última fase en el ciclo de vida de los registros comprende su retención, disposición (que incluye la transferencia o eliminación) y la documentación técnica de todo el proceso. Como estipula el Reglamento de IA, el período de retención mínimo es de seis meses, aunque la organización debe fijar políticas claras que alineen este requisito con el Reglamento General de Protección de Datos (RGPD) y los principios de minimización de datos. Si un registro contiene datos personales o categorías especiales de datos (por ejemplo, relativos a la salud en un caso de bomba de insulina), no puede retenerse indefinidamente. Finalizado el periodo legal o el objetivo para el que fue recogido, la disposición de los registros debe contemplar su destrucción segura o su anonimización irreversible.\n\nEl sistema de gestión de registros no es un proceso estático, sino que requiere seguimiento y mejora continua. Las organizaciones deben realizar auditorías periódicas a sus bases de datos de registros para comprobar que las herramientas de captura funcionan correctamente, que no hay lagunas en la información registrada y que los controles de acceso no han sido vulnerados. Esta retroalimentación constante permite corregir deficiencias tempranas e incorporar nuevos parámetros de control a medida que el sistema de IA evoluciona o aprende de su entorno de producción (sistemas de aprendizaje continuo).\n\nFinalmente, todas estas políticas y herramientas deben figurar de forma expresa en la Documentación Técnica del sistema, concretamente cumpliendo con el Anexo IV del Reglamento de Inteligencia Artificial. La documentación debe incluir los procedimientos de validación, la descripción de los recursos informáticos empleados para almacenar los logs, la descripción detallada del plan de vigilancia poscomercialización basado en registros, y las medidas de ciberseguridad adoptadas para su salvaguarda. Asimismo, los manuales y las instrucciones de uso facilitados al responsable del despliegue deben detallar cómo puede este recabar, interpretar y usar los archivos de registro generados por el modelo de IA para cumplir con su labor de supervisión."
          }
      ],
      "flashcards": [
          {
              "front": "Registro (en un sistema de IA)",
              "back": "Archivo que almacena información sobre el comportamiento y desempeño del sistema durante su entrenamiento o uso en producción."
          },
          {
              "front": "Sistema de gestión de registros",
              "back": "Conjunto de procesos definidos para recopilar, almacenar, analizar y gestionar los registros generados por un sistema de IA."
          },
          {
              "front": "Artículo 12 del Reglamento de IA",
              "back": "Establece que los sistemas de IA de alto riesgo deberán incorporar las capacidades técnicas necesarias para la generación automática de registros (logs)."
          },
          {
              "front": "Artículo 19 del Reglamento de IA",
              "back": "Obliga a los proveedores de sistemas de IA a conservar los archivos de registro generados automáticamente que estén bajo su control."
          },
          {
              "front": "Responsabilidad sobre la conservación de registros",
              "back": "Recae tanto sobre el proveedor como sobre el responsable del despliegue del sistema de IA de alto riesgo, siempre que estén bajo su control."
          },
          {
              "front": "Registros en sistemas de identificación biométrica remota",
              "back": "Deben incluir obligatoriamente el período de cada uso, la base de datos de referencia cotejada, los datos de entrada que arrojen correspondencia y la identificación de las personas físicas verificadoras."
          },
          {
              "front": "Evaluación y diseño de los registros",
              "back": "Fase analítica donde se determina la necesidad de generar registros y los requisitos sobre su información, respondiendo a riesgos y necesidades de vigilancia."
          },
          {
              "front": "Captura, almacenamiento y control de acceso",
              "back": "Proceso técnico y organizativo para guardar los registros asegurando su protección frente a accesos no autorizados, modificaciones, pérdidas o destrucción."
          },
          {
              "front": "Retención mínima obligatoria de registros",
              "back": "El período de conservación de registros automáticos será de al menos seis meses, sujeto a excepciones dictadas por leyes específicas o sectoriales."
          },
          {
              "front": "Vigilancia poscomercialización y registros",
              "back": "Los registros actúan como fuente principal de datos e indicadores para detectar funcionamientos anómalos o incidentes una vez que el sistema se encuentra en el mercado."
          },
          {
              "front": "Principio de Integridad en registros",
              "back": "El sistema debe asegurar que los registros estén protegidos de cualquier intento de modificación, eliminación o alteración no autorizada."
          },
          {
              "front": "Registro de entidades financieras",
              "back": "Mantendrán los archivos de registro como parte de la documentación conservada en virtud de las normativas de la Unión en materia de servicios financieros."
          }
      ],
      "quiz": [
          {
              "question": "¿Qué es un registro en el contexto de un sistema de Inteligencia Artificial?",
              "options": [
                  "Un contrato vinculante entre el proveedor y el responsable del despliegue.",
                  "Un archivo que almacena información sobre el comportamiento y desempeño del sistema.",
                  "Un código de ética de programación interno para el desarrollador.",
                  "Un glosario público de términos matemáticos de IA."
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué artículo del Reglamento Europeo de IA estipula la obligación de disponer de capacidades técnicas para generar registros automáticamente?",
              "options": [
                  "Artículo 9",
                  "Artículo 12",
                  "Artículo 15",
                  "Artículo 72"
              ],
              "correctAnswer": 1
          },
          {
              "question": "Según el Artículo 19, ¿cuál es el plazo mínimo de conservación para los archivos de registro generados por sistemas de IA de alto riesgo?",
              "options": [
                  "Un mes.",
                  "Seis meses.",
                  "Tres años.",
                  "Diez años."
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Quiénes tienen la responsabilidad de conservar los registros, siempre y cuando estén bajo su control?",
              "options": [
                  "Únicamente las Autoridades de Vigilancia del Mercado.",
                  "Solo los proveedores de sistemas de IA.",
                  "Los proveedores y los responsables del despliegue de sistemas de alto riesgo.",
                  "Solo los usuarios finales que sufren las predicciones del sistema."
              ],
              "correctAnswer": 2
          },
          {
              "question": "En un sistema de identificación biométrica remota, los registros deben contener OBLIGATORIAMENTE:",
              "options": [
                  "La base de datos de referencia y la identificación de las personas implicadas en la verificación.",
                  "El código fuente completo de la red neuronal empleada en el entrenamiento.",
                  "La firma digital del director de la empresa desarrolladora.",
                  "Un resumen del coste financiero de cada operación generada."
              ],
              "correctAnswer": 0
          },
          {
              "question": "¿A qué se refiere el principio de 'Usabilidad' en la gestión de registros?",
              "options": [
                  "A que los registros no ocupen espacio de memoria excesivo.",
                  "A que los registros sean fácilmente localizables, recuperables y comprensibles.",
                  "A que el registro esté alojado en hardware físico y no en la nube.",
                  "A que se utilice un formato en papel para los tribunales."
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿En qué documento deben reflejarse los procedimientos de registro, las reglas de almacenamiento y su plan de evaluación?",
              "options": [
                  "En la Documentación Técnica descrita en el Anexo IV del Reglamento.",
                  "En el Libro de Actas de la organización.",
                  "En los metadatos de las imágenes de entrenamiento.",
                  "En el folleto de publicidad comercial del sistema."
              ],
              "correctAnswer": 0
          },
          {
              "question": "¿Qué paso es esencial durante la fase de 'Captura, almacenamiento y control de acceso' de registros?",
              "options": [
                  "Eliminar todos los datos personales cada 24 horas por motivos de espacio.",
                  "Garantizar la protección de los registros frente a modificaciones indeseadas o accesos no autorizados mediante ciberseguridad.",
                  "Hacer los registros accesibles a todos los empleados de la organización para fomentar la transparencia.",
                  "Deshabilitar las copias de seguridad redundantes."
              ],
              "correctAnswer": 1
          },
          {
              "question": "Las entidades financieras sujetas a normativas de servicios financieros, ¿cómo deben mantener los registros generados?",
              "options": [
                  "Deben enviarlos obligatoriamente al Banco Central Europeo cada mes.",
                  "Como parte de la documentación conservada en virtud del Derecho de la Unión en materia de servicios financieros.",
                  "No están obligadas a mantenerlos gracias a su exención sectorial.",
                  "En un repositorio físico exclusivamente ubicado en territorio nacional."
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué significa el concepto de 'Disposición' dentro de un sistema de gestión de registros?",
              "options": [
                  "La forma en que se muestran los iconos en la interfaz gráfica del usuario.",
                  "Gama de procesos asociados con la retención, destrucción o transferencia de los registros.",
                  "La voluntad de los empleados para cumplir con las normativas legales de la IA.",
                  "La creación de una política de marketing basada en los datos almacenados."
              ],
              "correctAnswer": 1
          }
      ],
      "pdfUrl": "https://aesia.digital.gob.es/storage/media/12-guia-de-registros.pdf",
      "glossary": [
          {
              "term": "Acceso al registro",
              "definition": "Derecho, oportunidad o medios proporcionados para encontrar, utilizar o recuperar información almacenada en un registro."
          },
          {
              "term": "Agente",
              "definition": "Individuo, grupo de trabajo u organización que es responsable o se encuentra involucrado en los procesos de creación, captura y/o gestión de registros."
          },
          {
              "term": "Clasificación",
              "definition": "Identificación sistemática y/o disposición de actividades y/o registros comerciales en categorías de acuerdo con convenciones, métodos y reglas estructuradas."
          },
          {
              "term": "Conversión",
              "definition": "Proceso que consiste en el cambio de registros de un formato a otro garantizando la persistencia de la información."
          },
          {
              "term": "Destrucción",
              "definition": "Proceso definitivo de eliminación de un registro, de manera que sea imposible cualquier posible reconstrucción del mismo."
          },
          {
              "term": "Disposición",
              "definition": "Gama de procesos asociados con la implementación de las políticas de retención de registros, incluyendo decisiones documentadas sobre su destrucción o transferencia."
          },
          {
              "term": "Evidencia",
              "definition": "Documentación objetiva y fehaciente que deja constancia de una transacción, operación o evento dentro del sistema."
          },
          {
              "term": "Migración",
              "definition": "Proceso de mover registros de una configuración de hardware o software a otra diferente, sin alterar su formato original."
          },
          {
              "term": "Registro",
              "definition": "Información creada, recibida y mantenida como evidencia y como un activo por una organización o persona, en cumplimiento de obligaciones legales o de control."
          },
          {
              "term": "Sistema de registros",
              "definition": "El sistema informático o de información global que captura, gestiona, asegura y proporciona acceso a los registros generados a lo largo del tiempo."
          }
      ]
  },
  {
      "id": "13",
      "title": "Guía Vigilancia poscomercialización",
      "summary": "Esta guía aborda el artículo 72 del Reglamento, estableciendo la obligación de los proveedores de implementar un sistema de vigilancia poscomercialización. Este sistema debe recopilar, documentar y analizar datos sobre el rendimiento del sistema de IA durante toda su vida útil de manera activa y sistemática. El objetivo es evaluar el cumplimiento continuo de los requisitos, detectar riesgos emergentes y actualizar el sistema de gestión de riesgos. Incluye la creación de un plan de vigilancia, la definición de indicadores de rendimiento y seguridad, y el establecimiento de procesos de análisis.",
      "contentIndex": [
          {
              "title": "Introducción y Conceptos Básicos de la Vigilancia Poscomercialización",
              "content": "El Reglamento Europeo de Inteligencia Artificial (AI Act), específicamente en su artículo 72, establece la obligatoriedad de que los proveedores y responsables del despliegue implementen un plan de vigilancia poscomercialización para los sistemas de IA de alto riesgo. Este plan se define como un conjunto de actividades y procesos diseñados para recolectar y evaluar de forma continua la experiencia operativa obtenida tras la introducción del sistema inteligente en el mercado. El propósito central es garantizar que los sistemas sigan siendo seguros, funcionen correctamente y no supongan riesgos inaceptables a lo largo de toda su vida útil. Si el nivel de riesgo continuado del sistema llega a superar sus beneficios teóricos, el sistema de vigilancia permite identificar la necesidad imperiosa de tomar acciones correctivas inmediatas o incluso retirar el sistema.\n\nPara lograr estos objetivos con eficacia, el sistema de vigilancia poscomercialización se concibe como un conjunto integrado de procesos y herramientas estructuradas en cuatro componentes principales:\n\n1. **Sistemas de captación de indicadores**: Incluyen procesos automáticos dedicados a recopilar datos brutos sobre el rendimiento del modelo, el uso de la infraestructura tecnológica y las interacciones de los usuarios.\n2. **Sistemas de registro de indicadores**: Son los servicios y repositorios de almacenamiento que guardan de forma segura, estructurada y trazable la información recabada, operando conforme a los requisitos legales de registro.\n3. **Sistema de alertas automatizadas**: Este componente monitorea en tiempo real los cambios en los indicadores basándose en escalas o umbrales de tolerancia preestablecidos. Ante cualquier desviación o anomalía, emite avisos para advertir de un posible escenario de riesgo.\n4. **Interfaces de análisis para supervisores**: Proporcionan a los responsables de la vigilancia humana un punto de acceso claro (por ejemplo, cuadros de mando o aplicaciones web) para inspeccionar métricas, investigar incidentes y gestionar las intervenciones."
          },
          {
              "title": "Fases para la Implementación del Sistema de Vigilancia",
              "content": "La implementación de un sistema de vigilancia poscomercialización efectivo y alineado con la normativa requiere que los proveedores y responsables de despliegue sigan un proceso riguroso estructurado en cinco pasos fundamentales:\n\n*   **Paso 1: Selección de indicadores.** El proveedor debe establecer cuáles son las métricas más relevantes para la correcta vigilancia del sistema (rendimiento, ciberseguridad, infraestructura, interacción). La selección de estos indicadores tiene que basarse obligatoriamente en el sistema de gestión de riesgos que se haya desarrollado en las fases previas de diseño del modelo de IA.\n*   **Paso 2: Despliegue del sistema de captación de indicadores.** El sistema de IA debe ser modificado o configurado para que recolecte los datos de interés especificados y los envíe, mediante archivos de *log* temporales o conexiones directas, al componente encargado de su procesamiento. Este flujo de datos debe ser estable y no interferir con la latencia del propio modelo.\n*   **Paso 3: Configuración de la base de datos para almacenamiento.** Se requiere establecer un sistema de registro robusto (bases de datos estructuradas o no estructuradas) que garantice la integridad absoluta de la evidencia. En esta etapa se deben implementar rigurosas políticas de control de acceso, además de dictar las reglas de retención y eliminación segura de los datos, tal como lo exige el artículo 12 del Reglamento Europeo y la Guía de Registros.\n*   **Paso 4: Desarrollo del sistema de alertas y la interfaz de análisis.** Aquí se diseñan las herramientas de monitoreo en tiempo real que comparan los datos entrantes contra los umbrales de normalidad configurados. Cuando el sistema detecta una desviación significativa (por exceso o por defecto), emite notificaciones a los equipos de respuesta, quienes utilizan paneles visuales para investigar y acotar el problema.\n*   **Paso 5: Pruebas y validación del sistema de vigilancia.** Es indispensable garantizar que la recolección de datos y la emisión de alertas funcionen correctamente en un entorno de producción o asimilado, frecuentemente apoyándose en auditorías de ciberseguridad o mediante la evaluación de entidades acreditadas independientes."
          },
          {
              "title": "Vigilancia Continua, Pruebas del Sistema y Capacitación del Personal",
              "content": "Una vez que el sistema de IA ha sido desplegado en el mercado, la vigilancia continua se vuelve vital para asegurar que mantenga sus altos niveles de seguridad, precisión y eficacia, logrando prevenir problemas de responsabilidad legal y técnica. Esta vigilancia se divide operativamente en tres áreas principales:\n\n1.  **Vigilancia del rendimiento del sistema inteligente:** Monitoreo de la precisión del algoritmo, aparición de posibles sesgos no detectados en fases de prueba y revisión del tiempo de respuesta o latencia.\n2.  **Vigilancia de interacciones de usuarios:** Análisis de comandos, consultas, comportamientos inusuales y retroalimentación directa, lo cual ayuda a detectar problemas de usabilidad o usos no previstos.\n3.  **Vigilancia de la infraestructura y seguridad:** Detección de brechas, cuellos de botella en la memoria RAM, estrés de la CPU o fallos en la conectividad que pongan en peligro la disponibilidad del sistema.\n\nPara complementar el simple monitoreo de indicadores pasivos, el plan exige realizar pruebas activas y periódicas al sistema de IA. Entre estas destacan las **pruebas de estrés**, que someten la arquitectura a condiciones extremas de carga de datos para validar su estabilidad y resiliencia; las **pruebas de precisión**, que comprueban empíricamente si el sistema mantiene los niveles de calidad prometidos; y las **pruebas de robustez y ciberseguridad**, enfocadas en la resistencia frente a ruidos introducidos, envenenamiento de datos o intrusiones de red.\n\nAdemás de la infraestructura tecnológica, el componente humano resulta crítico para el éxito del plan. La normativa exige establecer programas de **capacitación exhaustivos** para los equipos de respuesta y supervisión. El personal responsable debe comprender a la perfección cómo funciona la lógica subyacente del algoritmo, ser capaz de interpretar las alertas emitidas por los paneles de control y conocer con exactitud el protocolo de contingencia a seguir ante comportamientos anómalos. Todo incidente que se detecte debe investigarse a fondo, generando informes detallados y promoviendo una comunicación transparente con las autoridades y los afectados."
          },
          {
              "title": "Indicadores de Vigilancia y Conexiones con el Ecosistema Regulatorio",
              "content": "La eficacia del plan de vigilancia poscomercialización reposa en gran medida en la elección de un catálogo adecuado de indicadores, los cuales se agrupan en cuatro categorías técnicas para su seguimiento continuo. Los **indicadores sobre el sistema inteligente** miden el núcleo algorítmico, e incluyen métricas como el número de predicciones procesadas por unidad de tiempo, la tasa de errores de predicción, el porcentaje de precisión (*Accuracy*), el *Recall* (exhaustividad para evitar falsos negativos en problemas desbalanceados), el *F1 Score* y las variaciones estadísticas en los datos de entrada. Los **indicadores sobre la infraestructura** monitorean el hardware físico o en la nube, abarcando el uso porcentual de CPU, la memoria RAM disponible, el ancho de banda de red consumido y la temperatura de los equipos. Los **indicadores sobre las acciones de los usuarios** analizan métricas como la volumetría de peticiones diarias y los orígenes de las sesiones, siendo clave para detectar accesos simultáneos anómalos. Finalmente, los **indicadores de seguridad** vigilan eventos como intentos fallidos de inicio de sesión, cambios no autorizados en archivos internos y la tasa de conexiones establecidas por hora.\n\nEste plan de vigilancia no funciona como una isla, sino que está profundamente interconectado con el resto de obligaciones del Reglamento de IA (AI Act). Se nutre de la **Guía de Gestión de Riesgos** (que dicta qué escenarios peligrosos deben vigilarse para diseñar los indicadores), de la **Guía de Registros** (que aporta las pautas de almacenamiento inmutable de las evidencias), y de la **Guía de Supervisión Humana** (que define los roles de las personas que interpretarán las alertas). Del mismo modo, se enlaza con las guías de Precisión, Solidez y Ciberseguridad para heredar los umbrales base de funcionamiento. Por mandato normativo, el plan de vigilancia poscomercialización debe anexarse y formar parte integral de la **Documentación Técnica** exigida por el Anexo IV del Reglamento."
          }
      ],
      "flashcards": [
          {
              "front": "¿Qué es el plan de vigilancia poscomercialización?",
              "back": "Es un conjunto de actividades llevadas a cabo para recolectar y evaluar de forma continua la experiencia obtenida de los sistemas de IA de alto riesgo que han sido puestos en el mercado."
          },
          {
              "front": "¿Cuáles son los cuatro componentes clave de un sistema de vigilancia poscomercialización?",
              "back": "1) Sistemas de captación de indicadores, 2) Sistemas de registro de indicadores, 3) Sistema de alertas automatizadas, 4) Interfaces de análisis para supervisores."
          },
          {
              "front": "¿Cuál es la función del Sistema de alertas automatizadas?",
              "back": "Monitorear en tiempo real los cambios en los indicadores para alertar sobre posibles escenarios de riesgo, basándose en escalas o umbrales preestablecidos."
          },
          {
              "front": "¿Cuáles son los primeros tres pasos para implementar el sistema de vigilancia?",
              "back": "1. Selección de indicadores, 2. Despliegue del sistema de captación, 3. Configuración de la base de datos de almacenamiento (registros)."
          },
          {
              "front": "¿Qué se debe hacer si el riesgo continuado de un sistema de IA supera a sus beneficios?",
              "back": "El sistema de vigilancia debe identificar la necesidad de tomar acciones correctivas inmediatas, que pueden incluir ajustes técnicos o la retirada del sistema."
          },
          {
              "front": "¿Qué indicadores clave se deben vigilar sobre el \"sistema inteligente\" algorítmico?",
              "back": "Predicciones por unidad de tiempo, tasa de errores de predicción, precisión del modelo, Recall (Exhaustividad) y F1 Score."
          },
          {
              "front": "¿Qué papel juegan las pruebas de estrés en la vigilancia continua?",
              "back": "Someten al sistema de IA a condiciones extremas de carga de datos o procesamiento para evaluar su estabilidad y prevenir caídas de disponibilidad."
          },
          {
              "front": "¿Por qué es obligatoria la capacitación de los responsables de supervisión?",
              "back": "Para asegurar que comprendan la lógica del algoritmo, sepan interpretar las métricas y alertas, y conozcan el protocolo de actuación ante comportamientos anómalos del sistema."
          },
          {
              "front": "¿Qué relación tiene la Vigilancia Poscomercialización con la Guía de Gestión de Riesgos?",
              "back": "La evaluación de riesgos previa determina qué información, peligros y datos se necesitan recabar para poder diseñar los indicadores de vigilancia adecuados."
          },
          {
              "front": "¿Qué datos recaban los indicadores de infraestructura tecnológica?",
              "back": "Monitorean el estado físico o virtual del entorno, incluyendo el uso de CPU, la memoria RAM, el ancho de banda consumido y la temperatura del sistema."
          },
          {
              "front": "¿Para qué sirve medir el \"Número de orígenes de sesión diferentes\" de un usuario?",
              "back": "Para controlar la dispersión de inicios de sesión y poder detectar posibles anomalías técnicas o incidentes de ciberseguridad relacionados con robo de credenciales."
          },
          {
              "front": "¿Qué artículo del Reglamento de IA (AI Act) obliga a documentar e implementar el plan de vigilancia poscomercialización?",
              "back": "El Artículo 72 (y el Anexo IV referente a la inclusión de dicho plan en la Documentación Técnica)."
          }
      ],
      "quiz": [
          {
              "question": "¿Cuál es el objetivo principal del plan de vigilancia poscomercialización?",
              "options": [
                  "Recolectar y evaluar experiencia del uso del sistema en el mercado para identificar riesgos y tomar acciones correctivas.",
                  "Generar únicamente campañas de marketing basadas en el rendimiento del software.",
                  "Automatizar las ventas de los sistemas de inteligencia artificial de bajo riesgo.",
                  "Sustituir por completo la intervención humana en la toma de decisiones algorítmicas."
              ],
              "correctAnswer": 0
          },
          {
              "question": "¿Qué componente NO forma parte de la arquitectura base del sistema de vigilancia poscomercialización?",
              "options": [
                  "Sistemas de captación de indicadores.",
                  "Sistemas de marketing y ventas automáticas.",
                  "Sistemas de registro e histórico.",
                  "Sistemas de alertas automatizadas."
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Cuál es el primer paso metodológico para implementar un sistema de vigilancia poscomercialización?",
              "options": [
                  "Selección de indicadores basados en los riesgos.",
                  "Contratación de un equipo externo de ciberseguridad.",
                  "Desarrollo de las interfaces gráficas.",
                  "Pruebas y validación en un entorno simulado."
              ],
              "correctAnswer": 0
          },
          {
              "question": "¿Qué métrica es considerada un indicador de rendimiento propio del \"sistema inteligente\"?",
              "options": [
                  "Consumo de Memoria RAM.",
                  "Temperatura del sistema de servidores.",
                  "Intentos fallidos de inicio de sesión.",
                  "F1 Score del modelo y Tasa de errores de predicción."
              ],
              "correctAnswer": 3
          },
          {
              "question": "Según la guía, ¿qué tipo de prueba somete al sistema a condiciones de carga extrema o procesamiento inusual?",
              "options": [
                  "Pruebas de precisión.",
                  "Pruebas de sesgo demográfico.",
                  "Pruebas de estrés.",
                  "Pruebas unitarias de código."
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿A qué artículo del Reglamento de IA (AI Act) hace referencia principal la vigilancia poscomercialización?",
              "options": [
                  "Artículo 9.",
                  "Artículo 72.",
                  "Artículo 15.",
                  "Artículo 12."
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Dentro de qué categoría de indicadores se sitúa el \"Número de intentos fallidos de inicio de sesión\"?",
              "options": [
                  "Indicadores sobre la infraestructura.",
                  "Indicadores sobre el rendimiento del sistema inteligente.",
                  "Indicadores financieros.",
                  "Indicadores de seguridad."
              ],
              "correctAnswer": 3
          },
          {
              "question": "¿Con qué guía está estrechamente relacionada la vigilancia para definir CÓMO almacenar la información recabada de forma segura?",
              "options": [
                  "Guía de Conservación de Registros.",
                  "Guía de Transparencia.",
                  "Guía de Alfabetización en IA.",
                  "Guía de Precisión."
              ],
              "correctAnswer": 0
          },
          {
              "question": "De acuerdo al Artículo 72, ¿qué entidades tienen la opción de integrar la vigilancia en sus sistemas internos preexistentes debido a su propia legislación del Derecho de la Unión?",
              "options": [
                  "Las plataformas de streaming.",
                  "Las universidades públicas.",
                  "Las entidades financieras.",
                  "Las fábricas de productos de consumo."
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Cuál es la utilidad principal de las \"interfaces de análisis\" en el plan de vigilancia?",
              "options": [
                  "Servir de punto de acceso para que los supervisores analicen los indicadores y gestionen las alertas.",
                  "Procesar los cálculos de las redes neuronales en tiempo real.",
                  "Captar los datos brutos del hardware y sensores sin intervención humana.",
                  "Almacenar las copias de seguridad de la infraestructura a largo plazo."
              ],
              "correctAnswer": 0
          }
      ],
      "pdfUrl": "https://aesia.digital.gob.es/storage/media/13-guia-vigilancia-poscomercializacion.pdf",
      "glossary": [
          {
              "term": "Vigilancia poscomercialización",
              "definition": "Conjunto de actividades conducidas por proveedores o responsables para recolectar y evaluar experiencia de sistemas de IA de alto riesgo tras su puesta en el mercado, identificando la necesidad de acciones correctivas."
          },
          {
              "term": "Sistema de captación de indicadores",
              "definition": "Conjunto de procesos tecnológicos diseñados para recopilar sistemáticamente datos de rendimiento del sistema de IA, infraestructura y acciones de usuarios para su posterior análisis."
          },
          {
              "term": "Indicador de vigilancia",
              "definition": "Dato cuantitativo o cualitativo evaluado dentro de una escala o rango de normalidad que permite medir un comportamiento específico del sistema frente a un riesgo identificado."
          },
          {
              "term": "Sistema de alertas automatizadas",
              "definition": "Mecanismo informático que monitorea los indicadores en tiempo real y envía notificaciones cuando los valores superan los umbrales críticos de normalidad preestablecidos."
          },
          {
              "term": "Pruebas de estrés",
              "definition": "Evaluaciones técnicas en las que se somete al sistema de IA a condiciones extremas de carga o volumen de datos para comprobar su estabilidad, disponibilidad y respuesta frente a fallos."
          },
          {
              "term": "Tasa de errores de predicción",
              "definition": "Porcentaje de predicciones o resultados incorrectos generados por el modelo de IA en relación con el total de predicciones realizadas en un periodo de tiempo."
          },
          {
              "term": "Recall (Exhaustividad)",
              "definition": "Métrica que indica el porcentaje de casos positivos reales (verdaderos positivos y falsos negativos) que el sistema de IA es capaz de identificar correctamente; es crucial en conjuntos de datos desbalanceados."
          },
          {
              "term": "Pruebas de robustez",
              "definition": "Procedimientos de evaluación que buscan verificar la capacidad del sistema de IA para mantener su precisión y rendimiento ante entradas ruidosas, datos imprevistos o intentos de alteración."
          },
          {
              "term": "Plan de contingencia",
              "definition": "Conjunto de medidas y procedimientos predefinidos que se deben ejecutar inmediatamente en caso de producirse un incidente grave, fallo crítico o desviación inaceptable en el sistema de IA."
          },
          {
              "term": "Latencia del sistema",
              "definition": "Tiempo de respuesta del sistema de inteligencia artificial, medido habitualmente desde que recibe una petición o dato de entrada hasta que emite el resultado o predicción."
          }
      ]
  },
  {
      "id": "14",
      "title": "Guía Gestión de Incidentes",
      "summary": "Esta guía explica el procedimiento del artículo 73 para la notificación de incidentes graves relacionados con sistemas de IA de alto riesgo. Define qué constituye un incidente grave (muerte, daños graves a la salud, propiedad, medio ambiente o derechos fundamentales) y establece los plazos estrictos para su comunicación a las autoridades de vigilancia del mercado: 15 días para incidentes generales, 2 días en caso de amenaza inminente y 10 días en caso de muerte. También detalla el flujo de investigación y las excepciones para ciertos sectores.",
      "contentIndex": [
          {
              "title": "Introducción y Concepto de Incidente Grave",
              "content": "La Guía 14 de las Guías AESIA está dedicada exclusivamente a la \"Gestión de Incidentes\" (es importante aclarar que la Guía 12 es la dedicada a Registros, mientras que la 14 aborda la notificación de incidentes graves, tal y como se explicita en los documentos oficiales). El Reglamento Europeo de Inteligencia Artificial (AI Act) dedica su artículo 73 a la notificación de incidentes graves sobre sistemas de IA de alto riesgo. Este artículo se enmarca en el Capítulo IX, que trata sobre el control posterior a la comercialización, el intercambio de información y la vigilancia del mercado. Un \"incidente grave\" se define como un suceso o defecto de funcionamiento de un sistema de IA que, directa o indirectamente, tenga consecuencias severas. Entre estas consecuencias se incluyen el fallecimiento de una persona o daños graves para la salud, así como alteraciones graves y potencialmente irreversibles en la gestión y el funcionamiento de infraestructuras críticas. Además, abarca el incumplimiento de las obligaciones derivadas del Derecho de la Unión destinadas a proteger los derechos fundamentales, y los daños graves a la propiedad o al medio ambiente. La gestión de incidentes se entiende como un proceso continuo en el tiempo que implica la monitorización constante del sistema tras su comercialización, la detección de la anomalía, el establecimiento del vínculo causal entre el sistema de IA y el incidente, la notificación inmediata a las autoridades pertinentes y la cooperación constante en las investigaciones subsiguientes. Comprender la magnitud de un incidente grave es vital para garantizar un entorno seguro en el despliegue de sistemas de inteligencia artificial de alto riesgo."
          },
          {
              "title": "Obligaciones y Requisitos de Notificación",
              "content": "En cuanto a las obligaciones y requisitos de notificación, el artículo 73 del Reglamento de IA establece directrices estrictas para los proveedores de sistemas de IA de alto riesgo. La regla general dicta que todo incidente grave debe ser notificado inmediatamente después de que el proveedor haya establecido un vínculo causal (o una posibilidad razonable de dicho vínculo) entre el sistema de IA y el incidente. En cualquier caso, esta notificación no puede exceder los 15 días desde el conocimiento inicial del incidente. Sin embargo, existen plazos mucho más estrictos dependiendo de la severidad del suceso. Si el incidente grave ha provocado el fallecimiento de una persona o un daño grave para la salud, la notificación a las Autoridades de Vigilancia del Mercado (AVM) y a las autoridades nacionales competentes debe realizarse en un plazo máximo de dos días tras el establecimiento del vínculo causal. Por otro lado, si el incidente implica un incumplimiento de las obligaciones destinadas a proteger los derechos fundamentales, el plazo máximo de notificación se establece en 10 días. Existen excepciones, como en el caso de las infraestructuras críticas, donde la notificación puede retrasarse temporalmente si realizarla de inmediato obstaculizara la mitigación de los riesgos críticos. Los proveedores deben cooperar plenamente con las autoridades, realizando investigaciones diligentes y proporcionando toda la información requerida, garantizando así la transparencia total y la rendición de cuentas ante la sociedad y la Unión Europea."
          },
          {
              "title": "Procedimiento y Medidas Aplicables para la Gestión de Incidentes",
              "content": "Para abordar de forma efectiva la gestión y notificación de incidentes graves, la Guía 14 establece una serie de medidas aplicables que tanto proveedores como responsables del despliegue deben integrar en su operativa diaria. La primera medida fundamental es enmarcar la notificación de incidentes graves dentro del Sistema de Gestión de Calidad (SGC) de la organización. Esto significa que deben existir procedimientos formalizados, protocolos de actuación y cadenas de responsabilidad claramente definidos para actuar con rapidez y eficacia frente a cualquier contingencia. Además, resulta esencial mantener un contacto directo y actualizado con la Autoridad de Vigilancia del Mercado (AVM); las organizaciones deben designar puntos de contacto específicos y conocer detalladamente los canales oficiales de notificación. Otra medida indispensable es asegurar un flujo de comunicación bidireccional ágil y documentado entre el responsable del despliegue (quien frecuentemente es el primero en detectar el fallo en el entorno real de uso) y el proveedor del sistema. El responsable del despliegue debe disponer de un canal de soporte eficiente para informar de anomalías críticas de inmediato. Asimismo, es vital que todas las partes involucradas tengan un conocimiento profundo de la categorización del sistema de IA según los anexos del Reglamento de IA, ya que de esto dependen las obligaciones de notificación aplicables y las posibles exenciones. Por último, se exige un alto nivel de concienciación y formación técnica sobre los derechos fundamentales de la Unión Europea, de manera que los operadores sean capaces de identificar rápidamente cuándo un fallo se traduce en una vulneración de derechos."
          },
          {
              "title": "Documentación Técnica y Relación con el Sistema de Gestión de Calidad",
              "content": "El cumplimiento de las obligaciones relativas a la gestión y notificación de incidentes graves debe quedar reflejado de manera exhaustiva en la Documentación Técnica del sistema de IA, tal como exige el artículo 11 y el Anexo IV del Reglamento Europeo de IA. La documentación técnica no solo demuestra la conformidad del sistema antes de su introducción en el mercado, sino que debe mantenerse viva y actualizada reflejando los procedimientos instaurados para el control poscomercialización. En el contexto específico de los incidentes, la documentación debe incluir copias de los procedimientos asociados a la notificación de incidentes graves, los cuales deben estar fuertemente integrados en el Sistema de Gestión de la Calidad (SGC) del proveedor. Tanto el proveedor como el responsable del despliegue deben contar con manuales de usuario del canal de comunicación implementado para la gestión de incidencias, asegurando que existe un rastro auditable de cómo se reportan y manejan estos sucesos críticos. Además, la documentación técnica debe integrar de forma explícita los datos de contacto oficial de la Autoridad de Vigilancia del Mercado correspondiente, y los documentos que justifiquen y expliquen la categoría del sistema de IA en función de las regulaciones sectoriales vigentes. Como medida proactiva, la Guía 14 también subraya la inclusión de documentos corporativos que avalen el conocimiento de la plantilla sobre los derechos fundamentales de la UE, garantizando así que las entidades poseen la capacitación adecuada para evaluar el impacto de un incidente. Todas estas evidencias son imprescindibles para las evaluaciones de conformidad."
          }
      ],
      "flashcards": [
          {
              "front": "¿Cuál es el objetivo principal de la Guía 14 de AESIA?",
              "back": "Servir de apoyo para la gestión y notificación de incidentes graves de los sistemas de Inteligencia Artificial de alto riesgo (Art. 73)."
          },
          {
              "front": "¿Cómo define el Reglamento de IA un 'incidente grave'?",
              "back": "Un defecto o suceso que causa muerte, daños graves a la salud, propiedad, medio ambiente, o incumple la protección de derechos fundamentales."
          },
          {
              "front": "¿Cuál es el plazo general para notificar un incidente grave a la AVM?",
              "back": "Máximo 15 días desde que se establece un vínculo causal (o posibilidad razonable) entre el sistema de IA y el incidente."
          },
          {
              "front": "¿Qué plazo aplica si un incidente grave resulta en fallecimiento o daño grave a la salud?",
              "back": "Debe notificarse inmediatamente, con un plazo máximo de 2 días."
          },
          {
              "front": "¿Cuál es el plazo de notificación si el incidente vulnera derechos fundamentales?",
              "back": "Debe notificarse inmediatamente, con un plazo máximo de 10 días."
          },
          {
              "front": "¿A quién le recae principalmente la obligación legal de notificar el incidente a la AVM?",
              "back": "Al proveedor del sistema de Inteligencia Artificial de alto riesgo."
          },
          {
              "front": "¿Qué obligación tiene el responsable del despliegue frente a un incidente?",
              "back": "Informar inmediatamente al proveedor a través de los canales establecidos y, si no logra contactarlo, informar él mismo a la AVM."
          },
          {
              "front": "¿En qué sistema organizativo deben integrarse los procedimientos de notificación de incidentes?",
              "back": "En el Sistema de Gestión de la Calidad (SGC)."
          },
          {
              "front": "¿Qué significa AVM?",
              "back": "Autoridad de Vigilancia del Mercado."
          },
          {
              "front": "¿Qué excepción temporal existe para notificar en infraestructuras críticas?",
              "back": "Se puede retrasar la notificación si hacerla inmediatamente obstaculiza las labores urgentes para restablecer la infraestructura."
          },
          {
              "front": "¿Qué debe contener la documentación técnica respecto al contacto institucional?",
              "back": "Debe contener el documento con el contacto responsable de la Autoridad de Vigilancia del Mercado correspondiente."
          },
          {
              "front": "¿Qué medida proactiva en formación exige la Guía 14 para la gestión de incidentes?",
              "back": "Documentar y certificar el conocimiento de los responsables sobre los derechos fundamentales de la Unión Europea."
          }
      ],
      "quiz": [
          {
              "question": "¿Qué artículo del Reglamento Europeo de IA (AI Act) regula específicamente la notificación de incidentes graves?",
              "options": [
                  "Artículo 9",
                  "Artículo 12",
                  "Artículo 15",
                  "Artículo 73"
              ],
              "correctAnswer": 3
          },
          {
              "question": "¿Cuál es el plazo máximo general establecido por el Reglamento para notificar un incidente grave a las autoridades?",
              "options": [
                  "2 días",
                  "10 días",
                  "15 días",
                  "30 días"
              ],
              "correctAnswer": 2
          },
          {
              "question": "En el supuesto de que un incidente grave resulte en el fallecimiento de un usuario, ¿cuál es el plazo máximo para realizar la notificación?",
              "options": [
                  "24 horas",
                  "2 días",
                  "10 días",
                  "15 días"
              ],
              "correctAnswer": 1
          },
          {
              "question": "Si se produce una vulneración de derechos fundamentales a causa del sistema de IA, el plazo de notificación a la AVM es de un máximo de:",
              "options": [
                  "2 días",
                  "5 días",
                  "10 días",
                  "15 días"
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Qué debe hacer el responsable del despliegue (usuario profesional) si detecta un incidente grave en su operativa?",
              "options": [
                  "Apagar el sistema para siempre y borrar los logs.",
                  "Notificar directamente a la Comisión Europea.",
                  "Avisar inmediatamente al proveedor mediante el canal establecido.",
                  "Modificar el código fuente para solucionar el problema."
              ],
              "correctAnswer": 2
          },
          {
              "question": "Si el responsable del despliegue identifica un incidente grave pero no logra contactar con el proveedor, ¿cómo debe proceder?",
              "options": [
                  "Ignorar el incidente hasta que el proveedor responda.",
                  "Notificar directamente a la Autoridad de Vigilancia del Mercado (AVM).",
                  "Informar a los usuarios finales a través de redes sociales.",
                  "Contratar a un tercero para auditar el sistema."
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Dentro de qué sistema organizativo obligatorio deben enmarcarse los procedimientos de gestión y notificación de incidentes graves?",
              "options": [
                  "Sistema de Gestión de la Calidad (SGC)",
                  "Sistema de Prevención de Riesgos Laborales",
                  "Sistema de Ventas y Marketing",
                  "Sistema de Logs Abiertos"
              ],
              "correctAnswer": 0
          },
          {
              "question": "¿Qué excepción temporal contempla el Reglamento sobre la notificación en el ámbito de infraestructuras críticas?",
              "options": [
                  "Están exentas de notificar cualquier tipo de incidente.",
                  "Solo notifican si el incidente afecta a la facturación.",
                  "Pueden retrasar la notificación si esta obstaculiza las labores urgentes de restablecimiento de los servicios.",
                  "El plazo máximo general se amplía automáticamente a 60 días."
              ],
              "correctAnswer": 2
          },
          {
              "question": "De acuerdo con la Guía 14, la documentación técnica generada sobre incidentes debe estar respaldada y conectada directamente con:",
              "options": [
                  "La página web promocional del proveedor.",
                  "Las medidas descritas en el Anexo IV del Reglamento de IA.",
                  "El código fuente disponible en repositorios públicos.",
                  "El libro de reclamaciones físico de la empresa."
              ],
              "correctAnswer": 1
          },
          {
              "question": "Además del contacto con la AVM y el protocolo de notificación, la Guía 14 exige documentar explícitamente el conocimiento de los operadores sobre:",
              "options": [
                  "Los lenguajes de programación de IA.",
                  "Los algoritmos de aprendizaje profundo no supervisado.",
                  "Los Derechos Fundamentales de la Unión Europea.",
                  "Las reglas de mercado internacionales."
              ],
              "correctAnswer": 2
          }
      ],
      "pdfUrl": "https://aesia.digital.gob.es/storage/media/14-guia-gestion-de-incidentes.pdf",
      "glossary": [
          {
              "term": "Incidente grave",
              "definition": "Suceso o defecto de funcionamiento de un sistema de IA que causa consecuencias extremas, como fallecimiento, daños graves a la salud, a infraestructuras críticas, al medio ambiente o vulneración de derechos fundamentales."
          },
          {
              "term": "AVM",
              "definition": "Autoridad de Vigilancia del Mercado, entidad nacional encargada de supervisar el cumplimiento de la normativa de los productos e investigar los incidentes notificados."
          },
          {
              "term": "Proveedor",
              "definition": "Entidad o persona que desarrolla o bajo cuyo nombre se comercializa y pone en servicio un sistema de IA de alto riesgo, recayendo en ella la obligación principal de notificación."
          },
          {
              "term": "Responsable del despliegue",
              "definition": "Entidad o persona que hace uso profesional del sistema de IA y tiene el deber de informar al proveedor frente a cualquier anomalía severa en el entorno de producción."
          },
          {
              "term": "Vínculo causal",
              "definition": "Relación de causa y efecto demostrada o razonablemente posible entre el comportamiento del sistema de Inteligencia Artificial y el incidente grave ocurrido."
          },
          {
              "term": "SGC",
              "definition": "Sistema de Gestión de la Calidad, marco organizativo que documenta e integra, entre otras políticas, los procedimientos estándar de notificación de incidentes graves."
          },
          {
              "term": "Derechos fundamentales",
              "definition": "Conjunto de derechos reconocidos en la Carta de los Derechos Fundamentales de la UE, cuya vulneración por un sistema de IA constituye un incidente grave."
          },
          {
              "term": "Documentación técnica",
              "definition": "Conjunto de documentos requeridos por el Anexo IV del AI Act que detallan el diseño, los contactos de AVM y los procedimientos ante incidentes, asegurando la conformidad del sistema."
          },
          {
              "term": "Infraestructura crítica",
              "definition": "Instalaciones, sistemas o redes esenciales para el funcionamiento de la sociedad, cuya interrupción grave justifica exenciones temporales en los plazos inmediatos de notificación."
          },
          {
              "term": "Reglamento Europeo de IA (AI Act)",
              "definition": "Marco legislativo de la Unión Europea que establece obligaciones armonizadas de seguridad, calidad, supervisión y notificación de incidentes para los sistemas de inteligencia artificial."
          }
      ]
  },
  {
      "id": "15",
      "title": "Guía Documentación Técnica",
      "summary": "Esta guía detalla los requisitos del artículo 11 y el Anexo IV para la elaboración de la documentación técnica de los sistemas de IA de alto riesgo. Esta documentación debe demostrar la conformidad del sistema antes de su puesta en el mercado e incluir una descripción general, detalles de diseño, datos de entrenamiento, medidas de supervisión humana y gestión de riesgos. Además, según el artículo 18, debe conservarse a disposición de las autoridades nacionales competentes durante al menos 10 años.",
      "contentIndex": [
          {
              "title": "Guía 15 - Documentación Técnica y Conservación de la Documentación",
              "content": "La Guía 15 de las Guías AESIA se centra en la Documentación Técnica para sistemas de Inteligencia Artificial de alto riesgo (HRAIS), detallando los requisitos y responsabilidades establecidos en los artículos 11 y 18, así como en el Anexo IV del Reglamento Europeo de IA (RIA).\n\nEn primer lugar, el Artículo 11 obliga a los proveedores a elaborar la documentación técnica antes de la introducción en el mercado o la puesta en servicio del sistema, y a mantenerla constantemente actualizada durante todo su ciclo de vida. Esta documentación es un elemento fundamental para demostrar que el sistema cumple con los requisitos del Capítulo III, Sección 2 del RIA y para permitir a las autoridades nacionales competentes y organismos notificados evaluar la conformidad del sistema. Como medida de apoyo, el reglamento prevé que las pymes y empresas emergentes puedan satisfacer este requisito empleando un formulario simplificado que será proporcionado por la Comisión Europea, reduciendo así la carga administrativa.\n\nPor su parte, el Artículo 18 estipula que la documentación técnica, junto con la documentación del sistema de gestión de la calidad, las aprobaciones de los organismos notificados y la declaración UE de conformidad, debe conservarse de forma segura y accesible durante un período mínimo de 10 años tras la puesta en el mercado o servicio del sistema. Las entidades financieras que ya estén sujetas a otras normativas de la Unión podrán integrar esta conservación en sus procesos de gobernanza internos ya existentes.\n\nEl Anexo IV desgrana el contenido mínimo exigido en la documentación, estructurándolo en bloques clave:\n\n1. **Descripción general del sistema**: Incluye la finalidad prevista, identificación del proveedor, control de versiones, interacciones hardware/software, formas de comercialización (API, SaaS, on-premise), descripciones de las interfaces de usuario y las instrucciones de uso para el responsable del despliegue.\n2. **Descripción detallada de elementos y procesos**: Requiere documentar la metodología de desarrollo, el uso de modelos pre-entrenados de terceros, especificaciones de diseño (lógica, algoritmos, parámetros a optimizar y decisiones de compensación o *trade-offs*), arquitectura del sistema y recursos informáticos. Es vital incluir fichas técnicas de los datos (procedencia, etiquetado, depuración), procedimientos de validación y prueba, medidas de ciberseguridad y evaluación de la supervisión humana.\n3. **Gestión de riesgos, precisión y seguimiento**: La documentación debe incorporar un análisis de resultados no deseados previsibles (Art. 9), niveles y métricas de precisión y rendimiento (Art. 15), la lista de normas armonizadas aplicadas y el plan de vigilancia poscomercialización (Art. 72).\n\nEl proveedor debe asegurar que la estructura documental permita la trazabilidad técnica, sea auditable y refleje cualquier cambio o actualización realizada en el sistema de IA."
          }
      ],
      "flashcards": [
          {
              "front": "Artículo 11 del RIA",
              "back": "Establece la obligación de elaborar la documentación técnica de un sistema de IA de alto riesgo antes de su introducción en el mercado y de mantenerla actualizada."
          },
          {
              "front": "Artículo 18 del RIA",
              "back": "Establece las obligaciones referentes a la conservación de la documentación de los sistemas de IA de alto riesgo."
          },
          {
              "front": "Plazo de conservación de la documentación",
              "back": "10 años a contar desde la introducción en el mercado o la puesta en servicio del sistema de IA de alto riesgo."
          },
          {
              "front": "Anexo IV del RIA",
              "back": "Define el contenido mínimo obligatorio que deberá tener la documentación técnica del sistema de Inteligencia Artificial."
          },
          {
              "front": "Facilidad para Pymes y empresas emergentes",
              "back": "Pueden facilitar los elementos de la documentación técnica exigida utilizando un formulario simplificado proporcionado por la Comisión Europea."
          },
          {
              "front": "Descripción general del sistema (Anexo IV.1)",
              "back": "Bloque de la documentación técnica que incluye finalidad prevista, nombre del proveedor, versión, interacción con hardware/software e instrucciones de uso."
          },
          {
              "front": "Fichas técnicas de datos (Anexo IV.2.d)",
              "back": "Documentación que describe las metodologías y técnicas de entrenamiento, procedencia, alcance, selección, etiquetado y depuración de los conjuntos de datos."
          },
          {
              "front": "Especificaciones de diseño (Anexo IV.2.b)",
              "back": "Información sobre la lógica de los algoritmos, decisiones clave, parámetros a optimizar y compensaciones (trade-offs) adoptadas para cumplir los requisitos."
          },
          {
              "front": "Declaración UE de conformidad",
              "back": "Documento obligatorio emitido bajo responsabilidad del proveedor (Art. 47), cuya copia debe adjuntarse en la documentación técnica."
          },
          {
              "front": "Plan de vigilancia poscomercialización",
              "back": "Descripción detallada del sistema para evaluar el funcionamiento de la IA tras su comercialización (Art. 72), que forma parte del Anexo IV.9."
          },
          {
              "front": "Actualización continua de documentación",
              "back": "La documentación técnica no finaliza en la comercialización; debe mantenerse actualizada frente a cambios predeterminados o modificaciones del sistema."
          },
          {
              "front": "Regla para Entidades Financieras",
              "back": "Pueden mantener la documentación técnica como parte de la documentación ya conservada en virtud del Derecho de la Unión en materia de servicios financieros."
          }
      ],
      "quiz": [
          {
              "question": "¿Durante cuánto tiempo debe el proveedor mantener la documentación técnica a disposición de las autoridades nacionales?",
              "options": [
                  "10 años desde la introducción en el mercado o puesta en servicio",
                  "5 años desde el final de la fase de pruebas",
                  "Indefinidamente",
                  "3 años o hasta la primera actualización sustancial"
              ],
              "correctAnswer": 0
          },
          {
              "question": "¿Qué anexo del Reglamento Europeo de IA detalla el contenido mínimo de la documentación técnica?",
              "options": [
                  "Anexo I",
                  "Anexo IV",
                  "Anexo VII",
                  "Anexo III"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué mecanismo prevé el RIA para reducir la carga de documentación en las pymes y empresas emergentes?",
              "options": [
                  "Exención completa de realizar documentación",
                  "Uso de un formulario simplificado de documentación técnica",
                  "Subcontratación obligatoria a un auditor externo",
                  "Aprobación automática sin revisión"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Cuál de las siguientes informaciones se requiere en la 'Descripción general del sistema' (Anexo IV.1)?",
              "options": [
                  "El código fuente íntegro del algoritmo",
                  "Su finalidad prevista, nombre del proveedor y versión del sistema",
                  "La cuenta de resultados de la empresa proveedora",
                  "Los nombres personales de los sujetos de los datos de entrenamiento"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿A quién va dirigida principalmente la obligación de generar y conservar la documentación técnica del sistema de IA?",
              "options": [
                  "Al usuario final",
                  "A la Comisión Europea",
                  "Al proveedor del sistema de IA",
                  "Al distribuidor minorista"
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Qué debe hacerse con la documentación técnica una vez el sistema se pone en servicio a lo largo de su ciclo de vida?",
              "options": [
                  "Archivarla inmutable y sellada ante notario",
                  "Mantenerla actualizada reflejando los cambios y versiones del sistema",
                  "Destruirla por motivos de privacidad",
                  "Hacerla pública en internet"
              ],
              "correctAnswer": 1
          },
          {
              "question": "Si el sistema de IA es un componente de un producto de hardware, ¿qué elemento exige incluir el Anexo IV.1.f?",
              "options": [
                  "El manual de ventas",
                  "Fotografías o ilustraciones de características exteriores, marcado y configuración interna",
                  "La patente industrial del hardware",
                  "El listado de todos los compradores del hardware"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Cómo debe documentarse una decisión de compensación técnica (trade-off) tomada durante el diseño (ej. ceder levemente precisión para reducir sesgos)?",
              "options": [
                  "Omitiéndola para no alertar al usuario",
                  "Indicando la motivación, descripción funcional, técnica y consecuencias en relación a la finalidad prevista",
                  "Enviándola como notificación de incidente grave",
                  "Exclusivamente en los archivos de registro automático"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué artículo regula específicamente la conservación de la documentación?",
              "options": [
                  "Artículo 9",
                  "Artículo 11",
                  "Artículo 18",
                  "Artículo 72"
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Qué incluye el requerimiento de documentación relativo a la supervisión humana (Anexo IV.2.e y IV.3)?",
              "options": [
                  "Evaluación de las medidas técnicas necesarias para facilitar la interpretación por parte de los responsables del despliegue",
                  "Nombres y contratos laborales de los operadores humanos",
                  "Copia de los exámenes médicos del personal de vigilancia",
                  "Ninguna, no se documenta en la fase técnica"
              ],
              "correctAnswer": 0
          }
      ],
      "pdfUrl": "https://aesia.digital.gob.es/storage/media/15-guia-documentacion-tecnica.pdf",
      "glossary": [
          {
              "term": "Documentación Técnica",
              "definition": "Conjunto de información estructurada y comprensible sobre el desarrollo, funcionamiento y características de un sistema de IA de alto riesgo, elaborada antes de su comercialización para demostrar la conformidad regulatoria."
          },
          {
              "term": "Conservación de la documentación",
              "definition": "Obligación legal del proveedor de almacenar de manera segura y accesible toda la documentación técnica, certificaciones y registros de calidad del sistema durante un mínimo de 10 años tras su comercialización."
          },
          {
              "term": "Anexo IV",
              "definition": "Sección específica del Reglamento Europeo de IA que enumera los requisitos y el contenido mínimo obligatorio que debe incluir la documentación técnica de un sistema de IA de alto riesgo."
          },
          {
              "term": "Pymes y empresas emergentes",
              "definition": "Organizaciones de menor tamaño (start-ups) que el reglamento exime parcialmente permitiéndoles cumplir con la documentación técnica a través de un formulario simplificado creado por la Comisión Europea."
          },
          {
              "term": "Finalidad prevista",
              "definition": "Descripción explícita y precisa sobre el uso proyectado, el contexto de utilización y las condiciones bajo las cuales se ha diseñado para operar el sistema de inteligencia artificial."
          },
          {
              "term": "Compensación (Trade-off)",
              "definition": "Decisión de diseño técnico documentada donde se asume el sacrificio parcial de un parámetro (p. ej., precisión) en favor de mejorar otro requisito clave (p. ej., explicabilidad o reducción de sesgo)."
          },
          {
              "term": "Fichas técnicas de datos",
              "definition": "Documentación específica dentro de la técnica que describe el origen, metodología, técnicas de limpieza, etiquetado y evaluación de los conjuntos de datos empleados en entrenamiento, validación y prueba."
          },
          {
              "term": "Arquitectura del sistema",
              "definition": "Explicación documentada sobre la manera en que los distintos componentes de software y hardware se conectan, interactúan y se integran en el procesamiento general de la inteligencia artificial."
          },
          {
              "term": "Modelos pre-entrenados",
              "definition": "Sistemas o modelos de IA desarrollados previamente por terceros que se integran en un sistema nuevo, cuyo uso y modificaciones deben justificarse detalladamente en la documentación técnica."
          },
          {
              "term": "Declaración UE de conformidad",
              "definition": "Documento legal oficial, del cual se debe guardar copia en la documentación, que emite el proveedor asumiendo la responsabilidad formal de que el sistema cumple con todos los requisitos del Reglamento Europeo de IA."
          }
      ]
  },
  {
      "id": "16",
      "title": "Manual de checklist de guías de requisitos",
      "summary": "Este manual explica el uso de la herramienta de autodiagnóstico (checklist en Excel) desarrollada para el sandbox español de IA. Permite a las entidades evaluar el nivel de madurez de sus sistemas respecto a los requisitos del Reglamento (transparencia, precisión, riesgos, etc.). La herramienta ayuda a identificar brechas de cumplimiento y a diseñar un Plan de Adaptación (PDA) asignando niveles de madurez desde 'No documentada' hasta 'Implementada'. Es un recurso clave para la fase de diagnóstico del sandbox.",
      "contentIndex": [
          {
              "title": "Manual de uso de las checklist de guías de requisitos (Guía 16)",
              "content": "# Manual de uso de la checklist (Guía 16)\n\nEl **Manual de uso de las checklist de guías de requisitos** (Guía 16) tiene como objetivo servir de apoyo detallado para el autodiagnóstico y adaptación de los sistemas de Inteligencia Artificial de alto riesgo a las normativas del Reglamento Europeo de IA (RIA), operando dentro del marco estratégico del sandbox regulatorio piloto español. Este entorno controlado de pruebas facilita enormemente la detección temprana de riesgos, la adaptación ágil a la regulación y la transferencia de conocimiento práctico.\n\nLa fase de diagnóstico del sandbox persigue dos grandes objetivos principales: en primer lugar, permitir a las entidades participantes realizar un autodiagnóstico exhaustivo de su sistema frente a las directrices del RIA para conocer la brecha técnica y operativa existente; en segundo lugar, diseñar un **Plan de Adaptación (PDA)**, que funcionará como una hoja de ruta estricta que la entidad ejecutará para lograr el cumplimiento legal. Para llevar esto a cabo, se ha diseñado una herramienta de checklist en formato Excel por cada uno de los 12 requisitos normativos fundamentales (tales como Gestión de la calidad, Riesgos, Supervisión humana, Gobernanza de datos, Transparencia, Precisión, Solidez, Ciberseguridad, Registros, Documentación técnica, Vigilancia poscomercialización y Gestión de Incidentes graves).\n\nLa estructura interna de la herramienta de checklist se divide meticulosamente en **9 pestañas** (5 informativas y 4 operativas).\n\nLas pestañas **informativas** incluyen:\n* **Portada**: Avisos de confidencialidad y contexto normativo.\n* **Intro**: Instrucciones de uso resumidas y didácticas.\n* **Artículo RIA**: Detalle de los apartados normativos aplicables a evaluar.\n* **Medidas Guías (MG)**: Catálogo descriptivo de las medidas propuestas extraídas de buenas prácticas de la industria, indicando el 'CÓMO' cumplir los requerimientos paso a paso, incluyendo preguntas orientativas.\n* **Relación MG-Apart**: Mapeo visual y matricial de cada medida recomendada con su apartado legal correspondiente.\n\nLas pestañas **operativas** (aquellas que requieren interacción de la entidad) son:\n* **Autoeval MG**: La entidad debe seleccionar el \"Nivel de dificultad percibido\" (Alto, Medio, Bajo) y el \"Nivel de madurez\" (una escala codificada de L1 a L8, que clasifica desde 'No documentada ni implementada' hasta 'Medida no necesaria'). En función de esta elección, el Excel actualiza automáticamente el Estado del Diagnóstico y arroja el hito correspondiente para el Plan de Adaptación.\n* **Medidas Adicionales (MA)**: Espacio habilitado para que las entidades propongan soluciones operativas propias no contempladas explícitamente en las guías técnicas. Estas medidas innovadoras deben documentarse y luego son evaluadas por la SEDIA (Estado: Pendiente, OK, o NO_OK).\n* **Relación MA-Apart**: Permite a los desarrolladores vincular las nuevas medidas adicionales propuestas con los apartados normativos específicos que mitigan, marcándolos con una 'X'.\n* **Autoeval MA**: Paso definitivo para evaluar la dificultad y madurez de estas medidas adicionales aportadas, operando con la misma lógica que la pestaña de Autoeval MG para completar íntegramente el autodiagnóstico."
          }
      ],
      "flashcards": [
          {
              "front": "¿Cuál es el doble objetivo de la fase de diagnóstico en el sandbox de IA?",
              "back": "Realizar un autodiagnóstico del sistema frente al Reglamento y diseñar un Plan de Adaptación (PDA)."
          },
          {
              "front": "¿Cuántas herramientas de checklist existen en total dentro del marco analizado?",
              "back": "Existen 12 herramientas de checklist, una por cada requisito normativo del RIA evaluado."
          },
          {
              "front": "¿Qué formato y estructura tiene la herramienta de checklist?",
              "back": "Es un documento Excel estructurado en 9 pestañas: 5 de carácter informativo y 4 operativas."
          },
          {
              "front": "¿Qué información se proporciona en la pestaña informativa 'Portada'?",
              "back": "Contiene un recordatorio obligatorio de confidencialidad y el contexto de uso de la herramienta para la SEDIA."
          },
          {
              "front": "¿Qué expone detalladamente la pestaña 'Medidas Guías (MG)'?",
              "back": "Las medidas basadas en buenas prácticas de la industria para facilitar el cumplimiento del RIA, junto a cuestiones orientativas."
          },
          {
              "front": "¿Qué dos valores cualitativos principales debe rellenar la entidad en la pestaña 'Autoeval MG'?",
              "back": "El 'Nivel de dificultad percibido' (Alto, Medio, Bajo) y el 'Nivel de madurez' (de L1 a L8)."
          },
          {
              "front": "¿Qué genera automáticamente la herramienta cuando se elige un 'Nivel de madurez'?",
              "back": "Actualiza el 'Estado Diagnóstico' a '01. Ya diagnosticada' y define el hito del 'Plan de adaptación'."
          },
          {
              "front": "¿Qué indica el nivel de madurez 'L8'?",
              "back": "Indica que la medida es 'No necesaria en mi sistema', por lo que el plan de adaptación marca '05. Ninguna adaptación requerida'."
          },
          {
              "front": "¿Para qué sirve la pestaña operativa 'Medidas Adicionales (MA)'?",
              "back": "Permite a las entidades proponer e incorporar medidas de cumplimiento alternativas basadas en su propia experiencia."
          },
          {
              "front": "¿Quién es el organismo encargado de validar y aprobar las 'Medidas Adicionales' (MA)?",
              "back": "La Secretaría de Estado de Digitalización e Inteligencia Artificial (SEDIA), consultando a expertos si es necesario."
          },
          {
              "front": "¿Cómo se vincula una Medida Adicional a un apartado del reglamento en la pestaña 'Relación MA-Apart'?",
              "back": "Marcando con una 'X' mayúscula la intersección entre el apartado normativo y la medida adicional."
          },
          {
              "front": "¿Qué acción se realiza en la última pestaña operativa, 'Autoeval MA'?",
              "back": "Se informa el nivel de dificultad y el nivel de madurez de las medidas adicionales aportadas, igual que se hace con las medidas guías."
          }
      ],
      "quiz": [
          {
              "question": "¿Cuál de los siguientes NO es uno de los objetivos del entorno controlado de pruebas (sandbox)?",
              "options": [
                  "Sancionar económicamente a los sistemas que no cumplan el RIA.",
                  "Aportar claridad sobre los requisitos establecidos en el Reglamento.",
                  "Validar la aplicabilidad de las guías técnicas puestas a disposición.",
                  "Transferir conocimiento sobre el cumplimiento a entidades de desarrollo."
              ],
              "correctAnswer": 0
          },
          {
              "question": "¿Cuál es la distribución exacta de las pestañas en el documento Excel de la checklist?",
              "options": [
                  "4 pestañas informativas y 5 operativas",
                  "5 pestañas informativas y 4 operativas",
                  "6 pestañas informativas y 3 operativas",
                  "3 pestañas informativas y 6 operativas"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué representa la columna 'Nivel de dificultad percibido' en la pestaña Autoeval MG?",
              "options": [
                  "El estado legal del sistema de Inteligencia Artificial.",
                  "El grado de cumplimiento formal exigido por la Comisión Europea.",
                  "La dificultad que la entidad entiende que tendría aplicar la medida (Alto, Medio o Bajo).",
                  "El porcentaje de inversión económica requerido para el proyecto."
              ],
              "correctAnswer": 2
          },
          {
              "question": "Si una empresa asigna un nivel de madurez 'L5. Documentada e Implementada', ¿qué valor tomará el Plan de adaptación?",
              "options": [
                  "01. Documentar e implementar",
                  "02. Implementar",
                  "04. Documentar",
                  "03. Adaptación completa"
              ],
              "correctAnswer": 3
          },
          {
              "question": "Si una empresa necesita informar sobre prácticas de su ecosistema que cumplen con el RIA pero no están en la guía, ¿qué pestaña utilizará?",
              "options": [
                  "Artículo RIA",
                  "Relación MG-Apart",
                  "Medidas Adicionales (MA)",
                  "Autoeval MG"
              ],
              "correctAnswer": 2
          },
          {
              "question": "¿Qué estados de evaluación emite la SEDIA frente a una Medida Adicional propuesta?",
              "options": [
                  "Aprobada, Suspendida, Prorrogada",
                  "Pendiente, OK, NO_OK",
                  "L1, L2, L3",
                  "Alto, Medio, Bajo"
              ],
              "correctAnswer": 1
          },
          {
              "question": "¿Qué tipo de pestaña es 'Relación MG-Apart' en la estructura del documento?",
              "options": [
                  "Informativa",
                  "Operativa",
                  "Evaluativa",
                  "De configuración técnica"
              ],
              "correctAnswer": 0
          },
          {
              "question": "¿Qué ocurre automáticamente con la columna 'Estado Diagnóstico' cuando se selecciona un valor de Nivel de madurez?",
              "options": [
                  "Se bloquea impidiendo la edición.",
                  "Se actualiza al valor '01. Ya diagnosticada'.",
                  "Borra las entradas de dificultad percibida.",
                  "Envía la información a la SEDIA por correo."
              ],
              "correctAnswer": 1
          },
          {
              "question": "De acuerdo con el manual, ¿cuál es el prefijo fijo utilizado en el identificador único de una medida sugerida por la empresa (ID Medida)?",
              "options": [
                  "MG (Medida Guía)",
                  "ID (Identificador)",
                  "RIA (Reglamento IA)",
                  "MA (Medida Adicional)"
              ],
              "correctAnswer": 3
          },
          {
              "question": "¿Qué se busca conseguir finalmente mediante la cumplimentación de todas las pestañas operativas de la checklist?",
              "options": [
                  "Reemplazar completamente el Reglamento Europeo de Inteligencia Artificial.",
                  "Configurar una red neuronal de caja negra.",
                  "Obtener los inputs para diseñar un Plan de Adaptación (PDA) personalizado.",
                  "Delegar la responsabilidad jurídica a la autoridad nacional."
              ],
              "correctAnswer": 2
          }
      ],
      "glossary": [
          {
              "term": "Plan de Adaptación (PDA)",
              "definition": "Plan de trabajo estructurado que la entidad ejecutará en una fase posterior para implementar las medidas necesarias que garanticen el cumplimiento del RIA."
          },
          {
              "term": "Checklist",
              "definition": "Herramienta operativa en formato Excel compuesta por pestañas informativas y operativas, utilizada para realizar el autodiagnóstico del cumplimiento normativo."
          },
          {
              "term": "Medidas Guías (MG)",
              "definition": "Conjunto de medidas técnicas y organizativas propuestas por la herramienta, extraídas de buenas prácticas de la industria para cumplir los requisitos legales."
          },
          {
              "term": "Medidas Adicionales (MA)",
              "definition": "Medidas de cumplimiento sugeridas directamente por las empresas participantes basadas en su experiencia, que no estaban contempladas originalmente en las guías."
          },
          {
              "term": "Nivel de madurez",
              "definition": "Métrica cualitativa (desde L1 hasta L8) que indica en qué punto de documentación e implementación se encuentra actualmente una medida en el sistema de IA."
          },
          {
              "term": "Nivel de dificultad percibido",
              "definition": "Valoración subjetiva de la entidad (00. Alto, 01. Medio, 02. Bajo) referente al esfuerzo técnico u organizativo que supondría aplicar una medida."
          },
          {
              "term": "Sandbox regulatorio",
              "definition": "Entorno controlado y supervisado que permite experimentar, testear marcos normativos, detectar riesgos tempranamente e impulsar una innovación tecnológica responsable."
          },
          {
              "term": "SEDIA",
              "definition": "Secretaría de Estado de Digitalización e Inteligencia Artificial, institución pública española encargada, entre otras labores, de validar las medidas adicionales en el sandbox."
          },
          {
              "term": "Autodiagnóstico",
              "definition": "Fase inicial donde las entidades evalúan su sistema de IA contra la checklist para descubrir la brecha técnica y operativa frente a la regulación europea."
          },
          {
              "term": "RIA",
              "definition": "Reglamento Europeo de Inteligencia Artificial (Reglamento UE 2024/1689), normativa comunitaria que establece obligaciones estrictas para los sistemas de IA de alto riesgo."
          }
      ]
  }
];
