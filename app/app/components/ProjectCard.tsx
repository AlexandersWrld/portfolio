import Link from "next/link";

export default function ProjectCard({ title, description, url, techStack }) {
  return (
    <div className="flex flex-col border-4 border-zinc-800 bg-black group hover:border-red-600 transition-colors duration-300">
      
      {/* Brutalist "Browser" Chrome */}
      <div className="bg-zinc-900 border-b-4 border-zinc-800 p-3 flex items-center justify-between">
        <div className="flex gap-2">
          {/* Square window controls instead of standard circles */}
          <div className="w-4 h-4 bg-red-600"></div>
          <div className="w-4 h-4 bg-zinc-600"></div>
          <div className="w-4 h-4 bg-zinc-600"></div>
        </div>
        <div className="font-mono text-xs text-zinc-500 tracking-widest truncate max-w-[200px] md:max-w-xs">
          TARGET: {url}
        </div>
      </div>

      {/* The Iframe Container */}
      <div className="relative w-full h-[400px] bg-zinc-950 overflow-hidden">
        {/* Loading placeholder text behind the iframe */}
        <div className="absolute inset-0 flex items-center justify-center font-mono text-zinc-600 text-sm animate-pulse">
          ESTABLISHING CONNECTION...
        </div>
        
        <iframe 
          src={url} 
          title={title}
          loading="lazy"
          className="absolute inset-0 w-full h-full border-none grayscale-[100%] group-hover:grayscale-0 transition-all duration-500 z-10 bg-white"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>

      {/* Project Info Details */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h3 className="text-3xl font-black uppercase tracking-tighter text-white mb-2">
          {title}
        </h3>
        
        <p className="text-zinc-400 font-medium mb-8 flex-grow">
          {description}
        </p>

        <div className="mt-auto border-t-2 border-zinc-800 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          
          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span key={tech} className="px-2 py-1 bg-zinc-900 text-zinc-400 font-mono text-xs uppercase border border-zinc-800">
                {tech}
              </span>
            ))}
          </div>

          {/* External Link */}
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-red-600 font-black uppercase tracking-widest text-sm hover:text-white hover:bg-red-600 px-4 py-2 transition-colors border-2 border-transparent hover:border-red-600"
          >
            VISIT [↗]
          </a>
        </div>
      </div>

    </div>
  );
}