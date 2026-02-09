import { Award, Zap, Shield, Leaf } from 'lucide-react';

const benefits = [
  {
    id: 1,
    icon: Award,
    title: 'Premium Quality',
    description: 'Only the finest tech products, carefully curated'
  },
  {
    id: 2,
    icon: Zap,
    title: 'Fast Shipping',
    description: 'Free express delivery on all orders over $50'
  },
  {
    id: 3,
    icon: Shield,
    title: '2-Year Warranty',
    description: 'Extended warranty coverage on every product'
  },
  {
    id: 4,
    icon: Leaf,
    title: 'Carbon Neutral',
    description: 'Committed to sustainable, eco-friendly practices'
  }
];

export function WhyVolt() {
  return (
    <section className="py-24 px-6 bg-[#0A0A0A]">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Why VOLT</h2>
          <p className="text-[#AAAAAA] text-lg max-w-2xl mx-auto">
            We're more than just a store. We're your partner in discovering the best tech essentials.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={benefit.id} 
                className="bg-[#111111] rounded-2xl p-8 border border-[#1a1a1a] hover:border-[#00E5FF]/50 transition-all group hover:shadow-[0_8px_32px_rgba(0,229,255,0.1)]"
              >
                <div className="bg-[#00E5FF]/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#00E5FF]/20 transition-colors">
                  <Icon className="w-7 h-7 text-[#00E5FF]" />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{benefit.title}</h3>
                <p className="text-[#AAAAAA]">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
