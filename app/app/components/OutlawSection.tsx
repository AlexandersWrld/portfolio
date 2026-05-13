import Link from "next/link";
import Image from 'next/image'
import me from "../me.png"

export default function OutlawSection() {
  return (
    <section className="bg-carbon-black text-white py-24 px-6 md:px-12 border-t-8 border-jade-green overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* The Disruption / Headline Area */}
        <div className="relative z-10">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
            I see you & <br/> 
            Others should too.
          </h2>
          
          <p className="text-xl md:text-1xl text-zinc-400 font-medium max-w-lg mb-10 border-l-4 border-jade-green pl-6">
            I design web & brand identity projects that <br />
            help others see you the way you see yourself. 
          </p>
          
          <Link href="/projects" className="bg-white text-black font-black uppercase tracking-widest py-5 px-10 hover:bg-golden-pollen hover:text-black transition-colors duration-200">
            See my work
          </Link>
          
        </div>

        {/* Brutalist Visual Element */}
        <div className="relative w-full aspect-square md:aspect-auto md:h-[500px]">
          {/* Offset block for raw, unpolished look */}
          {/* Main image container */}
          <div className="relative h-full w-full p-8 flex flex-col justify-center items-center">
            {/* Replace this div with a Next.js <Image /> component */}
               <Image
                    src={me}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
            
            {/* Edgy decorative element */}
            <div className="absolute bottom-4 right-4 text-white font-mono text-sm tracking-tighter">
              // Alexander_Boyd_001
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}