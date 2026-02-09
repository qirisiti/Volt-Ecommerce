import { ArrowRight } from 'lucide-react';

export function Newsletter() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="bg-gradient-to-br from-[#111111] to-[#0A0A0A] rounded-3xl border border-[#1a1a1a] p-12 md:p-16 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-black text-white">Stay in the Loop</h2>
            <p className="text-[#AAAAAA] text-lg">
              Get exclusive access to new arrivals, special deals, and tech insights delivered to your inbox.
            </p>
            
            {/* Newsletter Form */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto pt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-[#0A0A0A] border border-[#1a1a1a] rounded-full px-6 py-4 text-white placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#00E5FF] transition-colors"
              />
              <button className="bg-[#00E5FF] hover:bg-[#00d5ef] text-black px-8 py-4 rounded-full font-bold transition-all hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] flex items-center justify-center gap-2 whitespace-nowrap">
                Subscribe
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            <p className="text-[#666666] text-sm">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
