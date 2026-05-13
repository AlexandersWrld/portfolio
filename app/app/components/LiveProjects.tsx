import ProjectCard from "../components/ProjectCard";

export default function LiveProjects() {
  const projects = [
    {
      id: 1,
      title: "Worldwide Solutions Corp Website",
      description: "Corporate website with contact form & AI chat assistant.",
      url: "https://www.worldwide-corp.com/en",
      techStack: ["Next.js", "PHP", "MariaDB"]
    },
    {
      id: 2,
      title: "Marina Samuels Senate President Campaign",
      description: "A campaign website built for former Student Senate President.",
      url: "https://marinaforpresident.github.io/campaign/",
      techStack: ["React", "JavaScript"]
    },
    {
      id: 3,
      title: "Adisa Media Website",
      description: "Website design project.",
      url: "https://alexanderswrld.github.io/WebProject-AdisaMedia/index.html",
      techStack: ["JavaScript", "Bootstrap", "CSS"]
    },
    {
      id: 4,
      title: "TRG Sensei Website",
      description: "Website with lightweight CMS for streaming.",
      url: "https://trgsensei.com/",
      techStack: ["Next.js", "JavaScript", "Supabase"]
    }
  ];

  return (
    <div className="min-h-screen bg-black py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl text-white font-black uppercase tracking-tighter mb-12 border-l-8 border-red-600 pl-6">
          Live Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}