import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-carbon-black text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 border-b-4 border-graphite pb-8">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            Personnel <span className="text-jade-green">Profile</span>
          </h2>
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-zinc-500 mt-4">
            // ID: ALEXANDER_BOYD_LOG_01
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-4 border-graphite">
          
          {/* Column 1: The Bio - Using Carbon Black and White Text */}
          <div className="lg:col-span-7 p-8 md:p-16 border-b-4 lg:border-b-0 lg:border-r-4 border-graphite bg-black">
            <h3 className="text-2xl font-black uppercase mb-8 inline-block border-b-4 border-golden-pollen pb-1">
              Background & Objective
            </h3>
            <div className="space-y-8 text-xl md:text-2xl font-bold leading-tight text-zinc-300">
              <p>
                I operate at the intersection of aesthetics and functionality. I went to college for the computers, but I was an artist first, and that bleeds into everything that I create.
              </p>
              <p>
                I’ve spent the last few years learning the tips and tools of the trade and I've refined a style that is uniquely me. A style that rejects the generic.
              </p>
            </div>
          </div>

          {/* Column 2: Sidebar - Tonal Contrast with Graphite */}
          <div className="lg:col-span-5 flex flex-col bg-carbon-black">
            
            {/* Status Sub-box */}
            <div className="p-8 border-b-4 border-graphite bg-graphite/30">
              <div className="grid grid-cols-2 gap-6 font-mono text-xs uppercase tracking-tighter">
                <div>
                  <p className="text-zinc-500 mb-1">Top Skills</p>
                  <p className="font-bold text-white text-base">Next.js, Node.js, SQL, Adobe, Creative Suite, Cloud Computing</p>
                </div>
                <div>
                  <p className="text-zinc-500 mb-1">Availability</p>
                  <p className="font-bold text-scarlet text-base">Active_Status</p>
                </div>
              </div>
            </div>

            {/* Methodology List */}
            <div className="p-8 md:p-12 flex-grow">
              <h3 className="text-xl font-black uppercase mb-8 text-zinc-400 font-mono text-sm tracking-widest">// Where to find me</h3>
              <ul className="space-y-10">
                <li className="flex gap-6">
                  <span className="text-4xl font-black text-graphite">01</span>
                  <div>
                    <Link href="https://www.linkedin.com/in/alexanderboydjm" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-black font-black uppercase tracking-widest py-3 px-4 hover:bg-golden-pollen hover:text-black transition-colors duration-200">
                        LinkedIn
                    </Link>
                  </div>
                </li>
                <li className="flex gap-6">
                  <span className="text-4xl font-black text-graphite">02</span>
                  <div>
                    <Link 
                    href="https://github.com/AlexandersWrld"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-black font-black uppercase tracking-widest py-3 px-4 hover:bg-jade-green hover:text-black transition-colors duration-200">
                        GitHub
                    </Link>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Footer Accent */}
        <div className="mt-12 flex justify-between items-center opacity-50">
           <p className="font-mono text-[10px] uppercase tracking-[0.5em]">
             System_Verification_Complete
           </p>
           <div className="flex gap-1">
             {[...Array(4)].map((_, i) => (
               <div key={i} className="w-2 h-6 bg-graphite"></div>
             ))}
           </div>
        </div>

      </div>
    </section>
  );
}