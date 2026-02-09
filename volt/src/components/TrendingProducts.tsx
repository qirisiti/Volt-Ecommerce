import { ProductCard } from './ProductCard';

const trendingProducts = [
  {
    id: 1,
    name: 'Sony WH-1000XM5',
    price: 399,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1556310917-bfbbc8f73639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXMlMjBmbG9hdGluZyUyMGJsYWNrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzA2MjQyMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 2,
    name: 'Garmin Fenix 7',
    price: 699,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1615834569398-4cc6036929f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNoJTIwbW9kZXJuJTIwbWluaW1hbGlzdHxlbnwxfHx8fDE3NzA2MjQyMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 3,
    name: 'AirPods Pro 2',
    price: 249,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1762553159827-7a5d2167b55d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGVhcmJ1ZHMlMjBwcmVtaXVtfGVufDF8fHx8MTc3MDU2OTc3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 4,
    name: 'Anker Prime Charger',
    price: 89,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1595756630832-848909a39597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmtlciUyMGNoYXJnZXIlMjB0ZWNofGVufDF8fHx8MTc3MDYyNDIyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 5,
    name: 'Logitech MX Master 3S',
    price: 99,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMG1vdXNlJTIwbWluaW1hbHxlbnwxfHx8fDE3NzA2MjQyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function TrendingProducts() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-2">Trending Now</h2>
          <div className="h-1 w-20 bg-[#00E5FF] rounded-full" />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
