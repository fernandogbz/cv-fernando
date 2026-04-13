export type Data = {
  cvLanguage: "spanish" | "english";
  name: string;
  location?: string;
  phone: string;
  email: string;
  linkedin: string;
  github?: string;
  website?: string;
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
  phone: "+56958220368",
  email: "fgjv06@gmail.com",
  linkedin: "linkedin.com/in/fernandogbz",
  github: "fernandogbz",
  website: "portfolio-fernandogbz.pages.dev",
  summary:
    "25 años, programador Fullstack hace más de 4 años, comprometido con la mejora en todos los aspectos de mi vida, proactivo, responsable, amigable, excelente manejo de las relaciones interpersonales, amante de los retos y dispuesto a aportar ideas / soluciones para el desarrollo de tu proyecto. Además soy filmmaker, fotógrafo y diseñador, esta faceta creativa complementa mi enfoque analítico y técnico en el desarrollo y diseño web, permitiéndome crear soluciones innovadoras y visualmente atractivas.",
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
        "Realicé proyectos prácticos aplicando técnicas avanzadas de programación y resolviendo desafíos de complejidad creciente.",
        "Enfrenté tareas que requieren la identificación de requisitos y la satisfacción de necesidades del usuario, aplicando un enfoque en el análisis ágil.",
        "Consolidé competencias transversales como el trabajo en equipo, la identificación y resolución de problemas, así como la comunicación efectiva, mejorando la colaboración en proyectos y la interacción con otros profesionales y clientes en diferentes contextos.",
        "Me preparé en temas de emprendimiento, innovación y gestión de proyectos, enfocándome en el aprendizaje continuo para responder a la evolución constante de la industria, permitiéndome adaptarme al entorno laboral y contribuir con soluciones tecnológicas en el mercado.",
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
        "Adquirí un sólido dominio del ciclo de vida completo del desarrollo de software, desde el diseño hasta la implementación, logrando crear sistemas que son robustos, seguros y eficientes; gracias a un programa de estudio que considera 320 horas académicas.",
        "Comprendí, diseñé e implementé algoritmos eficientes, así como la aplicación de patrones de diseño y buenas prácticas de programación.",
        "Desarrollé aplicaciones web utilizando Java (Spring), JavaScript y MySQL para almacenar y gestionar información de manera eficiente, lo que permite el desarrollo tanto de back-end como de front-end, así como la familiaridad con diversas herramientas, frameworks y paquetes.",
        "Implementé diseños responsivos y que garantizan la compatibilidad entre navegadores.",
        "Diseñé y normalicé esquemas de bases de datos, estableciendo relaciones entre entidades para garantizar la integridad de los datos, al igual que realizar búsquedas y filtrados eficientes.",
        "Colaboré con equipos multifuncionales, incluidos facilitadores, profesores y otros desarrolladores, fomentando la generación de ideas y la resolución conjunta de problemas.",
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
        "Aprendí a utilizar herramientas de desarrollo y entornos de programación, para escribir y ejecutar código, depurar errores y optimizar la eficiencia del código.",
        "Colaboré en grupos, potenciando la resolución de problemas en conjunto y el aprendizaje en equipo.",
      ],
    },
    {
      id: "experience-4",
      name: "Proyectos Personales (Para más información, visita mi GitHub)",
      title: "Desarrollador Web",
      location: "Los Ángeles, Chile",
      startDate: "Marzo 2022",
      endDate: "Actualidad",
      activities: [
        "Aplicación web para controlar gastos, permite al usuario ingresar un presupuesto, agregar, editar, eliminar gastos y filtrarlos por categoría. Muestra el balance entre el presupuesto y los gastos, y el porcentaje de gastos en cada categoría.",
        "Página web para buscar y descargar imágenes de stock, inspirada en el sitio web de Pexels. Integré una api que me permitía acceder a miles de imágenes de alta calidad y libres de derechos.",
        "Plataforma web que permite a los usuarios buscar, reservar y pagar cabañas, para un complejo turístico llamado Cabañas Río Coreo, proporcionando una solución conveniente y eficiente para las necesidades del cliente.",
      ],
    },
  ],
  education: [
    {
      id: "education-1",
      name: "Instituto Nacional de Capacitación Profesional de Chile (Inacap)",
      title: "Analista Programador",
      location: "Los Ángeles, Chile",
      startDate: "Marzo 2024",
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
      "Next.js",
      "Three.js",
      "Redux",
      "Shadcn/UI",
      "Framer Motion",
      "Zod",
      "React Hook Form",
      "Zustand",
      "TypeScript",
      "Node.js",
      "Express",
      "Java",
      "Spring Boot",
      "Python",
      "Django",
      "NoSQL (MongoDB)",
      "SQL (MySQL, Oracle, SQL Server)",
      "Diseño (UI/UX)",
      "Metodologías Ágiles (Scrum, Kanban)",
      "Prompt Engineering",
      "MCP (Model Context Protocol)",
      "Automatización de Workflows",
    ],
    softs: [
      "Inglés (C2 - Avanzado)",
      "Trabajo en Equipo",
      "Buena comunicación",
      "Resolución de problemas",
      "Adaptabilidad",
      "Proactividad",
      "Responsabilidad",
      "Mejora continua",
      "Pensamiento crítico",
    ],
    tools: [
      "VS Code",
      "Git",
      "GitHub",
      "Postman",
      "XAMPP",
      "MySQL Workbench",
      "MongoDB Compass",
      "Docker",
      "VirtualBox",
      "VMware",
      "Cloudflare",
      "Firebase",
      "Supabase",
      "Netlify",
      "Vercel",
      "Heroku",
      "Railway",
      "n8n",
      "Make",
      "Twilio",
      "Trello",
      "Appwrite",
      "WordPress",
      "Figma",
      "Canva",
      "Adobe XD",
      "Photoshop",
      "Illustrator",
      "Premiere Pro",
      "After Effects",
    ],
  },
};

export const language: boolean = data.cvLanguage === "english";
