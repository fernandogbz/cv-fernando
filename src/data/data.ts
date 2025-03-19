export type Data = {
  cvLanguage: "spanish" | "english";
  name: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  summary: string;
  experience: Item[];
  education: Item[];
  skills: Skills;
};

export type Item = {
  id: string;
  name?: string;
  title: string;
  location?: string;
  startDate?: string;
  endDate: string;
  activities?: string[];
};

export type Skills = {
  technical: string[];
  tools: string[];
  softs: string[];
};

export type ResumeSections = Array<Item> | Skills;

export const data: Data = {
  cvLanguage: "spanish",
  name: "Fernando Jiménez",
  location: "Los Ángeles, Chile",
  phone: "+56 9 5822 0368",
  email: "fgjv06@gmail.com",
  linkedin: "linkedin.com/in/fernandogbz",
  summary:
    "24 años, actualmente estudiando desarrollo web hace más de dos años, comprometido con la mejora en todos los aspectos de mi vida, proactivo, responsable, amigable, excelente manejo de las relaciones interpersonales, mostrando la capacidad para generar relaciones de confianza, amante de los retos y dispuesto a aportar ideas / soluciones para el desarrollo de tu proyecto.",
  experience: [
    {
      id: "experience-3",
      name: "Instituto Nacional de Capacitación Profesional de Chile (Inacap)",
      title: "Analista Programador",
      location: "Los Ángeles, Chile",
      startDate: "Marzo 2024",
      endDate: "Actualidad",
      activities: [
        "Desarrollé habilidades de análisis y programación de aplicaciones en diversas plataformas tecnológicas, así como la creación y diagramación de componentes de sistemas informáticos utilizando metodologías ágiles, entregando soporte y mantención, y realizando pruebas de calidad y protección de la información.",
        "Adquirí una sólida base en pensamiento lógico y matemático, lo cual fortalece mi capacidad de análisis y resolución de problemas.",
        "Diseñé, programé y gestioné estructuras de bases de datos, normalizando esquemas y estableciendo relaciones entre entidades, para el desarrollo adecuado de componentes de sistemas de acuerdo con las necesidades del negocio.",
        "Configuré y preparé entornos operativos, permitiendo establecer infraestructuras tecnológicas robustas y soluciones de software en base a componentes nuevos y/o existentes, adaptados de acuerdo con el ciclo de vida y las necesidades del desarrollo seguro del software.",
        "Me familiaricé con el desarrollo de sistemas multiplataforma, siguiendo estándares de la industria para garantizar la compatibilidad entre hardware y software.",
        "Realicé proyectos prácticos en los que apliqué técnicas avanzadas de programación, resolviendo desafíos de complejidad creciente y reforzando las competencias técnicas.",
        "Enfrenté tareas que requieren la identificación de requisitos y la satisfacción de necesidades del usuario, aplicando un enfoque en el análisis ágil.",
        "Consolidé competencias transversales como el trabajo en equipo, la identificación y resolución de problemas, así como la comunicación efectiva, mejorando la colaboración en proyectos y la interacción con otros profesionales y clientes en diferentes contextos.",
        "Me preparé en temas de emprendimiento, innovación y gestión de proyectos,enfocandome en el aprendizaje y la actualización continua de mis conocimientos para responder a la evolución constante de la industria, permitiendome adaptarme al entorno laboral y contribuir con soluciones tecnológicas en el mercado.",
      ],
    },
    {
      id: "experience-2",
      name: "Coding Dojo - Forge",
      title: "Desarrollador Full Stack Java",
      location: "Los Ángeles, Chile",
      startDate: "Enero 2024",
      endDate: "Junio 2024",
      activities: [
        "Adquirí un sólido dominio del ciclo de vida completo del desarrollo de software, desde el diseño hasta la implementación, mediante el desarrollo de actividades prácticas y la elaboración de proyectos, logrando crear sistemas que son robustos, seguros y eficientes; gracias a un programa de estudio intensivo que considera 320 horas académicas.",
        "Comprendí, diseñé e implementé algoritmos eficientes, así como la aplicación de patrones de diseño y buenas prácticas de programación.",
        "Desarrollé aplicaciones web utilizando Java (Spring), JavaScript y MySQL para almacenar y gestionar información de manera eficiente, lo que permite el desarrollo tanto de back-end como de front-end, así como la familiaridad con diversas herramientas, frameworks y paquetes, los cuales agilizan los procesos y mejoran la calidad del código",
        "Implementé diseños responsivos y que garantizan la compatibilidad entre navegadores.",
        "Diseñé y normalicé esquemas de bases de datos, estableciendo relaciones entre entidades para garantizar la integridad de los datos, al igual que realizar búsquedas y filtrados eficientes.",
        "Colaboré con equipos multifuncionales, incluidos facilitadores, profesores y otros desarrolladores, fomentando la generación de ideas y la resolución conjunta de problemas.",
        "Participé en revisiones de código y brindé comentarios constructivos a otros desarrolladores.",
      ],
    },
    {
      id: "experience-1",
      name: "Egg Educación",
      title: "Programación desde Cero",
      location: "Los Ángeles, Chile",
      startDate: "Agosto 2022",
      endDate: "Octubre 2022",
      activities: [
        "Adquirí nociones de fundamentos de programación aplicados de forma práctica.",
        "Impulsé el desarrollo de mi pensamiento lógico, permitiendome estructurar algoritmos en pseudocódigo, aplicando conceptos clave de programación como variables, tipos de datos, condicionales, bucles y funciones para resolver problemas secuencialmente.",
        "Aprendí a utilizar herramientas de desarrollo y entornos de programación, para escribir y ejecutar código, depurar errores y optimizar la eficiencia de los programas.",
        "Participé activamente en clases en vivo, siguiendo lecciones en tiempo real.",
        "Colaboré en grupos, potenciando la resolución de problemas en conjunto y el aprendizaje en equipo.",
      ],
    },
  ],
  education: [
    {
      id: "education-1",
      name: "Instituto Nacional de Capacitación Profesional de Chile (Inacap)",
      title: "Analista Programador",
      location: "Los Ángeles, Chile",
      startDate: "March 2024",
      endDate: "Actualidad",
    },
  ],
  skills: {
    technical: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "JavaScript (ES6+)",
      "React",
      "Java",
      "Spring Boot",
      "Python (Tkinter)",
      "SQL (MySQL, Oracle, SQL Server)",
    ],
    softs: ["Teamwork", "Communication", "Problem Solving"],
    tools: ["Git", "GitHub", "VS Code"],
  },
};

export const language: boolean = data.cvLanguage === "english";
