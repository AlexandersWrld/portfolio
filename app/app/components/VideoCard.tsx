interface VideoCardProps {
  title: string;
  description: string;
  videoId: string; // e.g., "dQw4w9WgXcQ"
  tags: string[];
}

export default function VideoCard({ title, description, videoId, tags }: VideoCardProps) {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  const externalUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div className="flex flex-col border-4 border-zinc-800 bg-black group hover:border-golden-pollen transition-colors">
      <div className="bg-zinc-900 border-b-4 border-zinc-800 p-3 flex justify-between items-center">
        <div className="flex gap-2">
          <div className="w-4 h-4 bg-golden-pollen"></div>
          <div className="w-4 h-4 bg-zinc-600"></div>
          <div className="w-4 h-4 bg-zinc-600"></div>
        </div>
        <div className="font-mono text-xs text-zinc-500 uppercase">
          FEED_ID: {videoId}
        </div>
      </div>

      <div className="w-full aspect-video bg-zinc-950 relative border-b-4 border-zinc-800">
        <iframe 
          src={embedUrl} 
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h3 className="text-3xl font-black uppercase tracking-tighter text-white mb-2">
          {title}
        </h3>
        <p className="text-zinc-400 mb-8 flex-grow">
          {description}
        </p>

        <div className="mt-auto border-t-2 border-zinc-900 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="px-2 py-1 bg-zinc-900 text-zinc-500 font-mono text-xs uppercase border border-zinc-800">
                {tag}
              </span>
            ))}
          </div>
          <a 
            href={externalUrl} 
            target="_blank" 
            rel="noreferrer"
            className="text-golden-pollen font-black uppercase text-sm hover:text-white"
          >
            [ Watch Source ]
          </a>
        </div>
      </div>
    </div>
  );
}