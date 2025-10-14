# 📝 React CV Master Template

¡Bienvenido a **React CV Master Template**! 🚀 Este proyecto te ayuda a crear un CV personalizado y profesional utilizando **React**, **TypeScript**, **Vite** y **TailwindCSS**. Solo necesitas agregar tu información en un archivo data.ts, ver los cambios en tiempo real y descargar tu CV en formato PDF desde el navegador.

---

## 🛠️ Tecnologías

Este proyecto está construido con:

- ⚡ **Vite**: Para un entorno de desarrollo rápido.
- ⚛️ **React**: Para construir la interfaz.
- 🔷 **TypeScript**: Para un código más robusto.
- 📚 **Shadcn**: Para componentes UI.
- 🎨 **TailwindCSS**: Para un diseño elegante y personalizable.

---

## 🚀 Cómo empezar

### 1️⃣ Clona el repositorio

```bash
# Clona el repositorio en tu máquina local
git clone https://github.com/fernandogbz/cv-fernando.git
```

### 2️⃣ Instala las dependencias

```bash
# Ve al directorio del proyecto
cd cv-master

# Instala las dependencias
npm install
```

### 3️⃣ Inicia el proyecto

```bash
# Levanta el servidor de desarrollo
npm run dev

# Abre el proyecto en tu navegador
http://localhost:5173
```

---

## 📂 Estructura del proyecto

```plaintext
react-cv-template/
├── src/
│   ├── components/ui      # Componentes reutilizables (como secciones y títulos)
│   ├── data/            # Archivo JSON para tu información
│   ├── lib/            # Archivo que contiene utilidades para el código
│   ├── App.tsx          # Punto de entrada principal
│   ├── index.css          # Aquí podrás cambiar el color del tema del CV '--theme-color'
│   └── ...              # Otros archivos
├── public/              # Archivos públicos
├── package.json         # Dependencias y scripts
├── vite.config.ts       # Configuración de Vite
└── README.md            # Este archivo 😎
```

---

## ✏️ Cómo personalizar tu CV

1. Ve al archivo `src/data/data.ts`.
2. Llena los campos respetando el formato.
3. Puedes elegir el lenguaje del cv entre: `english` o `spanish`.
4. Para cambiar el color del tema del CV, edita el archivo `src/index.css`. Asegúrate de utilizar el formato `hsl` para el color. Si necesitas convertir otro formato a hsl, puedes usar este <a href="https://www.w3schools.com/colors/colors_converter.asp" target="_blank" rel="noopener noreferrer">conversor</a> de colores.

### Ejemplo de estructura del archivo `data.ts`:

```json
{
	"cvLanguage": "english",
	"name": "John Doe",
	"location": "City, Country",
	"phone": "+1 234 567 890",
	"email": "john.doe@example.com",
	"linkedin": "linkedin.com/in/johndoe",
	"summary": "A highly skilled Software Engineer with extensive experience in web development, project management, and team leadership. Adept at driving innovation and delivering high-quality solutions to meet business objectives.",
	"experience": [
		{
			"id": "experience-1",
			"name": "Tech Corp",
			"title": "Senior Software Engineer",
			"location": "City, Country",
			"startDate": "January 2020",
			"endDate": "Present",
			"activities": [
				"Led the development of a robust web application, significantly improving performance.",
				"Mentored junior developers to foster growth and knowledge sharing.",
				"Implemented agile processes that enhanced project delivery and team collaboration."
			]
		},
		{
			"id": "experience-2",
			"name": "Dev Solutions",
			"title": "Software Engineer",
			"location": "City, Country",
			"startDate": "June 2017",
			"endDate": "December 2019",
			"activities": [
				"Developed and maintained client-facing applications with high usability.",
				"Collaborated with cross-functional teams to meet project deadlines effectively."
			]
		},
		{
			"id": "experience-3",
			"title": "Junior Software Engineer",
			"startDate": "June 2017",
			"endDate": "December 2019",
			"activities": [
				"Developed and maintained client-facing applications with high usability.",
				"Collaborated with cross-functional teams to meet project deadlines effectively."
			]
		}
	],
	"education": [
		{
			"id": "education-1",
			"name": "University of Technology",
			"title": "Bachelor of Science in Computer Science",
			"location": "City, Country",
			"endDate": "May 2017"
		}
	],
	"skills": {
		"technical": ["JavaScript (ES6+)", "TypeScript", "React", "HTML5", "CSS3"],
		"softs": ["Teamwork", "Communication", "Problem Solving"],
		"tools": ["Git", "GitHub", "VS Code"]
	}
}
```

1. Guarda los cambios y recarga la página en tu navegador para ver tu CV actualizado.

---

## 📄 Cómo descargar tu CV

1. Abre tu CV en el navegador.
2. Usa la opción de **imprimir** (`Ctrl + P` o `Cmd + P`).
3. Selecciona **Guardar como PDF**.
4. ¡Listo! Ahora tienes un CV profesional que puedes compartir. 🥳

---

## 🎨 Personalización adicional

Si quieres personalizar el diseño del CV:

1. Ve a los archivos en `src/components` y ajusta los componentes según tus necesidades.
2. Modifica los estilos en cada componente.

---

## 🐛 Problemas o feedback

Si encuentras un error o tienes sugerencias para mejorar el proyecto, ¡estamos encantados de escucharte! Puedes crear un issue en el repositorio o abrir un PR directamente. 💡

---

## 📜 Licencia

Este proyecto está bajo la licencia [MIT](LICENSE). Puedes usarlo libremente para tus proyectos personales o profesionales. ✨

---

## 🌟 ¡Contribuye!

¿Tienes ideas para mejorar este template? ¡No dudes en contribuir! Haz un fork del proyecto, realiza tus cambios y envía un pull request. 🙌

---

## 🙌 Gracias

Gracias por usar este template. ¡Espero que te ayude a crear el CV perfecto! 💼
