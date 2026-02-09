import { Instagram, Twitter, Youtube, Github } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#1a1a1a] py-16 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black text-white mb-4">VOLT</h2>
            <p className="text-[#AAAAAA] mb-6 max-w-sm">
              Minimal Tech Essentials. Premium gadgets curated for the modern lifestyle.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="bg-[#111111] hover:bg-[#00E5FF] text-white hover:text-black p-3 rounded-full transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-[#111111] hover:bg-[#00E5FF] text-white hover:text-black p-3 rounded-full transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-[#111111] hover:bg-[#00E5FF] text-white hover:text-black p-3 rounded-full transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-[#111111] hover:bg-[#00E5FF] text-white hover:text-black p-3 rounded-full transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-white font-bold mb-4">Shop</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#AAAAAA] hover:text-[#00E5FF] transition-colors">All Products</a></li>
              <li><a href="#" className="text-[#AAAAAA] hover:text-[#00E5FF] transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-[#AAAAAA] hover:text-[#00E5FF] transition-colors">Best Sellers</a></li>
              <li><a href="#" className="text-[#AAAAAA] hover:text-[#00E5FF] transition-colors">Deals</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#AAAAAA] hover:text-[#00E5FF] transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-[#AAAAAA] hover:text-[#00E5FF] transition-colors">FAQs</a></li>
              <li><a href="#" className="text-[#AAAAAA] hover:text-[#00E5FF] transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-[#AAAAAA] hover:text-[#00E5FF] transition-colors">Returns</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#AAAAAA] hover:text-[#00E5FF] transition-colors">About Us</a></li>
              <li><a href="#" className="text-[#AAAAAA] hover:text-[#00E5FF] transition-colors">Careers</a></li>
              <li><a href="#" className="text-[#AAAAAA] hover:text-[#00E5FF] transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-[#AAAAAA] hover:text-[#00E5FF] transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#666666] text-sm">
            © {currentYear} VOLT. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-[#666666] hover:text-[#00E5FF] transition-colors">Terms of Service</a>
            <a href="#" className="text-[#666666] hover:text-[#00E5FF] transition-colors">Privacy Policy</a>
            <a href="#" className="text-[#666666] hover:text-[#00E5FF] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
