import { ProductCard } from './ProductCard';

const newProducts = [
  {
    id: 1,
    name: 'Premium Keyboard',
    price: 149,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1656711081969-9d16ebc2d210?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBrZXlib2FyZCUyMG1lY2hhbmljYWx8ZW58MXx8fHwxNzcwNTk4OTM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 2,
    name: 'Smart Speaker Hub',
    price: 199,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1752955471067-294a5de5bf48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHNwZWFrZXIlMjBtb2Rlcm58ZW58MXx8fHwxNzcwNTc1MTYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 3,
    name: 'Laptop Dock Station',
    price: 279,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1620233389768-4eafd182841a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBhY2Nlc3NvcmllcyUyMG1pbmltYWx8ZW58MXx8fHwxNzcwNjI0MjI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 4,
    name: 'Wireless Earbuds Pro',
    price: 179,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1762553159827-7a5d2167b55d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGVhcmJ1ZHMlMjBwcmVtaXVtfGVufDF8fHx8MTc3MDU2OTc3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function NewArrivals() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-2">New Arrivals</h2>
          <div className="h-1 w-20 bg-[#00E5FF] rounded-full" />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
