export default function ProofSection() {
  return (
    <section className="bg-zinc-950 text-white py-20 px-6 md:px-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-4 border-zinc-800 pb-6">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-zinc-100">
            The <span className="text-scarlet">Proof</span> is in the Pudding
          </h2>
          <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest max-w-xs">
            // How I can help you.
          </p>
        </div>

        {/* Brutalist Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="border-l-8 border-scarlet bg-black p-6 hover:bg-zinc-900 transition-colors">
            <p className="text-6xl font-black tracking-tighter mb-2">6+ Years</p>
            <p className="text-zinc-400 uppercase tracking-widest font-bold text-sm">of professional experience</p>
          </div>
          <div className="border-l-8 border-scarlet bg-black p-6 hover:bg-zinc-900 transition-colors">
            <p className="text-6xl font-black tracking-tighter mb-2">Zero</p>
            <p className="text-zinc-400 uppercase tracking-widest font-bold text-sm">Compromises Made</p>
          </div>
          <div className="border-l-8 border-scarlet bg-black p-6 hover:bg-zinc-900 transition-colors">
            <p className="text-6xl font-black tracking-tighter mb-2">50%</p>
            <p className="text-zinc-400 uppercase tracking-widest font-bold text-sm">Average Time to Conversion Increase</p>
          </div>
        </div>

        {/* Unconventional Testimonial */}
        <div className="flex align-item-center gap-8">
        <div className="bg-black border-4 border-zinc-800 p-8 md:p-12 relative overflow-hidden group">
           {/* Oversized background quote mark for texture */}
           <div className="absolute top-0 right-0 text-[15rem] text-zinc-900 font-black leading-none -mt-12 -mr-8 select-none group-hover:text-red-900/20 transition-colors duration-500">
             "
           </div>
           
           <blockquote className="relative z-10">
             <p className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-tight mb-10 text-zinc-300 group-hover:text-white transition-colors">
               "(It's) genuinely always a pleasure to work together. (Alex) really know how fi bring weh mi see ina mi mind to life"
             </p>
             <footer className="flex items-center gap-6">
               {/* Square avatar to maintain brutalist, non-circular design */}
               <div className="w-14 h-14 bg-zinc-800 border-2 border-scarlet flex items-center justify-center">
                 <span className="font-mono text-zinc-500 text-xs">IMG</span>
               </div>
               <div>
                 <p className="font-black text-white uppercase tracking-widest text-lg">TRG Sensei</p>
                 <p className="text-red-600 font-mono text-xs uppercase tracking-widest">Hip-Hop Artiste</p>
               </div>
             </footer>
           </blockquote>
        </div>

        {/* Unconventional Testimonial 2*/}

        <div className="bg-black border-4 border-zinc-800 p-8 md:p-12 relative overflow-hidden group">
           {/* Oversized background quote mark for texture */}
           <div className="absolute top-0 right-0 text-[15rem] text-zinc-900 font-black leading-none -mt-12 -mr-8 select-none group-hover:text-red-900/20 transition-colors duration-500">
             "
           </div>
           
           <blockquote className="relative z-10">
             <p className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-tight mb-10 text-zinc-300 group-hover:text-white transition-colors">
               "I'm always impressed with the work. Customers compliment us and say how our visuals catch their eye"
             </p>
             <footer className="flex items-center gap-6">
               {/* Square avatar to maintain brutalist, non-circular design */}
               <div className="w-14 h-14 bg-zinc-800 border-2 border-scarlet flex items-center justify-center">
                 <span className="font-mono text-zinc-500 text-xs">IMG</span>
               </div>
               <div>
                 <p className="font-black text-white uppercase tracking-widest text-lg">T. Smith</p>
                 <p className="text-red-600 font-mono text-xs uppercase tracking-widest">Manager, Phone Express JA</p>
               </div>
             </footer>
           </blockquote>
        </div>
        </div>
      </div>
    </section>
  );
}

