import { Search, ShoppingCart, User } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-[#1a1a1a]">
      <div className="max-w-[1400px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-black tracking-tight text-white">VOLT</h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#AAAAAA]" />
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full bg-[#111111] border border-[#1a1a1a] rounded-full py-3 pl-12 pr-4 text-white placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#00E5FF] transition-colors"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <a href="#shop" className="text-white hover:text-[#00E5FF] transition-colors">
              Shop
            </a>
            <a href="#categories" className="text-white hover:text-[#00E5FF] transition-colors">
              Categories
            </a>
            <a href="#deals" className="text-white hover:text-[#00E5FF] transition-colors">
              Deals
            </a>
            
            {/* Cart Icon with Badge */}
            <button className="relative text-white hover:text-[#00E5FF] transition-colors">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-[#00E5FF] text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>
            
            {/* Account Icon */}
            <button className="text-white hover:text-[#00E5FF] transition-colors">
              <User className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
