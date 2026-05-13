import VideoCard from "./VideoCard";

export default function VideoPage() {
  const videos = [
    {
      id: 1,
      title: "Cryptera Cryptocurrency Trading App Demo",
      description: "A fullstack application using real time cryptocurrency data",
      videoId: "wlYu7XwNw_E",
      tags: ["React", "Node.js", "RabbitMQ", "Springboot"]
    },
    {
      id: 2,
      title: "E-Commerce Store Demo",
      description: "An online storefront project built in PHP.",
      videoId: "_4F-7rAIrCY", 
      tags: ["PHP", "SQL", "JavaScript"]
    }
  ];

  return (
    <div className="min-h-screen bg-carbon-black py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl text-white font-black uppercase tracking-tighter mb-12 border-l-8 border-golden-pollen pl-6">
          Video Demonstrations
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </div>
    </div>
  );
}