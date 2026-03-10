# 📚 Guías AESIA — Plataforma de Aprendizaje Interactivo

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=for-the-badge&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-EE4B96?style=for-the-badge&logo=framer)

**Plataforma educativa interactiva para el estudio de las Guías Técnicas de la AESIA (Agencia Española de Supervisión de la Inteligencia Artificial)**

[🚀 Características](#-características) · [🏗️ Arquitectura](#️-arquitectura) · [🎮 Módulos de Juego](#-módulos-de-juego-interactivo) · [🌍 Idiomas](#-soporte-multiidioma) · [⚡ Instalación](#-instalación-y-puesta-en-marcha)

</div>

---

## 🎯 ¿Qué es Guías AESIA?

**Guías AESIA** es una aplicación web moderna y visual que transforma la lectura de las **Guías Técnicas oficiales de la AESIA** (Agencia Española de Supervisión de la Inteligencia Artificial) en una experiencia de aprendizaje gamificada e interactiva.

La aplicación está diseñada para que tanto profesionales del sector tecnológico como ciudadanos interesados puedan comprender de forma rápida y entretenida los principios, requisitos y obligaciones del **Reglamento Europeo de Inteligencia Artificial (AI Act)** y las guías técnicas que lo desarrollan.

---

## ✨ Características

- 🎨 **Diseño premium Dark Mode** — Interfaz moderna con glassmorphism, gradientes y micro-animaciones fluidas
- 📖 **Guías Técnicas completas** — Contenido basado en los documentos oficiales de la AESIA
- 🃏 **Flashcards interactivas** — Sistema de tarjetas de memoria para repasar conceptos clave
- 🧠 **Quiz interactivo** — Cuestionarios de opción múltiple con retroalimentación inmediata
- 📘 **Glosario visual** — Definición de términos técnicos con navegación sencilla
- 🎮 **Juegos Educativos** — Módulos de gamificación: Escape Room, Pasapalabra y Aventura
- 📊 **Zona de Entrenamiento** — Panel gamificado con seguimiento de progreso
- 🌍 **Multiidioma** — Disponible en Español, Gallego, Euskera y Catalán
- 📱 **Totalmente responsive** — Experiencia óptima en escritorio, tablet y móvil

---

## 🏗️ Arquitectura

```
aesia-course/
├── app/                        # Rutas de Next.js (App Router)
│   ├── page.tsx                # Página principal con HeroSection y catálogo de guías
│   ├── layout.tsx              # Layout global con providers de idioma
│   ├── globals.css             # Estilos globales y variables de diseño
│   ├── guides/
│   │   └── [id]/               # Ruta dinámica para cada guía
│   │       ├── page.tsx        # Vista principal de la guía (contenido + componentes)
│   │       ├── flashcards/     # Módulo de flashcards de la guía
│   │       ├── quiz/           # Módulo de cuestionario de la guía
│   │       └── glossary/       # Glosario de términos de la guía
│   ├── aventura/               # Juego de aventura de texto
│   ├── escape-room/            # Juego tipo Escape Room temático
│   └── pasapalabra/            # Juego tipo Pasapalabra con terminología AESIA
│
├── components/                 # Componentes React reutilizables
│   ├── HeroSection.tsx         # Cabecera principal animada
│   ├── HeroScene.tsx           # Escena 3D/visual del héroe
│   ├── GuideCard.tsx           # Tarjeta de cada guía en el catálogo
│   ├── GuideContent.tsx        # Renderizado del contenido de una guía
│   ├── GuideDetails.tsx        # Vista detallada con navegación por secciones
│   ├── FlashcardDeck.tsx       # Mazo de flashcards interactivo
│   ├── QuizModule.tsx          # Motor de cuestionario con puntuación
│   ├── GuideGlossary.tsx       # Glosario visual con búsqueda
│   ├── TrainingZone.tsx        # Panel gamificado de entrenamiento
│   ├── EscapeRoomGame.tsx      # Lógica del juego Escape Room
│   ├── PasapalabraGame.tsx     # Lógica del juego Pasapalabra
│   ├── LanguageProvider.tsx    # Contexto de internacionalización (i18n)
│   ├── LanguageSwitcher.tsx    # Selector de idioma en la navbar
│   ├── Navbar.tsx              # Barra de navegación principal
│   ├── RiskClassifier.tsx      # Visualizador interactivo de clasificación de riesgos
│   ├── RiskMatrix.tsx          # Matriz de riesgos visual
│   ├── ConformityRoadmap.tsx   # Hoja de ruta de conformidad interactiva
│   └── ...más componentes visuales temáticos
│
├── lib/                        # Lógica de negocio y datos
│   ├── data/
│   │   ├── es.ts               # Datos completos de las guías en Español
│   │   ├── gl.ts               # Datos en Gallego
│   │   ├── eu.ts               # Datos en Euskera
│   │   ├── ca.ts               # Datos en Catalán
│   │   └── index.ts            # Exportaciones y función getGuides()
│   ├── i18n/                   # Traducciones de la interfaz de usuario
│   ├── aventuraData.ts         # Datos del juego de aventura
│   ├── escapeRoomData.ts       # Datos del juego Escape Room
│   └── pasapalabraData.ts      # Datos del juego Pasapalabra
│
└── public/                     # Recursos estáticos (imágenes, iconos)
```

---

## 📚 Guías Técnicas Cubiertas

La aplicación incluye contenido de las principales Guías Técnicas publicadas por la AESIA:

| # | Guía | Temática |
|---|------|----------|
| 01 | Gestión de Riesgos en Sistemas de IA | Identificación, análisis y mitigación de riesgos |
| 02 | Datos y Gobernanza de Datos | Calidad de datos, trazabilidad y gobernanza |
| 03 | Transparencia e Información a Usuarios | Obligaciones de información y explicabilidad |
| 04 | Supervisión Humana | Mecanismos de control y supervisión humana |
| 05 | Exactitud, Robustez y Ciberseguridad | Fiabilidad técnica y resiliencia de sistemas IA |
| 06 | Post-Mercado y Seguimiento | Monitorización y actualizaciones post-despliegue |
| ... | Y más guías en expansión continua | ... |

---

## 🎮 Módulos de Juego Interactivo

### 🃏 Flashcards
Sistema de tarjetas de doble cara (pregunta/respuesta) para memorizar conceptos clave de cada guía. Con animación de giro y seguimiento de respuestas correctas.

### 🧠 Quiz
Cuestionarios de **opción múltiple** con 4 alternativas por pregunta. Muestra la puntuación final, resaltando las respuestas correctas e incorrectas con explicaciones.

### 📘 Glosario
Diccionario visual de términos técnicos de regulación IA con búsqueda en tiempo real y ordenación alfabética.

### 🔐 Escape Room
Juego temático de resolución de puzzles ambientado en el mundo de la conformidad con el AI Act. El jugador debe superar retos de conocimiento para "escapar".

### 🔤 Pasapalabra
Clásico juego de letras adaptado con terminología de la AESIA. Pon a prueba tu vocabulario regulatorio de forma divertida.

### 🗺️ Aventura de Texto
Juego de rol narrativo donde el jugador toma decisiones en escenarios hipotéticos de deploying de sistemas IA y debe elegir las respuestas conformes al reglamento.

---

## 🌍 Soporte Multiidioma

La aplicación está disponible en **4 idiomas oficiales** de España:

| Idioma | Código | Estado |
|--------|--------|--------|
| 🇪🇸 Español | `es` | ✅ Completo |
| 🏴󠁧󠁢󠁥󠁮󠁧󠁿 Gallego | `gl` | ✅ Completo |
| 🌿 Euskera | `eu` | ⚙️ En progreso |
| 🔴 Catalán | `ca` | ⚙️ En progreso |

---

## ⚡ Instalación y Puesta en Marcha

### Prerrequisitos

- **Node.js** `>= 18.x`
- **npm** `>= 9.x` (o pnpm / yarn)

### Pasos

```bash
# 1. Clona el repositorio
git clone https://github.com/TU_USUARIO/GuiasAesia.git
cd GuiasAesia

# 2. Instala las dependencias
npm install

# 3. Inicia el servidor de desarrollo
npm run dev
```

La aplicación estará disponible en **[http://localhost:3000](http://localhost:3000)**

### Construcción para producción

```bash
# Genera el build optimizado de producción
npm run build

# Inicia el servidor de producción
npm start
```

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| **Next.js** | 16 | Framework React con App Router |
| **React** | 19 | Librería de interfaz de usuario |
| **TypeScript** | 5 | Tipado estático |
| **TailwindCSS** | 4 | Sistema de diseño utility-first |
| **Framer Motion** | 12 | Animaciones fluidas y transiciones |
| **Three.js / R3F** | 0.182 | Escenas 3D en el HeroScene |
| **Lucide React** | 0.563 | Iconografía moderna |
| **Radix UI** | 1.2 | Componentes accesibles sin estilo |

---

## 📄 Licencia

Este proyecto es de uso educativo y está orientado a la divulgación de las Guías Técnicas de la AESIA. El contenido regulatorio pertenece a sus respectivos autores institucionales.

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas ampliar el contenido de alguna guía, añadir un nuevo idioma o mejorar algún módulo de juego, abre un *Issue* o envía un *Pull Request*.

---

<div align="center">
Construido con ❤️ para la divulgación de la regulación de IA en España
</div>
