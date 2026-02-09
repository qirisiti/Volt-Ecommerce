import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  image: string;
  name: string;
}

export function CategoryCard({ image, name }: CategoryCardProps) {
  return (
    <div className="group relative bg-[#111111] rounded-2xl overflow-hidden border border-[#1a1a1a] hover:border-[#00E5FF]/50 transition-all hover:shadow-[0_12px_48px_rgba(0,229,255,0.15)] cursor-pointer">
      {/* Category Image */}
      <div className="aspect-[4/3] overflow-hidden bg-[#0A0A0A]">
        <img 
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
      </div>

      {/* Category Info */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-bold text-xl">{name}</h3>
          <div className="bg-[#00E5FF] rounded-full p-2 group-hover:translate-x-1 transition-transform">
            <ArrowRight className="w-5 h-5 text-black" />
          </div>
        </div>
      </div>
    </div>
  );
}
