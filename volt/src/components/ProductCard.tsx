import { ShoppingCart, Star } from 'lucide-react';

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  rating?: number;
}

export function ProductCard({ image, name, price, rating = 5 }: ProductCardProps) {
  return (
    <div className="group bg-[#111111] rounded-2xl overflow-hidden border border-[#1a1a1a] hover:border-[#00E5FF]/50 transition-all hover:shadow-[0_8px_32px_rgba(0,229,255,0.1)]">
      {/* Product Image */}
      <div className="aspect-square overflow-hidden bg-[#0A0A0A] p-8">
        <img 
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-white font-semibold text-lg">{name}</h3>
          
          {/* Rating */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i}
                className={`w-4 h-4 ${i < rating ? 'fill-[#00E5FF] text-[#00E5FF]' : 'text-[#333333]'}`}
              />
            ))}
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-2xl font-bold text-white">${price}</span>
          <button className="bg-[#00E5FF] hover:bg-[#00d5ef] text-black px-4 py-2 rounded-full font-semibold transition-all hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
