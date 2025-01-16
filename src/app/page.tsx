// src/app/page.tsx

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureCards from './components/FeatureCards';
import PromoPopup from './components/promopopup';
import Footer from './components/Footer';

export default function Home() {
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <PromoPopup />
        <HeroSection />
        <FeatureCards />
      </main>
      <Footer />
    </div>
  );
}
