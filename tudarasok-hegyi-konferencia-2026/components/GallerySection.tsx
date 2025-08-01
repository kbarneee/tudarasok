import React from 'react';
import GalleryCard from './GalleryCard';
import type { GalleryItem } from '../types';

interface GallerySectionProps {
  galleryItems: GalleryItem[];
}

const GallerySection: React.FC<GallerySectionProps> = ({ galleryItems }) => {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
        Korábbi kalandok
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {galleryItems.map((item, index) => (
          <GalleryCard key={index} imgSrc={item.imgSrc} description={item.description} />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;