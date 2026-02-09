import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrendingProducts } from './components/TrendingProducts';
import { ShopByCategory } from './components/ShopByCategory';
import { NewArrivals } from './components/NewArrivals';
import { WhyVolt } from './components/WhyVolt';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] font-['Inter',sans-serif]">
      <Navbar />
      <Hero />
      <TrendingProducts />
      <ShopByCategory />
      <NewArrivals />
      <WhyVolt />
      <Newsletter />
      <Footer />
    </div>
  );
}
