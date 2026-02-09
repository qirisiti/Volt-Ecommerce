import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1556310917-bfbbc8f73639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXMlMjBmbG9hdGluZyUyMGJsYWNrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzA2MjQyMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Modern tech gadgets"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/80 to-[#0A0A0A]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-white">
            Tech. Simplified.
          </h1>
          <p className="text-xl md:text-2xl text-[#AAAAAA] max-w-2xl mx-auto">
            Curated minimal gadgets for the modern world.
          </p>
          <div className="flex justify-center pt-4">
            <button className="group bg-[#00E5FF] hover:bg-[#00d5ef] text-black px-8 py-4 rounded-full font-bold transition-all hover:shadow-[0_0_40px_rgba(0,229,255,0.4)] flex items-center gap-2">
              Shop Collection
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
