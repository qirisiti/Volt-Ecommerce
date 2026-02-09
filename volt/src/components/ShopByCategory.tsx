import { CategoryCard } from './CategoryCard';

const categories = [
  {
    id: 1,
    name: 'Wireless Audio',
    image: 'https://images.unsplash.com/photo-1556310917-bfbbc8f73639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXMlMjBmbG9hdGluZyUyMGJsYWNrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzA2MjQyMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 2,
    name: 'Smart Wearables',
    image: 'https://images.unsplash.com/photo-1615834569398-4cc6036929f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNoJTIwbW9kZXJuJTIwbWluaW1hbGlzdHxlbnwxfHx8fDE3NzA2MjQyMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 3,
    name: 'Power & Charging',
    image: 'https://images.unsplash.com/photo-1595756630832-848909a39597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmtlciUyMGNoYXJnZXIlMjB0ZWNofGVufDF8fHx8MTc3MDYyNDIyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 4,
    name: 'Computing Accessories',
    image: 'https://images.unsplash.com/photo-1656711081969-9d16ebc2d210?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBrZXlib2FyZCUyMG1lY2hhbmljYWx8ZW58MXx8fHwxNzcwNTk4OTM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function ShopByCategory() {
  return (
    <section className="py-24 px-6 bg-[#0A0A0A]">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-2">Shop by Category</h2>
          <div className="h-1 w-20 bg-[#00E5FF] rounded-full" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
