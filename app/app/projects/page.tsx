import LiveProjects from "../components/LiveProjects";
import VideoPage from "../components/VideoSection";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="w-full min-h-screen bg-zinc-50 font-sans dark:bg-black">
        
        <div className="w-full bg-carbon-black py-12 px-6 md:px-12">
            <div className="max-w-6xl mx-auto space-y-4">

            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-zinc-100">
            "The meat & potatoes"
            </h2>

            <p className="text-xl md:text-1xl text-white font-medium mb-10 border-l-4 border-jade-green pl-6">
            It wouldn't be a portfolio website without the portfolio. I've spent the last half decade sharpening my skills in graphic
            design, web development and app development, and I'm proud to say I've come away with a few pieces worth showing to the world.
            You're here to see my work, so here is a list of projects that I've worked on over the years. (This isn't everything, but these are a few favorites!)
          </p>

            <Link 
              href="#video-section" 
              className="inline-block bg-white text-black font-black uppercase tracking-widest py-5 px-10 hover:bg-golden-pollen hover:text-black transition-colors duration-200"
            >
                Jump to video demos
            </Link>
            </div>
        </div>

        <div className="w-full">
            <LiveProjects />        
        </div>

        <div className="w-full bg-carbon-black" id="video-section">
            <VideoPage />
        </div>
        
    </div>
  );
}