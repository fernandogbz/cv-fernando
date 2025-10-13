import { Section, SectionTitle } from "@/components/ui/";
import { Linkedin, MapPin, Mail, Phone, Github, Globe } from "lucide-react";
import { data, language } from "@/data/data";
import "./App.css";

function App() {
  const {
    name,
    location,
    phone,
    email,
    linkedin,
    github,
    website,
    summary,
    skills,
    experience,
    education,
  } = data;
  return (
    <main className="w-[81.6rem] h-[105.462rem] mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold text-center mb-1">{name}</h1>
      <p className="text-lg font-semibold text-theme mb-4 flex items-center justify-center gap-3">
        {location && (
          <>
            <span className="flex items-center gap-2">
              <MapPin size={12} />
              {location}
            </span>
            <span>|</span>
          </>
        )}
        <a
          className="flex items-center gap-2"
          href={`tel:${phone.trim()}`}
          target="_blank"
        >
          <Phone size={12} />
          {phone}
        </a>
        <span>|</span>
        <a
          className="flex items-center gap-2"
          href={`mailto:${email}`}
          target="_blank"
        >
          <Mail size={12} />
          {email}
        </a>
        <span>|</span>
        <a
          className="flex items-center gap-2"
          href={`https://www.${linkedin}`}
          target="_blank"
        >
          <Linkedin size={12} />
          {linkedin}
        </a>
        {github && (
          <>
            <span>|</span>
            <a
              className="flex items-center gap-2"
              href={`https://github.com/${github}`}
              target="_blank"
            >
              <Github size={12} />
              {`github.com/${github}`}
            </a>
          </>
        )}
        {website && (
          <>
            <span>|</span>
            <a
              className="flex items-center gap-2"
              href={`https://${website}`}
              target="_blank"
            >
              <Globe size={12} />
              {website}
            </a>
          </>
        )}
      </p>
      <SectionTitle title={language ? "PROFILE" : "PERFIL"} />
      <p className="text-base mb-2">{summary}</p>
      <Section title={language ? "SKILLS" : "HABILIDADES"} items={skills} />
      <Section
        title={language ? "EXPERIENCE" : "EXPERIENCIA"}
        items={experience}
      />
      <Section title={language ? "EDUCATION" : "EDUCACIÓN"} items={education} />
    </main>
  );
}

App.displayName = "App";

export default App;
