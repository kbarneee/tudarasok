import React from 'react';
import HeroSection from './components/HeroSection';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';
import type { GalleryItem } from './types';

const App: React.FC = () => {
  // A galéria mostantól statikus, csak a megadott 3 képet tartalmazza.
  const galleryItems: GalleryItem[] = [
    { imgSrc: 'https://i.imgur.com/HHmAakj.jpg', description: 'Csoportkép a hegycsúcson' },
    { imgSrc: 'https://i.imgur.com/OydL6EQ.jpg', description: 'Pillanatkép a tónál' },
    { imgSrc: 'https://i.imgur.com/7UVU3pG.jpg', description: 'Túrázás a vízesésnél' },
  ];

  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSee1wHgxXswAEsthecVP09O7uh4_7mf78X-z8wiXnD_SuXG7A/viewform";

  return (
    <div className="bg-gray-900 text-gray-200 antialiased">
      <HeroSection />
      
      <main className="py-12 md:py-20 px-4 md:px-8 bg-[#111827]">
        <div className="max-w-4xl mx-auto space-y-12">
            {/* Info Section */}
            <section className="space-y-6">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">A Terv:</h2>
                    <ul className="list-none p-0 space-y-3 text-base md:text-lg text-gray-300">
                        <li><strong className="font-semibold text-white/90 mr-2">Időpont:</strong> 2026. Július 8-12. (Szerda-Vasárnap)</li>
                        <li><strong className="font-semibold text-white/90 mr-2">Szállás:</strong> Valahol egy hegyvidéki vendégházban. Részletek hamarosan!</li>
                        <li><strong className="font-semibold text-white/90 mr-2">Lokáció:</strong> Valahol a Nyugati-Kárpátokban vagy Máramarosban. Ideális úti cél a kolozsvári reptér és az autós külföldi érkezők számára is.</li>
                        <li><strong className="font-semibold text-white/90 mr-2">Jelzz vissza:</strong> Kérlek jelezd, ha számíthatunk rád, hogy a szállást le tudjuk foglalni!</li>
                    </ul>
                </div>
                 <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Fontos Határidők:</h3>
                     <ul className="list-none p-0 space-y-3 text-base md:text-lg text-gray-300">
                        <li><strong className="font-semibold text-white/90">2025. Augusztus 29:</strong> Visszajelzés, hogy jössz-e.</li>
                        <li><strong className="font-semibold text-white/90">2025. Szeptember 20:</strong> Előleg befizetése (<strong className="font-bold text-white">50%</strong>), kb. <strong className="font-bold text-white">50 EUR/fő</strong>.</li>
                    </ul>
                </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
                <a 
                    href={googleFormUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow-500 text-gray-900 font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-yellow-400 transition-colors duration-300 transform hover:scale-105"
                >
                    Jelentkezem
                </a>
                <p className="mt-4 text-gray-400 text-sm md:text-base">
                    Kérlek, töltsd ki a fenti gombon elérhető Google Forms űrlapot a jelentkezéshez!
                </p>
            </section>
            
            <hr className="border-t border-gray-700" />

            {/* Gallery Section */}
            <GallerySection galleryItems={galleryItems} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;